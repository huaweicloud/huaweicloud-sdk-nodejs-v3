

export class GlobalDcGatewayProjectId {
    private 'global_dc_gateway_project_id'?: string;
    public constructor(globalDcGatewayProjectId?: string) { 
        this['global_dc_gateway_project_id'] = globalDcGatewayProjectId;
    }
    public withGlobalDcGatewayProjectId(globalDcGatewayProjectId: string): GlobalDcGatewayProjectId {
        this['global_dc_gateway_project_id'] = globalDcGatewayProjectId;
        return this;
    }
    public set globalDcGatewayProjectId(globalDcGatewayProjectId: string  | undefined) {
        this['global_dc_gateway_project_id'] = globalDcGatewayProjectId;
    }
    public get globalDcGatewayProjectId(): string | undefined {
        return this['global_dc_gateway_project_id'];
    }
}