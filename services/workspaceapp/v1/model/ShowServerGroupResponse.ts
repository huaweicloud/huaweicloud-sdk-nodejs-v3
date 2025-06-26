import { AppTypeEnum } from './AppTypeEnum';
import { BaseServerGroup } from './BaseServerGroup';
import { ExtraSessionTypeEnum } from './ExtraSessionTypeEnum';
import { Flavor } from './Flavor';
import { IpVirtual } from './IpVirtual';
import { OsTypeEnum } from './OsTypeEnum';
import { ProductInfo } from './ProductInfo';
import { RoutePolicy } from './RoutePolicy';
import { ScalingPolicy } from './ScalingPolicy';
import { ServerGroup } from './ServerGroup';
import { StorageFolderMountType } from './StorageFolderMountType';
import { TmsTag } from './TmsTag';
import { VolumeType } from './VolumeType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerGroupResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'image_id'?: string;
    private 'os_type'?: OsTypeEnum;
    private 'product_id'?: string;
    private 'subnet_id'?: string;
    private 'system_disk_type'?: VolumeType;
    private 'system_disk_size'?: number;
    private 'is_vdi'?: boolean;
    private 'extra_session_type'?: ExtraSessionTypeEnum;
    private 'extra_session_size'?: number;
    private 'app_type'?: AppTypeEnum;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'storage_mount_policy'?: StorageFolderMountType;
    private 'enterprise_project_id'?: string;
    private 'primary_server_group_ids'?: Array<string>;
    private 'secondary_server_group_ids'?: Array<string>;
    private 'server_group_status'?: boolean;
    private 'site_type'?: string;
    private 'site_id'?: string;
    private 'app_server_flavor_count'?: number;
    private 'app_server_count'?: number;
    private 'app_group_count'?: number;
    private 'image_name'?: string;
    private 'product_info'?: ProductInfo;
    private 'subnet_name'?: string;
    private 'scaling_policy'?: ScalingPolicy;
    public tags?: Array<TmsTag>;
    private 'ou_name'?: string;
    public flavors?: Array<Flavor>;
    private 'project_name'?: string;
    private 'image_min_disk'?: number;
    private 'route_policy'?: RoutePolicy;
    private 'image_product_id'?: string;
    private 'image_type'?: string;
    private 'ip_virtual'?: IpVirtual;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowServerGroupResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowServerGroupResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowServerGroupResponse {
        this['description'] = description;
        return this;
    }
    public withImageId(imageId: string): ShowServerGroupResponse {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withOsType(osType: OsTypeEnum): ShowServerGroupResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: OsTypeEnum  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): OsTypeEnum | undefined {
        return this['os_type'];
    }
    public withProductId(productId: string): ShowServerGroupResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withSubnetId(subnetId: string): ShowServerGroupResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSystemDiskType(systemDiskType: VolumeType): ShowServerGroupResponse {
        this['system_disk_type'] = systemDiskType;
        return this;
    }
    public set systemDiskType(systemDiskType: VolumeType  | undefined) {
        this['system_disk_type'] = systemDiskType;
    }
    public get systemDiskType(): VolumeType | undefined {
        return this['system_disk_type'];
    }
    public withSystemDiskSize(systemDiskSize: number): ShowServerGroupResponse {
        this['system_disk_size'] = systemDiskSize;
        return this;
    }
    public set systemDiskSize(systemDiskSize: number  | undefined) {
        this['system_disk_size'] = systemDiskSize;
    }
    public get systemDiskSize(): number | undefined {
        return this['system_disk_size'];
    }
    public withIsVdi(isVdi: boolean): ShowServerGroupResponse {
        this['is_vdi'] = isVdi;
        return this;
    }
    public set isVdi(isVdi: boolean  | undefined) {
        this['is_vdi'] = isVdi;
    }
    public get isVdi(): boolean | undefined {
        return this['is_vdi'];
    }
    public withExtraSessionType(extraSessionType: ExtraSessionTypeEnum): ShowServerGroupResponse {
        this['extra_session_type'] = extraSessionType;
        return this;
    }
    public set extraSessionType(extraSessionType: ExtraSessionTypeEnum  | undefined) {
        this['extra_session_type'] = extraSessionType;
    }
    public get extraSessionType(): ExtraSessionTypeEnum | undefined {
        return this['extra_session_type'];
    }
    public withExtraSessionSize(extraSessionSize: number): ShowServerGroupResponse {
        this['extra_session_size'] = extraSessionSize;
        return this;
    }
    public set extraSessionSize(extraSessionSize: number  | undefined) {
        this['extra_session_size'] = extraSessionSize;
    }
    public get extraSessionSize(): number | undefined {
        return this['extra_session_size'];
    }
    public withAppType(appType: AppTypeEnum): ShowServerGroupResponse {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: AppTypeEnum  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): AppTypeEnum | undefined {
        return this['app_type'];
    }
    public withCreateTime(createTime: Date): ShowServerGroupResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ShowServerGroupResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withStorageMountPolicy(storageMountPolicy: StorageFolderMountType): ShowServerGroupResponse {
        this['storage_mount_policy'] = storageMountPolicy;
        return this;
    }
    public set storageMountPolicy(storageMountPolicy: StorageFolderMountType  | undefined) {
        this['storage_mount_policy'] = storageMountPolicy;
    }
    public get storageMountPolicy(): StorageFolderMountType | undefined {
        return this['storage_mount_policy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowServerGroupResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPrimaryServerGroupIds(primaryServerGroupIds: Array<string>): ShowServerGroupResponse {
        this['primary_server_group_ids'] = primaryServerGroupIds;
        return this;
    }
    public set primaryServerGroupIds(primaryServerGroupIds: Array<string>  | undefined) {
        this['primary_server_group_ids'] = primaryServerGroupIds;
    }
    public get primaryServerGroupIds(): Array<string> | undefined {
        return this['primary_server_group_ids'];
    }
    public withSecondaryServerGroupIds(secondaryServerGroupIds: Array<string>): ShowServerGroupResponse {
        this['secondary_server_group_ids'] = secondaryServerGroupIds;
        return this;
    }
    public set secondaryServerGroupIds(secondaryServerGroupIds: Array<string>  | undefined) {
        this['secondary_server_group_ids'] = secondaryServerGroupIds;
    }
    public get secondaryServerGroupIds(): Array<string> | undefined {
        return this['secondary_server_group_ids'];
    }
    public withServerGroupStatus(serverGroupStatus: boolean): ShowServerGroupResponse {
        this['server_group_status'] = serverGroupStatus;
        return this;
    }
    public set serverGroupStatus(serverGroupStatus: boolean  | undefined) {
        this['server_group_status'] = serverGroupStatus;
    }
    public get serverGroupStatus(): boolean | undefined {
        return this['server_group_status'];
    }
    public withSiteType(siteType: string): ShowServerGroupResponse {
        this['site_type'] = siteType;
        return this;
    }
    public set siteType(siteType: string  | undefined) {
        this['site_type'] = siteType;
    }
    public get siteType(): string | undefined {
        return this['site_type'];
    }
    public withSiteId(siteId: string): ShowServerGroupResponse {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withAppServerFlavorCount(appServerFlavorCount: number): ShowServerGroupResponse {
        this['app_server_flavor_count'] = appServerFlavorCount;
        return this;
    }
    public set appServerFlavorCount(appServerFlavorCount: number  | undefined) {
        this['app_server_flavor_count'] = appServerFlavorCount;
    }
    public get appServerFlavorCount(): number | undefined {
        return this['app_server_flavor_count'];
    }
    public withAppServerCount(appServerCount: number): ShowServerGroupResponse {
        this['app_server_count'] = appServerCount;
        return this;
    }
    public set appServerCount(appServerCount: number  | undefined) {
        this['app_server_count'] = appServerCount;
    }
    public get appServerCount(): number | undefined {
        return this['app_server_count'];
    }
    public withAppGroupCount(appGroupCount: number): ShowServerGroupResponse {
        this['app_group_count'] = appGroupCount;
        return this;
    }
    public set appGroupCount(appGroupCount: number  | undefined) {
        this['app_group_count'] = appGroupCount;
    }
    public get appGroupCount(): number | undefined {
        return this['app_group_count'];
    }
    public withImageName(imageName: string): ShowServerGroupResponse {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withProductInfo(productInfo: ProductInfo): ShowServerGroupResponse {
        this['product_info'] = productInfo;
        return this;
    }
    public set productInfo(productInfo: ProductInfo  | undefined) {
        this['product_info'] = productInfo;
    }
    public get productInfo(): ProductInfo | undefined {
        return this['product_info'];
    }
    public withSubnetName(subnetName: string): ShowServerGroupResponse {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withScalingPolicy(scalingPolicy: ScalingPolicy): ShowServerGroupResponse {
        this['scaling_policy'] = scalingPolicy;
        return this;
    }
    public set scalingPolicy(scalingPolicy: ScalingPolicy  | undefined) {
        this['scaling_policy'] = scalingPolicy;
    }
    public get scalingPolicy(): ScalingPolicy | undefined {
        return this['scaling_policy'];
    }
    public withTags(tags: Array<TmsTag>): ShowServerGroupResponse {
        this['tags'] = tags;
        return this;
    }
    public withOuName(ouName: string): ShowServerGroupResponse {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withFlavors(flavors: Array<Flavor>): ShowServerGroupResponse {
        this['flavors'] = flavors;
        return this;
    }
    public withProjectName(projectName: string): ShowServerGroupResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withImageMinDisk(imageMinDisk: number): ShowServerGroupResponse {
        this['image_min_disk'] = imageMinDisk;
        return this;
    }
    public set imageMinDisk(imageMinDisk: number  | undefined) {
        this['image_min_disk'] = imageMinDisk;
    }
    public get imageMinDisk(): number | undefined {
        return this['image_min_disk'];
    }
    public withRoutePolicy(routePolicy: RoutePolicy): ShowServerGroupResponse {
        this['route_policy'] = routePolicy;
        return this;
    }
    public set routePolicy(routePolicy: RoutePolicy  | undefined) {
        this['route_policy'] = routePolicy;
    }
    public get routePolicy(): RoutePolicy | undefined {
        return this['route_policy'];
    }
    public withImageProductId(imageProductId: string): ShowServerGroupResponse {
        this['image_product_id'] = imageProductId;
        return this;
    }
    public set imageProductId(imageProductId: string  | undefined) {
        this['image_product_id'] = imageProductId;
    }
    public get imageProductId(): string | undefined {
        return this['image_product_id'];
    }
    public withImageType(imageType: string): ShowServerGroupResponse {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withIpVirtual(ipVirtual: IpVirtual): ShowServerGroupResponse {
        this['ip_virtual'] = ipVirtual;
        return this;
    }
    public set ipVirtual(ipVirtual: IpVirtual  | undefined) {
        this['ip_virtual'] = ipVirtual;
    }
    public get ipVirtual(): IpVirtual | undefined {
        return this['ip_virtual'];
    }
}