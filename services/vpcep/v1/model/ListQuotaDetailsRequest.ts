

export class ListQuotaDetailsRequest {
    private 'Content-Type'?: string;
    public type?: ListQuotaDetailsRequestTypeEnum | string;
    public constructor() { 
    }
    public withContentType(contentType: string): ListQuotaDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withType(type: ListQuotaDetailsRequestTypeEnum | string): ListQuotaDetailsRequest {
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
