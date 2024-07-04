

export class IngressPortCreate {
    public protocol?: IngressPortCreateProtocolEnum | string;
    private 'ingress_port'?: number;
    public constructor(protocol?: string, ingressPort?: number) { 
        this['protocol'] = protocol;
        this['ingress_port'] = ingressPort;
    }
    public withProtocol(protocol: IngressPortCreateProtocolEnum | string): IngressPortCreate {
        this['protocol'] = protocol;
        return this;
    }
    public withIngressPort(ingressPort: number): IngressPortCreate {
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
export enum IngressPortCreateProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
