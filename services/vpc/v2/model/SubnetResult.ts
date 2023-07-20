

export class SubnetResult {
    public id?: string;
    public status?: SubnetResultStatusEnum | string;
    public constructor(id?: string, status?: string) { 
        this['id'] = id;
        this['status'] = status;
    }
    public withId(id: string): SubnetResult {
        this['id'] = id;
        return this;
    }
    public withStatus(status: SubnetResultStatusEnum | string): SubnetResult {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubnetResultStatusEnum {
    ACTIVE = 'ACTIVE',
    UNKNOWN = 'UNKNOWN',
    ERROR = 'ERROR'
}
