

export class ApigCommodityOrder {
    private 'project_id'?: string;
    private 'order_id'?: string;
    private 'region_id'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'subscription_id'?: string;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'product_id'?: string;
    private 'order_type'?: string;
    private 'charge_type'?: string;
    private 'is_auto_renew'?: number;
    public status?: number;
    private 'vpc_id'?: string;
    private 'security_group_id'?: string;
    private 'eps_id'?: string;
    private 'effective_time'?: number;
    private 'expire_days'?: string;
    private 'expire_time'?: number;
    private 'lock_check_endpoint'?: string;
    private 'create_user'?: string;
    private 'create_time'?: number;
    private 'domain_id'?: string;
    private 'is_trial_order'?: number;
    private 'work_space_mode'?: string;
    public constructor() { 
    }
    public withProjectId(projectId: string): ApigCommodityOrder {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOrderId(orderId: string): ApigCommodityOrder {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withRegionId(regionId: string): ApigCommodityOrder {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withResourceId(resourceId: string): ApigCommodityOrder {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ApigCommodityOrder {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withSubscriptionId(subscriptionId: string): ApigCommodityOrder {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withResourceType(resourceType: string): ApigCommodityOrder {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ApigCommodityOrder {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withProductId(productId: string): ApigCommodityOrder {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withOrderType(orderType: string): ApigCommodityOrder {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: string  | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType(): string | undefined {
        return this['order_type'];
    }
    public withChargeType(chargeType: string): ApigCommodityOrder {
        this['charge_type'] = chargeType;
        return this;
    }
    public set chargeType(chargeType: string  | undefined) {
        this['charge_type'] = chargeType;
    }
    public get chargeType(): string | undefined {
        return this['charge_type'];
    }
    public withIsAutoRenew(isAutoRenew: number): ApigCommodityOrder {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withStatus(status: number): ApigCommodityOrder {
        this['status'] = status;
        return this;
    }
    public withVpcId(vpcId: string): ApigCommodityOrder {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSecurityGroupId(securityGroupId: string): ApigCommodityOrder {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withEpsId(epsId: string): ApigCommodityOrder {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withEffectiveTime(effectiveTime: number): ApigCommodityOrder {
        this['effective_time'] = effectiveTime;
        return this;
    }
    public set effectiveTime(effectiveTime: number  | undefined) {
        this['effective_time'] = effectiveTime;
    }
    public get effectiveTime(): number | undefined {
        return this['effective_time'];
    }
    public withExpireDays(expireDays: string): ApigCommodityOrder {
        this['expire_days'] = expireDays;
        return this;
    }
    public set expireDays(expireDays: string  | undefined) {
        this['expire_days'] = expireDays;
    }
    public get expireDays(): string | undefined {
        return this['expire_days'];
    }
    public withExpireTime(expireTime: number): ApigCommodityOrder {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withLockCheckEndpoint(lockCheckEndpoint: string): ApigCommodityOrder {
        this['lock_check_endpoint'] = lockCheckEndpoint;
        return this;
    }
    public set lockCheckEndpoint(lockCheckEndpoint: string  | undefined) {
        this['lock_check_endpoint'] = lockCheckEndpoint;
    }
    public get lockCheckEndpoint(): string | undefined {
        return this['lock_check_endpoint'];
    }
    public withCreateUser(createUser: string): ApigCommodityOrder {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCreateTime(createTime: number): ApigCommodityOrder {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDomainId(domainId: string): ApigCommodityOrder {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIsTrialOrder(isTrialOrder: number): ApigCommodityOrder {
        this['is_trial_order'] = isTrialOrder;
        return this;
    }
    public set isTrialOrder(isTrialOrder: number  | undefined) {
        this['is_trial_order'] = isTrialOrder;
    }
    public get isTrialOrder(): number | undefined {
        return this['is_trial_order'];
    }
    public withWorkSpaceMode(workSpaceMode: string): ApigCommodityOrder {
        this['work_space_mode'] = workSpaceMode;
        return this;
    }
    public set workSpaceMode(workSpaceMode: string  | undefined) {
        this['work_space_mode'] = workSpaceMode;
    }
    public get workSpaceMode(): string | undefined {
        return this['work_space_mode'];
    }
}