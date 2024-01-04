

export class CommentData {
    private 'comment_title'?: string;
    private 'comment_message'?: string;
    private 'attachment_name'?: Array<string>;
    public constructor() { 
    }
    public withCommentTitle(commentTitle: string): CommentData {
        this['comment_title'] = commentTitle;
        return this;
    }
    public set commentTitle(commentTitle: string  | undefined) {
        this['comment_title'] = commentTitle;
    }
    public get commentTitle(): string | undefined {
        return this['comment_title'];
    }
    public withCommentMessage(commentMessage: string): CommentData {
        this['comment_message'] = commentMessage;
        return this;
    }
    public set commentMessage(commentMessage: string  | undefined) {
        this['comment_message'] = commentMessage;
    }
    public get commentMessage(): string | undefined {
        return this['comment_message'];
    }
    public withAttachmentName(attachmentName: Array<string>): CommentData {
        this['attachment_name'] = attachmentName;
        return this;
    }
    public set attachmentName(attachmentName: Array<string>  | undefined) {
        this['attachment_name'] = attachmentName;
    }
    public get attachmentName(): Array<string> | undefined {
        return this['attachment_name'];
    }
}