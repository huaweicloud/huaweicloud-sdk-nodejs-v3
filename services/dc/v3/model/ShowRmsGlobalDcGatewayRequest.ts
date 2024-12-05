

export class ShowRmsGlobalDcGatewayRequest {
    private 'rp_name'?: string;
    private 'domain_id'?: string;
    private 'region_id'?: string;
    private 'resource_type'?: string;
    private 'global_dc_gateway_id'?: string;
    public fields?: Array<string>;
    private 'ext_fields'?: Array<string>;
    public constructor(rpName?: string, domainId?: string, regionId?: string, resourceType?: string, globalDcGatewayId?: string) { 
        this['rp_name'] = rpName;
        this['domain_id'] = domainId;
        this['region_id'] = regionId;
        this['resource_type'] = resourceType;
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public withRpName(rpName: string): ShowRmsGlobalDcGatewayRequest {
        this['rp_name'] = rpName;
        return this;
    }
    public set rpName(rpName: string  | undefined) {
        this['rp_name'] = rpName;
    }
    public get rpName(): string | undefined {
        return this['rp_name'];
    }
    public withDomainId(domainId: string): ShowRmsGlobalDcGatewayRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegionId(regionId: string): ShowRmsGlobalDcGatewayRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withResourceType(resourceType: string): ShowRmsGlobalDcGatewayRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): ShowRmsGlobalDcGatewayRequest {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
    public withFields(fields: Array<string>): ShowRmsGlobalDcGatewayRequest {
        this['fields'] = fields;
        return this;
    }
    public withExtFields(extFields: Array<string>): ShowRmsGlobalDcGatewayRequest {
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