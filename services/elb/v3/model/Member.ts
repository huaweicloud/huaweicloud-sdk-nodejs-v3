import { MemberStatus } from './MemberStatus';
import { ResourceID } from './ResourceID';


export class Member {
    public id: string;
    public name: string;
    private 'project_id': string | undefined;
    private 'pool_id'?: string | undefined;
    private 'admin_state_up': boolean | undefined;
    private 'subnet_cidr_id'?: string | undefined;
    private 'protocol_port': number | undefined;
    public weight: number;
    public address: string;
    private 'ip_version': string | undefined;
    private 'device_owner'?: string | undefined;
    private 'device_id'?: string | undefined;
    private 'operating_status': string | undefined;
    public status: Array<MemberStatus>;
    private 'loadbalancer_id'?: string | undefined;
    public loadbalancers?: Array<ResourceID>;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'member_type'?: string | undefined;
    private 'instance_id'?: string | undefined;
    public constructor(id?: any, name?: any, projectId?: any, adminStateUp?: any, protocolPort?: any, weight?: any, address?: any, ipVersion?: any, operatingStatus?: any, status?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['project_id'] = projectId;
        this['admin_state_up'] = adminStateUp;
        this['protocol_port'] = protocolPort;
        this['weight'] = weight;
        this['address'] = address;
        this['ip_version'] = ipVersion;
        this['operating_status'] = operatingStatus;
        this['status'] = status;
    }
    public withId(id: string): Member {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Member {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): Member {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withPoolId(poolId: string): Member {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): Member {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withSubnetCidrId(subnetCidrId: string): Member {
        this['subnet_cidr_id'] = subnetCidrId;
        return this;
    }
    public set subnetCidrId(subnetCidrId: string | undefined) {
        this['subnet_cidr_id'] = subnetCidrId;
    }
    public get subnetCidrId() {
        return this['subnet_cidr_id'];
    }
    public withProtocolPort(protocolPort: number): Member {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
    public withWeight(weight: number): Member {
        this['weight'] = weight;
        return this;
    }
    public withAddress(address: string): Member {
        this['address'] = address;
        return this;
    }
    public withIpVersion(ipVersion: string): Member {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: string | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withDeviceOwner(deviceOwner: string): Member {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: string | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner() {
        return this['device_owner'];
    }
    public withDeviceId(deviceId: string): Member {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withOperatingStatus(operatingStatus: string): Member {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus() {
        return this['operating_status'];
    }
    public withStatus(status: Array<MemberStatus>): Member {
        this['status'] = status;
        return this;
    }
    public withLoadbalancerId(loadbalancerId: string): Member {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withLoadbalancers(loadbalancers: Array<ResourceID>): Member {
        this['loadbalancers'] = loadbalancers;
        return this;
    }
    public withCreatedAt(createdAt: string): Member {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): Member {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withMemberType(memberType: string): Member {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: string | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType() {
        return this['member_type'];
    }
    public withInstanceId(instanceId: string): Member {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
}