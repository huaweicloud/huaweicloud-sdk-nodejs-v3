

export class ListInstanceTagsRequest {
    private 'Content-Type'?: string;
    public resourceid?: string;
    private 'enterprise_project_id'?: string;
    public constructor(contentType?: string, resourceid?: string) { 
        this['Content-Type'] = contentType;
        this['resourceid'] = resourceid;
    }
    public withContentType(contentType: string): ListInstanceTagsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withResourceid(resourceid: string): ListInstanceTagsRequest {
        this['resourceid'] = resourceid;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstanceTagsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}