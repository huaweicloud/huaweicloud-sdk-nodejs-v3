

export class ShowGlobalDcGatewayRequest {
    public limit?: number;
    public fields?: Array<string>;
    private 'ext_fields'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    private 'global_dc_gateway_id'?: string;
    public constructor(globalDcGatewayId?: string) { 
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public withLimit(limit: number): ShowGlobalDcGatewayRequest {
        this['limit'] = limit;
        return this;
    }
    public withFields(fields: Array<string>): ShowGlobalDcGatewayRequest {
        this['fields'] = fields;
        return this;
    }
    public withExtFields(extFields: Array<string>): ShowGlobalDcGatewayRequest {
        this['ext_fields'] = extFields;
        return this;
    }
    public set extFields(extFields: Array<string>  | undefined) {
        this['ext_fields'] = extFields;
    }
    public get extFields(): Array<string> | undefined {
        return this['ext_fields'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ShowGlobalDcGatewayRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): ShowGlobalDcGatewayRequest {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
}