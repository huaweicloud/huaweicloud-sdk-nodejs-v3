

export class ListDeviceAuthenticationTemplatesRequest {
    private 'Instance-Id'?: string;
    private 'template_name'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListDeviceAuthenticationTemplatesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withTemplateName(templateName: string): ListDeviceAuthenticationTemplatesRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withLimit(limit: number): ListDeviceAuthenticationTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDeviceAuthenticationTemplatesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListDeviceAuthenticationTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
}