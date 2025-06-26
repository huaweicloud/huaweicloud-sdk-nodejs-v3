import { AppTypeEnum } from './AppTypeEnum';
import { BaseServerGroup } from './BaseServerGroup';
import { ExtraSessionTypeEnum } from './ExtraSessionTypeEnum';
import { OsTypeEnum } from './OsTypeEnum';
import { StorageFolderMountType } from './StorageFolderMountType';
import { VolumeType } from './VolumeType';


export class ServerGroupDto {
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
    private 'app_group_count'?: number;
    public constructor() { 
    }
    public withId(id: string): ServerGroupDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServerGroupDto {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ServerGroupDto {
        this['description'] = description;
        return this;
    }
    public withImageId(imageId: string): ServerGroupDto {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withOsType(osType: OsTypeEnum): ServerGroupDto {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: OsTypeEnum  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): OsTypeEnum | undefined {
        return this['os_type'];
    }
    public withProductId(productId: string): ServerGroupDto {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withSubnetId(subnetId: string): ServerGroupDto {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSystemDiskType(systemDiskType: VolumeType): ServerGroupDto {
        this['system_disk_type'] = systemDiskType;
        return this;
    }
    public set systemDiskType(systemDiskType: VolumeType  | undefined) {
        this['system_disk_type'] = systemDiskType;
    }
    public get systemDiskType(): VolumeType | undefined {
        return this['system_disk_type'];
    }
    public withSystemDiskSize(systemDiskSize: number): ServerGroupDto {
        this['system_disk_size'] = systemDiskSize;
        return this;
    }
    public set systemDiskSize(systemDiskSize: number  | undefined) {
        this['system_disk_size'] = systemDiskSize;
    }
    public get systemDiskSize(): number | undefined {
        return this['system_disk_size'];
    }
    public withIsVdi(isVdi: boolean): ServerGroupDto {
        this['is_vdi'] = isVdi;
        return this;
    }
    public set isVdi(isVdi: boolean  | undefined) {
        this['is_vdi'] = isVdi;
    }
    public get isVdi(): boolean | undefined {
        return this['is_vdi'];
    }
    public withExtraSessionType(extraSessionType: ExtraSessionTypeEnum): ServerGroupDto {
        this['extra_session_type'] = extraSessionType;
        return this;
    }
    public set extraSessionType(extraSessionType: ExtraSessionTypeEnum  | undefined) {
        this['extra_session_type'] = extraSessionType;
    }
    public get extraSessionType(): ExtraSessionTypeEnum | undefined {
        return this['extra_session_type'];
    }
    public withExtraSessionSize(extraSessionSize: number): ServerGroupDto {
        this['extra_session_size'] = extraSessionSize;
        return this;
    }
    public set extraSessionSize(extraSessionSize: number  | undefined) {
        this['extra_session_size'] = extraSessionSize;
    }
    public get extraSessionSize(): number | undefined {
        return this['extra_session_size'];
    }
    public withAppType(appType: AppTypeEnum): ServerGroupDto {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: AppTypeEnum  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): AppTypeEnum | undefined {
        return this['app_type'];
    }
    public withCreateTime(createTime: Date): ServerGroupDto {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ServerGroupDto {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withStorageMountPolicy(storageMountPolicy: StorageFolderMountType): ServerGroupDto {
        this['storage_mount_policy'] = storageMountPolicy;
        return this;
    }
    public set storageMountPolicy(storageMountPolicy: StorageFolderMountType  | undefined) {
        this['storage_mount_policy'] = storageMountPolicy;
    }
    public get storageMountPolicy(): StorageFolderMountType | undefined {
        return this['storage_mount_policy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ServerGroupDto {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPrimaryServerGroupIds(primaryServerGroupIds: Array<string>): ServerGroupDto {
        this['primary_server_group_ids'] = primaryServerGroupIds;
        return this;
    }
    public set primaryServerGroupIds(primaryServerGroupIds: Array<string>  | undefined) {
        this['primary_server_group_ids'] = primaryServerGroupIds;
    }
    public get primaryServerGroupIds(): Array<string> | undefined {
        return this['primary_server_group_ids'];
    }
    public withSecondaryServerGroupIds(secondaryServerGroupIds: Array<string>): ServerGroupDto {
        this['secondary_server_group_ids'] = secondaryServerGroupIds;
        return this;
    }
    public set secondaryServerGroupIds(secondaryServerGroupIds: Array<string>  | undefined) {
        this['secondary_server_group_ids'] = secondaryServerGroupIds;
    }
    public get secondaryServerGroupIds(): Array<string> | undefined {
        return this['secondary_server_group_ids'];
    }
    public withServerGroupStatus(serverGroupStatus: boolean): ServerGroupDto {
        this['server_group_status'] = serverGroupStatus;
        return this;
    }
    public set serverGroupStatus(serverGroupStatus: boolean  | undefined) {
        this['server_group_status'] = serverGroupStatus;
    }
    public get serverGroupStatus(): boolean | undefined {
        return this['server_group_status'];
    }
    public withSiteType(siteType: string): ServerGroupDto {
        this['site_type'] = siteType;
        return this;
    }
    public set siteType(siteType: string  | undefined) {
        this['site_type'] = siteType;
    }
    public get siteType(): string | undefined {
        return this['site_type'];
    }
    public withSiteId(siteId: string): ServerGroupDto {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withAppGroupCount(appGroupCount: number): ServerGroupDto {
        this['app_group_count'] = appGroupCount;
        return this;
    }
    public set appGroupCount(appGroupCount: number  | undefined) {
        this['app_group_count'] = appGroupCount;
    }
    public get appGroupCount(): number | undefined {
        return this['app_group_count'];
    }
}