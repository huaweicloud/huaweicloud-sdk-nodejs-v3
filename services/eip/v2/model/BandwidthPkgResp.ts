

export class BandwidthPkgResp {
    public resourceId: string;
    public resourceName: string;
    public processedTime: string;
    public bandwidthId: string;
    public pkgSize: number;
    private 'tenant_id'?: string | undefined;
    public billingInfo: string;
    public startTime: string;
    public endTime: string;
    public status: string;
    public constructor(resourceId?: any, resourceName?: any, processedTime?: any, bandwidthId?: any, pkgSize?: any, billingInfo?: any, startTime?: any, endTime?: any, status?: any) { 
        this['resourceId'] = resourceId;
        this['resourceName'] = resourceName;
        this['processedTime'] = processedTime;
        this['bandwidthId'] = bandwidthId;
        this['pkgSize'] = pkgSize;
        this['billingInfo'] = billingInfo;
        this['startTime'] = startTime;
        this['endTime'] = endTime;
        this['status'] = status;
    }
    public withResourceId(resourceId: string): BandwidthPkgResp {
        this['resourceId'] = resourceId;
        return this;
    }
    public withResourceName(resourceName: string): BandwidthPkgResp {
        this['resourceName'] = resourceName;
        return this;
    }
    public withProcessedTime(processedTime: string): BandwidthPkgResp {
        this['processedTime'] = processedTime;
        return this;
    }
    public withBandwidthId(bandwidthId: string): BandwidthPkgResp {
        this['bandwidthId'] = bandwidthId;
        return this;
    }
    public withPkgSize(pkgSize: number): BandwidthPkgResp {
        this['pkgSize'] = pkgSize;
        return this;
    }
    public withTenantId(tenantId: string): BandwidthPkgResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withBillingInfo(billingInfo: string): BandwidthPkgResp {
        this['billingInfo'] = billingInfo;
        return this;
    }
    public withStartTime(startTime: string): BandwidthPkgResp {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: string): BandwidthPkgResp {
        this['endTime'] = endTime;
        return this;
    }
    public withStatus(status: string): BandwidthPkgResp {
        this['status'] = status;
        return this;
    }
}