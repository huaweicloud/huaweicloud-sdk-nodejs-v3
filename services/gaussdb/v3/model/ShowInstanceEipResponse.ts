
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceEipResponse extends SdkResponse {
    private 'can_enable_public_access'?: boolean;
    public id?: string;
    public type?: string;
    private 'port_id'?: string;
    private 'public_ip_address'?: string;
    private 'private_ip_address'?: string;
    public status?: string;
    private 'tenant_id'?: string;
    private 'create_time'?: string;
    private 'bandwidth_id'?: string;
    private 'bandwidth_name'?: string;
    private 'bandwidth_size'?: string;
    private 'bandwidth_share_type'?: string;
    public profile?: object;
    public constructor() { 
        super();
    }
    public withCanEnablePublicAccess(canEnablePublicAccess: boolean): ShowInstanceEipResponse {
        this['can_enable_public_access'] = canEnablePublicAccess;
        return this;
    }
    public set canEnablePublicAccess(canEnablePublicAccess: boolean  | undefined) {
        this['can_enable_public_access'] = canEnablePublicAccess;
    }
    public get canEnablePublicAccess(): boolean | undefined {
        return this['can_enable_public_access'];
    }
    public withId(id: string): ShowInstanceEipResponse {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ShowInstanceEipResponse {
        this['type'] = type;
        return this;
    }
    public withPortId(portId: string): ShowInstanceEipResponse {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withPublicIpAddress(publicIpAddress: string): ShowInstanceEipResponse {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
    public withPrivateIpAddress(privateIpAddress: string): ShowInstanceEipResponse {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): string | undefined {
        return this['private_ip_address'];
    }
    public withStatus(status: string): ShowInstanceEipResponse {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): ShowInstanceEipResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withCreateTime(createTime: string): ShowInstanceEipResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withBandwidthId(bandwidthId: string): ShowInstanceEipResponse {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
    public withBandwidthName(bandwidthName: string): ShowInstanceEipResponse {
        this['bandwidth_name'] = bandwidthName;
        return this;
    }
    public set bandwidthName(bandwidthName: string  | undefined) {
        this['bandwidth_name'] = bandwidthName;
    }
    public get bandwidthName(): string | undefined {
        return this['bandwidth_name'];
    }
    public withBandwidthSize(bandwidthSize: string): ShowInstanceEipResponse {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: string  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): string | undefined {
        return this['bandwidth_size'];
    }
    public withBandwidthShareType(bandwidthShareType: string): ShowInstanceEipResponse {
        this['bandwidth_share_type'] = bandwidthShareType;
        return this;
    }
    public set bandwidthShareType(bandwidthShareType: string  | undefined) {
        this['bandwidth_share_type'] = bandwidthShareType;
    }
    public get bandwidthShareType(): string | undefined {
        return this['bandwidth_share_type'];
    }
    public withProfile(profile: object): ShowInstanceEipResponse {
        this['profile'] = profile;
        return this;
    }
}