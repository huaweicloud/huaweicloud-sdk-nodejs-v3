

export class RefreshResult {
    public url?: string;
    public status?: RefreshResultStatusEnum | string;
    public constructor() { 
    }
    public withUrl(url: string): RefreshResult {
        this['url'] = url;
        return this;
    }
    public withStatus(status: RefreshResultStatusEnum | string): RefreshResult {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RefreshResultStatusEnum {
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED'
}
