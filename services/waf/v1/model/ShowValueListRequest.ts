

export class ShowValueListRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public valuelistid: string;
    public constructor(contentType?: any, valuelistid?: any) { 
        this['Content-Type'] = contentType;
        this['valuelistid'] = valuelistid;
    }
    public withContentType(contentType: string): ShowValueListRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowValueListRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withValuelistid(valuelistid: string): ShowValueListRequest {
        this['valuelistid'] = valuelistid;
        return this;
    }
}