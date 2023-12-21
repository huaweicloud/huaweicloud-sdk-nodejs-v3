import { InstanceDetailAzInfo } from './InstanceDetailAzInfo';
import { InstanceDetailHaInfo } from './InstanceDetailHaInfo';
import { InstanceDetailNetwork } from './InstanceDetailNetwork';
import { InstanceDetailResourceInfo } from './InstanceDetailResourceInfo';
import { InstanceDetailStatusInfo } from './InstanceDetailStatusInfo';


export class InstanceDetail {
    public name?: string;
    private 'server_id'?: string;
    private 'instance_id'?: string;
    private 'alter_permit'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'period_num'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'created_time'?: string;
    private 'upgrade_time'?: number;
    public update?: InstanceDetailUpdateEnum | string;
    private 'bastion_version'?: string;
    private 'az_info'?: InstanceDetailAzInfo;
    private 'status_info'?: InstanceDetailStatusInfo;
    private 'resource_info'?: InstanceDetailResourceInfo;
    public network?: InstanceDetailNetwork;
    private 'ha_info'?: InstanceDetailHaInfo;
    public constructor(name?: string, serverId?: string, instanceId?: string, alterPermit?: boolean, enterpriseProjectId?: string, periodNum?: string, startTime?: string, endTime?: string, createdTime?: string, update?: string, bastionVersion?: string, azInfo?: InstanceDetailAzInfo, statusInfo?: InstanceDetailStatusInfo, resourceInfo?: InstanceDetailResourceInfo, network?: InstanceDetailNetwork) { 
        this['name'] = name;
        this['server_id'] = serverId;
        this['instance_id'] = instanceId;
        this['alter_permit'] = alterPermit;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['period_num'] = periodNum;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['created_time'] = createdTime;
        this['update'] = update;
        this['bastion_version'] = bastionVersion;
        this['az_info'] = azInfo;
        this['status_info'] = statusInfo;
        this['resource_info'] = resourceInfo;
        this['network'] = network;
    }
    public withName(name: string): InstanceDetail {
        this['name'] = name;
        return this;
    }
    public withServerId(serverId: string): InstanceDetail {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withInstanceId(instanceId: string): InstanceDetail {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAlterPermit(alterPermit: boolean): InstanceDetail {
        this['alter_permit'] = alterPermit;
        return this;
    }
    public set alterPermit(alterPermit: boolean  | undefined) {
        this['alter_permit'] = alterPermit;
    }
    public get alterPermit(): boolean | undefined {
        return this['alter_permit'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstanceDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPeriodNum(periodNum: string): InstanceDetail {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: string  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): string | undefined {
        return this['period_num'];
    }
    public withStartTime(startTime: string): InstanceDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): InstanceDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCreatedTime(createdTime: string): InstanceDetail {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpgradeTime(upgradeTime: number): InstanceDetail {
        this['upgrade_time'] = upgradeTime;
        return this;
    }
    public set upgradeTime(upgradeTime: number  | undefined) {
        this['upgrade_time'] = upgradeTime;
    }
    public get upgradeTime(): number | undefined {
        return this['upgrade_time'];
    }
    public withUpdate(update: InstanceDetailUpdateEnum | string): InstanceDetail {
        this['update'] = update;
        return this;
    }
    public withBastionVersion(bastionVersion: string): InstanceDetail {
        this['bastion_version'] = bastionVersion;
        return this;
    }
    public set bastionVersion(bastionVersion: string  | undefined) {
        this['bastion_version'] = bastionVersion;
    }
    public get bastionVersion(): string | undefined {
        return this['bastion_version'];
    }
    public withAzInfo(azInfo: InstanceDetailAzInfo): InstanceDetail {
        this['az_info'] = azInfo;
        return this;
    }
    public set azInfo(azInfo: InstanceDetailAzInfo  | undefined) {
        this['az_info'] = azInfo;
    }
    public get azInfo(): InstanceDetailAzInfo | undefined {
        return this['az_info'];
    }
    public withStatusInfo(statusInfo: InstanceDetailStatusInfo): InstanceDetail {
        this['status_info'] = statusInfo;
        return this;
    }
    public set statusInfo(statusInfo: InstanceDetailStatusInfo  | undefined) {
        this['status_info'] = statusInfo;
    }
    public get statusInfo(): InstanceDetailStatusInfo | undefined {
        return this['status_info'];
    }
    public withResourceInfo(resourceInfo: InstanceDetailResourceInfo): InstanceDetail {
        this['resource_info'] = resourceInfo;
        return this;
    }
    public set resourceInfo(resourceInfo: InstanceDetailResourceInfo  | undefined) {
        this['resource_info'] = resourceInfo;
    }
    public get resourceInfo(): InstanceDetailResourceInfo | undefined {
        return this['resource_info'];
    }
    public withNetwork(network: InstanceDetailNetwork): InstanceDetail {
        this['network'] = network;
        return this;
    }
    public withHaInfo(haInfo: InstanceDetailHaInfo): InstanceDetail {
        this['ha_info'] = haInfo;
        return this;
    }
    public set haInfo(haInfo: InstanceDetailHaInfo  | undefined) {
        this['ha_info'] = haInfo;
    }
    public get haInfo(): InstanceDetailHaInfo | undefined {
        return this['ha_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceDetailUpdateEnum {
    OLD = 'OLD',
    NEW = 'NEW',
    CROSS_OS = 'CROSS_OS',
    ROLLBACK = 'ROLLBACK'
}
