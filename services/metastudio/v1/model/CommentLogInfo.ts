

export class CommentLogInfo {
    private 'operate_time'?: string;
    private 'comment_type'?: CommentLogInfoCommentTypeEnum | string;
    private 'comment_title'?: string;
    private 'comment_message'?: string;
    private 'attachment_download_url'?: Array<string>;
    public constructor() { 
    }
    public withOperateTime(operateTime: string): CommentLogInfo {
        this['operate_time'] = operateTime;
        return this;
    }
    public set operateTime(operateTime: string  | undefined) {
        this['operate_time'] = operateTime;
    }
    public get operateTime(): string | undefined {
        return this['operate_time'];
    }
    public withCommentType(commentType: CommentLogInfoCommentTypeEnum | string): CommentLogInfo {
        this['comment_type'] = commentType;
        return this;
    }
    public set commentType(commentType: CommentLogInfoCommentTypeEnum | string  | undefined) {
        this['comment_type'] = commentType;
    }
    public get commentType(): CommentLogInfoCommentTypeEnum | string | undefined {
        return this['comment_type'];
    }
    public withCommentTitle(commentTitle: string): CommentLogInfo {
        this['comment_title'] = commentTitle;
        return this;
    }
    public set commentTitle(commentTitle: string  | undefined) {
        this['comment_title'] = commentTitle;
    }
    public get commentTitle(): string | undefined {
        return this['comment_title'];
    }
    public withCommentMessage(commentMessage: string): CommentLogInfo {
        this['comment_message'] = commentMessage;
        return this;
    }
    public set commentMessage(commentMessage: string  | undefined) {
        this['comment_message'] = commentMessage;
    }
    public get commentMessage(): string | undefined {
        return this['comment_message'];
    }
    public withAttachmentDownloadUrl(attachmentDownloadUrl: Array<string>): CommentLogInfo {
        this['attachment_download_url'] = attachmentDownloadUrl;
        return this;
    }
    public set attachmentDownloadUrl(attachmentDownloadUrl: Array<string>  | undefined) {
        this['attachment_download_url'] = attachmentDownloadUrl;
    }
    public get attachmentDownloadUrl(): Array<string> | undefined {
        return this['attachment_download_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CommentLogInfoCommentTypeEnum {
    USER_REJECT = 'USER_REJECT',
    USER_COMMENT = 'USER_COMMENT',
    ADMIN_COMMENT = 'ADMIN_COMMENT'
}
