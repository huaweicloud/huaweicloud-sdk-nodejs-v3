

export class DeleteHostFromEnvironmentRequest {
    private 'application_id'?: string;
    private 'environment_id'?: string;
    private 'host_id'?: string;
    private 'Content-Type'?: DeleteHostFromEnvironmentRequestContentTypeEnum | string;
    public constructor(applicationId?: string, environmentId?: string, hostId?: string, contentType?: string) { 
        this['application_id'] = applicationId;
        this['environment_id'] = environmentId;
        this['host_id'] = hostId;
        this['Content-Type'] = contentType;
    }
    public withApplicationId(applicationId: string): DeleteHostFromEnvironmentRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): DeleteHostFromEnvironmentRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withHostId(hostId: string): DeleteHostFromEnvironmentRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withContentType(contentType: DeleteHostFromEnvironmentRequestContentTypeEnum | string): DeleteHostFromEnvironmentRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteHostFromEnvironmentRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteHostFromEnvironmentRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteHostFromEnvironmentRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
