import { EnvironmentCheck } from './EnvironmentCheck';
import { InitTargetServer } from './InitTargetServer';
import { TaskByServerSources } from './TaskByServerSources';


export class SourceServersResponseBody {
    public id?: string;
    public ip?: string;
    public name?: string;
    private 'enterprise_project_id'?: string;
    private 'add_date'?: number;
    private 'os_type'?: SourceServersResponseBodyOsTypeEnum | string;
    private 'os_version'?: string;
    private 'oem_system'?: boolean;
    public state?: SourceServersResponseBodyStateEnum | string;
    public connected?: boolean;
    private 'cpu_quantity'?: number;
    public memory?: number;
    private 'current_task'?: TaskByServerSources;
    public checks?: Array<EnvironmentCheck>;
    private 'init_target_server'?: InitTargetServer;
    public replicatesize?: number;
    private 'stage_action_time'?: number;
    public totalsize?: number;
    private 'last_visit_time'?: number;
    private 'migration_cycle'?: SourceServersResponseBodyMigrationCycleEnum | string;
    private 'state_action_time'?: number;
    private 'is_consistency_result_exist'?: boolean;
    private 'has_tc'?: boolean;
    public constructor() { 
    }
    public withId(id: string): SourceServersResponseBody {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): SourceServersResponseBody {
        this['ip'] = ip;
        return this;
    }
    public withName(name: string): SourceServersResponseBody {
        this['name'] = name;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SourceServersResponseBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAddDate(addDate: number): SourceServersResponseBody {
        this['add_date'] = addDate;
        return this;
    }
    public set addDate(addDate: number  | undefined) {
        this['add_date'] = addDate;
    }
    public get addDate(): number | undefined {
        return this['add_date'];
    }
    public withOsType(osType: SourceServersResponseBodyOsTypeEnum | string): SourceServersResponseBody {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: SourceServersResponseBodyOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): SourceServersResponseBodyOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withOsVersion(osVersion: string): SourceServersResponseBody {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withOemSystem(oemSystem: boolean): SourceServersResponseBody {
        this['oem_system'] = oemSystem;
        return this;
    }
    public set oemSystem(oemSystem: boolean  | undefined) {
        this['oem_system'] = oemSystem;
    }
    public get oemSystem(): boolean | undefined {
        return this['oem_system'];
    }
    public withState(state: SourceServersResponseBodyStateEnum | string): SourceServersResponseBody {
        this['state'] = state;
        return this;
    }
    public withConnected(connected: boolean): SourceServersResponseBody {
        this['connected'] = connected;
        return this;
    }
    public withCpuQuantity(cpuQuantity: number): SourceServersResponseBody {
        this['cpu_quantity'] = cpuQuantity;
        return this;
    }
    public set cpuQuantity(cpuQuantity: number  | undefined) {
        this['cpu_quantity'] = cpuQuantity;
    }
    public get cpuQuantity(): number | undefined {
        return this['cpu_quantity'];
    }
    public withMemory(memory: number): SourceServersResponseBody {
        this['memory'] = memory;
        return this;
    }
    public withCurrentTask(currentTask: TaskByServerSources): SourceServersResponseBody {
        this['current_task'] = currentTask;
        return this;
    }
    public set currentTask(currentTask: TaskByServerSources  | undefined) {
        this['current_task'] = currentTask;
    }
    public get currentTask(): TaskByServerSources | undefined {
        return this['current_task'];
    }
    public withChecks(checks: Array<EnvironmentCheck>): SourceServersResponseBody {
        this['checks'] = checks;
        return this;
    }
    public withInitTargetServer(initTargetServer: InitTargetServer): SourceServersResponseBody {
        this['init_target_server'] = initTargetServer;
        return this;
    }
    public set initTargetServer(initTargetServer: InitTargetServer  | undefined) {
        this['init_target_server'] = initTargetServer;
    }
    public get initTargetServer(): InitTargetServer | undefined {
        return this['init_target_server'];
    }
    public withReplicatesize(replicatesize: number): SourceServersResponseBody {
        this['replicatesize'] = replicatesize;
        return this;
    }
    public withStageActionTime(stageActionTime: number): SourceServersResponseBody {
        this['stage_action_time'] = stageActionTime;
        return this;
    }
    public set stageActionTime(stageActionTime: number  | undefined) {
        this['stage_action_time'] = stageActionTime;
    }
    public get stageActionTime(): number | undefined {
        return this['stage_action_time'];
    }
    public withTotalsize(totalsize: number): SourceServersResponseBody {
        this['totalsize'] = totalsize;
        return this;
    }
    public withLastVisitTime(lastVisitTime: number): SourceServersResponseBody {
        this['last_visit_time'] = lastVisitTime;
        return this;
    }
    public set lastVisitTime(lastVisitTime: number  | undefined) {
        this['last_visit_time'] = lastVisitTime;
    }
    public get lastVisitTime(): number | undefined {
        return this['last_visit_time'];
    }
    public withMigrationCycle(migrationCycle: SourceServersResponseBodyMigrationCycleEnum | string): SourceServersResponseBody {
        this['migration_cycle'] = migrationCycle;
        return this;
    }
    public set migrationCycle(migrationCycle: SourceServersResponseBodyMigrationCycleEnum | string  | undefined) {
        this['migration_cycle'] = migrationCycle;
    }
    public get migrationCycle(): SourceServersResponseBodyMigrationCycleEnum | string | undefined {
        return this['migration_cycle'];
    }
    public withStateActionTime(stateActionTime: number): SourceServersResponseBody {
        this['state_action_time'] = stateActionTime;
        return this;
    }
    public set stateActionTime(stateActionTime: number  | undefined) {
        this['state_action_time'] = stateActionTime;
    }
    public get stateActionTime(): number | undefined {
        return this['state_action_time'];
    }
    public withIsConsistencyResultExist(isConsistencyResultExist: boolean): SourceServersResponseBody {
        this['is_consistency_result_exist'] = isConsistencyResultExist;
        return this;
    }
    public set isConsistencyResultExist(isConsistencyResultExist: boolean  | undefined) {
        this['is_consistency_result_exist'] = isConsistencyResultExist;
    }
    public get isConsistencyResultExist(): boolean | undefined {
        return this['is_consistency_result_exist'];
    }
    public withHasTc(hasTc: boolean): SourceServersResponseBody {
        this['has_tc'] = hasTc;
        return this;
    }
    public set hasTc(hasTc: boolean  | undefined) {
        this['has_tc'] = hasTc;
    }
    public get hasTc(): boolean | undefined {
        return this['has_tc'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourceServersResponseBodyOsTypeEnum {
    WINDOWS = 'WINDOWS',
    LINUX = 'LINUX'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceServersResponseBodyStateEnum {
    UNAVAILABLE = 'unavailable',
    WAITING = 'waiting',
    INITIALIZE = 'initialize',
    REPLICATE = 'replicate',
    SYNCING = 'syncing',
    STOPPING = 'stopping',
    STOPPED = 'stopped',
    SKIPPING = 'skipping',
    DELETING = 'deleting',
    CLEARING = 'clearing',
    CLEARED = 'cleared',
    CLEARFAILED = 'clearfailed',
    PREMIGREADY = 'premigready',
    PREMIGED = 'premiged',
    PREMIGFAILED = 'premigfailed',
    CLONING = 'cloning',
    CUTOVERING = 'cutovering',
    FINISHED = 'finished',
    ERROR = 'error'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceServersResponseBodyMigrationCycleEnum {
    CUTOVERING = 'cutovering',
    CUTOVERED = 'cutovered',
    CHECKING = 'checking',
    SETTING = 'setting',
    REPLICATING = 'replicating',
    SYNCING = 'syncing'
}
