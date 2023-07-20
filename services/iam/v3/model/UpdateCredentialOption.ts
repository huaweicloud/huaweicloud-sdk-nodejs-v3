

export class UpdateCredentialOption {
    public status?: UpdateCredentialOptionStatusEnum | string;
    public description?: string;
    public constructor() { 
    }
    public withStatus(status: UpdateCredentialOptionStatusEnum | string): UpdateCredentialOption {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): UpdateCredentialOption {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateCredentialOptionStatusEnum {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}
