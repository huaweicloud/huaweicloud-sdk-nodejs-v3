

export class ShowDomainOverviewRequest {
    private 'Content-Type'?: ShowDomainOverviewRequestContentTypeEnum | string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ShowDomainOverviewRequestContentTypeEnum | string): ShowDomainOverviewRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowDomainOverviewRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ShowDomainOverviewRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDomainOverviewRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
