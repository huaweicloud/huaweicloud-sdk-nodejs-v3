
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOpeningInfoResponse extends SdkResponse {
    public open?: boolean;
    private 'is_quota_exceed'?: boolean;
    private 'quota_num'?: number;
    private 'used_num'?: number;
    private 'is_charge'?: boolean;
    public constructor() { 
        super();
    }
    public withOpen(open: boolean): ShowOpeningInfoResponse {
        this['open'] = open;
        return this;
    }
    public withIsQuotaExceed(isQuotaExceed: boolean): ShowOpeningInfoResponse {
        this['is_quota_exceed'] = isQuotaExceed;
        return this;
    }
    public set isQuotaExceed(isQuotaExceed: boolean  | undefined) {
        this['is_quota_exceed'] = isQuotaExceed;
    }
    public get isQuotaExceed(): boolean | undefined {
        return this['is_quota_exceed'];
    }
    public withQuotaNum(quotaNum: number): ShowOpeningInfoResponse {
        this['quota_num'] = quotaNum;
        return this;
    }
    public set quotaNum(quotaNum: number  | undefined) {
        this['quota_num'] = quotaNum;
    }
    public get quotaNum(): number | undefined {
        return this['quota_num'];
    }
    public withUsedNum(usedNum: number): ShowOpeningInfoResponse {
        this['used_num'] = usedNum;
        return this;
    }
    public set usedNum(usedNum: number  | undefined) {
        this['used_num'] = usedNum;
    }
    public get usedNum(): number | undefined {
        return this['used_num'];
    }
    public withIsCharge(isCharge: boolean): ShowOpeningInfoResponse {
        this['is_charge'] = isCharge;
        return this;
    }
    public set isCharge(isCharge: boolean  | undefined) {
        this['is_charge'] = isCharge;
    }
    public get isCharge(): boolean | undefined {
        return this['is_charge'];
    }
}