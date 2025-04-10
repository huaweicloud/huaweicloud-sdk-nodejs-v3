

export class ApproveResult {
    public id?: string;
    public status?: ApproveResultStatusEnum | string;
    public message?: string;
    public constructor() { 
    }
    public withId(id: string): ApproveResult {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ApproveResultStatusEnum | string): ApproveResult {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ApproveResult {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApproveResultStatusEnum {
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL'
}
