import { ListenerMemberInfo } from './ListenerMemberInfo';


export class MasterSlaveMember {
    public id: string;
    public name: string;
    private 'admin_state_up': boolean | undefined;
    private 'subnet_cidr_id': string | undefined;
    private 'protocol_port': number | undefined;
    public address: string;
    private 'ip_version': string | undefined;
    private 'device_owner': string | undefined;
    private 'device_id': string | undefined;
    private 'operating_status': string | undefined;
    private 'member_type': string | undefined;
    private 'instance_id': string | undefined;
    public role: string;
    public status: Array<ListenerMemberInfo>;
    public constructor(id?: any, name?: any, adminStateUp?: any, subnetCidrId?: any, protocolPort?: any, address?: any, ipVersion?: any, deviceOwner?: any, deviceId?: any, operatingStatus?: any, memberType?: any, instanceId?: any, role?: any, status?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['admin_state_up'] = adminStateUp;
        this['subnet_cidr_id'] = subnetCidrId;
        this['protocol_port'] = protocolPort;
        this['address'] = address;
        this['ip_version'] = ipVersion;
        this['device_owner'] = deviceOwner;
        this['device_id'] = deviceId;
        this['operating_status'] = operatingStatus;
        this['member_type'] = memberType;
        this['instance_id'] = instanceId;
        this['role'] = role;
        this['status'] = status;
    }
    public withId(id: string): MasterSlaveMember {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MasterSlaveMember {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): MasterSlaveMember {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withSubnetCidrId(subnetCidrId: string): MasterSlaveMember {
        this['subnet_cidr_id'] = subnetCidrId;
        return this;
    }
    public set subnetCidrId(subnetCidrId: string | undefined) {
        this['subnet_cidr_id'] = subnetCidrId;
    }
    public get subnetCidrId() {
        return this['subnet_cidr_id'];
    }
    public withProtocolPort(protocolPort: number): MasterSlaveMember {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
    public withAddress(address: string): MasterSlaveMember {
        this['address'] = address;
        return this;
    }
    public withIpVersion(ipVersion: string): MasterSlaveMember {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: string | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withDeviceOwner(deviceOwner: string): MasterSlaveMember {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: string | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner() {
        return this['device_owner'];
    }
    public withDeviceId(deviceId: string): MasterSlaveMember {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withOperatingStatus(operatingStatus: string): MasterSlaveMember {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus() {
        return this['operating_status'];
    }
    public withMemberType(memberType: string): MasterSlaveMember {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: string | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType() {
        return this['member_type'];
    }
    public withInstanceId(instanceId: string): MasterSlaveMember {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withRole(role: string): MasterSlaveMember {
        this['role'] = role;
        return this;
    }
    public withStatus(status: Array<ListenerMemberInfo>): MasterSlaveMember {
        this['status'] = status;
        return this;
    }
}