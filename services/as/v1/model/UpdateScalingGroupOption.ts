import { LbaasListeners } from './LbaasListeners';
import { Networks } from './Networks';
import { SecurityGroup } from './SecurityGroup';


export class UpdateScalingGroupOption {
    private 'scaling_group_name'?: string;
    private 'desire_instance_number'?: number;
    private 'min_instance_number'?: number;
    private 'max_instance_number'?: number;
    private 'cool_down_time'?: number;
    private 'available_zones'?: Array<string>;
    public networks?: Array<Networks>;
    private 'security_groups'?: Array<SecurityGroup>;
    private 'lb_listener_id'?: string;
    private 'lbaas_listeners'?: Array<LbaasListeners>;
    private 'health_periodic_audit_method'?: UpdateScalingGroupOptionHealthPeriodicAuditMethodEnum | string;
    private 'health_periodic_audit_time'?: number;
    private 'health_periodic_audit_grace_period'?: number;
    private 'instance_terminate_policy'?: UpdateScalingGroupOptionInstanceTerminatePolicyEnum | string;
    private 'scaling_configuration_id'?: string;
    public notifications?: Array<string>;
    private 'delete_publicip'?: boolean;
    private 'delete_volume'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'multi_az_priority_policy'?: string;
    private 'iam_agency_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withScalingGroupName(scalingGroupName: string): UpdateScalingGroupOption {
        this['scaling_group_name'] = scalingGroupName;
        return this;
    }
    public set scalingGroupName(scalingGroupName: string  | undefined) {
        this['scaling_group_name'] = scalingGroupName;
    }
    public get scalingGroupName(): string | undefined {
        return this['scaling_group_name'];
    }
    public withDesireInstanceNumber(desireInstanceNumber: number): UpdateScalingGroupOption {
        this['desire_instance_number'] = desireInstanceNumber;
        return this;
    }
    public set desireInstanceNumber(desireInstanceNumber: number  | undefined) {
        this['desire_instance_number'] = desireInstanceNumber;
    }
    public get desireInstanceNumber(): number | undefined {
        return this['desire_instance_number'];
    }
    public withMinInstanceNumber(minInstanceNumber: number): UpdateScalingGroupOption {
        this['min_instance_number'] = minInstanceNumber;
        return this;
    }
    public set minInstanceNumber(minInstanceNumber: number  | undefined) {
        this['min_instance_number'] = minInstanceNumber;
    }
    public get minInstanceNumber(): number | undefined {
        return this['min_instance_number'];
    }
    public withMaxInstanceNumber(maxInstanceNumber: number): UpdateScalingGroupOption {
        this['max_instance_number'] = maxInstanceNumber;
        return this;
    }
    public set maxInstanceNumber(maxInstanceNumber: number  | undefined) {
        this['max_instance_number'] = maxInstanceNumber;
    }
    public get maxInstanceNumber(): number | undefined {
        return this['max_instance_number'];
    }
    public withCoolDownTime(coolDownTime: number): UpdateScalingGroupOption {
        this['cool_down_time'] = coolDownTime;
        return this;
    }
    public set coolDownTime(coolDownTime: number  | undefined) {
        this['cool_down_time'] = coolDownTime;
    }
    public get coolDownTime(): number | undefined {
        return this['cool_down_time'];
    }
    public withAvailableZones(availableZones: Array<string>): UpdateScalingGroupOption {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withNetworks(networks: Array<Networks>): UpdateScalingGroupOption {
        this['networks'] = networks;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): UpdateScalingGroupOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withLbListenerId(lbListenerId: string): UpdateScalingGroupOption {
        this['lb_listener_id'] = lbListenerId;
        return this;
    }
    public set lbListenerId(lbListenerId: string  | undefined) {
        this['lb_listener_id'] = lbListenerId;
    }
    public get lbListenerId(): string | undefined {
        return this['lb_listener_id'];
    }
    public withLbaasListeners(lbaasListeners: Array<LbaasListeners>): UpdateScalingGroupOption {
        this['lbaas_listeners'] = lbaasListeners;
        return this;
    }
    public set lbaasListeners(lbaasListeners: Array<LbaasListeners>  | undefined) {
        this['lbaas_listeners'] = lbaasListeners;
    }
    public get lbaasListeners(): Array<LbaasListeners> | undefined {
        return this['lbaas_listeners'];
    }
    public withHealthPeriodicAuditMethod(healthPeriodicAuditMethod: UpdateScalingGroupOptionHealthPeriodicAuditMethodEnum | string): UpdateScalingGroupOption {
        this['health_periodic_audit_method'] = healthPeriodicAuditMethod;
        return this;
    }
    public set healthPeriodicAuditMethod(healthPeriodicAuditMethod: UpdateScalingGroupOptionHealthPeriodicAuditMethodEnum | string  | undefined) {
        this['health_periodic_audit_method'] = healthPeriodicAuditMethod;
    }
    public get healthPeriodicAuditMethod(): UpdateScalingGroupOptionHealthPeriodicAuditMethodEnum | string | undefined {
        return this['health_periodic_audit_method'];
    }
    public withHealthPeriodicAuditTime(healthPeriodicAuditTime: number): UpdateScalingGroupOption {
        this['health_periodic_audit_time'] = healthPeriodicAuditTime;
        return this;
    }
    public set healthPeriodicAuditTime(healthPeriodicAuditTime: number  | undefined) {
        this['health_periodic_audit_time'] = healthPeriodicAuditTime;
    }
    public get healthPeriodicAuditTime(): number | undefined {
        return this['health_periodic_audit_time'];
    }
    public withHealthPeriodicAuditGracePeriod(healthPeriodicAuditGracePeriod: number): UpdateScalingGroupOption {
        this['health_periodic_audit_grace_period'] = healthPeriodicAuditGracePeriod;
        return this;
    }
    public set healthPeriodicAuditGracePeriod(healthPeriodicAuditGracePeriod: number  | undefined) {
        this['health_periodic_audit_grace_period'] = healthPeriodicAuditGracePeriod;
    }
    public get healthPeriodicAuditGracePeriod(): number | undefined {
        return this['health_periodic_audit_grace_period'];
    }
    public withInstanceTerminatePolicy(instanceTerminatePolicy: UpdateScalingGroupOptionInstanceTerminatePolicyEnum | string): UpdateScalingGroupOption {
        this['instance_terminate_policy'] = instanceTerminatePolicy;
        return this;
    }
    public set instanceTerminatePolicy(instanceTerminatePolicy: UpdateScalingGroupOptionInstanceTerminatePolicyEnum | string  | undefined) {
        this['instance_terminate_policy'] = instanceTerminatePolicy;
    }
    public get instanceTerminatePolicy(): UpdateScalingGroupOptionInstanceTerminatePolicyEnum | string | undefined {
        return this['instance_terminate_policy'];
    }
    public withScalingConfigurationId(scalingConfigurationId: string): UpdateScalingGroupOption {
        this['scaling_configuration_id'] = scalingConfigurationId;
        return this;
    }
    public set scalingConfigurationId(scalingConfigurationId: string  | undefined) {
        this['scaling_configuration_id'] = scalingConfigurationId;
    }
    public get scalingConfigurationId(): string | undefined {
        return this['scaling_configuration_id'];
    }
    public withNotifications(notifications: Array<string>): UpdateScalingGroupOption {
        this['notifications'] = notifications;
        return this;
    }
    public withDeletePublicip(deletePublicip: boolean): UpdateScalingGroupOption {
        this['delete_publicip'] = deletePublicip;
        return this;
    }
    public set deletePublicip(deletePublicip: boolean  | undefined) {
        this['delete_publicip'] = deletePublicip;
    }
    public get deletePublicip(): boolean | undefined {
        return this['delete_publicip'];
    }
    public withDeleteVolume(deleteVolume: boolean): UpdateScalingGroupOption {
        this['delete_volume'] = deleteVolume;
        return this;
    }
    public set deleteVolume(deleteVolume: boolean  | undefined) {
        this['delete_volume'] = deleteVolume;
    }
    public get deleteVolume(): boolean | undefined {
        return this['delete_volume'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateScalingGroupOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withMultiAzPriorityPolicy(multiAzPriorityPolicy: string): UpdateScalingGroupOption {
        this['multi_az_priority_policy'] = multiAzPriorityPolicy;
        return this;
    }
    public set multiAzPriorityPolicy(multiAzPriorityPolicy: string  | undefined) {
        this['multi_az_priority_policy'] = multiAzPriorityPolicy;
    }
    public get multiAzPriorityPolicy(): string | undefined {
        return this['multi_az_priority_policy'];
    }
    public withIamAgencyName(iamAgencyName: string): UpdateScalingGroupOption {
        this['iam_agency_name'] = iamAgencyName;
        return this;
    }
    public set iamAgencyName(iamAgencyName: string  | undefined) {
        this['iam_agency_name'] = iamAgencyName;
    }
    public get iamAgencyName(): string | undefined {
        return this['iam_agency_name'];
    }
    public withDescription(description: string): UpdateScalingGroupOption {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateScalingGroupOptionHealthPeriodicAuditMethodEnum {
    ELB_AUDIT = 'ELB_AUDIT',
    NOVA_AUDIT = 'NOVA_AUDIT'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateScalingGroupOptionInstanceTerminatePolicyEnum {
    OLD_CONFIG_OLD_INSTANCE = 'OLD_CONFIG_OLD_INSTANCE',
    OLD_CONFIG_NEW_INSTANCE = 'OLD_CONFIG_NEW_INSTANCE',
    OLD_INSTANCE = 'OLD_INSTANCE',
    NEW_INSTANCE = 'NEW_INSTANCE'
}
