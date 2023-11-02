import { TmsTagDTO } from './TmsTagDTO';


export class OrderReq {
    private 'region_id'?: string;
    private 'commodity_id'?: string;
    private 'product_id'?: string;
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    private 'security_group_id'?: string;
    private 'net_id'?: string;
    private 'instance_name'?: string;
    private 'eps_id'?: string;
    private 'is_auto_renew'?: number;
    private 'promotion_info'?: string;
    private 'extesion_package_type'?: string;
    private 'binding_instance_id'?: string;
    private 'cdm_version'?: string;
    private 'resource_spec_code'?: string;
    private 'cloud_service_type'?: string;
    private 'resource_type'?: string;
    public tags?: Array<TmsTagDTO>;
    public constructor(regionId?: string, periodType?: number, periodNum?: number, availabilityZone?: string, vpcId?: string, securityGroupId?: string, netId?: string, instanceName?: string, epsId?: string, isAutoRenew?: number, resourceSpecCode?: string) { 
        this['region_id'] = regionId;
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
        this['availability_zone'] = availabilityZone;
        this['vpc_id'] = vpcId;
        this['security_group_id'] = securityGroupId;
        this['net_id'] = netId;
        this['instance_name'] = instanceName;
        this['eps_id'] = epsId;
        this['is_auto_renew'] = isAutoRenew;
        this['resource_spec_code'] = resourceSpecCode;
    }
    public withRegionId(regionId: string): OrderReq {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withCommodityId(commodityId: string): OrderReq {
        this['commodity_id'] = commodityId;
        return this;
    }
    public set commodityId(commodityId: string  | undefined) {
        this['commodity_id'] = commodityId;
    }
    public get commodityId(): string | undefined {
        return this['commodity_id'];
    }
    public withProductId(productId: string): OrderReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withPeriodType(periodType: number): OrderReq {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): OrderReq {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withAvailabilityZone(availabilityZone: string): OrderReq {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcId(vpcId: string): OrderReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSecurityGroupId(securityGroupId: string): OrderReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withNetId(netId: string): OrderReq {
        this['net_id'] = netId;
        return this;
    }
    public set netId(netId: string  | undefined) {
        this['net_id'] = netId;
    }
    public get netId(): string | undefined {
        return this['net_id'];
    }
    public withInstanceName(instanceName: string): OrderReq {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withEpsId(epsId: string): OrderReq {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withIsAutoRenew(isAutoRenew: number): OrderReq {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withPromotionInfo(promotionInfo: string): OrderReq {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
    public withExtesionPackageType(extesionPackageType: string): OrderReq {
        this['extesion_package_type'] = extesionPackageType;
        return this;
    }
    public set extesionPackageType(extesionPackageType: string  | undefined) {
        this['extesion_package_type'] = extesionPackageType;
    }
    public get extesionPackageType(): string | undefined {
        return this['extesion_package_type'];
    }
    public withBindingInstanceId(bindingInstanceId: string): OrderReq {
        this['binding_instance_id'] = bindingInstanceId;
        return this;
    }
    public set bindingInstanceId(bindingInstanceId: string  | undefined) {
        this['binding_instance_id'] = bindingInstanceId;
    }
    public get bindingInstanceId(): string | undefined {
        return this['binding_instance_id'];
    }
    public withCdmVersion(cdmVersion: string): OrderReq {
        this['cdm_version'] = cdmVersion;
        return this;
    }
    public set cdmVersion(cdmVersion: string  | undefined) {
        this['cdm_version'] = cdmVersion;
    }
    public get cdmVersion(): string | undefined {
        return this['cdm_version'];
    }
    public withResourceSpecCode(resourceSpecCode: string): OrderReq {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withCloudServiceType(cloudServiceType: string): OrderReq {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withResourceType(resourceType: string): OrderReq {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withTags(tags: Array<TmsTagDTO>): OrderReq {
        this['tags'] = tags;
        return this;
    }
}