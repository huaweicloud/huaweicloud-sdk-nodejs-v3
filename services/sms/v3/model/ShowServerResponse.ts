import { BtrfsFileSystem } from './BtrfsFileSystem';
import { EnvironmentCheck } from './EnvironmentCheck';
import { InitTargetServer } from './InitTargetServer';
import { NetWork } from './NetWork';
import { ServerDisk } from './ServerDisk';
import { TaskByServerSource } from './TaskByServerSource';
import { VolumeGroups } from './VolumeGroups';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerResponse extends SdkResponse {
    public id?: string;
    public ip?: string;
    public name?: string;
    public hostname?: string;
    private 'enterprise_project_id'?: string;
    private 'add_date'?: number;
    private 'os_type'?: string;
    private 'os_version'?: string;
    private 'oem_system'?: boolean;
    public state?: ShowServerResponseStateEnum | string;
    public connected?: boolean;
    public firmware?: ShowServerResponseFirmwareEnum | string;
    private 'init_target_server'?: InitTargetServer;
    private 'cpu_quantity'?: number;
    public memory?: number;
    private 'current_task'?: TaskByServerSource;
    public disks?: Array<ServerDisk>;
    private 'volume_groups'?: Array<VolumeGroups>;
    private 'btrfs_list'?: Array<BtrfsFileSystem>;
    public networks?: Array<NetWork>;
    public checks?: Array<EnvironmentCheck>;
    private 'migration_cycle'?: ShowServerResponseMigrationCycleEnum | string;
    private 'state_action_time'?: number;
    public replicatesize?: number;
    public totalsize?: number;
    private 'last_visit_time'?: number;
    private 'stage_action_time'?: number;
    private 'agent_version'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowServerResponse {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): ShowServerResponse {
        this['ip'] = ip;
        return this;
    }
    public withName(name: string): ShowServerResponse {
        this['name'] = name;
        return this;
    }
    public withHostname(hostname: string): ShowServerResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowServerResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAddDate(addDate: number): ShowServerResponse {
        this['add_date'] = addDate;
        return this;
    }
    public set addDate(addDate: number  | undefined) {
        this['add_date'] = addDate;
    }
    public get addDate(): number | undefined {
        return this['add_date'];
    }
    public withOsType(osType: string): ShowServerResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOsVersion(osVersion: string): ShowServerResponse {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withOemSystem(oemSystem: boolean): ShowServerResponse {
        this['oem_system'] = oemSystem;
        return this;
    }
    public set oemSystem(oemSystem: boolean  | undefined) {
        this['oem_system'] = oemSystem;
    }
    public get oemSystem(): boolean | undefined {
        return this['oem_system'];
    }
    public withState(state: ShowServerResponseStateEnum | string): ShowServerResponse {
        this['state'] = state;
        return this;
    }
    public withConnected(connected: boolean): ShowServerResponse {
        this['connected'] = connected;
        return this;
    }
    public withFirmware(firmware: ShowServerResponseFirmwareEnum | string): ShowServerResponse {
        this['firmware'] = firmware;
        return this;
    }
    public withInitTargetServer(initTargetServer: InitTargetServer): ShowServerResponse {
        this['init_target_server'] = initTargetServer;
        return this;
    }
    public set initTargetServer(initTargetServer: InitTargetServer  | undefined) {
        this['init_target_server'] = initTargetServer;
    }
    public get initTargetServer(): InitTargetServer | undefined {
        return this['init_target_server'];
    }
    public withCpuQuantity(cpuQuantity: number): ShowServerResponse {
        this['cpu_quantity'] = cpuQuantity;
        return this;
    }
    public set cpuQuantity(cpuQuantity: number  | undefined) {
        this['cpu_quantity'] = cpuQuantity;
    }
    public get cpuQuantity(): number | undefined {
        return this['cpu_quantity'];
    }
    public withMemory(memory: number): ShowServerResponse {
        this['memory'] = memory;
        return this;
    }
    public withCurrentTask(currentTask: TaskByServerSource): ShowServerResponse {
        this['current_task'] = currentTask;
        return this;
    }
    public set currentTask(currentTask: TaskByServerSource  | undefined) {
        this['current_task'] = currentTask;
    }
    public get currentTask(): TaskByServerSource | undefined {
        return this['current_task'];
    }
    public withDisks(disks: Array<ServerDisk>): ShowServerResponse {
        this['disks'] = disks;
        return this;
    }
    public withVolumeGroups(volumeGroups: Array<VolumeGroups>): ShowServerResponse {
        this['volume_groups'] = volumeGroups;
        return this;
    }
    public set volumeGroups(volumeGroups: Array<VolumeGroups>  | undefined) {
        this['volume_groups'] = volumeGroups;
    }
    public get volumeGroups(): Array<VolumeGroups> | undefined {
        return this['volume_groups'];
    }
    public withBtrfsList(btrfsList: Array<BtrfsFileSystem>): ShowServerResponse {
        this['btrfs_list'] = btrfsList;
        return this;
    }
    public set btrfsList(btrfsList: Array<BtrfsFileSystem>  | undefined) {
        this['btrfs_list'] = btrfsList;
    }
    public get btrfsList(): Array<BtrfsFileSystem> | undefined {
        return this['btrfs_list'];
    }
    public withNetworks(networks: Array<NetWork>): ShowServerResponse {
        this['networks'] = networks;
        return this;
    }
    public withChecks(checks: Array<EnvironmentCheck>): ShowServerResponse {
        this['checks'] = checks;
        return this;
    }
    public withMigrationCycle(migrationCycle: ShowServerResponseMigrationCycleEnum | string): ShowServerResponse {
        this['migration_cycle'] = migrationCycle;
        return this;
    }
    public set migrationCycle(migrationCycle: ShowServerResponseMigrationCycleEnum | string  | undefined) {
        this['migration_cycle'] = migrationCycle;
    }
    public get migrationCycle(): ShowServerResponseMigrationCycleEnum | string | undefined {
        return this['migration_cycle'];
    }
    public withStateActionTime(stateActionTime: number): ShowServerResponse {
        this['state_action_time'] = stateActionTime;
        return this;
    }
    public set stateActionTime(stateActionTime: number  | undefined) {
        this['state_action_time'] = stateActionTime;
    }
    public get stateActionTime(): number | undefined {
        return this['state_action_time'];
    }
    public withReplicatesize(replicatesize: number): ShowServerResponse {
        this['replicatesize'] = replicatesize;
        return this;
    }
    public withTotalsize(totalsize: number): ShowServerResponse {
        this['totalsize'] = totalsize;
        return this;
    }
    public withLastVisitTime(lastVisitTime: number): ShowServerResponse {
        this['last_visit_time'] = lastVisitTime;
        return this;
    }
    public set lastVisitTime(lastVisitTime: number  | undefined) {
        this['last_visit_time'] = lastVisitTime;
    }
    public get lastVisitTime(): number | undefined {
        return this['last_visit_time'];
    }
    public withStageActionTime(stageActionTime: number): ShowServerResponse {
        this['stage_action_time'] = stageActionTime;
        return this;
    }
    public set stageActionTime(stageActionTime: number  | undefined) {
        this['stage_action_time'] = stageActionTime;
    }
    public get stageActionTime(): number | undefined {
        return this['stage_action_time'];
    }
    public withAgentVersion(agentVersion: string): ShowServerResponse {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowServerResponseStateEnum {
    UNAVAILABLE = 'unavailable',
    WAITING = 'waiting',
    INITIALIZE = 'initialize',
    REPLICATE = 'replicate',
    SYNCING = 'syncing',
    STOPPING = 'stopping',
    STOPPED = 'stopped',
    DELETING = 'deleting',
    ERROR = 'error',
    CLONING = 'cloning',
    TESTING = 'testing',
    FINISHED = 'finished'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowServerResponseFirmwareEnum {
    BIOS = 'BIOS',
    UEFI = 'UEFI'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowServerResponseMigrationCycleEnum {
    CUTOVERING = 'cutovering',
    CUTOVERED = 'cutovered',
    CHECKING = 'checking',
    SETTING = 'setting',
    REPLICATING = 'replicating',
    SYNCING = 'syncing'
}
