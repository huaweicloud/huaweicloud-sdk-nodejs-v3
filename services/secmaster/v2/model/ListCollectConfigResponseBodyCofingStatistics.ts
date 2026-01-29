

export class ListCollectConfigResponseBodyCofingStatistics {
    private 'account_num'?: number;
    private 'daily_traffic'?: number;
    private 'log_num'?: number;
    private 'product_all_num'?: number;
    private 'product_in_num'?: number;
    private 'vendor_num'?: number;
    public constructor() { 
    }
    public withAccountNum(accountNum: number): ListCollectConfigResponseBodyCofingStatistics {
        this['account_num'] = accountNum;
        return this;
    }
    public set accountNum(accountNum: number  | undefined) {
        this['account_num'] = accountNum;
    }
    public get accountNum(): number | undefined {
        return this['account_num'];
    }
    public withDailyTraffic(dailyTraffic: number): ListCollectConfigResponseBodyCofingStatistics {
        this['daily_traffic'] = dailyTraffic;
        return this;
    }
    public set dailyTraffic(dailyTraffic: number  | undefined) {
        this['daily_traffic'] = dailyTraffic;
    }
    public get dailyTraffic(): number | undefined {
        return this['daily_traffic'];
    }
    public withLogNum(logNum: number): ListCollectConfigResponseBodyCofingStatistics {
        this['log_num'] = logNum;
        return this;
    }
    public set logNum(logNum: number  | undefined) {
        this['log_num'] = logNum;
    }
    public get logNum(): number | undefined {
        return this['log_num'];
    }
    public withProductAllNum(productAllNum: number): ListCollectConfigResponseBodyCofingStatistics {
        this['product_all_num'] = productAllNum;
        return this;
    }
    public set productAllNum(productAllNum: number  | undefined) {
        this['product_all_num'] = productAllNum;
    }
    public get productAllNum(): number | undefined {
        return this['product_all_num'];
    }
    public withProductInNum(productInNum: number): ListCollectConfigResponseBodyCofingStatistics {
        this['product_in_num'] = productInNum;
        return this;
    }
    public set productInNum(productInNum: number  | undefined) {
        this['product_in_num'] = productInNum;
    }
    public get productInNum(): number | undefined {
        return this['product_in_num'];
    }
    public withVendorNum(vendorNum: number): ListCollectConfigResponseBodyCofingStatistics {
        this['vendor_num'] = vendorNum;
        return this;
    }
    public set vendorNum(vendorNum: number  | undefined) {
        this['vendor_num'] = vendorNum;
    }
    public get vendorNum(): number | undefined {
        return this['vendor_num'];
    }
}