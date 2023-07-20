

export class BindedEipResult {
    private 'public_ip_id'?: string;
    private 'public_ip_type'?: string;
    private 'port_id'?: string;
    private 'public_ip_address'?: string;
    private 'private_ip_address'?: string;
    private 'bandwidth_id'?: string;
    private 'bandwidth_name'?: string;
    private 'bandwidth_share_type'?: string;
    private 'bandwidth_size'?: number;
    private 'applied_at'?: string;
    public constructor(publicIpId?: string, publicIpType?: string, portId?: string, publicIpAddress?: string, privateIpAddress?: string, bandwidthId?: string, bandwidthName?: string, bandwidthShareType?: string, bandwidthSize?: number, appliedAt?: string) { 
        this['public_ip_id'] = publicIpId;
        this['public_ip_type'] = publicIpType;
        this['port_id'] = portId;
        this['public_ip_address'] = publicIpAddress;
        this['private_ip_address'] = privateIpAddress;
        this['bandwidth_id'] = bandwidthId;
        this['bandwidth_name'] = bandwidthName;
        this['bandwidth_share_type'] = bandwidthShareType;
        this['bandwidth_size'] = bandwidthSize;
        this['applied_at'] = appliedAt;
    }
    public withPublicIpId(publicIpId: string): BindedEipResult {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
    public withPublicIpType(publicIpType: string): BindedEipResult {
        this['public_ip_type'] = publicIpType;
        return this;
    }
    public set publicIpType(publicIpType: string  | undefined) {
        this['public_ip_type'] = publicIpType;
    }
    public get publicIpType(): string | undefined {
        return this['public_ip_type'];
    }
    public withPortId(portId: string): BindedEipResult {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withPublicIpAddress(publicIpAddress: string): BindedEipResult {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
    public withPrivateIpAddress(privateIpAddress: string): BindedEipResult {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): string | undefined {
        return this['private_ip_address'];
    }
    public withBandwidthId(bandwidthId: string): BindedEipResult {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
    public withBandwidthName(bandwidthName: string): BindedEipResult {
        this['bandwidth_name'] = bandwidthName;
        return this;
    }
    public set bandwidthName(bandwidthName: string  | undefined) {
        this['bandwidth_name'] = bandwidthName;
    }
    public get bandwidthName(): string | undefined {
        return this['bandwidth_name'];
    }
    public withBandwidthShareType(bandwidthShareType: string): BindedEipResult {
        this['bandwidth_share_type'] = bandwidthShareType;
        return this;
    }
    public set bandwidthShareType(bandwidthShareType: string  | undefined) {
        this['bandwidth_share_type'] = bandwidthShareType;
    }
    public get bandwidthShareType(): string | undefined {
        return this['bandwidth_share_type'];
    }
    public withBandwidthSize(bandwidthSize: number): BindedEipResult {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withAppliedAt(appliedAt: string): BindedEipResult {
        this['applied_at'] = appliedAt;
        return this;
    }
    public set appliedAt(appliedAt: string  | undefined) {
        this['applied_at'] = appliedAt;
    }
    public get appliedAt(): string | undefined {
        return this['applied_at'];
    }
}