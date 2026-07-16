

export class PatchNodePoolAnnotations {
    private 'os.modelarts/billing.mode'?: string;
    private 'os.modelarts/period.num'?: string;
    private 'os.modelarts/period.type'?: string;
    private 'os.modelarts/auto.renew'?: string;
    private 'os.modelarts/promotion.info'?: string;
    private 'os.modelarts/service.console.url'?: string;
    private 'os.modelarts/order.id'?: string;
    public constructor() { 
    }
    public withOsModelartsBillingMode(osModelartsBillingMode: string): PatchNodePoolAnnotations {
        this['os.modelarts/billing.mode'] = osModelartsBillingMode;
        return this;
    }
    public set osModelartsBillingMode(osModelartsBillingMode: string  | undefined) {
        this['os.modelarts/billing.mode'] = osModelartsBillingMode;
    }
    public get osModelartsBillingMode(): string | undefined {
        return this['os.modelarts/billing.mode'];
    }
    public withOsModelartsPeriodNum(osModelartsPeriodNum: string): PatchNodePoolAnnotations {
        this['os.modelarts/period.num'] = osModelartsPeriodNum;
        return this;
    }
    public set osModelartsPeriodNum(osModelartsPeriodNum: string  | undefined) {
        this['os.modelarts/period.num'] = osModelartsPeriodNum;
    }
    public get osModelartsPeriodNum(): string | undefined {
        return this['os.modelarts/period.num'];
    }
    public withOsModelartsPeriodType(osModelartsPeriodType: string): PatchNodePoolAnnotations {
        this['os.modelarts/period.type'] = osModelartsPeriodType;
        return this;
    }
    public set osModelartsPeriodType(osModelartsPeriodType: string  | undefined) {
        this['os.modelarts/period.type'] = osModelartsPeriodType;
    }
    public get osModelartsPeriodType(): string | undefined {
        return this['os.modelarts/period.type'];
    }
    public withOsModelartsAutoRenew(osModelartsAutoRenew: string): PatchNodePoolAnnotations {
        this['os.modelarts/auto.renew'] = osModelartsAutoRenew;
        return this;
    }
    public set osModelartsAutoRenew(osModelartsAutoRenew: string  | undefined) {
        this['os.modelarts/auto.renew'] = osModelartsAutoRenew;
    }
    public get osModelartsAutoRenew(): string | undefined {
        return this['os.modelarts/auto.renew'];
    }
    public withOsModelartsPromotionInfo(osModelartsPromotionInfo: string): PatchNodePoolAnnotations {
        this['os.modelarts/promotion.info'] = osModelartsPromotionInfo;
        return this;
    }
    public set osModelartsPromotionInfo(osModelartsPromotionInfo: string  | undefined) {
        this['os.modelarts/promotion.info'] = osModelartsPromotionInfo;
    }
    public get osModelartsPromotionInfo(): string | undefined {
        return this['os.modelarts/promotion.info'];
    }
    public withOsModelartsServiceConsoleUrl(osModelartsServiceConsoleUrl: string): PatchNodePoolAnnotations {
        this['os.modelarts/service.console.url'] = osModelartsServiceConsoleUrl;
        return this;
    }
    public set osModelartsServiceConsoleUrl(osModelartsServiceConsoleUrl: string  | undefined) {
        this['os.modelarts/service.console.url'] = osModelartsServiceConsoleUrl;
    }
    public get osModelartsServiceConsoleUrl(): string | undefined {
        return this['os.modelarts/service.console.url'];
    }
    public withOsModelartsOrderId(osModelartsOrderId: string): PatchNodePoolAnnotations {
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