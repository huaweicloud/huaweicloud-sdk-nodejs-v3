

export class DeleteValueListRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public valuelistid?: string;
    public constructor(contentType?: string, valuelistid?: string) { 
        this['Content-Type'] = contentType;
        this['valuelistid'] = valuelistid;
    }
    public withContentType(contentType: string): DeleteValueListRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteValueListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withValuelistid(valuelistid: string): DeleteValueListRequest {
        this['valuelistid'] = valuelistid;
        return this;
    }
}