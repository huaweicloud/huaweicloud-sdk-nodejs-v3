

export class ShowEventRequest {
    private 'Content-Type'?: string;
    private 'X-Language'?: string;
    private 'enterprise_project_id'?: string;
    public eventid?: string;
    public constructor(contentType?: string, eventid?: string) { 
        this['Content-Type'] = contentType;
        this['eventid'] = eventid;
    }
    public withContentType(contentType: string): ShowEventRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: string): ShowEventRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowEventRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEventid(eventid: string): ShowEventRequest {
        this['eventid'] = eventid;
        return this;
    }
}