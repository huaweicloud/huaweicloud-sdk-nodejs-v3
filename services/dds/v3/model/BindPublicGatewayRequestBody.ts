

export class BindPublicGatewayRequestBody {
    private 'nat_gateway_id'?: string;
    private 'public_ip_id'?: string;
    private 'external_service_port'?: number;
    public constructor(natGatewayId?: string, publicIpId?: string, externalServicePort?: number) { 
        this['nat_gateway_id'] = natGatewayId;
        this['public_ip_id'] = publicIpId;
        this['external_service_port'] = externalServicePort;
    }
    public withNatGatewayId(natGatewayId: string): BindPublicGatewayRequestBody {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withPublicIpId(publicIpId: string): BindPublicGatewayRequestBody {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
    public withExternalServicePort(externalServicePort: number): BindPublicGatewayRequestBody {
        this['external_service_port'] = externalServicePort;
        return this;
    }
    public set externalServicePort(externalServicePort: number  | undefined) {
        this['external_service_port'] = externalServicePort;
    }
    public get externalServicePort(): number | undefined {
        return this['external_service_port'];
    }
}