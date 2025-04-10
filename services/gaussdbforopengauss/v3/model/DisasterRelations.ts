import { RegionInstanceInfo } from './RegionInstanceInfo';


export class DisasterRelations {
    private 'disaster_type'?: string;
    public name?: string;
    private 'disaster_role'?: DisasterRelationsDisasterRoleEnum | string;
    public created?: string;
    public updated?: string;
    private 'slave_region_instance_info'?: RegionInstanceInfo;
    private 'master_region_instance_info'?: RegionInstanceInfo;
    public id?: string;
    private 'synchronization_id'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_status'?: string;
    public status?: string;
    private 'precheck_failed_reason'?: string;
    public actions?: Array<string>;
    public constructor() { 
    }
    public withDisasterType(disasterType: string): DisasterRelations {
        this['disaster_type'] = disasterType;
        return this;
    }
    public set disasterType(disasterType: string  | undefined) {
        this['disaster_type'] = disasterType;
    }
    public get disasterType(): string | undefined {
        return this['disaster_type'];
    }
    public withName(name: string): DisasterRelations {
        this['name'] = name;
        return this;
    }
    public withDisasterRole(disasterRole: DisasterRelationsDisasterRoleEnum | string): DisasterRelations {
        this['disaster_role'] = disasterRole;
        return this;
    }
    public set disasterRole(disasterRole: DisasterRelationsDisasterRoleEnum | string  | undefined) {
        this['disaster_role'] = disasterRole;
    }
    public get disasterRole(): DisasterRelationsDisasterRoleEnum | string | undefined {
        return this['disaster_role'];
    }
    public withCreated(created: string): DisasterRelations {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): DisasterRelations {
        this['updated'] = updated;
        return this;
    }
    public withSlaveRegionInstanceInfo(slaveRegionInstanceInfo: RegionInstanceInfo): DisasterRelations {
        this['slave_region_instance_info'] = slaveRegionInstanceInfo;
        return this;
    }
    public set slaveRegionInstanceInfo(slaveRegionInstanceInfo: RegionInstanceInfo  | undefined) {
        this['slave_region_instance_info'] = slaveRegionInstanceInfo;
    }
    public get slaveRegionInstanceInfo(): RegionInstanceInfo | undefined {
        return this['slave_region_instance_info'];
    }
    public withMasterRegionInstanceInfo(masterRegionInstanceInfo: RegionInstanceInfo): DisasterRelations {
        this['master_region_instance_info'] = masterRegionInstanceInfo;
        return this;
    }
    public set masterRegionInstanceInfo(masterRegionInstanceInfo: RegionInstanceInfo  | undefined) {
        this['master_region_instance_info'] = masterRegionInstanceInfo;
    }
    public get masterRegionInstanceInfo(): RegionInstanceInfo | undefined {
        return this['master_region_instance_info'];
    }
    public withId(id: string): DisasterRelations {
        this['id'] = id;
        return this;
    }
    public withSynchronizationId(synchronizationId: string): DisasterRelations {
        this['synchronization_id'] = synchronizationId;
        return this;
    }
    public set synchronizationId(synchronizationId: string  | undefined) {
        this['synchronization_id'] = synchronizationId;
    }
    public get synchronizationId(): string | undefined {
        return this['synchronization_id'];
    }
    public withInstanceId(instanceId: string): DisasterRelations {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): DisasterRelations {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): DisasterRelations {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withStatus(status: string): DisasterRelations {
        this['status'] = status;
        return this;
    }
    public withPrecheckFailedReason(precheckFailedReason: string): DisasterRelations {
        this['precheck_failed_reason'] = precheckFailedReason;
        return this;
    }
    public set precheckFailedReason(precheckFailedReason: string  | undefined) {
        this['precheck_failed_reason'] = precheckFailedReason;
    }
    public get precheckFailedReason(): string | undefined {
        return this['precheck_failed_reason'];
    }
    public withActions(actions: Array<string>): DisasterRelations {
        this['actions'] = actions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DisasterRelationsDisasterRoleEnum {
    DISASTER = 'disaster',
    MASTER = 'master'
}
