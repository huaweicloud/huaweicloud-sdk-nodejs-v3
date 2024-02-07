

export class ListProjectGeipBindingsRequest {
    public fields?: string;
    private 'geip_id'?: string;
    private 'geip_ip_address'?: string;
    private 'public_border_group'?: string;
    private 'instance_type'?: string;
    private 'instance_id'?: string;
    private 'instance_vpc_id'?: string;
    private 'gcbandwidth.id'?: string;
    private 'gcbandwidth.admin_status'?: string;
    private 'gcbandwidth.size'?: number;
    private 'gcbandwidth.sla_level'?: string;
    private 'gcbandwidth.dscp'?: number;
    private 'vnic.private_ip_address'?: string;
    private 'vnic.vpc_id'?: string;
    private 'vnic.port_id'?: string;
    private 'vnic.device_id'?: string;
    private 'vnic.device_owner'?: string;
    private 'vnic.device_owner_prefixlike'?: string;
    private 'vnic.instance_type'?: string;
    private 'vnic.instance_id'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public limit?: number;
    public constructor() { 
    }
    public withFields(fields: string): ListProjectGeipBindingsRequest {
        this['fields'] = fields;
        return this;
    }
    public withGeipId(geipId: string): ListProjectGeipBindingsRequest {
        this['geip_id'] = geipId;
        return this;
    }
    public set geipId(geipId: string  | undefined) {
        this['geip_id'] = geipId;
    }
    public get geipId(): string | undefined {
        return this['geip_id'];
    }
    public withGeipIpAddress(geipIpAddress: string): ListProjectGeipBindingsRequest {
        this['geip_ip_address'] = geipIpAddress;
        return this;
    }
    public set geipIpAddress(geipIpAddress: string  | undefined) {
        this['geip_ip_address'] = geipIpAddress;
    }
    public get geipIpAddress(): string | undefined {
        return this['geip_ip_address'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListProjectGeipBindingsRequest {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withInstanceType(instanceType: string): ListProjectGeipBindingsRequest {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withInstanceId(instanceId: string): ListProjectGeipBindingsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceVpcId(instanceVpcId: string): ListProjectGeipBindingsRequest {
        this['instance_vpc_id'] = instanceVpcId;
        return this;
    }
    public set instanceVpcId(instanceVpcId: string  | undefined) {
        this['instance_vpc_id'] = instanceVpcId;
    }
    public get instanceVpcId(): string | undefined {
        return this['instance_vpc_id'];
    }
    public withGcbandwidthId(gcbandwidthId: string): ListProjectGeipBindingsRequest {
        this['gcbandwidth.id'] = gcbandwidthId;
        return this;
    }
    public set gcbandwidthId(gcbandwidthId: string  | undefined) {
        this['gcbandwidth.id'] = gcbandwidthId;
    }
    public get gcbandwidthId(): string | undefined {
        return this['gcbandwidth.id'];
    }
    public withGcbandwidthAdminStatus(gcbandwidthAdminStatus: string): ListProjectGeipBindingsRequest {
        this['gcbandwidth.admin_status'] = gcbandwidthAdminStatus;
        return this;
    }
    public set gcbandwidthAdminStatus(gcbandwidthAdminStatus: string  | undefined) {
        this['gcbandwidth.admin_status'] = gcbandwidthAdminStatus;
    }
    public get gcbandwidthAdminStatus(): string | undefined {
        return this['gcbandwidth.admin_status'];
    }
    public withGcbandwidthSize(gcbandwidthSize: number): ListProjectGeipBindingsRequest {
        this['gcbandwidth.size'] = gcbandwidthSize;
        return this;
    }
    public set gcbandwidthSize(gcbandwidthSize: number  | undefined) {
        this['gcbandwidth.size'] = gcbandwidthSize;
    }
    public get gcbandwidthSize(): number | undefined {
        return this['gcbandwidth.size'];
    }
    public withGcbandwidthSlaLevel(gcbandwidthSlaLevel: string): ListProjectGeipBindingsRequest {
        this['gcbandwidth.sla_level'] = gcbandwidthSlaLevel;
        return this;
    }
    public set gcbandwidthSlaLevel(gcbandwidthSlaLevel: string  | undefined) {
        this['gcbandwidth.sla_level'] = gcbandwidthSlaLevel;
    }
    public get gcbandwidthSlaLevel(): string | undefined {
        return this['gcbandwidth.sla_level'];
    }
    public withGcbandwidthDscp(gcbandwidthDscp: number): ListProjectGeipBindingsRequest {
        this['gcbandwidth.dscp'] = gcbandwidthDscp;
        return this;
    }
    public set gcbandwidthDscp(gcbandwidthDscp: number  | undefined) {
        this['gcbandwidth.dscp'] = gcbandwidthDscp;
    }
    public get gcbandwidthDscp(): number | undefined {
        return this['gcbandwidth.dscp'];
    }
    public withVnicPrivateIpAddress(vnicPrivateIpAddress: string): ListProjectGeipBindingsRequest {
        this['vnic.private_ip_address'] = vnicPrivateIpAddress;
        return this;
    }
    public set vnicPrivateIpAddress(vnicPrivateIpAddress: string  | undefined) {
        this['vnic.private_ip_address'] = vnicPrivateIpAddress;
    }
    public get vnicPrivateIpAddress(): string | undefined {
        return this['vnic.private_ip_address'];
    }
    public withVnicVpcId(vnicVpcId: string): ListProjectGeipBindingsRequest {
        this['vnic.vpc_id'] = vnicVpcId;
        return this;
    }
    public set vnicVpcId(vnicVpcId: string  | undefined) {
        this['vnic.vpc_id'] = vnicVpcId;
    }
    public get vnicVpcId(): string | undefined {
        return this['vnic.vpc_id'];
    }
    public withVnicPortId(vnicPortId: string): ListProjectGeipBindingsRequest {
        this['vnic.port_id'] = vnicPortId;
        return this;
    }
    public set vnicPortId(vnicPortId: string  | undefined) {
        this['vnic.port_id'] = vnicPortId;
    }
    public get vnicPortId(): string | undefined {
        return this['vnic.port_id'];
    }
    public withVnicDeviceId(vnicDeviceId: string): ListProjectGeipBindingsRequest {
        this['vnic.device_id'] = vnicDeviceId;
        return this;
    }
    public set vnicDeviceId(vnicDeviceId: string  | undefined) {
        this['vnic.device_id'] = vnicDeviceId;
    }
    public get vnicDeviceId(): string | undefined {
        return this['vnic.device_id'];
    }
    public withVnicDeviceOwner(vnicDeviceOwner: string): ListProjectGeipBindingsRequest {
        this['vnic.device_owner'] = vnicDeviceOwner;
        return this;
    }
    public set vnicDeviceOwner(vnicDeviceOwner: string  | undefined) {
        this['vnic.device_owner'] = vnicDeviceOwner;
    }
    public get vnicDeviceOwner(): string | undefined {
        return this['vnic.device_owner'];
    }
    public withVnicDeviceOwnerPrefixlike(vnicDeviceOwnerPrefixlike: string): ListProjectGeipBindingsRequest {
        this['vnic.device_owner_prefixlike'] = vnicDeviceOwnerPrefixlike;
        return this;
    }
    public set vnicDeviceOwnerPrefixlike(vnicDeviceOwnerPrefixlike: string  | undefined) {
        this['vnic.device_owner_prefixlike'] = vnicDeviceOwnerPrefixlike;
    }
    public get vnicDeviceOwnerPrefixlike(): string | undefined {
        return this['vnic.device_owner_prefixlike'];
    }
    public withVnicInstanceType(vnicInstanceType: string): ListProjectGeipBindingsRequest {
        this['vnic.instance_type'] = vnicInstanceType;
        return this;
    }
    public set vnicInstanceType(vnicInstanceType: string  | undefined) {
        this['vnic.instance_type'] = vnicInstanceType;
    }
    public get vnicInstanceType(): string | undefined {
        return this['vnic.instance_type'];
    }
    public withVnicInstanceId(vnicInstanceId: string): ListProjectGeipBindingsRequest {
        this['vnic.instance_id'] = vnicInstanceId;
        return this;
    }
    public set vnicInstanceId(vnicInstanceId: string  | undefined) {
        this['vnic.instance_id'] = vnicInstanceId;
    }
    public get vnicInstanceId(): string | undefined {
        return this['vnic.instance_id'];
    }
    public withSortKey(sortKey: string): ListProjectGeipBindingsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListProjectGeipBindingsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withLimit(limit: number): ListProjectGeipBindingsRequest {
        this['limit'] = limit;
        return this;
    }
}