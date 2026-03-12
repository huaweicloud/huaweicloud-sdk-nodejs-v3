
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConsoleConfigResponse extends SdkResponse {
    private 'is_support_eps'?: boolean;
    private 'is_support_sm2'?: boolean;
    private 'is_support_dhsm'?: boolean;
    private 'dhsm_regions'?: Array<string>;
    private 'is_support_yearly_monthly_ca'?: boolean;
    private 'is_support_iam5'?: boolean;
    private 'is_support_ocsp'?: boolean;
    public constructor() { 
        super();
    }
    public withIsSupportEps(isSupportEps: boolean): ShowConsoleConfigResponse {
        this['is_support_eps'] = isSupportEps;
        return this;
    }
    public set isSupportEps(isSupportEps: boolean  | undefined) {
        this['is_support_eps'] = isSupportEps;
    }
    public get isSupportEps(): boolean | undefined {
        return this['is_support_eps'];
    }
    public withIsSupportSm2(isSupportSm2: boolean): ShowConsoleConfigResponse {
        this['is_support_sm2'] = isSupportSm2;
        return this;
    }
    public set isSupportSm2(isSupportSm2: boolean  | undefined) {
        this['is_support_sm2'] = isSupportSm2;
    }
    public get isSupportSm2(): boolean | undefined {
        return this['is_support_sm2'];
    }
    public withIsSupportDhsm(isSupportDhsm: boolean): ShowConsoleConfigResponse {
        this['is_support_dhsm'] = isSupportDhsm;
        return this;
    }
    public set isSupportDhsm(isSupportDhsm: boolean  | undefined) {
        this['is_support_dhsm'] = isSupportDhsm;
    }
    public get isSupportDhsm(): boolean | undefined {
        return this['is_support_dhsm'];
    }
    public withDhsmRegions(dhsmRegions: Array<string>): ShowConsoleConfigResponse {
        this['dhsm_regions'] = dhsmRegions;
        return this;
    }
    public set dhsmRegions(dhsmRegions: Array<string>  | undefined) {
        this['dhsm_regions'] = dhsmRegions;
    }
    public get dhsmRegions(): Array<string> | undefined {
        return this['dhsm_regions'];
    }
    public withIsSupportYearlyMonthlyCa(isSupportYearlyMonthlyCa: boolean): ShowConsoleConfigResponse {
        this['is_support_yearly_monthly_ca'] = isSupportYearlyMonthlyCa;
        return this;
    }
    public set isSupportYearlyMonthlyCa(isSupportYearlyMonthlyCa: boolean  | undefined) {
        this['is_support_yearly_monthly_ca'] = isSupportYearlyMonthlyCa;
    }
    public get isSupportYearlyMonthlyCa(): boolean | undefined {
        return this['is_support_yearly_monthly_ca'];
    }
    public withIsSupportIam5(isSupportIam5: boolean): ShowConsoleConfigResponse {
        this['is_support_iam5'] = isSupportIam5;
        return this;
    }
    public set isSupportIam5(isSupportIam5: boolean  | undefined) {
        this['is_support_iam5'] = isSupportIam5;
    }
    public get isSupportIam5(): boolean | undefined {
        return this['is_support_iam5'];
    }
    public withIsSupportOcsp(isSupportOcsp: boolean): ShowConsoleConfigResponse {
        this['is_support_ocsp'] = isSupportOcsp;
        return this;
    }
    public set isSupportOcsp(isSupportOcsp: boolean  | undefined) {
        this['is_support_ocsp'] = isSupportOcsp;
    }
    public get isSupportOcsp(): boolean | undefined {
        return this['is_support_ocsp'];
    }
}