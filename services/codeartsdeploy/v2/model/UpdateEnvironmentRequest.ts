import { EnvironmentRequest } from './EnvironmentRequest';


export class UpdateEnvironmentRequest {
    private 'Content-Type'?: UpdateEnvironmentRequestContentTypeEnum | string;
    private 'application_id'?: string;
    private 'environment_id'?: string;
    public body?: EnvironmentRequest;
    public constructor(contentType?: string, applicationId?: string, environmentId?: string) { 
        this['Content-Type'] = contentType;
        this['application_id'] = applicationId;
        this['environment_id'] = environmentId;
    }
    public withContentType(contentType: UpdateEnvironmentRequestContentTypeEnum | string): UpdateEnvironmentRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateEnvironmentRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): UpdateEnvironmentRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withApplicationId(applicationId: string): UpdateEnvironmentRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): UpdateEnvironmentRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withBody(body: EnvironmentRequest): UpdateEnvironmentRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateEnvironmentRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
