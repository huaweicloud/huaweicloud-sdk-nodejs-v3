

export class ShowEventRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public eventid: string;
    public constructor(contentType?: any, eventid?: any) { 
        this['Content-Type'] = contentType;
        this['eventid'] = eventid;
    }
    public withContentType(contentType: string): ShowEventRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowEventRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withEventid(eventid: string): ShowEventRequest {
        this['eventid'] = eventid;
        return this;
    }
}