import { PolicyStatement } from './PolicyStatement';
import { TagList } from './TagList';


export class CreateEndpointRequestBody {
    private 'subnet_id'?: string;
    private 'endpoint_service_id'?: string;
    private 'vpc_id'?: string;
    private 'enable_dns'?: boolean;
    public tags?: Array<TagList>;
    public routetables?: Array<string>;
    private 'port_ip'?: string;
    public whitelist?: Array<string>;
    private 'enable_whitelist'?: boolean;
    public description?: string;
    private 'policy_statement'?: Array<PolicyStatement>;
    private 'policy_document'?: object;
    private 'ip_version'?: CreateEndpointRequestBodyIpVersionEnum | string;
    private 'ipv6_address'?: string;
    public constructor(endpointServiceId?: string, vpcId?: string) { 
        this['endpoint_service_id'] = endpointServiceId;
        this['vpc_id'] = vpcId;
    }
    public withSubnetId(subnetId: string): CreateEndpointRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withEndpointServiceId(endpointServiceId: string): CreateEndpointRequestBody {
        this['endpoint_service_id'] = endpointServiceId;
        return this;
    }
    public set endpointServiceId(endpointServiceId: string  | undefined) {
        this['endpoint_service_id'] = endpointServiceId;
    }
    public get endpointServiceId(): string | undefined {
        return this['endpoint_service_id'];
    }
    public withVpcId(vpcId: string): CreateEndpointRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withEnableDns(enableDns: boolean): CreateEndpointRequestBody {
        this['enable_dns'] = enableDns;
        return this;
    }
    public set enableDns(enableDns: boolean  | undefined) {
        this['enable_dns'] = enableDns;
    }
    public get enableDns(): boolean | undefined {
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
    public set portIp(portIp: string  | undefined) {
        this['port_ip'] = portIp;
    }
    public get portIp(): string | undefined {
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
    public set enableWhitelist(enableWhitelist: boolean  | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist(): boolean | undefined {
        return this['enable_whitelist'];
    }
    public withDescription(description: string): CreateEndpointRequestBody {
        this['description'] = description;
        return this;
    }
    public withPolicyStatement(policyStatement: Array<PolicyStatement>): CreateEndpointRequestBody {
        this['policy_statement'] = policyStatement;
        return this;
    }
    public set policyStatement(policyStatement: Array<PolicyStatement>  | undefined) {
        this['policy_statement'] = policyStatement;
    }
    public get policyStatement(): Array<PolicyStatement> | undefined {
        return this['policy_statement'];
    }
    public withPolicyDocument(policyDocument: object): CreateEndpointRequestBody {
        this['policy_document'] = policyDocument;
        return this;
    }
    public set policyDocument(policyDocument: object  | undefined) {
        this['policy_document'] = policyDocument;
    }
    public get policyDocument(): object | undefined {
        return this['policy_document'];
    }
    public withIpVersion(ipVersion: CreateEndpointRequestBodyIpVersionEnum | string): CreateEndpointRequestBody {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: CreateEndpointRequestBodyIpVersionEnum | string  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): CreateEndpointRequestBodyIpVersionEnum | string | undefined {
        return this['ip_version'];
    }
    public withIpv6Address(ipv6Address: string): CreateEndpointRequestBody {
        this['ipv6_address'] = ipv6Address;
        return this;
    }
    public set ipv6Address(ipv6Address: string  | undefined) {
        this['ipv6_address'] = ipv6Address;
    }
    public get ipv6Address(): string | undefined {
        return this['ipv6_address'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateEndpointRequestBodyIpVersionEnum {
    IPV4 = 'ipv4',
    DUALSTACK = 'dualstack'
}
