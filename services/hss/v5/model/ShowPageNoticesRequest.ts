

export class ShowPageNoticesRequest {
    private 'enterprise_project_id'?: string;
    private 'page_location'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowPageNoticesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPageLocation(pageLocation: string): ShowPageNoticesRequest {
        this['page_location'] = pageLocation;
        return this;
    }
    public set pageLocation(pageLocation: string  | undefined) {
        this['page_location'] = pageLocation;
    }
    public get pageLocation(): string | undefined {
        return this['page_location'];
    }
}