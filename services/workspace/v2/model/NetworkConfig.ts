import { VpcConfigInfo } from './VpcConfigInfo';


export class NetworkConfig {
    private 'vpc_id'?: string;
    private 'vpc_name'?: string;
    private 'subnet_ids'?: Array<string>;
    private 'management_subnet_cidr'?: string;
    private 'management_node_subnet_id'?: string;
    private 'vpc_config_infos'?: Array<VpcConfigInfo>;
    public constructor() { 
    }
    public withVpcId(vpcId: string): NetworkConfig {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVpcName(vpcName: string): NetworkConfig {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withSubnetIds(subnetIds: Array<string>): NetworkConfig {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<string>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<string> | undefined {
        return this['subnet_ids'];
    }
    public withManagementSubnetCidr(managementSubnetCidr: string): NetworkConfig {
        this['management_subnet_cidr'] = managementSubnetCidr;
        return this;
    }
    public set managementSubnetCidr(managementSubnetCidr: string  | undefined) {
        this['management_subnet_cidr'] = managementSubnetCidr;
    }
    public get managementSubnetCidr(): string | undefined {
        return this['management_subnet_cidr'];
    }
    public withManagementNodeSubnetId(managementNodeSubnetId: string): NetworkConfig {
        this['management_node_subnet_id'] = managementNodeSubnetId;
        return this;
    }
    public set managementNodeSubnetId(managementNodeSubnetId: string  | undefined) {
        this['management_node_subnet_id'] = managementNodeSubnetId;
    }
    public get managementNodeSubnetId(): string | undefined {
        return this['management_node_subnet_id'];
    }
    public withVpcConfigInfos(vpcConfigInfos: Array<VpcConfigInfo>): NetworkConfig {
        this['vpc_config_infos'] = vpcConfigInfos;
        return this;
    }
    public set vpcConfigInfos(vpcConfigInfos: Array<VpcConfigInfo>  | undefined) {
        this['vpc_config_infos'] = vpcConfigInfos;
    }
    public get vpcConfigInfos(): Array<VpcConfigInfo> | undefined {
        return this['vpc_config_infos'];
    }
}