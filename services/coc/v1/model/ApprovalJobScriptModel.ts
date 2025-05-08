

export class ApprovalJobScriptModel {
    public status?: ApprovalJobScriptModelStatusEnum | string;
    public comments?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: ApprovalJobScriptModelStatusEnum | string): ApprovalJobScriptModel {
        this['status'] = status;
        return this;
    }
    public withComments(comments: string): ApprovalJobScriptModel {
        this['comments'] = comments;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApprovalJobScriptModelStatusEnum {
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED'
}
