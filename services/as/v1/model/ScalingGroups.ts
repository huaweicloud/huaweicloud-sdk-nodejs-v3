import { LbaasListenersResult } from './LbaasListenersResult';
import { NetworksResult } from './NetworksResult';
import { SecurityGroupsResult } from './SecurityGroupsResult';
import { TagsSingleValue } from './TagsSingleValue';


export class ScalingGroups {
    private 'scaling_group_name'?: string;
    private 'scaling_group_id'?: string;
    private 'scaling_group_status'?: ScalingGroupsScalingGroupStatusEnum | string;
    private 'scaling_configuration_id'?: string;
    private 'scaling_configuration_name'?: string;
    private 'current_instance_number'?: number;
    private 'desire_instance_number'?: number;
    private 'min_instance_number'?: number;
    private 'max_instance_number'?: number;
    private 'cool_down_time'?: number;
    private 'lb_listener_id'?: string;
    private 'lbaas_listeners'?: Array<LbaasListenersResult>;
    private 'available_zones'?: Array<string>;
    public networks?: Array<NetworksResult>;
    private 'security_groups'?: Array<SecurityGroupsResult>;
    private 'create_time'?: Date;
    private 'vpc_id'?: string;
    public detail?: string;
    private 'is_scaling'?: boolean;
    private 'health_periodic_audit_method'?: ScalingGroupsHealthPeriodicAuditMethodEnum | string;
    private 'health_periodic_audit_time'?: number;
    private 'health_periodic_audit_grace_period'?: number;
    private 'instance_terminate_policy'?: ScalingGroupsInstanceTerminatePolicyEnum | string;
    public notifications?: Array<string>;
    private 'delete_publicip'?: boolean;
    private 'delete_volume'?: boolean;
    private 'cloud_location_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'activity_type'?: string;
    private 'multi_az_priority_policy'?: string;
    private 'iam_agency_name'?: string;
    public description?: string;
    public tags?: Array<TagsSingleValue>;
    public constructor() { 
    }
    public withScalingGroupName(scalingGroupName: string): ScalingGroups {
        this['scaling_group_name'] = scalingGroupName;
        return this;
    }
    public set scalingGroupName(scalingGroupName: string  | undefined) {
        this['scaling_group_name'] = scalingGroupName;
    }
    public get scalingGroupName(): string | undefined {
        return this['scaling_group_name'];
    }
    public withScalingGroupId(scalingGroupId: string): ScalingGroups {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withScalingGroupStatus(scalingGroupStatus: ScalingGroupsScalingGroupStatusEnum | string): ScalingGroups {
        this['scaling_group_status'] = scalingGroupStatus;
        return this;
    }
    public set scalingGroupStatus(scalingGroupStatus: ScalingGroupsScalingGroupStatusEnum | string  | undefined) {
        this['scaling_group_status'] = scalingGroupStatus;
    }
    public get scalingGroupStatus(): ScalingGroupsScalingGroupStatusEnum | string | undefined {
        return this['scaling_group_status'];
    }
    public withScalingConfigurationId(scalingConfigurationId: string): ScalingGroups {
        this['scaling_configuration_id'] = scalingConfigurationId;
        return this;
    }
    public set scalingConfigurationId(scalingConfigurationId: string  | undefined) {
        this['scaling_configuration_id'] = scalingConfigurationId;
    }
    public get scalingConfigurationId(): string | undefined {
        return this['scaling_configuration_id'];
    }
    public withScalingConfigurationName(scalingConfigurationName: string): ScalingGroups {
        this['scaling_configuration_name'] = scalingConfigurationName;
        return this;
    }
    public set scalingConfigurationName(scalingConfigurationName: string  | undefined) {
        this['scaling_configuration_name'] = scalingConfigurationName;
    }
    public get scalingConfigurationName(): string | undefined {
        return this['scaling_configuration_name'];
    }
    public withCurrentInstanceNumber(currentInstanceNumber: number): ScalingGroups {
        this['current_instance_number'] = currentInstanceNumber;
        return this;
    }
    public set currentInstanceNumber(currentInstanceNumber: number  | undefined) {
        this['current_instance_number'] = currentInstanceNumber;
    }
    public get currentInstanceNumber(): number | undefined {
        return this['current_instance_number'];
    }
    public withDesireInstanceNumber(desireInstanceNumber: number): ScalingGroups {
        this['desire_instance_number'] = desireInstanceNumber;
        return this;
    }
    public set desireInstanceNumber(desireInstanceNumber: number  | undefined) {
        this['desire_instance_number'] = desireInstanceNumber;
    }
    public get desireInstanceNumber(): number | undefined {
        return this['desire_instance_number'];
    }
    public withMinInstanceNumber(minInstanceNumber: number): ScalingGroups {
        this['min_instance_number'] = minInstanceNumber;
        return this;
    }
    public set minInstanceNumber(minInstanceNumber: number  | undefined) {
        this['min_instance_number'] = minInstanceNumber;
    }
    public get minInstanceNumber(): number | undefined {
        return this['min_instance_number'];
    }
    public withMaxInstanceNumber(maxInstanceNumber: number): ScalingGroups {
        this['max_instance_number'] = maxInstanceNumber;
        return this;
    }
    public set maxInstanceNumber(maxInstanceNumber: number  | undefined) {
        this['max_instance_number'] = maxInstanceNumber;
    }
    public get maxInstanceNumber(): number | undefined {
        return this['max_instance_number'];
    }
    public withCoolDownTime(coolDownTime: number): ScalingGroups {
        this['cool_down_time'] = coolDownTime;
        return this;
    }
    public set coolDownTime(coolDownTime: number  | undefined) {
        this['cool_down_time'] = coolDownTime;
    }
    public get coolDownTime(): number | undefined {
        return this['cool_down_time'];
    }
    public withLbListenerId(lbListenerId: string): ScalingGroups {
        this['lb_listener_id'] = lbListenerId;
        return this;
    }
    public set lbListenerId(lbListenerId: string  | undefined) {
        this['lb_listener_id'] = lbListenerId;
    }
    public get lbListenerId(): string | undefined {
        return this['lb_listener_id'];
    }
    public withLbaasListeners(lbaasListeners: Array<LbaasListenersResult>): ScalingGroups {
        this['lbaas_listeners'] = lbaasListeners;
        return this;
    }
    public set lbaasListeners(lbaasListeners: Array<LbaasListenersResult>  | undefined) {
        this['lbaas_listeners'] = lbaasListeners;
    }
    public get lbaasListeners(): Array<LbaasListenersResult> | undefined {
        return this['lbaas_listeners'];
    }
    public withAvailableZones(availableZones: Array<string>): ScalingGroups {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withNetworks(networks: Array<NetworksResult>): ScalingGroups {
        this['networks'] = networks;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroupsResult>): ScalingGroups {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroupsResult>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroupsResult> | undefined {
        return this['security_groups'];
    }
    public withCreateTime(createTime: Date): ScalingGroups {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withVpcId(vpcId: string): ScalingGroups {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withDetail(detail: string): ScalingGroups {
        this['detail'] = detail;
        return this;
    }
    public withIsScaling(isScaling: boolean): ScalingGroups {
        this['is_scaling'] = isScaling;
        return this;
    }
    public set isScaling(isScaling: boolean  | undefined) {
        this['is_scaling'] = isScaling;
    }
    public get isScaling(): boolean | undefined {
        return this['is_scaling'];
    }
    public withHealthPeriodicAuditMethod(healthPeriodicAuditMethod: ScalingGroupsHealthPeriodicAuditMethodEnum | string): ScalingGroups {
        this['health_periodic_audit_method'] = healthPeriodicAuditMethod;
        return this;
    }
    public set healthPeriodicAuditMethod(healthPeriodicAuditMethod: ScalingGroupsHealthPeriodicAuditMethodEnum | string  | undefined) {
        this['health_periodic_audit_method'] = healthPeriodicAuditMethod;
    }
    public get healthPeriodicAuditMethod(): ScalingGroupsHealthPeriodicAuditMethodEnum | string | undefined {
        return this['health_periodic_audit_method'];
    }
    public withHealthPeriodicAuditTime(healthPeriodicAuditTime: number): ScalingGroups {
        this['health_periodic_audit_time'] = healthPeriodicAuditTime;
        return this;
    }
    public set healthPeriodicAuditTime(healthPeriodicAuditTime: number  | undefined) {
        this['health_periodic_audit_time'] = healthPeriodicAuditTime;
    }
    public get healthPeriodicAuditTime(): number | undefined {
        return this['health_periodic_audit_time'];
    }
    public withHealthPeriodicAuditGracePeriod(healthPeriodicAuditGracePeriod: number): ScalingGroups {
        this['health_periodic_audit_grace_period'] = healthPeriodicAuditGracePeriod;
        return this;
    }
    public set healthPeriodicAuditGracePeriod(healthPeriodicAuditGracePeriod: number  | undefined) {
        this['health_periodic_audit_grace_period'] = healthPeriodicAuditGracePeriod;
    }
    public get healthPeriodicAuditGracePeriod(): number | undefined {
        return this['health_periodic_audit_grace_period'];
    }
    public withInstanceTerminatePolicy(instanceTerminatePolicy: ScalingGroupsInstanceTerminatePolicyEnum | string): ScalingGroups {
        this['instance_terminate_policy'] = instanceTerminatePolicy;
        return this;
    }
    public set instanceTerminatePolicy(instanceTerminatePolicy: ScalingGroupsInstanceTerminatePolicyEnum | string  | undefined) {
        this['instance_terminate_policy'] = instanceTerminatePolicy;
    }
    public get instanceTerminatePolicy(): ScalingGroupsInstanceTerminatePolicyEnum | string | undefined {
        return this['instance_terminate_policy'];
    }
    public withNotifications(notifications: Array<string>): ScalingGroups {
        this['notifications'] = notifications;
        return this;
    }
    public withDeletePublicip(deletePublicip: boolean): ScalingGroups {
        this['delete_publicip'] = deletePublicip;
        return this;
    }
    public set deletePublicip(deletePublicip: boolean  | undefined) {
        this['delete_publicip'] = deletePublicip;
    }
    public get deletePublicip(): boolean | undefined {
        return this['delete_publicip'];
    }
    public withDeleteVolume(deleteVolume: boolean): ScalingGroups {
        this['delete_volume'] = deleteVolume;
        return this;
    }
    public set deleteVolume(deleteVolume: boolean  | undefined) {
        this['delete_volume'] = deleteVolume;
    }
    public get deleteVolume(): boolean | undefined {
        return this['delete_volume'];
    }
    public withCloudLocationId(cloudLocationId: string): ScalingGroups {
        this['cloud_location_id'] = cloudLocationId;
        return this;
    }
    public set cloudLocationId(cloudLocationId: string  | undefined) {
        this['cloud_location_id'] = cloudLocationId;
    }
    public get cloudLocationId(): string | undefined {
        return this['cloud_location_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ScalingGroups {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withActivityType(activityType: string): ScalingGroups {
        this['activity_type'] = activityType;
        return this;
    }
    public set activityType(activityType: string  | undefined) {
        this['activity_type'] = activityType;
    }
    public get activityType(): string | undefined {
        return this['activity_type'];
    }
    public withMultiAzPriorityPolicy(multiAzPriorityPolicy: string): ScalingGroups {
        this['multi_az_priority_policy'] = multiAzPriorityPolicy;
        return this;
    }
    public set multiAzPriorityPolicy(multiAzPriorityPolicy: string  | undefined) {
        this['multi_az_priority_policy'] = multiAzPriorityPolicy;
    }
    public get multiAzPriorityPolicy(): string | undefined {
        return this['multi_az_priority_policy'];
    }
    public withIamAgencyName(iamAgencyName: string): ScalingGroups {
        this['iam_agency_name'] = iamAgencyName;
        return this;
    }
    public set iamAgencyName(iamAgencyName: string  | undefined) {
        this['iam_agency_name'] = iamAgencyName;
    }
    public get iamAgencyName(): string | undefined {
        return this['iam_agency_name'];
    }
    public withDescription(description: string): ScalingGroups {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<TagsSingleValue>): ScalingGroups {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScalingGroupsScalingGroupStatusEnum {
    INSERVICE = 'INSERVICE',
    PAUSED = 'PAUSED',
    ERROR = 'ERROR',
    DELETING = 'DELETING',
    FREEZED = 'FREEZED'
}
/**
    * @export
    * @enum {string}
    */
export enum ScalingGroupsHealthPeriodicAuditMethodEnum {
    ELB_AUDIT = 'ELB_AUDIT',
    NOVA_AUDIT = 'NOVA_AUDIT'
}
/**
    * @export
    * @enum {string}
    */
export enum ScalingGroupsInstanceTerminatePolicyEnum {
    OLD_CONFIG_OLD_INSTANCE = 'OLD_CONFIG_OLD_INSTANCE',
    OLD_CONFIG_NEW_INSTANCE = 'OLD_CONFIG_NEW_INSTANCE',
    OLD_INSTANCE = 'OLD_INSTANCE',
    NEW_INSTANCE = 'NEW_INSTANCE'
}
