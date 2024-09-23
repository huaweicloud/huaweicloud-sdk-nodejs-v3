

export class ConfirmFileUploadRequestBody {
    public state?: ConfirmFileUploadRequestBodyStateEnum | string;
    public constructor(state?: string) { 
        this['state'] = state;
    }
    public withState(state: ConfirmFileUploadRequestBodyStateEnum | string): ConfirmFileUploadRequestBody {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfirmFileUploadRequestBodyStateEnum {
    CREATED = 'CREATED',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED'
}
