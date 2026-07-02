

export class ListVpnGatewayCertificatesRequest {
    public limit?: number;
    public marker?: string;
    private 'pre_expire_days'?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListVpnGatewayCertificatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpnGatewayCertificatesRequest {
        this['marker'] = marker;
        return this;
    }
    public withPreExpireDays(preExpireDays: number): ListVpnGatewayCertificatesRequest {
        this['pre_expire_days'] = preExpireDays;
        return this;
    }
    public set preExpireDays(preExpireDays: number  | undefined) {
        this['pre_expire_days'] = preExpireDays;
    }
    public get preExpireDays(): number | undefined {
        return this['pre_expire_days'];
    }
}