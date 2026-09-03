import { RegionFailedDetail } from './RegionFailedDetail';


export class ExpandPackageRegionResp {
    public total?: number;
    private 'success_count'?: number;
    private 'failed_count'?: number;
    private 'failed_details'?: Array<RegionFailedDetail>;
    public constructor() { 
    }
    public withTotal(total: number): ExpandPackageRegionResp {
        this['total'] = total;
        return this;
    }
    public withSuccessCount(successCount: number): ExpandPackageRegionResp {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withFailedCount(failedCount: number): ExpandPackageRegionResp {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withFailedDetails(failedDetails: Array<RegionFailedDetail>): ExpandPackageRegionResp {
        this['failed_details'] = failedDetails;
        return this;
    }
    public set failedDetails(failedDetails: Array<RegionFailedDetail>  | undefined) {
        this['failed_details'] = failedDetails;
    }
    public get failedDetails(): Array<RegionFailedDetail> | undefined {
        return this['failed_details'];
    }
}