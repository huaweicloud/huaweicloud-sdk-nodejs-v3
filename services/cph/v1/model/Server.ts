import { Address } from './Address';
import { ServerMetadata } from './ServerMetadata';


export class Server {
    private 'server_name'?: string;
    private 'availability_zone'?: string;
    private 'server_id'?: string;
    private 'server_model_name'?: string;
    private 'phone_model_name'?: string;
    private 'keypair_name'?: string;
    public status?: number;
    private 'vpc_id'?: string;
    public cidr?: string;
    private 'vpc_cidr'?: string;
    private 'subnet_id'?: string;
    private 'subnet_cidr'?: string;
    public addresses?: Array<Address>;
    private 'resource_project_id'?: string;
    public metadata?: ServerMetadata;
    private 'network_version'?: string;
    private 'enterprise_project_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withServerName(serverName: string): Server {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withAvailabilityZone(availabilityZone: string): Server {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withServerId(serverId: string): Server {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withServerModelName(serverModelName: string): Server {
        this['server_model_name'] = serverModelName;
        return this;
    }
    public set serverModelName(serverModelName: string  | undefined) {
        this['server_model_name'] = serverModelName;
    }
    public get serverModelName(): string | undefined {
        return this['server_model_name'];
    }
    public withPhoneModelName(phoneModelName: string): Server {
        this['phone_model_name'] = phoneModelName;
        return this;
    }
    public set phoneModelName(phoneModelName: string  | undefined) {
        this['phone_model_name'] = phoneModelName;
    }
    public get phoneModelName(): string | undefined {
        return this['phone_model_name'];
    }
    public withKeypairName(keypairName: string): Server {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
    public withStatus(status: number): Server {
        this['status'] = status;
        return this;
    }
    public withVpcId(vpcId: string): Server {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCidr(cidr: string): Server {
        this['cidr'] = cidr;
        return this;
    }
    public withVpcCidr(vpcCidr: string): Server {
        this['vpc_cidr'] = vpcCidr;
        return this;
    }
    public set vpcCidr(vpcCidr: string  | undefined) {
        this['vpc_cidr'] = vpcCidr;
    }
    public get vpcCidr(): string | undefined {
        return this['vpc_cidr'];
    }
    public withSubnetId(subnetId: string): Server {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSubnetCidr(subnetCidr: string): Server {
        this['subnet_cidr'] = subnetCidr;
        return this;
    }
    public set subnetCidr(subnetCidr: string  | undefined) {
        this['subnet_cidr'] = subnetCidr;
    }
    public get subnetCidr(): string | undefined {
        return this['subnet_cidr'];
    }
    public withAddresses(addresses: Array<Address>): Server {
        this['addresses'] = addresses;
        return this;
    }
    public withResourceProjectId(resourceProjectId: string): Server {
        this['resource_project_id'] = resourceProjectId;
        return this;
    }
    public set resourceProjectId(resourceProjectId: string  | undefined) {
        this['resource_project_id'] = resourceProjectId;
    }
    public get resourceProjectId(): string | undefined {
        return this['resource_project_id'];
    }
    public withMetadata(metadata: ServerMetadata): Server {
        this['metadata'] = metadata;
        return this;
    }
    public withNetworkVersion(networkVersion: string): Server {
        this['network_version'] = networkVersion;
        return this;
    }
    public set networkVersion(networkVersion: string  | undefined) {
        this['network_version'] = networkVersion;
    }
    public get networkVersion(): string | undefined {
        return this['network_version'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Server {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreateTime(createTime: string): Server {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): Server {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}