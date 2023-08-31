

export class DeleteEnvironmentRequest {
    private 'application_id'?: string;
    private 'environment_id'?: string;
    private 'Content-Type'?: DeleteEnvironmentRequestContentTypeEnum | string;
    public constructor(applicationId?: string, environmentId?: string, contentType?: string) { 
        this['application_id'] = applicationId;
        this['environment_id'] = environmentId;
        this['Content-Type'] = contentType;
    }
    public withApplicationId(applicationId: string): DeleteEnvironmentRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): DeleteEnvironmentRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withContentType(contentType: DeleteEnvironmentRequestContentTypeEnum | string): DeleteEnvironmentRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteEnvironmentRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteEnvironmentRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteEnvironmentRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
