import { AuthorizedObjects } from './AuthorizedObjects';
import { AutoscalePolicy } from './AutoscalePolicy';
import { SecurityGroupIdInfo } from './SecurityGroupIdInfo';
import { Tag } from './Tag';
import { VolumeInfo } from './VolumeInfo';


export class CreateDesktopPoolReq {
    public name?: string;
    public type?: CreateDesktopPoolReqTypeEnum | string;
    public size?: number;
    public description?: string;
    private 'availability_zone'?: string;
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    private 'image_type'?: string;
    private 'image_id'?: string;
    private 'root_volume'?: VolumeInfo;
    private 'data_volumes'?: Array<VolumeInfo>;
    private 'vpc_id'?: string;
    private 'subnet_ids'?: Array<string>;
    private 'security_groups'?: Array<SecurityGroupIdInfo>;
    private 'authorized_objects'?: Array<AuthorizedObjects>;
    private 'ou_name'?: string;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    private 'disconnected_retention_period'?: number;
    private 'enable_autoscale'?: boolean;
    private 'autoscale_policy'?: AutoscalePolicy;
    private 'desktop_name_policy_id'?: string;
    public constructor(name?: string, type?: string, size?: number, productId?: string, imageType?: string, imageId?: string, rootVolume?: VolumeInfo, subnetIds?: Array<string>) { 
        this['name'] = name;
        this['type'] = type;
        this['size'] = size;
        this['product_id'] = productId;
        this['image_type'] = imageType;
        this['image_id'] = imageId;
        this['root_volume'] = rootVolume;
        this['subnet_ids'] = subnetIds;
    }
    public withName(name: string): CreateDesktopPoolReq {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateDesktopPoolReqTypeEnum | string): CreateDesktopPoolReq {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): CreateDesktopPoolReq {
        this['size'] = size;
        return this;
    }
    public withDescription(description: string): CreateDesktopPoolReq {
        this['description'] = description;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): CreateDesktopPoolReq {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withProductId(productId: string): CreateDesktopPoolReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): CreateDesktopPoolReq {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withImageType(imageType: string): CreateDesktopPoolReq {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageId(imageId: string): CreateDesktopPoolReq {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withRootVolume(rootVolume: VolumeInfo): CreateDesktopPoolReq {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: VolumeInfo  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): VolumeInfo | undefined {
        return this['root_volume'];
    }
    public withDataVolumes(dataVolumes: Array<VolumeInfo>): CreateDesktopPoolReq {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<VolumeInfo>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<VolumeInfo> | undefined {
        return this['data_volumes'];
    }
    public withVpcId(vpcId: string): CreateDesktopPoolReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetIds(subnetIds: Array<string>): CreateDesktopPoolReq {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<string>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<string> | undefined {
        return this['subnet_ids'];
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroupIdInfo>): CreateDesktopPoolReq {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroupIdInfo>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroupIdInfo> | undefined {
        return this['security_groups'];
    }
    public withAuthorizedObjects(authorizedObjects: Array<AuthorizedObjects>): CreateDesktopPoolReq {
        this['authorized_objects'] = authorizedObjects;
        return this;
    }
    public set authorizedObjects(authorizedObjects: Array<AuthorizedObjects>  | undefined) {
        this['authorized_objects'] = authorizedObjects;
    }
    public get authorizedObjects(): Array<AuthorizedObjects> | undefined {
        return this['authorized_objects'];
    }
    public withOuName(ouName: string): CreateDesktopPoolReq {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withTags(tags: Array<Tag>): CreateDesktopPoolReq {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateDesktopPoolReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDisconnectedRetentionPeriod(disconnectedRetentionPeriod: number): CreateDesktopPoolReq {
        this['disconnected_retention_period'] = disconnectedRetentionPeriod;
        return this;
    }
    public set disconnectedRetentionPeriod(disconnectedRetentionPeriod: number  | undefined) {
        this['disconnected_retention_period'] = disconnectedRetentionPeriod;
    }
    public get disconnectedRetentionPeriod(): number | undefined {
        return this['disconnected_retention_period'];
    }
    public withEnableAutoscale(enableAutoscale: boolean): CreateDesktopPoolReq {
        this['enable_autoscale'] = enableAutoscale;
        return this;
    }
    public set enableAutoscale(enableAutoscale: boolean  | undefined) {
        this['enable_autoscale'] = enableAutoscale;
    }
    public get enableAutoscale(): boolean | undefined {
        return this['enable_autoscale'];
    }
    public withAutoscalePolicy(autoscalePolicy: AutoscalePolicy): CreateDesktopPoolReq {
        this['autoscale_policy'] = autoscalePolicy;
        return this;
    }
    public set autoscalePolicy(autoscalePolicy: AutoscalePolicy  | undefined) {
        this['autoscale_policy'] = autoscalePolicy;
    }
    public get autoscalePolicy(): AutoscalePolicy | undefined {
        return this['autoscale_policy'];
    }
    public withDesktopNamePolicyId(desktopNamePolicyId: string): CreateDesktopPoolReq {
        this['desktop_name_policy_id'] = desktopNamePolicyId;
        return this;
    }
    public set desktopNamePolicyId(desktopNamePolicyId: string  | undefined) {
        this['desktop_name_policy_id'] = desktopNamePolicyId;
    }
    public get desktopNamePolicyId(): string | undefined {
        return this['desktop_name_policy_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDesktopPoolReqTypeEnum {
    DYNAMIC = 'DYNAMIC',
    STATIC = 'STATIC'
}
