

export class ShowGlobalDcGatewayRequest {
    private 'global_dc_gateway_id'?: string;
    public fields?: Array<string>;
    private 'ext_fields'?: Array<string>;
    public constructor(globalDcGatewayId?: string) { 
        this['global_dc_gateway_id'] = globalDcGatewayId;
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
}