

export class BandwidthPkgResp {
    public resourceId?: string;
    public resourceName?: string;
    public processedTime?: string;
    public bandwidthId?: string;
    public pkgSize?: number;
    public tenantId?: string;
    public billingInfo?: string;
    public startTime?: string;
    public endTime?: string;
    public status?: string;
    public constructor(resourceId?: string, resourceName?: string, processedTime?: string, bandwidthId?: string, pkgSize?: number, tenantId?: string, billingInfo?: string, startTime?: string, endTime?: string, status?: string) { 
        this['resourceId'] = resourceId;
        this['resourceName'] = resourceName;
        this['processedTime'] = processedTime;
        this['bandwidthId'] = bandwidthId;
        this['pkgSize'] = pkgSize;
        this['tenantId'] = tenantId;
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
        this['tenantId'] = tenantId;
        return this;
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