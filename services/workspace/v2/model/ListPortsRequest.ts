

export class ListPortsRequest {
    public marker?: string;
    public limit?: number;
    private 'ip_address'?: string;
    private 'subnet_id'?: string;
    private 'is_used'?: boolean;
    public constructor() { 
    }
    public withMarker(marker: string): ListPortsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListPortsRequest {
        this['limit'] = limit;
        return this;
    }
    public withIpAddress(ipAddress: string): ListPortsRequest {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withSubnetId(subnetId: string): ListPortsRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIsUsed(isUsed: boolean): ListPortsRequest {
        this['is_used'] = isUsed;
        return this;
    }
    public set isUsed(isUsed: boolean  | undefined) {
        this['is_used'] = isUsed;
    }
    public get isUsed(): boolean | undefined {
        return this['is_used'];
    }
}