

export class ListQuotaDetailsRequest {
    private 'Content-Type': string | undefined;
    public type?: ListQuotaDetailsRequestTypeEnum;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListQuotaDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withType(type: ListQuotaDetailsRequestTypeEnum): ListQuotaDetailsRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListQuotaDetailsRequestTypeEnum {
    ENDPOINT_SERVICE = 'endpoint_service',
    ENDPOINT = 'endpoint'
}
