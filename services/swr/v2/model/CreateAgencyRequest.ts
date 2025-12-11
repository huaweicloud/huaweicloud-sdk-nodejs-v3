

export class CreateAgencyRequest {
    private 'Content-Type'?: CreateAgencyRequestContentTypeEnum | string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: CreateAgencyRequestContentTypeEnum | string): CreateAgencyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateAgencyRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateAgencyRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAgencyRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
