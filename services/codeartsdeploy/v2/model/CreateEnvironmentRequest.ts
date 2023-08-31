import { EnvironmentRequestBody } from './EnvironmentRequestBody';


export class CreateEnvironmentRequest {
    private 'application_id'?: string;
    private 'Content-Type'?: CreateEnvironmentRequestContentTypeEnum | string;
    public body?: EnvironmentRequestBody;
    public constructor(applicationId?: string, contentType?: string) { 
        this['application_id'] = applicationId;
        this['Content-Type'] = contentType;
    }
    public withApplicationId(applicationId: string): CreateEnvironmentRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withContentType(contentType: CreateEnvironmentRequestContentTypeEnum | string): CreateEnvironmentRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateEnvironmentRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateEnvironmentRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: EnvironmentRequestBody): CreateEnvironmentRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateEnvironmentRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
