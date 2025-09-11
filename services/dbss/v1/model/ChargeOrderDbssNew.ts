import { Nic } from './Nic';
import { OutsideInsConfig } from './OutsideInsConfig';
import { ProductInfoBeanNew } from './ProductInfoBeanNew';
import { PublicIp } from './PublicIp';
import { ResourceTagInfoBean } from './ResourceTagInfoBean';
import { SecurityGroup } from './SecurityGroup';


export class ChargeOrderDbssNew {
    public tags?: Array<ResourceTagInfoBean>;
    private 'asset_nums'?: number;
    private 'availability_zone'?: string;
    private 'charging_mode'?: number;
    private 'cloud_service_type'?: string;
    public comment?: string;
    private 'composite_product_id'?: string;
    private 'deploy_mode'?: string;
    private 'discount_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'flavor_ref'?: string;
    private 'hx_password'?: string;
    private 'image_business_type'?: number;
    private 'is_auto_renew'?: number;
    public name?: string;
    public nics?: Array<Nic>;
    private 'outside_ins_config'?: OutsideInsConfig;
    private 'period_num'?: number;
    private 'period_type'?: number;
    private 'product_infos'?: Array<ProductInfoBeanNew>;
    private 'promotion_activity_id'?: string;
    private 'promotion_info'?: string;
    private 'public_ip'?: PublicIp;
    private 'region_id'?: string;
    private 'security_groups'?: Array<SecurityGroup>;
    private 'subscription_num'?: number;
    private 'vpc_id'?: string;
    public constructor(assetNums?: number, availabilityZone?: string, chargingMode?: number, cloudServiceType?: string, deployMode?: string, enterpriseProjectId?: string, flavorRef?: string, hxPassword?: string, imageBusinessType?: number, isAutoRenew?: number, name?: string, nics?: Array<Nic>, periodNum?: number, periodType?: number, productInfos?: Array<ProductInfoBeanNew>, securityGroups?: Array<SecurityGroup>, subscriptionNum?: number, vpcId?: string) { 
        this['asset_nums'] = assetNums;
        this['availability_zone'] = availabilityZone;
        this['charging_mode'] = chargingMode;
        this['cloud_service_type'] = cloudServiceType;
        this['deploy_mode'] = deployMode;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['flavor_ref'] = flavorRef;
        this['hx_password'] = hxPassword;
        this['image_business_type'] = imageBusinessType;
        this['is_auto_renew'] = isAutoRenew;
        this['name'] = name;
        this['nics'] = nics;
        this['period_num'] = periodNum;
        this['period_type'] = periodType;
        this['product_infos'] = productInfos;
        this['security_groups'] = securityGroups;
        this['subscription_num'] = subscriptionNum;
        this['vpc_id'] = vpcId;
    }
    public withTags(tags: Array<ResourceTagInfoBean>): ChargeOrderDbssNew {
        this['tags'] = tags;
        return this;
    }
    public withAssetNums(assetNums: number): ChargeOrderDbssNew {
        this['asset_nums'] = assetNums;
        return this;
    }
    public set assetNums(assetNums: number  | undefined) {
        this['asset_nums'] = assetNums;
    }
    public get assetNums(): number | undefined {
        return this['asset_nums'];
    }
    public withAvailabilityZone(availabilityZone: string): ChargeOrderDbssNew {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withChargingMode(chargingMode: number): ChargeOrderDbssNew {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withCloudServiceType(cloudServiceType: string): ChargeOrderDbssNew {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withComment(comment: string): ChargeOrderDbssNew {
        this['comment'] = comment;
        return this;
    }
    public withCompositeProductId(compositeProductId: string): ChargeOrderDbssNew {
        this['composite_product_id'] = compositeProductId;
        return this;
    }
    public set compositeProductId(compositeProductId: string  | undefined) {
        this['composite_product_id'] = compositeProductId;
    }
    public get compositeProductId(): string | undefined {
        return this['composite_product_id'];
    }
    public withDeployMode(deployMode: string): ChargeOrderDbssNew {
        this['deploy_mode'] = deployMode;
        return this;
    }
    public set deployMode(deployMode: string  | undefined) {
        this['deploy_mode'] = deployMode;
    }
    public get deployMode(): string | undefined {
        return this['deploy_mode'];
    }
    public withDiscountId(discountId: string): ChargeOrderDbssNew {
        this['discount_id'] = discountId;
        return this;
    }
    public set discountId(discountId: string  | undefined) {
        this['discount_id'] = discountId;
    }
    public get discountId(): string | undefined {
        return this['discount_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChargeOrderDbssNew {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFlavorRef(flavorRef: string): ChargeOrderDbssNew {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withHxPassword(hxPassword: string): ChargeOrderDbssNew {
        this['hx_password'] = hxPassword;
        return this;
    }
    public set hxPassword(hxPassword: string  | undefined) {
        this['hx_password'] = hxPassword;
    }
    public get hxPassword(): string | undefined {
        return this['hx_password'];
    }
    public withImageBusinessType(imageBusinessType: number): ChargeOrderDbssNew {
        this['image_business_type'] = imageBusinessType;
        return this;
    }
    public set imageBusinessType(imageBusinessType: number  | undefined) {
        this['image_business_type'] = imageBusinessType;
    }
    public get imageBusinessType(): number | undefined {
        return this['image_business_type'];
    }
    public withIsAutoRenew(isAutoRenew: number): ChargeOrderDbssNew {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withName(name: string): ChargeOrderDbssNew {
        this['name'] = name;
        return this;
    }
    public withNics(nics: Array<Nic>): ChargeOrderDbssNew {
        this['nics'] = nics;
        return this;
    }
    public withOutsideInsConfig(outsideInsConfig: OutsideInsConfig): ChargeOrderDbssNew {
        this['outside_ins_config'] = outsideInsConfig;
        return this;
    }
    public set outsideInsConfig(outsideInsConfig: OutsideInsConfig  | undefined) {
        this['outside_ins_config'] = outsideInsConfig;
    }
    public get outsideInsConfig(): OutsideInsConfig | undefined {
        return this['outside_ins_config'];
    }
    public withPeriodNum(periodNum: number): ChargeOrderDbssNew {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withPeriodType(periodType: number): ChargeOrderDbssNew {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withProductInfos(productInfos: Array<ProductInfoBeanNew>): ChargeOrderDbssNew {
        this['product_infos'] = productInfos;
        return this;
    }
    public set productInfos(productInfos: Array<ProductInfoBeanNew>  | undefined) {
        this['product_infos'] = productInfos;
    }
    public get productInfos(): Array<ProductInfoBeanNew> | undefined {
        return this['product_infos'];
    }
    public withPromotionActivityId(promotionActivityId: string): ChargeOrderDbssNew {
        this['promotion_activity_id'] = promotionActivityId;
        return this;
    }
    public set promotionActivityId(promotionActivityId: string  | undefined) {
        this['promotion_activity_id'] = promotionActivityId;
    }
    public get promotionActivityId(): string | undefined {
        return this['promotion_activity_id'];
    }
    public withPromotionInfo(promotionInfo: string): ChargeOrderDbssNew {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
    public withPublicIp(publicIp: PublicIp): ChargeOrderDbssNew {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: PublicIp  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): PublicIp | undefined {
        return this['public_ip'];
    }
    public withRegionId(regionId: string): ChargeOrderDbssNew {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): ChargeOrderDbssNew {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withSubscriptionNum(subscriptionNum: number): ChargeOrderDbssNew {
        this['subscription_num'] = subscriptionNum;
        return this;
    }
    public set subscriptionNum(subscriptionNum: number  | undefined) {
        this['subscription_num'] = subscriptionNum;
    }
    public get subscriptionNum(): number | undefined {
        return this['subscription_num'];
    }
    public withVpcId(vpcId: string): ChargeOrderDbssNew {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}