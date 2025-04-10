

export class ListLoginCommonLocationRequest {
    private 'enterprise_project_id'?: string;
    private 'area_code'?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListLoginCommonLocationRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAreaCode(areaCode: number): ListLoginCommonLocationRequest {
        this['area_code'] = areaCode;
        return this;
    }
    public set areaCode(areaCode: number  | undefined) {
        this['area_code'] = areaCode;
    }
    public get areaCode(): number | undefined {
        return this['area_code'];
    }
}