import { ImportHostToEnvironmentRequestBody } from './ImportHostToEnvironmentRequestBody';


export class ImportHostToEnvironmentRequest {
    private 'application_id'?: string;
    private 'environment_id'?: string;
    private 'Content-Type'?: ImportHostToEnvironmentRequestContentTypeEnum | string;
    public body?: ImportHostToEnvironmentRequestBody;
    public constructor(applicationId?: string, environmentId?: string, contentType?: string) { 
        this['application_id'] = applicationId;
        this['environment_id'] = environmentId;
        this['Content-Type'] = contentType;
    }
    public withApplicationId(applicationId: string): ImportHostToEnvironmentRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): ImportHostToEnvironmentRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withContentType(contentType: ImportHostToEnvironmentRequestContentTypeEnum | string): ImportHostToEnvironmentRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ImportHostToEnvironmentRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ImportHostToEnvironmentRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ImportHostToEnvironmentRequestBody): ImportHostToEnvironmentRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportHostToEnvironmentRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
