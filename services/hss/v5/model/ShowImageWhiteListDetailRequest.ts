

export class ShowImageWhiteListDetailRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public id?: string;
    private 'global_image_type'?: string;
    public type?: string;
    public constructor(id?: string, globalImageType?: string, type?: string) { 
        this['id'] = id;
        this['global_image_type'] = globalImageType;
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowImageWhiteListDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ShowImageWhiteListDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowImageWhiteListDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withId(id: string): ShowImageWhiteListDetailRequest {
        this['id'] = id;
        return this;
    }
    public withGlobalImageType(globalImageType: string): ShowImageWhiteListDetailRequest {
        this['global_image_type'] = globalImageType;
        return this;
    }
    public set globalImageType(globalImageType: string  | undefined) {
        this['global_image_type'] = globalImageType;
    }
    public get globalImageType(): string | undefined {
        return this['global_image_type'];
    }
    public withType(type: string): ShowImageWhiteListDetailRequest {
        this['type'] = type;
        return this;
    }
}