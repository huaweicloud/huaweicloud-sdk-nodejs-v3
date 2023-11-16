

export class PackageResponse {
    private 'package_id'?: string;
    private 'package_name'?: string;
    private 'region_id'?: string;
    private 'protection_type'?: number;
    private 'instance_type'?: PackageResponseInstanceTypeEnum | string;
    private 'resource_id'?: string;
    private 'count_down_code'?: string;
    private 'count_down_infos'?: string;
    private 'count_down_tips'?: string;
    private 'order_id'?: string;
    private 'subscription_id'?: string;
    private 'ip_num'?: number;
    private 'ip_num_now'?: number;
    private 'protection_num_now'?: number;
    private 'protection_num'?: number;
    private 'basic_bandwidth'?: number;
    private 'elastic_bandwidth'?: number;
    private 'service_bandwidth'?: number;
    private 'clean_bandwidth'?: number;
    private 'policy_num'?: number;
    private 'is_old'?: boolean;
    private 'new_flag'?: boolean;
    private 'create_time'?: number;
    public constructor(packageId?: string, packageName?: string, regionId?: string, protectionType?: number, instanceType?: string, resourceId?: string, policyNum?: number, createTime?: number) { 
        this['package_id'] = packageId;
        this['package_name'] = packageName;
        this['region_id'] = regionId;
        this['protection_type'] = protectionType;
        this['instance_type'] = instanceType;
        this['resource_id'] = resourceId;
        this['policy_num'] = policyNum;
        this['create_time'] = createTime;
    }
    public withPackageId(packageId: string): PackageResponse {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withPackageName(packageName: string): PackageResponse {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withRegionId(regionId: string): PackageResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProtectionType(protectionType: number): PackageResponse {
        this['protection_type'] = protectionType;
        return this;
    }
    public set protectionType(protectionType: number  | undefined) {
        this['protection_type'] = protectionType;
    }
    public get protectionType(): number | undefined {
        return this['protection_type'];
    }
    public withInstanceType(instanceType: PackageResponseInstanceTypeEnum | string): PackageResponse {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: PackageResponseInstanceTypeEnum | string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): PackageResponseInstanceTypeEnum | string | undefined {
        return this['instance_type'];
    }
    public withResourceId(resourceId: string): PackageResponse {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withCountDownCode(countDownCode: string): PackageResponse {
        this['count_down_code'] = countDownCode;
        return this;
    }
    public set countDownCode(countDownCode: string  | undefined) {
        this['count_down_code'] = countDownCode;
    }
    public get countDownCode(): string | undefined {
        return this['count_down_code'];
    }
    public withCountDownInfos(countDownInfos: string): PackageResponse {
        this['count_down_infos'] = countDownInfos;
        return this;
    }
    public set countDownInfos(countDownInfos: string  | undefined) {
        this['count_down_infos'] = countDownInfos;
    }
    public get countDownInfos(): string | undefined {
        return this['count_down_infos'];
    }
    public withCountDownTips(countDownTips: string): PackageResponse {
        this['count_down_tips'] = countDownTips;
        return this;
    }
    public set countDownTips(countDownTips: string  | undefined) {
        this['count_down_tips'] = countDownTips;
    }
    public get countDownTips(): string | undefined {
        return this['count_down_tips'];
    }
    public withOrderId(orderId: string): PackageResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withSubscriptionId(subscriptionId: string): PackageResponse {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withIpNum(ipNum: number): PackageResponse {
        this['ip_num'] = ipNum;
        return this;
    }
    public set ipNum(ipNum: number  | undefined) {
        this['ip_num'] = ipNum;
    }
    public get ipNum(): number | undefined {
        return this['ip_num'];
    }
    public withIpNumNow(ipNumNow: number): PackageResponse {
        this['ip_num_now'] = ipNumNow;
        return this;
    }
    public set ipNumNow(ipNumNow: number  | undefined) {
        this['ip_num_now'] = ipNumNow;
    }
    public get ipNumNow(): number | undefined {
        return this['ip_num_now'];
    }
    public withProtectionNumNow(protectionNumNow: number): PackageResponse {
        this['protection_num_now'] = protectionNumNow;
        return this;
    }
    public set protectionNumNow(protectionNumNow: number  | undefined) {
        this['protection_num_now'] = protectionNumNow;
    }
    public get protectionNumNow(): number | undefined {
        return this['protection_num_now'];
    }
    public withProtectionNum(protectionNum: number): PackageResponse {
        this['protection_num'] = protectionNum;
        return this;
    }
    public set protectionNum(protectionNum: number  | undefined) {
        this['protection_num'] = protectionNum;
    }
    public get protectionNum(): number | undefined {
        return this['protection_num'];
    }
    public withBasicBandwidth(basicBandwidth: number): PackageResponse {
        this['basic_bandwidth'] = basicBandwidth;
        return this;
    }
    public set basicBandwidth(basicBandwidth: number  | undefined) {
        this['basic_bandwidth'] = basicBandwidth;
    }
    public get basicBandwidth(): number | undefined {
        return this['basic_bandwidth'];
    }
    public withElasticBandwidth(elasticBandwidth: number): PackageResponse {
        this['elastic_bandwidth'] = elasticBandwidth;
        return this;
    }
    public set elasticBandwidth(elasticBandwidth: number  | undefined) {
        this['elastic_bandwidth'] = elasticBandwidth;
    }
    public get elasticBandwidth(): number | undefined {
        return this['elastic_bandwidth'];
    }
    public withServiceBandwidth(serviceBandwidth: number): PackageResponse {
        this['service_bandwidth'] = serviceBandwidth;
        return this;
    }
    public set serviceBandwidth(serviceBandwidth: number  | undefined) {
        this['service_bandwidth'] = serviceBandwidth;
    }
    public get serviceBandwidth(): number | undefined {
        return this['service_bandwidth'];
    }
    public withCleanBandwidth(cleanBandwidth: number): PackageResponse {
        this['clean_bandwidth'] = cleanBandwidth;
        return this;
    }
    public set cleanBandwidth(cleanBandwidth: number  | undefined) {
        this['clean_bandwidth'] = cleanBandwidth;
    }
    public get cleanBandwidth(): number | undefined {
        return this['clean_bandwidth'];
    }
    public withPolicyNum(policyNum: number): PackageResponse {
        this['policy_num'] = policyNum;
        return this;
    }
    public set policyNum(policyNum: number  | undefined) {
        this['policy_num'] = policyNum;
    }
    public get policyNum(): number | undefined {
        return this['policy_num'];
    }
    public withIsOld(isOld: boolean): PackageResponse {
        this['is_old'] = isOld;
        return this;
    }
    public set isOld(isOld: boolean  | undefined) {
        this['is_old'] = isOld;
    }
    public get isOld(): boolean | undefined {
        return this['is_old'];
    }
    public withNewFlag(newFlag: boolean): PackageResponse {
        this['new_flag'] = newFlag;
        return this;
    }
    public set newFlag(newFlag: boolean  | undefined) {
        this['new_flag'] = newFlag;
    }
    public get newFlag(): boolean | undefined {
        return this['new_flag'];
    }
    public withCreateTime(createTime: number): PackageResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PackageResponseInstanceTypeEnum {
    CNAD_PRO = 'cnad_pro',
    CNAD_IP = 'cnad_ip',
    CNAD_EP = 'cnad_ep',
    CNAD_FULL_HIGH = 'cnad_full_high',
    CNAD_VIC = 'cnad_vic',
    CNAD_INTL_EP = 'cnad_intl_ep'
}
