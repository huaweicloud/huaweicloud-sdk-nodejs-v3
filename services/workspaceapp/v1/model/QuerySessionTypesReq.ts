

export class QuerySessionTypesReq {
    private 'resource_spec_code'?: string;
    private 'session_type'?: string;
    private 'resource_type'?: string;
    private 'cloud_service_type'?: string;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): QuerySessionTypesReq {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withSessionType(sessionType: string): QuerySessionTypesReq {
        this['session_type'] = sessionType;
        return this;
    }
    public set sessionType(sessionType: string  | undefined) {
        this['session_type'] = sessionType;
    }
    public get sessionType(): string | undefined {
        return this['session_type'];
    }
    public withResourceType(resourceType: string): QuerySessionTypesReq {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCloudServiceType(cloudServiceType: string): QuerySessionTypesReq {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
}