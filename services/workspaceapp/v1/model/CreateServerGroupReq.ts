import { AppTypeEnum } from './AppTypeEnum';
import { ExtraSessionTypeEnum } from './ExtraSessionTypeEnum';
import { ImageTypeEnum } from './ImageTypeEnum';
import { IpVirtual } from './IpVirtual';
import { OsTypeEnum } from './OsTypeEnum';
import { RoutePolicy } from './RoutePolicy';
import { TmsTag } from './TmsTag';
import { VolumeType } from './VolumeType';


export class CreateServerGroupReq {
    public name?: string;
    private 'image_id'?: string;
    private 'image_product_id'?: string;
    private 'image_type'?: ImageTypeEnum;
    private 'os_type'?: OsTypeEnum;
    public description?: string;
    private 'route_policy'?: RoutePolicy;
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'system_disk_type'?: VolumeType;
    private 'system_disk_size'?: number;
    private 'ou_name'?: string;
    private 'cluster_id'?: string;
    private 'availability_zone'?: string;
    private 'ip_virtual'?: IpVirtual;
    private 'is_vdi'?: boolean;
    private 'app_type'?: AppTypeEnum;
    private 'extra_session_type'?: ExtraSessionTypeEnum;
    private 'extra_session_size'?: number;
    public tags?: Array<TmsTag>;
    private 'enterprise_project_id'?: string;
    private 'primary_server_group_id'?: string;
    private 'server_group_status'?: boolean;
    public constructor(name?: string, imageId?: string, imageType?: ImageTypeEnum, osType?: OsTypeEnum, productId?: string, vpcId?: string, subnetId?: string, systemDiskType?: VolumeType, systemDiskSize?: number) { 
        this['name'] = name;
        this['image_id'] = imageId;
        this['image_type'] = imageType;
        this['os_type'] = osType;
        this['product_id'] = productId;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['system_disk_type'] = systemDiskType;
        this['system_disk_size'] = systemDiskSize;
    }
    public withName(name: string): CreateServerGroupReq {
        this['name'] = name;
        return this;
    }
    public withImageId(imageId: string): CreateServerGroupReq {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageProductId(imageProductId: string): CreateServerGroupReq {
        this['image_product_id'] = imageProductId;
        return this;
    }
    public set imageProductId(imageProductId: string  | undefined) {
        this['image_product_id'] = imageProductId;
    }
    public get imageProductId(): string | undefined {
        return this['image_product_id'];
    }
    public withImageType(imageType: ImageTypeEnum): CreateServerGroupReq {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: ImageTypeEnum  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): ImageTypeEnum | undefined {
        return this['image_type'];
    }
    public withOsType(osType: OsTypeEnum): CreateServerGroupReq {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: OsTypeEnum  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): OsTypeEnum | undefined {
        return this['os_type'];
    }
    public withDescription(description: string): CreateServerGroupReq {
        this['description'] = description;
        return this;
    }
    public withRoutePolicy(routePolicy: RoutePolicy): CreateServerGroupReq {
        this['route_policy'] = routePolicy;
        return this;
    }
    public set routePolicy(routePolicy: RoutePolicy  | undefined) {
        this['route_policy'] = routePolicy;
    }
    public get routePolicy(): RoutePolicy | undefined {
        return this['route_policy'];
    }
    public withProductId(productId: string): CreateServerGroupReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): CreateServerGroupReq {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withVpcId(vpcId: string): CreateServerGroupReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateServerGroupReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSystemDiskType(systemDiskType: VolumeType): CreateServerGroupReq {
        this['system_disk_type'] = systemDiskType;
        return this;
    }
    public set systemDiskType(systemDiskType: VolumeType  | undefined) {
        this['system_disk_type'] = systemDiskType;
    }
    public get systemDiskType(): VolumeType | undefined {
        return this['system_disk_type'];
    }
    public withSystemDiskSize(systemDiskSize: number): CreateServerGroupReq {
        this['system_disk_size'] = systemDiskSize;
        return this;
    }
    public set systemDiskSize(systemDiskSize: number  | undefined) {
        this['system_disk_size'] = systemDiskSize;
    }
    public get systemDiskSize(): number | undefined {
        return this['system_disk_size'];
    }
    public withOuName(ouName: string): CreateServerGroupReq {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withClusterId(clusterId: string): CreateServerGroupReq {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAvailabilityZone(availabilityZone: string): CreateServerGroupReq {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withIpVirtual(ipVirtual: IpVirtual): CreateServerGroupReq {
        this['ip_virtual'] = ipVirtual;
        return this;
    }
    public set ipVirtual(ipVirtual: IpVirtual  | undefined) {
        this['ip_virtual'] = ipVirtual;
    }
    public get ipVirtual(): IpVirtual | undefined {
        return this['ip_virtual'];
    }
    public withIsVdi(isVdi: boolean): CreateServerGroupReq {
        this['is_vdi'] = isVdi;
        return this;
    }
    public set isVdi(isVdi: boolean  | undefined) {
        this['is_vdi'] = isVdi;
    }
    public get isVdi(): boolean | undefined {
        return this['is_vdi'];
    }
    public withAppType(appType: AppTypeEnum): CreateServerGroupReq {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: AppTypeEnum  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): AppTypeEnum | undefined {
        return this['app_type'];
    }
    public withExtraSessionType(extraSessionType: ExtraSessionTypeEnum): CreateServerGroupReq {
        this['extra_session_type'] = extraSessionType;
        return this;
    }
    public set extraSessionType(extraSessionType: ExtraSessionTypeEnum  | undefined) {
        this['extra_session_type'] = extraSessionType;
    }
    public get extraSessionType(): ExtraSessionTypeEnum | undefined {
        return this['extra_session_type'];
    }
    public withExtraSessionSize(extraSessionSize: number): CreateServerGroupReq {
        this['extra_session_size'] = extraSessionSize;
        return this;
    }
    public set extraSessionSize(extraSessionSize: number  | undefined) {
        this['extra_session_size'] = extraSessionSize;
    }
    public get extraSessionSize(): number | undefined {
        return this['extra_session_size'];
    }
    public withTags(tags: Array<TmsTag>): CreateServerGroupReq {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateServerGroupReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPrimaryServerGroupId(primaryServerGroupId: string): CreateServerGroupReq {
        this['primary_server_group_id'] = primaryServerGroupId;
        return this;
    }
    public set primaryServerGroupId(primaryServerGroupId: string  | undefined) {
        this['primary_server_group_id'] = primaryServerGroupId;
    }
    public get primaryServerGroupId(): string | undefined {
        return this['primary_server_group_id'];
    }
    public withServerGroupStatus(serverGroupStatus: boolean): CreateServerGroupReq {
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