import { ListenerMemberInfo } from './ListenerMemberInfo';
import { MemberHealthCheckFailedReason } from './MemberHealthCheckFailedReason';


export class MasterSlaveMember {
    public id?: string;
    public name?: string;
    private 'admin_state_up'?: boolean;
    private 'subnet_cidr_id'?: string;
    private 'protocol_port'?: number;
    public address?: string;
    private 'ip_version'?: string;
    private 'device_owner'?: string;
    private 'device_id'?: string;
    private 'operating_status'?: string;
    public reason?: MemberHealthCheckFailedReason;
    private 'member_type'?: string;
    private 'instance_id'?: string;
    public role?: string;
    public status?: Array<ListenerMemberInfo>;
    public constructor(id?: string, name?: string, adminStateUp?: boolean, subnetCidrId?: string, protocolPort?: number, address?: string, ipVersion?: string, deviceOwner?: string, deviceId?: string, operatingStatus?: string, memberType?: string, instanceId?: string, role?: string, status?: Array<ListenerMemberInfo>) { 
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
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withSubnetCidrId(subnetCidrId: string): MasterSlaveMember {
        this['subnet_cidr_id'] = subnetCidrId;
        return this;
    }
    public set subnetCidrId(subnetCidrId: string  | undefined) {
        this['subnet_cidr_id'] = subnetCidrId;
    }
    public get subnetCidrId(): string | undefined {
        return this['subnet_cidr_id'];
    }
    public withProtocolPort(protocolPort: number): MasterSlaveMember {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
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
    public set ipVersion(ipVersion: string  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): string | undefined {
        return this['ip_version'];
    }
    public withDeviceOwner(deviceOwner: string): MasterSlaveMember {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: string  | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner(): string | undefined {
        return this['device_owner'];
    }
    public withDeviceId(deviceId: string): MasterSlaveMember {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withOperatingStatus(operatingStatus: string): MasterSlaveMember {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): string | undefined {
        return this['operating_status'];
    }
    public withReason(reason: MemberHealthCheckFailedReason): MasterSlaveMember {
        this['reason'] = reason;
        return this;
    }
    public withMemberType(memberType: string): MasterSlaveMember {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: string  | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType(): string | undefined {
        return this['member_type'];
    }
    public withInstanceId(instanceId: string): MasterSlaveMember {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
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