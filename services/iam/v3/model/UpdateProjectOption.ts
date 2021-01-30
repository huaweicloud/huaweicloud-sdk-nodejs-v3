

export class UpdateProjectOption {
    public status: UpdateProjectOptionStatusEnum;
    public constructor(status: any) { 
        this['status'] = status;
    }
    public withStatus(status: UpdateProjectOptionStatusEnum): UpdateProjectOption {
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
