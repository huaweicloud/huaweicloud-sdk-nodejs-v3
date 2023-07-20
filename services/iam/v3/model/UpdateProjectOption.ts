

export class UpdateProjectOption {
    public status?: UpdateProjectOptionStatusEnum | string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: UpdateProjectOptionStatusEnum | string): UpdateProjectOption {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateProjectOptionStatusEnum {
    SUSPENDED = 'suspended',
    NORMAL = 'normal'
}
