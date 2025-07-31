
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAntivirusFreeQuotaResponse extends SdkResponse {
    private 'free_quota'?: number;
    private 'occupied_free_quota'?: number;
    private 'antivirus_already_given'?: boolean;
    private 'antivirus_free_quota'?: number;
    private 'report_already_given'?: boolean;
    private 'report_free_quota'?: number;
    public constructor() { 
        super();
    }
    public withFreeQuota(freeQuota: number): ShowAntivirusFreeQuotaResponse {
        this['free_quota'] = freeQuota;
        return this;
    }
    public set freeQuota(freeQuota: number  | undefined) {
        this['free_quota'] = freeQuota;
    }
    public get freeQuota(): number | undefined {
        return this['free_quota'];
    }
    public withOccupiedFreeQuota(occupiedFreeQuota: number): ShowAntivirusFreeQuotaResponse {
        this['occupied_free_quota'] = occupiedFreeQuota;
        return this;
    }
    public set occupiedFreeQuota(occupiedFreeQuota: number  | undefined) {
        this['occupied_free_quota'] = occupiedFreeQuota;
    }
    public get occupiedFreeQuota(): number | undefined {
        return this['occupied_free_quota'];
    }
    public withAntivirusAlreadyGiven(antivirusAlreadyGiven: boolean): ShowAntivirusFreeQuotaResponse {
        this['antivirus_already_given'] = antivirusAlreadyGiven;
        return this;
    }
    public set antivirusAlreadyGiven(antivirusAlreadyGiven: boolean  | undefined) {
        this['antivirus_already_given'] = antivirusAlreadyGiven;
    }
    public get antivirusAlreadyGiven(): boolean | undefined {
        return this['antivirus_already_given'];
    }
    public withAntivirusFreeQuota(antivirusFreeQuota: number): ShowAntivirusFreeQuotaResponse {
        this['antivirus_free_quota'] = antivirusFreeQuota;
        return this;
    }
    public set antivirusFreeQuota(antivirusFreeQuota: number  | undefined) {
        this['antivirus_free_quota'] = antivirusFreeQuota;
    }
    public get antivirusFreeQuota(): number | undefined {
        return this['antivirus_free_quota'];
    }
    public withReportAlreadyGiven(reportAlreadyGiven: boolean): ShowAntivirusFreeQuotaResponse {
        this['report_already_given'] = reportAlreadyGiven;
        return this;
    }
    public set reportAlreadyGiven(reportAlreadyGiven: boolean  | undefined) {
        this['report_already_given'] = reportAlreadyGiven;
    }
    public get reportAlreadyGiven(): boolean | undefined {
        return this['report_already_given'];
    }
    public withReportFreeQuota(reportFreeQuota: number): ShowAntivirusFreeQuotaResponse {
        this['report_free_quota'] = reportFreeQuota;
        return this;
    }
    public set reportFreeQuota(reportFreeQuota: number  | undefined) {
        this['report_free_quota'] = reportFreeQuota;
    }
    public get reportFreeQuota(): number | undefined {
        return this['report_free_quota'];
    }
}