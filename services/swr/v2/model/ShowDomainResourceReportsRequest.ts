

export class ShowDomainResourceReportsRequest {
    private 'Content-Type'?: ShowDomainResourceReportsRequestContentTypeEnum | string;
    private 'resource_type'?: ShowDomainResourceReportsRequestResourceTypeEnum | string;
    public frequency?: ShowDomainResourceReportsRequestFrequencyEnum | string;
    public constructor(contentType?: string, resourceType?: string, frequency?: string) { 
        this['Content-Type'] = contentType;
        this['resource_type'] = resourceType;
        this['frequency'] = frequency;
    }
    public withContentType(contentType: ShowDomainResourceReportsRequestContentTypeEnum | string): ShowDomainResourceReportsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowDomainResourceReportsRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ShowDomainResourceReportsRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withResourceType(resourceType: ShowDomainResourceReportsRequestResourceTypeEnum | string): ShowDomainResourceReportsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ShowDomainResourceReportsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ShowDomainResourceReportsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withFrequency(frequency: ShowDomainResourceReportsRequestFrequencyEnum | string): ShowDomainResourceReportsRequest {
        this['frequency'] = frequency;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDomainResourceReportsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDomainResourceReportsRequestResourceTypeEnum {
    DOWNFLOW = 'downflow',
    STORE = 'store'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDomainResourceReportsRequestFrequencyEnum {
    DAILY = 'daily'
}
