

export class PreheatingResult {
    public url?: string;
    public status?: PreheatingResultStatusEnum | string;
    public constructor() { 
    }
    public withUrl(url: string): PreheatingResult {
        this['url'] = url;
        return this;
    }
    public withStatus(status: PreheatingResultStatusEnum | string): PreheatingResult {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PreheatingResultStatusEnum {
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED'
}
