import { AllowedAddressPairs } from './AllowedAddressPairs';
import { ServerNetworkHyperCluster } from './ServerNetworkHyperCluster';


export class ServerNetwork {
    private 'ipv6_enable'?: boolean;
    private 'roce_id'?: string;
    private 'security_group_id'?: string;
    private 'subnet_id'?: string;
    private 'vpc_id'?: string;
    private 'hyper_cluster'?: ServerNetworkHyperCluster;
    private 'allowed_address_pairs'?: Array<AllowedAddressPairs>;
    public constructor(securityGroupId?: string, subnetId?: string, vpcId?: string) { 
        this['security_group_id'] = securityGroupId;
        this['subnet_id'] = subnetId;
        this['vpc_id'] = vpcId;
    }
    public withIpv6Enable(ipv6Enable: boolean): ServerNetwork {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withRoceId(roceId: string): ServerNetwork {
        this['roce_id'] = roceId;
        return this;
    }
    public set roceId(roceId: string  | undefined) {
        this['roce_id'] = roceId;
    }
    public get roceId(): string | undefined {
        return this['roce_id'];
    }
    public withSecurityGroupId(securityGroupId: string): ServerNetwork {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSubnetId(subnetId: string): ServerNetwork {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): ServerNetwork {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withHyperCluster(hyperCluster: ServerNetworkHyperCluster): ServerNetwork {
        this['hyper_cluster'] = hyperCluster;
        return this;
    }
    public set hyperCluster(hyperCluster: ServerNetworkHyperCluster  | undefined) {
        this['hyper_cluster'] = hyperCluster;
    }
    public get hyperCluster(): ServerNetworkHyperCluster | undefined {
        return this['hyper_cluster'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPairs>): ServerNetwork {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPairs>  | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs(): Array<AllowedAddressPairs> | undefined {
        return this['allowed_address_pairs'];
    }
}