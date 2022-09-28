import { PortList } from './PortList';


export class UpdateEndpointServiceRequestBody {
    private 'approval_enabled'?: boolean | undefined;
    private 'service_name'?: string | undefined;
    public ports?: Array<PortList>;
    private 'port_id'?: string | undefined;
    private 'vip_port_id'?: string | undefined;
    public description?: string;
    public constructor() { 
    }
    public withApprovalEnabled(approvalEnabled: boolean): UpdateEndpointServiceRequestBody {
        this['approval_enabled'] = approvalEnabled;
        return this;
    }
    public set approvalEnabled(approvalEnabled: boolean | undefined) {
        this['approval_enabled'] = approvalEnabled;
    }
    public get approvalEnabled() {
        return this['approval_enabled'];
    }
    public withServiceName(serviceName: string): UpdateEndpointServiceRequestBody {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName() {
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
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
    public withVipPortId(vipPortId: string): UpdateEndpointServiceRequestBody {
        this['vip_port_id'] = vipPortId;
        return this;
    }
    public set vipPortId(vipPortId: string | undefined) {
        this['vip_port_id'] = vipPortId;
    }
    public get vipPortId() {
        return this['vip_port_id'];
    }
    public withDescription(description: string): UpdateEndpointServiceRequestBody {
        this['description'] = description;
        return this;
    }
}