

export class PreheatingResult {
    public url?: string;
    public status?: PreheatingResultStatusEnum;
    public constructor() { 
    }
    public withUrl(url: string): PreheatingResult {
        this['url'] = url;
        return this;
    }
    public withStatus(status: PreheatingResultStatusEnum): PreheatingResult {
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
