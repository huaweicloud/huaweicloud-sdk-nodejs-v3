

export class PoolAnnotationsCreation {
    private 'os.modelarts/description'?: string;
    private 'os.modelarts/billing.mode'?: string;
    private 'os.modelarts/period.num'?: string;
    private 'os.modelarts/period.type'?: string;
    private 'os.modelarts/auto.renew'?: string;
    private 'os.modelarts/auto.pay'?: string;
    private 'os.modelarts/promotion.info'?: string;
    private 'os.modelarts/service.console.url'?: string;
    private 'os.modelarts/order.id'?: string;
    public constructor() { 
    }
    public withOsModelartsDescription(osModelartsDescription: string): PoolAnnotationsCreation {
        this['os.modelarts/description'] = osModelartsDescription;
        return this;
    }
    public set osModelartsDescription(osModelartsDescription: string  | undefined) {
        this['os.modelarts/description'] = osModelartsDescription;
    }
    public get osModelartsDescription(): string | undefined {
        return this['os.modelarts/description'];
    }
    public withOsModelartsBillingMode(osModelartsBillingMode: string): PoolAnnotationsCreation {
        this['os.modelarts/billing.mode'] = osModelartsBillingMode;
        return this;
    }
    public set osModelartsBillingMode(osModelartsBillingMode: string  | undefined) {
        this['os.modelarts/billing.mode'] = osModelartsBillingMode;
    }
    public get osModelartsBillingMode(): string | undefined {
        return this['os.modelarts/billing.mode'];
    }
    public withOsModelartsPeriodNum(osModelartsPeriodNum: string): PoolAnnotationsCreation {
        this['os.modelarts/period.num'] = osModelartsPeriodNum;
        return this;
    }
    public set osModelartsPeriodNum(osModelartsPeriodNum: string  | undefined) {
        this['os.modelarts/period.num'] = osModelartsPeriodNum;
    }
    public get osModelartsPeriodNum(): string | undefined {
        return this['os.modelarts/period.num'];
    }
    public withOsModelartsPeriodType(osModelartsPeriodType: string): PoolAnnotationsCreation {
        this['os.modelarts/period.type'] = osModelartsPeriodType;
        return this;
    }
    public set osModelartsPeriodType(osModelartsPeriodType: string  | undefined) {
        this['os.modelarts/period.type'] = osModelartsPeriodType;
    }
    public get osModelartsPeriodType(): string | undefined {
        return this['os.modelarts/period.type'];
    }
    public withOsModelartsAutoRenew(osModelartsAutoRenew: string): PoolAnnotationsCreation {
        this['os.modelarts/auto.renew'] = osModelartsAutoRenew;
        return this;
    }
    public set osModelartsAutoRenew(osModelartsAutoRenew: string  | undefined) {
        this['os.modelarts/auto.renew'] = osModelartsAutoRenew;
    }
    public get osModelartsAutoRenew(): string | undefined {
        return this['os.modelarts/auto.renew'];
    }
    public withOsModelartsAutoPay(osModelartsAutoPay: string): PoolAnnotationsCreation {
        this['os.modelarts/auto.pay'] = osModelartsAutoPay;
        return this;
    }
    public set osModelartsAutoPay(osModelartsAutoPay: string  | undefined) {
        this['os.modelarts/auto.pay'] = osModelartsAutoPay;
    }
    public get osModelartsAutoPay(): string | undefined {
        return this['os.modelarts/auto.pay'];
    }
    public withOsModelartsPromotionInfo(osModelartsPromotionInfo: string): PoolAnnotationsCreation {
        this['os.modelarts/promotion.info'] = osModelartsPromotionInfo;
        return this;
    }
    public set osModelartsPromotionInfo(osModelartsPromotionInfo: string  | undefined) {
        this['os.modelarts/promotion.info'] = osModelartsPromotionInfo;
    }
    public get osModelartsPromotionInfo(): string | undefined {
        return this['os.modelarts/promotion.info'];
    }
    public withOsModelartsServiceConsoleUrl(osModelartsServiceConsoleUrl: string): PoolAnnotationsCreation {
        this['os.modelarts/service.console.url'] = osModelartsServiceConsoleUrl;
        return this;
    }
    public set osModelartsServiceConsoleUrl(osModelartsServiceConsoleUrl: string  | undefined) {
        this['os.modelarts/service.console.url'] = osModelartsServiceConsoleUrl;
    }
    public get osModelartsServiceConsoleUrl(): string | undefined {
        return this['os.modelarts/service.console.url'];
    }
    public withOsModelartsOrderId(osModelartsOrderId: string): PoolAnnotationsCreation {
        this['os.modelarts/order.id'] = osModelartsOrderId;
        return this;
    }
    public set osModelartsOrderId(osModelartsOrderId: string  | undefined) {
        this['os.modelarts/order.id'] = osModelartsOrderId;
    }
    public get osModelartsOrderId(): string | undefined {
        return this['os.modelarts/order.id'];
    }
}