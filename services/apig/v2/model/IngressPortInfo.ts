

export class IngressPortInfo {
    public protocol?: IngressPortInfoProtocolEnum | string;
    private 'ingress_port'?: number;
    private 'ingress_port_id'?: string;
    public status?: IngressPortInfoStatusEnum | string;
    public constructor() { 
    }
    public withProtocol(protocol: IngressPortInfoProtocolEnum | string): IngressPortInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withIngressPort(ingressPort: number): IngressPortInfo {
        this['ingress_port'] = ingressPort;
        return this;
    }
    public set ingressPort(ingressPort: number  | undefined) {
        this['ingress_port'] = ingressPort;
    }
    public get ingressPort(): number | undefined {
        return this['ingress_port'];
    }
    public withIngressPortId(ingressPortId: string): IngressPortInfo {
        this['ingress_port_id'] = ingressPortId;
        return this;
    }
    public set ingressPortId(ingressPortId: string  | undefined) {
        this['ingress_port_id'] = ingressPortId;
    }
    public get ingressPortId(): string | undefined {
        return this['ingress_port_id'];
    }
    public withStatus(status: IngressPortInfoStatusEnum | string): IngressPortInfo {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IngressPortInfoProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum IngressPortInfoStatusEnum {
    NORMAL = 'normal',
    ABNORMAL = 'abnormal'
}
