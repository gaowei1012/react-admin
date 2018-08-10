import React from 'react'
import { Card, Button, Modal } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import draftjs from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default class RichText extends React.Component {

    state = {
        editorState: '',
        showRichText: false
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    handleClearContent = () => {
        this.setState({
            editorState: ''
        })
    }

    onContentStateChange = (contentState) => {
        this.setState({
            contentState
        })
    }

    handleGetText = () => {
        this.setState({
            showRichText: true
        })
    }

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Card>
                    <Button type='primary' onClick={this.handleClearContent}>清空内容</Button>
                    <Button type='primary' onClick={this.handleGetText}>获取HTML内容</Button>
                </Card>
                <Card title='富文本编辑器'>
                    <Editor
                        editorState={editorState}
                        onContentStateChange={this.onContentStateChange}
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Card>
                <Modal
                    title='Info'
                    visible={this.state.showRichText}
                    onCancel={() => {
                        this.setState({
                            showRichText: false
                        })
                    }}
                    footer={null}
                >
                    {draftjs(this.state.contentState)}
                </Modal>
            </div>
        );
    }
}