import { AutoscalePolicy } from './AutoscalePolicy';
import { ProductInfo } from './ProductInfo';
import { SecurityGroupInfo } from './SecurityGroupInfo';
import { Tag } from './Tag';
import { VolumeInfo } from './VolumeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDesktopPoolDetailResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public type?: string;
    public description?: string;
    private 'created_time'?: string;
    private 'charging_mode'?: string;
    private 'desktop_count'?: number;
    private 'desktop_used'?: number;
    private 'availability_zone'?: string;
    private 'subnet_id'?: string;
    private 'subnet_ids'?: Array<string>;
    public product?: ProductInfo;
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'image_os_type'?: string;
    private 'image_os_version'?: string;
    private 'image_os_platform'?: string;
    private 'image_product_code'?: string;
    private 'root_volume'?: VolumeInfo;
    private 'data_volumes'?: Array<VolumeInfo>;
    private 'security_groups'?: Array<SecurityGroupInfo>;
    private 'disconnected_retention_period'?: number;
    private 'enable_autoscale'?: boolean;
    private 'autoscale_policy'?: AutoscalePolicy;
    public status?: string;
    private 'enterprise_project_id'?: string;
    private 'in_maintenance_mode'?: boolean;
    private 'desktop_name_policy_id'?: string;
    public tags?: Array<Tag>;
    private 'ou_name'?: string;
    private 'vpc_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDesktopPoolDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowDesktopPoolDetailResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ShowDesktopPoolDetailResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ShowDesktopPoolDetailResponse {
        this['description'] = description;
        return this;
    }
    public withCreatedTime(createdTime: string): ShowDesktopPoolDetailResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withChargingMode(chargingMode: string): ShowDesktopPoolDetailResponse {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withDesktopCount(desktopCount: number): ShowDesktopPoolDetailResponse {
        this['desktop_count'] = desktopCount;
        return this;
    }
    public set desktopCount(desktopCount: number  | undefined) {
        this['desktop_count'] = desktopCount;
    }
    public get desktopCount(): number | undefined {
        return this['desktop_count'];
    }
    public withDesktopUsed(desktopUsed: number): ShowDesktopPoolDetailResponse {
        this['desktop_used'] = desktopUsed;
        return this;
    }
    public set desktopUsed(desktopUsed: number  | undefined) {
        this['desktop_used'] = desktopUsed;
    }
    public get desktopUsed(): number | undefined {
        return this['desktop_used'];
    }
    public withAvailabilityZone(availabilityZone: string): ShowDesktopPoolDetailResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withSubnetId(subnetId: string): ShowDesktopPoolDetailResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSubnetIds(subnetIds: Array<string>): ShowDesktopPoolDetailResponse {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<string>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<string> | undefined {
        return this['subnet_ids'];
    }
    public withProduct(product: ProductInfo): ShowDesktopPoolDetailResponse {
        this['product'] = product;
        return this;
    }
    public withImageId(imageId: string): ShowDesktopPoolDetailResponse {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): ShowDesktopPoolDetailResponse {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageOsType(imageOsType: string): ShowDesktopPoolDetailResponse {
        this['image_os_type'] = imageOsType;
        return this;
    }
    public set imageOsType(imageOsType: string  | undefined) {
        this['image_os_type'] = imageOsType;
    }
    public get imageOsType(): string | undefined {
        return this['image_os_type'];
    }
    public withImageOsVersion(imageOsVersion: string): ShowDesktopPoolDetailResponse {
        this['image_os_version'] = imageOsVersion;
        return this;
    }
    public set imageOsVersion(imageOsVersion: string  | undefined) {
        this['image_os_version'] = imageOsVersion;
    }
    public get imageOsVersion(): string | undefined {
        return this['image_os_version'];
    }
    public withImageOsPlatform(imageOsPlatform: string): ShowDesktopPoolDetailResponse {
        this['image_os_platform'] = imageOsPlatform;
        return this;
    }
    public set imageOsPlatform(imageOsPlatform: string  | undefined) {
        this['image_os_platform'] = imageOsPlatform;
    }
    public get imageOsPlatform(): string | undefined {
        return this['image_os_platform'];
    }
    public withImageProductCode(imageProductCode: string): ShowDesktopPoolDetailResponse {
        this['image_product_code'] = imageProductCode;
        return this;
    }
    public set imageProductCode(imageProductCode: string  | undefined) {
        this['image_product_code'] = imageProductCode;
    }
    public get imageProductCode(): string | undefined {
        return this['image_product_code'];
    }
    public withRootVolume(rootVolume: VolumeInfo): ShowDesktopPoolDetailResponse {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: VolumeInfo  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): VolumeInfo | undefined {
        return this['root_volume'];
    }
    public withDataVolumes(dataVolumes: Array<VolumeInfo>): ShowDesktopPoolDetailResponse {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<VolumeInfo>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<VolumeInfo> | undefined {
        return this['data_volumes'];
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroupInfo>): ShowDesktopPoolDetailResponse {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroupInfo>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroupInfo> | undefined {
        return this['security_groups'];
    }
    public withDisconnectedRetentionPeriod(disconnectedRetentionPeriod: number): ShowDesktopPoolDetailResponse {
        this['disconnected_retention_period'] = disconnectedRetentionPeriod;
        return this;
    }
    public set disconnectedRetentionPeriod(disconnectedRetentionPeriod: number  | undefined) {
        this['disconnected_retention_period'] = disconnectedRetentionPeriod;
    }
    public get disconnectedRetentionPeriod(): number | undefined {
        return this['disconnected_retention_period'];
    }
    public withEnableAutoscale(enableAutoscale: boolean): ShowDesktopPoolDetailResponse {
        this['enable_autoscale'] = enableAutoscale;
        return this;
    }
    public set enableAutoscale(enableAutoscale: boolean  | undefined) {
        this['enable_autoscale'] = enableAutoscale;
    }
    public get enableAutoscale(): boolean | undefined {
        return this['enable_autoscale'];
    }
    public withAutoscalePolicy(autoscalePolicy: AutoscalePolicy): ShowDesktopPoolDetailResponse {
        this['autoscale_policy'] = autoscalePolicy;
        return this;
    }
    public set autoscalePolicy(autoscalePolicy: AutoscalePolicy  | undefined) {
        this['autoscale_policy'] = autoscalePolicy;
    }
    public get autoscalePolicy(): AutoscalePolicy | undefined {
        return this['autoscale_policy'];
    }
    public withStatus(status: string): ShowDesktopPoolDetailResponse {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDesktopPoolDetailResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withInMaintenanceMode(inMaintenanceMode: boolean): ShowDesktopPoolDetailResponse {
        this['in_maintenance_mode'] = inMaintenanceMode;
        return this;
    }
    public set inMaintenanceMode(inMaintenanceMode: boolean  | undefined) {
        this['in_maintenance_mode'] = inMaintenanceMode;
    }
    public get inMaintenanceMode(): boolean | undefined {
        return this['in_maintenance_mode'];
    }
    public withDesktopNamePolicyId(desktopNamePolicyId: string): ShowDesktopPoolDetailResponse {
        this['desktop_name_policy_id'] = desktopNamePolicyId;
        return this;
    }
    public set desktopNamePolicyId(desktopNamePolicyId: string  | undefined) {
        this['desktop_name_policy_id'] = desktopNamePolicyId;
    }
    public get desktopNamePolicyId(): string | undefined {
        return this['desktop_name_policy_id'];
    }
    public withTags(tags: Array<Tag>): ShowDesktopPoolDetailResponse {
        this['tags'] = tags;
        return this;
    }
    public withOuName(ouName: string): ShowDesktopPoolDetailResponse {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withVpcId(vpcId: string): ShowDesktopPoolDetailResponse {
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