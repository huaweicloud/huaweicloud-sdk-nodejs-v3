

export class PayInfoBody {
    public payModel?: number;
    public period?: number;
    public isAutoRenew?: number;
    public isAutoPay?: number;
    public constructor(payModel?: number, period?: number) { 
        this['payModel'] = payModel;
        this['period'] = period;
    }
    public withPayModel(payModel: number): PayInfoBody {
        this['payModel'] = payModel;
        return this;
    }
    public withPeriod(period: number): PayInfoBody {
        this['period'] = period;
        return this;
    }
    public withIsAutoRenew(isAutoRenew: number): PayInfoBody {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): PayInfoBody {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}