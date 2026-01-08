import { ApplySharedVpcDedicatedParam } from './ApplySharedVpcDedicatedParam';
import { Desktop } from './Desktop';
import { Eip } from './Eip';
import { Nic } from './Nic';
import { SecurityGroup } from './SecurityGroup';
import { Tag } from './Tag';
import { Volume } from './Volume';


export class CreateDesktopReq {
    private 'desktop_type'?: CreateDesktopReqDesktopTypeEnum | string;
    private 'availability_zone'?: string;
    private 'product_id'?: string;
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
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    private 'apply_shared_vpc_dedicated_param'?: ApplySharedVpcDedicatedParam;
    public eip?: Eip;
    private 'desktop_name_policy_id'?: string;
    private 'hour_package_product_id'?: string;
    private 'hour_package_offering_id'?: string;
    private 'if_mount_old_desktop_disk'?: boolean;
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
    public withTags(tags: Array<Tag>): CreateDesktopReq {
        this['tags'] = tags;
        return this;
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
    public withEip(eip: Eip): CreateDesktopReq {
        this['eip'] = eip;
        return this;
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
    public withIfMountOldDesktopDisk(ifMountOldDesktopDisk: boolean): CreateDesktopReq {
        this['if_mount_old_desktop_disk'] = ifMountOldDesktopDisk;
        return this;
    }
    public set ifMountOldDesktopDisk(ifMountOldDesktopDisk: boolean  | undefined) {
        this['if_mount_old_desktop_disk'] = ifMountOldDesktopDisk;
    }
    public get ifMountOldDesktopDisk(): boolean | undefined {
        return this['if_mount_old_desktop_disk'];
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
