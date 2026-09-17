

export class UpdateServiceSpecificCredentialReq {
    public status?: UpdateServiceSpecificCredentialReqStatusEnum | string;
    public description?: string;
    public constructor() { 
    }
    public withStatus(status: UpdateServiceSpecificCredentialReqStatusEnum | string): UpdateServiceSpecificCredentialReq {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): UpdateServiceSpecificCredentialReq {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateServiceSpecificCredentialReqStatusEnum {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}
