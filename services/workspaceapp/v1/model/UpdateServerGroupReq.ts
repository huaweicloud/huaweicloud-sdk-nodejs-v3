import { AppTypeEnum } from './AppTypeEnum';
import { ImageTypeEnum } from './ImageTypeEnum';
import { RoutePolicy } from './RoutePolicy';
import { StorageFolderMountType } from './StorageFolderMountType';
import { VolumeType } from './VolumeType';


export class UpdateServerGroupReq {
    public name?: string;
    public description?: string;
    private 'route_policy'?: RoutePolicy;
    private 'storage_mount_policy'?: StorageFolderMountType;
    private 'image_id'?: string;
    private 'image_product_id'?: string;
    private 'image_type'?: ImageTypeEnum;
    private 'system_disk_type'?: VolumeType;
    private 'system_disk_size'?: number;
    private 'ou_name'?: string;
    private 'app_type'?: AppTypeEnum;
    private 'server_group_status'?: boolean;
    public constructor() { 
    }
    public withName(name: string): UpdateServerGroupReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateServerGroupReq {
        this['description'] = description;
        return this;
    }
    public withRoutePolicy(routePolicy: RoutePolicy): UpdateServerGroupReq {
        this['route_policy'] = routePolicy;
        return this;
    }
    public set routePolicy(routePolicy: RoutePolicy  | undefined) {
        this['route_policy'] = routePolicy;
    }
    public get routePolicy(): RoutePolicy | undefined {
        return this['route_policy'];
    }
    public withStorageMountPolicy(storageMountPolicy: StorageFolderMountType): UpdateServerGroupReq {
        this['storage_mount_policy'] = storageMountPolicy;
        return this;
    }
    public set storageMountPolicy(storageMountPolicy: StorageFolderMountType  | undefined) {
        this['storage_mount_policy'] = storageMountPolicy;
    }
    public get storageMountPolicy(): StorageFolderMountType | undefined {
        return this['storage_mount_policy'];
    }
    public withImageId(imageId: string): UpdateServerGroupReq {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageProductId(imageProductId: string): UpdateServerGroupReq {
        this['image_product_id'] = imageProductId;
        return this;
    }
    public set imageProductId(imageProductId: string  | undefined) {
        this['image_product_id'] = imageProductId;
    }
    public get imageProductId(): string | undefined {
        return this['image_product_id'];
    }
    public withImageType(imageType: ImageTypeEnum): UpdateServerGroupReq {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: ImageTypeEnum  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): ImageTypeEnum | undefined {
        return this['image_type'];
    }
    public withSystemDiskType(systemDiskType: VolumeType): UpdateServerGroupReq {
        this['system_disk_type'] = systemDiskType;
        return this;
    }
    public set systemDiskType(systemDiskType: VolumeType  | undefined) {
        this['system_disk_type'] = systemDiskType;
    }
    public get systemDiskType(): VolumeType | undefined {
        return this['system_disk_type'];
    }
    public withSystemDiskSize(systemDiskSize: number): UpdateServerGroupReq {
        this['system_disk_size'] = systemDiskSize;
        return this;
    }
    public set systemDiskSize(systemDiskSize: number  | undefined) {
        this['system_disk_size'] = systemDiskSize;
    }
    public get systemDiskSize(): number | undefined {
        return this['system_disk_size'];
    }
    public withOuName(ouName: string): UpdateServerGroupReq {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withAppType(appType: AppTypeEnum): UpdateServerGroupReq {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: AppTypeEnum  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): AppTypeEnum | undefined {
        return this['app_type'];
    }
    public withServerGroupStatus(serverGroupStatus: boolean): UpdateServerGroupReq {
        this['server_group_status'] = serverGroupStatus;
        return this;
    }
    public set serverGroupStatus(serverGroupStatus: boolean  | undefined) {
        this['server_group_status'] = serverGroupStatus;
    }
    public get serverGroupStatus(): boolean | undefined {
        return this['server_group_status'];
    }
}