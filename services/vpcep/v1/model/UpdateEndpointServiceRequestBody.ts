import { PortList } from './PortList';


export class UpdateEndpointServiceRequestBody {
    private 'approval_enabled'?: boolean;
    private 'service_name'?: string;
    public ports?: Array<PortList>;
    private 'port_id'?: string;
    private 'tcp_proxy'?: UpdateEndpointServiceRequestBodyTcpProxyEnum | string;
    public description?: string;
    public constructor() { 
    }
    public withApprovalEnabled(approvalEnabled: boolean): UpdateEndpointServiceRequestBody {
        this['approval_enabled'] = approvalEnabled;
        return this;
    }
    public set approvalEnabled(approvalEnabled: boolean  | undefined) {
        this['approval_enabled'] = approvalEnabled;
    }
    public get approvalEnabled(): boolean | undefined {
        return this['approval_enabled'];
    }
    public withServiceName(serviceName: string): UpdateEndpointServiceRequestBody {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withPorts(ports: Array<PortList>): UpdateEndpointServiceRequestBody {
        this['ports'] = ports;
        return this;
    }
    public withPortId(portId: string): UpdateEndpointServiceRequestBody {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withTcpProxy(tcpProxy: UpdateEndpointServiceRequestBodyTcpProxyEnum | string): UpdateEndpointServiceRequestBody {
        this['tcp_proxy'] = tcpProxy;
        return this;
    }
    public set tcpProxy(tcpProxy: UpdateEndpointServiceRequestBodyTcpProxyEnum | string  | undefined) {
        this['tcp_proxy'] = tcpProxy;
    }
    public get tcpProxy(): UpdateEndpointServiceRequestBodyTcpProxyEnum | string | undefined {
        return this['tcp_proxy'];
    }
    public withDescription(description: string): UpdateEndpointServiceRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateEndpointServiceRequestBodyTcpProxyEnum {
    CLOSE = 'close',
    TOA_OPEN = 'toa_open',
    PROXY_OPEN = 'proxy_open',
    OPEN = 'open',
    PROXY_VNI = 'proxy_vni'
}
