

export class UpdateApplicationInstanceStatusReqBody {
    public status?: UpdateApplicationInstanceStatusReqBodyStatusEnum | string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: UpdateApplicationInstanceStatusReqBodyStatusEnum | string): UpdateApplicationInstanceStatusReqBody {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateApplicationInstanceStatusReqBodyStatusEnum {
    ENABLED = 'ENABLED'
}
