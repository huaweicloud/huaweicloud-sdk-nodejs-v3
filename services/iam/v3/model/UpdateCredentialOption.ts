

export class UpdateCredentialOption {
    public status?: UpdateCredentialOptionStatusEnum;
    public description?: string;
    public constructor() { 
    }
    public withStatus(status: UpdateCredentialOptionStatusEnum): UpdateCredentialOption {
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
