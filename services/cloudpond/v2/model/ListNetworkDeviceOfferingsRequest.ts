import { PayMode } from './PayMode';


export class ListNetworkDeviceOfferingsRequest {
    private 'zone_code'?: string;
    private 'storage_type'?: Array<string>;
    private 'pay_mode'?: Array<PayMode>;
    private 'period_num'?: Array<number>;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withZoneCode(zoneCode: string): ListNetworkDeviceOfferingsRequest {
        this['zone_code'] = zoneCode;
        return this;
    }
    public set zoneCode(zoneCode: string  | undefined) {
        this['zone_code'] = zoneCode;
    }
    public get zoneCode(): string | undefined {
        return this['zone_code'];
    }
    public withStorageType(storageType: Array<string>): ListNetworkDeviceOfferingsRequest {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: Array<string>  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): Array<string> | undefined {
        return this['storage_type'];
    }
    public withPayMode(payMode: Array<PayMode>): ListNetworkDeviceOfferingsRequest {
        this['pay_mode'] = payMode;
        return this;
    }
    public set payMode(payMode: Array<PayMode>  | undefined) {
        this['pay_mode'] = payMode;
    }
    public get payMode(): Array<PayMode> | undefined {
        return this['pay_mode'];
    }
    public withPeriodNum(periodNum: Array<number>): ListNetworkDeviceOfferingsRequest {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: Array<number>  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): Array<number> | undefined {
        return this['period_num'];
    }
    public withLimit(limit: number): ListNetworkDeviceOfferingsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListNetworkDeviceOfferingsRequest {
        this['marker'] = marker;
        return this;
    }
}