import { ImageTypeRiskInfo } from './ImageTypeRiskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImagePayPerScanStatisticsResponse extends SdkResponse {
    private 'repository_scan_num'?: number;
    private 'cicd_scan_num'?: number;
    private 'free_quota_num'?: number;
    private 'already_given'?: boolean;
    private 'image_free_quota'?: number;
    private 'high_risk'?: ImageTypeRiskInfo;
    private 'has_risk'?: ImageTypeRiskInfo;
    public total?: ImageTypeRiskInfo;
    public unscan?: ImageTypeRiskInfo;
    public constructor() { 
        super();
    }
    public withRepositoryScanNum(repositoryScanNum: number): ShowImagePayPerScanStatisticsResponse {
        this['repository_scan_num'] = repositoryScanNum;
        return this;
    }
    public set repositoryScanNum(repositoryScanNum: number  | undefined) {
        this['repository_scan_num'] = repositoryScanNum;
    }
    public get repositoryScanNum(): number | undefined {
        return this['repository_scan_num'];
    }
    public withCicdScanNum(cicdScanNum: number): ShowImagePayPerScanStatisticsResponse {
        this['cicd_scan_num'] = cicdScanNum;
        return this;
    }
    public set cicdScanNum(cicdScanNum: number  | undefined) {
        this['cicd_scan_num'] = cicdScanNum;
    }
    public get cicdScanNum(): number | undefined {
        return this['cicd_scan_num'];
    }
    public withFreeQuotaNum(freeQuotaNum: number): ShowImagePayPerScanStatisticsResponse {
        this['free_quota_num'] = freeQuotaNum;
        return this;
    }
    public set freeQuotaNum(freeQuotaNum: number  | undefined) {
        this['free_quota_num'] = freeQuotaNum;
    }
    public get freeQuotaNum(): number | undefined {
        return this['free_quota_num'];
    }
    public withAlreadyGiven(alreadyGiven: boolean): ShowImagePayPerScanStatisticsResponse {
        this['already_given'] = alreadyGiven;
        return this;
    }
    public set alreadyGiven(alreadyGiven: boolean  | undefined) {
        this['already_given'] = alreadyGiven;
    }
    public get alreadyGiven(): boolean | undefined {
        return this['already_given'];
    }
    public withImageFreeQuota(imageFreeQuota: number): ShowImagePayPerScanStatisticsResponse {
        this['image_free_quota'] = imageFreeQuota;
        return this;
    }
    public set imageFreeQuota(imageFreeQuota: number  | undefined) {
        this['image_free_quota'] = imageFreeQuota;
    }
    public get imageFreeQuota(): number | undefined {
        return this['image_free_quota'];
    }
    public withHighRisk(highRisk: ImageTypeRiskInfo): ShowImagePayPerScanStatisticsResponse {
        this['high_risk'] = highRisk;
        return this;
    }
    public set highRisk(highRisk: ImageTypeRiskInfo  | undefined) {
        this['high_risk'] = highRisk;
    }
    public get highRisk(): ImageTypeRiskInfo | undefined {
        return this['high_risk'];
    }
    public withHasRisk(hasRisk: ImageTypeRiskInfo): ShowImagePayPerScanStatisticsResponse {
        this['has_risk'] = hasRisk;
        return this;
    }
    public set hasRisk(hasRisk: ImageTypeRiskInfo  | undefined) {
        this['has_risk'] = hasRisk;
    }
    public get hasRisk(): ImageTypeRiskInfo | undefined {
        return this['has_risk'];
    }
    public withTotal(total: ImageTypeRiskInfo): ShowImagePayPerScanStatisticsResponse {
        this['total'] = total;
        return this;
    }
    public withUnscan(unscan: ImageTypeRiskInfo): ShowImagePayPerScanStatisticsResponse {
        this['unscan'] = unscan;
        return this;
    }
}