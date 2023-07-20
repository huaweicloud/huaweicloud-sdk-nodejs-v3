

export class ApiVersionInfo {
    public id?: string;
    public status?: ApiVersionInfoStatusEnum | string;
    public constructor(id?: string, status?: string) { 
        this['id'] = id;
        this['status'] = status;
    }
    public withId(id: string): ApiVersionInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ApiVersionInfoStatusEnum | string): ApiVersionInfo {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiVersionInfoStatusEnum {
    CURRENT = 'CURRENT',
    STABLE = 'STABLE',
    DEPRECATED = 'DEPRECATED'
}
