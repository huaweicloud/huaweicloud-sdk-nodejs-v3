

export class PoolMetaAnnotations {
    private 'os.modelarts/description'?: string;
    private 'os.modelarts/billing.mode'?: string;
    private 'os.modelarts/period.num'?: string;
    private 'os.modelarts/period.type'?: string;
    private 'os.modelarts/auto.renew'?: string;
    private 'os.modelarts/promotion.info'?: string;
    private 'os.modelarts/service.console.url'?: string;
    private 'os.modelarts/order.id'?: string;
    private 'os.modelarts/flavor.resource.ids'?: string;
    private 'os.modelarts/tms.tags'?: string;
    private 'os.modelarts.pool/scheduler.queue.strategy'?: string;
    private 'os.modelarts.pool/subpools.count'?: string;
    private 'os.modelarts/tenant.domain.name'?: string;
    private 'os.modelarts.pool/scope.external.dependency.train'?: string;
    public constructor() { 
    }
    public withOsModelartsDescription(osModelartsDescription: string): PoolMetaAnnotations {
        this['os.modelarts/description'] = osModelartsDescription;
        return this;
    }
    public set osModelartsDescription(osModelartsDescription: string  | undefined) {
        this['os.modelarts/description'] = osModelartsDescription;
    }
    public get osModelartsDescription(): string | undefined {
        return this['os.modelarts/description'];
    }
    public withOsModelartsBillingMode(osModelartsBillingMode: string): PoolMetaAnnotations {
        this['os.modelarts/billing.mode'] = osModelartsBillingMode;
        return this;
    }
    public set osModelartsBillingMode(osModelartsBillingMode: string  | undefined) {
        this['os.modelarts/billing.mode'] = osModelartsBillingMode;
    }
    public get osModelartsBillingMode(): string | undefined {
        return this['os.modelarts/billing.mode'];
    }
    public withOsModelartsPeriodNum(osModelartsPeriodNum: string): PoolMetaAnnotations {
        this['os.modelarts/period.num'] = osModelartsPeriodNum;
        return this;
    }
    public set osModelartsPeriodNum(osModelartsPeriodNum: string  | undefined) {
        this['os.modelarts/period.num'] = osModelartsPeriodNum;
    }
    public get osModelartsPeriodNum(): string | undefined {
        return this['os.modelarts/period.num'];
    }
    public withOsModelartsPeriodType(osModelartsPeriodType: string): PoolMetaAnnotations {
        this['os.modelarts/period.type'] = osModelartsPeriodType;
        return this;
    }
    public set osModelartsPeriodType(osModelartsPeriodType: string  | undefined) {
        this['os.modelarts/period.type'] = osModelartsPeriodType;
    }
    public get osModelartsPeriodType(): string | undefined {
        return this['os.modelarts/period.type'];
    }
    public withOsModelartsAutoRenew(osModelartsAutoRenew: string): PoolMetaAnnotations {
        this['os.modelarts/auto.renew'] = osModelartsAutoRenew;
        return this;
    }
    public set osModelartsAutoRenew(osModelartsAutoRenew: string  | undefined) {
        this['os.modelarts/auto.renew'] = osModelartsAutoRenew;
    }
    public get osModelartsAutoRenew(): string | undefined {
        return this['os.modelarts/auto.renew'];
    }
    public withOsModelartsPromotionInfo(osModelartsPromotionInfo: string): PoolMetaAnnotations {
        this['os.modelarts/promotion.info'] = osModelartsPromotionInfo;
        return this;
    }
    public set osModelartsPromotionInfo(osModelartsPromotionInfo: string  | undefined) {
        this['os.modelarts/promotion.info'] = osModelartsPromotionInfo;
    }
    public get osModelartsPromotionInfo(): string | undefined {
        return this['os.modelarts/promotion.info'];
    }
    public withOsModelartsServiceConsoleUrl(osModelartsServiceConsoleUrl: string): PoolMetaAnnotations {
        this['os.modelarts/service.console.url'] = osModelartsServiceConsoleUrl;
        return this;
    }
    public set osModelartsServiceConsoleUrl(osModelartsServiceConsoleUrl: string  | undefined) {
        this['os.modelarts/service.console.url'] = osModelartsServiceConsoleUrl;
    }
    public get osModelartsServiceConsoleUrl(): string | undefined {
        return this['os.modelarts/service.console.url'];
    }
    public withOsModelartsOrderId(osModelartsOrderId: string): PoolMetaAnnotations {
        this['os.modelarts/order.id'] = osModelartsOrderId;
        return this;
    }
    public set osModelartsOrderId(osModelartsOrderId: string  | undefined) {
        this['os.modelarts/order.id'] = osModelartsOrderId;
    }
    public get osModelartsOrderId(): string | undefined {
        return this['os.modelarts/order.id'];
    }
    public withOsModelartsFlavorResourceIds(osModelartsFlavorResourceIds: string): PoolMetaAnnotations {
        this['os.modelarts/flavor.resource.ids'] = osModelartsFlavorResourceIds;
        return this;
    }
    public set osModelartsFlavorResourceIds(osModelartsFlavorResourceIds: string  | undefined) {
        this['os.modelarts/flavor.resource.ids'] = osModelartsFlavorResourceIds;
    }
    public get osModelartsFlavorResourceIds(): string | undefined {
        return this['os.modelarts/flavor.resource.ids'];
    }
    public withOsModelartsTmsTags(osModelartsTmsTags: string): PoolMetaAnnotations {
        this['os.modelarts/tms.tags'] = osModelartsTmsTags;
        return this;
    }
    public set osModelartsTmsTags(osModelartsTmsTags: string  | undefined) {
        this['os.modelarts/tms.tags'] = osModelartsTmsTags;
    }
    public get osModelartsTmsTags(): string | undefined {
        return this['os.modelarts/tms.tags'];
    }
    public withOsModelartsPoolSchedulerQueueStrategy(osModelartsPoolSchedulerQueueStrategy: string): PoolMetaAnnotations {
        this['os.modelarts.pool/scheduler.queue.strategy'] = osModelartsPoolSchedulerQueueStrategy;
        return this;
    }
    public set osModelartsPoolSchedulerQueueStrategy(osModelartsPoolSchedulerQueueStrategy: string  | undefined) {
        this['os.modelarts.pool/scheduler.queue.strategy'] = osModelartsPoolSchedulerQueueStrategy;
    }
    public get osModelartsPoolSchedulerQueueStrategy(): string | undefined {
        return this['os.modelarts.pool/scheduler.queue.strategy'];
    }
    public withOsModelartsPoolSubpoolsCount(osModelartsPoolSubpoolsCount: string): PoolMetaAnnotations {
        this['os.modelarts.pool/subpools.count'] = osModelartsPoolSubpoolsCount;
        return this;
    }
    public set osModelartsPoolSubpoolsCount(osModelartsPoolSubpoolsCount: string  | undefined) {
        this['os.modelarts.pool/subpools.count'] = osModelartsPoolSubpoolsCount;
    }
    public get osModelartsPoolSubpoolsCount(): string | undefined {
        return this['os.modelarts.pool/subpools.count'];
    }
    public withOsModelartsTenantDomainName(osModelartsTenantDomainName: string): PoolMetaAnnotations {
        this['os.modelarts/tenant.domain.name'] = osModelartsTenantDomainName;
        return this;
    }
    public set osModelartsTenantDomainName(osModelartsTenantDomainName: string  | undefined) {
        this['os.modelarts/tenant.domain.name'] = osModelartsTenantDomainName;
    }
    public get osModelartsTenantDomainName(): string | undefined {
        return this['os.modelarts/tenant.domain.name'];
    }
    public withOsModelartsPoolScopeExternalDependencyTrain(osModelartsPoolScopeExternalDependencyTrain: string): PoolMetaAnnotations {
        this['os.modelarts.pool/scope.external.dependency.train'] = osModelartsPoolScopeExternalDependencyTrain;
        return this;
    }
    public set osModelartsPoolScopeExternalDependencyTrain(osModelartsPoolScopeExternalDependencyTrain: string  | undefined) {
        this['os.modelarts.pool/scope.external.dependency.train'] = osModelartsPoolScopeExternalDependencyTrain;
    }
    public get osModelartsPoolScopeExternalDependencyTrain(): string | undefined {
        return this['os.modelarts.pool/scope.external.dependency.train'];
    }
}