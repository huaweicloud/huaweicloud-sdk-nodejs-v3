

export class ListCustomIngressPortsRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public protocol?: ListCustomIngressPortsRequestProtocolEnum | string;
    private 'ingress_port'?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListCustomIngressPortsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListCustomIngressPortsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCustomIngressPortsRequest {
        this['limit'] = limit;
        return this;
    }
    public withProtocol(protocol: ListCustomIngressPortsRequestProtocolEnum | string): ListCustomIngressPortsRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withIngressPort(ingressPort: number): ListCustomIngressPortsRequest {
        this['ingress_port'] = ingressPort;
        return this;
    }
    public set ingressPort(ingressPort: number  | undefined) {
        this['ingress_port'] = ingressPort;
    }
    public get ingressPort(): number | undefined {
        return this['ingress_port'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCustomIngressPortsRequestProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
