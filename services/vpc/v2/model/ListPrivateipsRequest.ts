

export class ListPrivateipsRequest {
    private 'subnet_id': string | undefined;
    public limit?: number;
    public marker?: string;
    public constructor(subnetId?: any) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): ListPrivateipsRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withLimit(limit: number): ListPrivateipsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPrivateipsRequest {
        this['marker'] = marker;
        return this;
    }
}