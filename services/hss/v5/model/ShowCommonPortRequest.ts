

export class ShowCommonPortRequest {
    private 'enterprise_project_id'?: string;
    public port?: number;
    public categoty?: string;
    public constructor(port?: number, categoty?: string) { 
        this['port'] = port;
        this['categoty'] = categoty;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowCommonPortRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPort(port: number): ShowCommonPortRequest {
        this['port'] = port;
        return this;
    }
    public withCategoty(categoty: string): ShowCommonPortRequest {
        this['categoty'] = categoty;
        return this;
    }
}