

export class ConfirmImageUploadReq {
    public id?: string;
    public status?: ConfirmImageUploadReqStatusEnum | string;
    public constructor(id?: string, status?: string) { 
        this['id'] = id;
        this['status'] = status;
    }
    public withId(id: string): ConfirmImageUploadReq {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ConfirmImageUploadReqStatusEnum | string): ConfirmImageUploadReq {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfirmImageUploadReqStatusEnum {
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED'
}
