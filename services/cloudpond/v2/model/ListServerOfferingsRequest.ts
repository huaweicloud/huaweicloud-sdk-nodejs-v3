import { PayMode } from './PayMode';


export class ListServerOfferingsRequest {
    private 'zone_code'?: string;
    private 'pay_mode'?: Array<PayMode>;
    private 'period_num'?: Array<number>;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withZoneCode(zoneCode: string): ListServerOfferingsRequest {
        this['zone_code'] = zoneCode;
        return this;
    }
    public set zoneCode(zoneCode: string  | undefined) {
        this['zone_code'] = zoneCode;
    }
    public get zoneCode(): string | undefined {
        return this['zone_code'];
    }
    public withPayMode(payMode: Array<PayMode>): ListServerOfferingsRequest {
        this['pay_mode'] = payMode;
        return this;
    }
    public set payMode(payMode: Array<PayMode>  | undefined) {
        this['pay_mode'] = payMode;
    }
    public get payMode(): Array<PayMode> | undefined {
        return this['pay_mode'];
    }
    public withPeriodNum(periodNum: Array<number>): ListServerOfferingsRequest {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: Array<number>  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): Array<number> | undefined {
        return this['period_num'];
    }
    public withLimit(limit: number): ListServerOfferingsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListServerOfferingsRequest {
        this['marker'] = marker;
        return this;
    }
}