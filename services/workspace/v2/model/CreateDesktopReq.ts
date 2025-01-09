import { Adn } from './Adn';
import { ApplySharedVpcDedicatedParam } from './ApplySharedVpcDedicatedParam';
import { Desktop } from './Desktop';
import { Eip } from './Eip';
import { Nic } from './Nic';
import { SecurityGroup } from './SecurityGroup';
import { Tag } from './Tag';
import { Volume } from './Volume';
import { WdhParam } from './WdhParam';


export class CreateDesktopReq {
    private 'desktop_type'?: CreateDesktopReqDesktopTypeEnum | string;
    private 'availability_zone'?: string;
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    private 'share_resource_sku'?: string;
    private 'image_type'?: string;
    private 'image_id'?: string;
    private 'root_volume'?: Volume;
    private 'data_volumes'?: Array<Volume>;
    public nics?: Array<Nic>;
    private 'security_groups'?: Array<SecurityGroup>;
    public desktops?: Array<Desktop>;
    private 'desktop_name'?: string;
    private 'desktop_ips'?: Array<string>;
    public size?: number;
    private 'email_notification'?: boolean;
    private 'enterprise_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'order_id'?: string;
    private 'ou_name'?: string;
    private 'vpc_id'?: string;
    private 'subnet_ids'?: Array<string>;
    public tags?: Array<Tag>;
    private 'scheduler_hints'?: WdhParam;
    private 'desktop_isv'?: CreateDesktopReqDesktopIsvEnum | string;
    private 'access_mode'?: CreateDesktopReqAccessModeEnum | string;
    private 'apply_shared_vpc_dedicated_param'?: ApplySharedVpcDedicatedParam;
    private 'dedicated_subnets'?: string;
    public eip?: Eip;
    public adn?: Adn;
    private 'exclusive_host_id'?: string;
    private 'desktop_name_policy_id'?: string;
    private 'hour_package_product_id'?: string;
    private 'hour_package_offering_id'?: string;
    private 'root_resource_ids'?: Array<string>;
    private 'inst_info_ids'?: Array<string>;
    public constructor(desktopType?: string, productId?: string, imageType?: string, imageId?: string, rootVolume?: Volume) { 
        this['desktop_type'] = desktopType;
        this['product_id'] = productId;
        this['image_type'] = imageType;
        this['image_id'] = imageId;
        this['root_volume'] = rootVolume;
    }
    public withDesktopType(desktopType: CreateDesktopReqDesktopTypeEnum | string): CreateDesktopReq {
        this['desktop_type'] = desktopType;
        return this;
    }
    public set desktopType(desktopType: CreateDesktopReqDesktopTypeEnum | string  | undefined) {
        this['desktop_type'] = desktopType;
    }
    public get desktopType(): CreateDesktopReqDesktopTypeEnum | string | undefined {
        return this['desktop_type'];
    }
    public withAvailabilityZone(availabilityZone: string): CreateDesktopReq {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withProductId(productId: string): CreateDesktopReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): CreateDesktopReq {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withShareResourceSku(shareResourceSku: string): CreateDesktopReq {
        this['share_resource_sku'] = shareResourceSku;
        return this;
    }
    public set shareResourceSku(shareResourceSku: string  | undefined) {
        this['share_resource_sku'] = shareResourceSku;
    }
    public get shareResourceSku(): string | undefined {
        return this['share_resource_sku'];
    }
    public withImageType(imageType: string): CreateDesktopReq {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageId(imageId: string): CreateDesktopReq {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withRootVolume(rootVolume: Volume): CreateDesktopReq {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: Volume  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): Volume | undefined {
        return this['root_volume'];
    }
    public withDataVolumes(dataVolumes: Array<Volume>): CreateDesktopReq {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<Volume>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<Volume> | undefined {
        return this['data_volumes'];
    }
    public withNics(nics: Array<Nic>): CreateDesktopReq {
        this['nics'] = nics;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): CreateDesktopReq {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withDesktops(desktops: Array<Desktop>): CreateDesktopReq {
        this['desktops'] = desktops;
        return this;
    }
    public withDesktopName(desktopName: string): CreateDesktopReq {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDesktopIps(desktopIps: Array<string>): CreateDesktopReq {
        this['desktop_ips'] = desktopIps;
        return this;
    }
    public set desktopIps(desktopIps: Array<string>  | undefined) {
        this['desktop_ips'] = desktopIps;
    }
    public get desktopIps(): Array<string> | undefined {
        return this['desktop_ips'];
    }
    public withSize(size: number): CreateDesktopReq {
        this['size'] = size;
        return this;
    }
    public withEmailNotification(emailNotification: boolean): CreateDesktopReq {
        this['email_notification'] = emailNotification;
        return this;
    }
    public set emailNotification(emailNotification: boolean  | undefined) {
        this['email_notification'] = emailNotification;
    }
    public get emailNotification(): boolean | undefined {
        return this['email_notification'];
    }
    public withEnterpriseId(enterpriseId: string): CreateDesktopReq {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateDesktopReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOrderId(orderId: string): CreateDesktopReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withOuName(ouName: string): CreateDesktopReq {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withVpcId(vpcId: string): CreateDesktopReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetIds(subnetIds: Array<string>): CreateDesktopReq {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<string>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<string> | undefined {
        return this['subnet_ids'];
    }
    public withTags(tags: Array<Tag>): CreateDesktopReq {
        this['tags'] = tags;
        return this;
    }
    public withSchedulerHints(schedulerHints: WdhParam): CreateDesktopReq {
        this['scheduler_hints'] = schedulerHints;
        return this;
    }
    public set schedulerHints(schedulerHints: WdhParam  | undefined) {
        this['scheduler_hints'] = schedulerHints;
    }
    public get schedulerHints(): WdhParam | undefined {
        return this['scheduler_hints'];
    }
    public withDesktopIsv(desktopIsv: CreateDesktopReqDesktopIsvEnum | string): CreateDesktopReq {
        this['desktop_isv'] = desktopIsv;
        return this;
    }
    public set desktopIsv(desktopIsv: CreateDesktopReqDesktopIsvEnum | string  | undefined) {
        this['desktop_isv'] = desktopIsv;
    }
    public get desktopIsv(): CreateDesktopReqDesktopIsvEnum | string | undefined {
        return this['desktop_isv'];
    }
    public withAccessMode(accessMode: CreateDesktopReqAccessModeEnum | string): CreateDesktopReq {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: CreateDesktopReqAccessModeEnum | string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): CreateDesktopReqAccessModeEnum | string | undefined {
        return this['access_mode'];
    }
    public withApplySharedVpcDedicatedParam(applySharedVpcDedicatedParam: ApplySharedVpcDedicatedParam): CreateDesktopReq {
        this['apply_shared_vpc_dedicated_param'] = applySharedVpcDedicatedParam;
        return this;
    }
    public set applySharedVpcDedicatedParam(applySharedVpcDedicatedParam: ApplySharedVpcDedicatedParam  | undefined) {
        this['apply_shared_vpc_dedicated_param'] = applySharedVpcDedicatedParam;
    }
    public get applySharedVpcDedicatedParam(): ApplySharedVpcDedicatedParam | undefined {
        return this['apply_shared_vpc_dedicated_param'];
    }
    public withDedicatedSubnets(dedicatedSubnets: string): CreateDesktopReq {
        this['dedicated_subnets'] = dedicatedSubnets;
        return this;
    }
    public set dedicatedSubnets(dedicatedSubnets: string  | undefined) {
        this['dedicated_subnets'] = dedicatedSubnets;
    }
    public get dedicatedSubnets(): string | undefined {
        return this['dedicated_subnets'];
    }
    public withEip(eip: Eip): CreateDesktopReq {
        this['eip'] = eip;
        return this;
    }
    public withAdn(adn: Adn): CreateDesktopReq {
        this['adn'] = adn;
        return this;
    }
    public withExclusiveHostId(exclusiveHostId: string): CreateDesktopReq {
        this['exclusive_host_id'] = exclusiveHostId;
        return this;
    }
    public set exclusiveHostId(exclusiveHostId: string  | undefined) {
        this['exclusive_host_id'] = exclusiveHostId;
    }
    public get exclusiveHostId(): string | undefined {
        return this['exclusive_host_id'];
    }
    public withDesktopNamePolicyId(desktopNamePolicyId: string): CreateDesktopReq {
        this['desktop_name_policy_id'] = desktopNamePolicyId;
        return this;
    }
    public set desktopNamePolicyId(desktopNamePolicyId: string  | undefined) {
        this['desktop_name_policy_id'] = desktopNamePolicyId;
    }
    public get desktopNamePolicyId(): string | undefined {
        return this['desktop_name_policy_id'];
    }
    public withHourPackageProductId(hourPackageProductId: string): CreateDesktopReq {
        this['hour_package_product_id'] = hourPackageProductId;
        return this;
    }
    public set hourPackageProductId(hourPackageProductId: string  | undefined) {
        this['hour_package_product_id'] = hourPackageProductId;
    }
    public get hourPackageProductId(): string | undefined {
        return this['hour_package_product_id'];
    }
    public withHourPackageOfferingId(hourPackageOfferingId: string): CreateDesktopReq {
        this['hour_package_offering_id'] = hourPackageOfferingId;
        return this;
    }
    public set hourPackageOfferingId(hourPackageOfferingId: string  | undefined) {
        this['hour_package_offering_id'] = hourPackageOfferingId;
    }
    public get hourPackageOfferingId(): string | undefined {
        return this['hour_package_offering_id'];
    }
    public withRootResourceIds(rootResourceIds: Array<string>): CreateDesktopReq {
        this['root_resource_ids'] = rootResourceIds;
        return this;
    }
    public set rootResourceIds(rootResourceIds: Array<string>  | undefined) {
        this['root_resource_ids'] = rootResourceIds;
    }
    public get rootResourceIds(): Array<string> | undefined {
        return this['root_resource_ids'];
    }
    public withInstInfoIds(instInfoIds: Array<string>): CreateDesktopReq {
        this['inst_info_ids'] = instInfoIds;
        return this;
    }
    public set instInfoIds(instInfoIds: Array<string>  | undefined) {
        this['inst_info_ids'] = instInfoIds;
    }
    public get instInfoIds(): Array<string> | undefined {
        return this['inst_info_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDesktopReqDesktopTypeEnum {
    DEDICATED = 'DEDICATED',
    SHARED = 'SHARED'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateDesktopReqDesktopIsvEnum {
    DEFAULT = 'DEFAULT',
    ONEMOBILE = 'ONEMOBILE'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateDesktopReqAccessModeEnum {
    INTERNET = 'INTERNET',
    DEDICATED = 'DEDICATED',
    BOTH = 'BOTH'
}
