

export class ModifyTaskInfo {
    public action?: ModifyTaskInfoActionEnum | string;
    private 'attachment_id'?: string;
    public comment?: string;
    private 'comment_id'?: string;
    public constructor() { 
    }
    public withAction(action: ModifyTaskInfoActionEnum | string): ModifyTaskInfo {
        this['action'] = action;
        return this;
    }
    public withAttachmentId(attachmentId: string): ModifyTaskInfo {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string  | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId(): string | undefined {
        return this['attachment_id'];
    }
    public withComment(comment: string): ModifyTaskInfo {
        this['comment'] = comment;
        return this;
    }
    public withCommentId(commentId: string): ModifyTaskInfo {
        this['comment_id'] = commentId;
        return this;
    }
    public set commentId(commentId: string  | undefined) {
        this['comment_id'] = commentId;
    }
    public get commentId(): string | undefined {
        return this['comment_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyTaskInfoActionEnum {
    TERMINATE = 'TERMINATE',
    CONTINUE = 'CONTINUE',
    ADD_COMMEN = 'ADD_COMMEN',
    DELETE_COMMENT = 'DELETE_COMMENT',
    ADD_ATTACHMENT = 'ADD_ATTACHMENT',
    DELETE_ATTACHMEN = 'DELETE_ATTACHMEN'
}
