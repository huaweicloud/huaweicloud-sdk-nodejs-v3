

export class BindDNatRequestBody {
    private 'node_id'?: string;
    private 'public_ip_id'?: string;
    private 'nat_gateway_id'?: string;
    private 'external_service_port'?: number;
    public action?: BindDNatRequestBodyActionEnum | string;
    public constructor(nodeId?: string, action?: string) { 
        this['node_id'] = nodeId;
        this['action'] = action;
    }
    public withNodeId(nodeId: string): BindDNatRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withPublicIpId(publicIpId: string): BindDNatRequestBody {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
    public withNatGatewayId(natGatewayId: string): BindDNatRequestBody {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withExternalServicePort(externalServicePort: number): BindDNatRequestBody {
        this['external_service_port'] = externalServicePort;
        return this;
    }
    public set externalServicePort(externalServicePort: number  | undefined) {
        this['external_service_port'] = externalServicePort;
    }
    public get externalServicePort(): number | undefined {
        return this['external_service_port'];
    }
    public withAction(action: BindDNatRequestBodyActionEnum | string): BindDNatRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BindDNatRequestBodyActionEnum {
    BIND = 'BIND',
    UNBIND = 'UNBIND'
}
