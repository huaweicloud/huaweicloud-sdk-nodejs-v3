import { TagList } from './TagList';


export class CreateEndpointRequestBody {
    private 'subnet_id'?: string | undefined;
    private 'endpoint_service_id': string | undefined;
    private 'vpc_id': string | undefined;
    private 'enable_dns'?: boolean | undefined;
    public tags?: Array<TagList>;
    public routetables?: Array<string>;
    private 'port_ip'?: string | undefined;
    public whitelist?: Array<string>;
    private 'enable_whitelist'?: boolean | undefined;
    public description?: string;
    public constructor(endpointServiceId?: any, vpcId?: any) { 
        this['endpoint_service_id'] = endpointServiceId;
        this['vpc_id'] = vpcId;
    }
    public withSubnetId(subnetId: string): CreateEndpointRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withEndpointServiceId(endpointServiceId: string): CreateEndpointRequestBody {
        this['endpoint_service_id'] = endpointServiceId;
        return this;
    }
    public set endpointServiceId(endpointServiceId: string | undefined) {
        this['endpoint_service_id'] = endpointServiceId;
    }
    public get endpointServiceId() {
        return this['endpoint_service_id'];
    }
    public withVpcId(vpcId: string): CreateEndpointRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withEnableDns(enableDns: boolean): CreateEndpointRequestBody {
        this['enable_dns'] = enableDns;
        return this;
    }
    public set enableDns(enableDns: boolean | undefined) {
        this['enable_dns'] = enableDns;
    }
    public get enableDns() {
        return this['enable_dns'];
    }
    public withTags(tags: Array<TagList>): CreateEndpointRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withRoutetables(routetables: Array<string>): CreateEndpointRequestBody {
        this['routetables'] = routetables;
        return this;
    }
    public withPortIp(portIp: string): CreateEndpointRequestBody {
        this['port_ip'] = portIp;
        return this;
    }
    public set portIp(portIp: string | undefined) {
        this['port_ip'] = portIp;
    }
    public get portIp() {
        return this['port_ip'];
    }
    public withWhitelist(whitelist: Array<string>): CreateEndpointRequestBody {
        this['whitelist'] = whitelist;
        return this;
    }
    public withEnableWhitelist(enableWhitelist: boolean): CreateEndpointRequestBody {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist() {
        return this['enable_whitelist'];
    }
    public withDescription(description: string): CreateEndpointRequestBody {
        this['description'] = description;
        return this;
    }
}