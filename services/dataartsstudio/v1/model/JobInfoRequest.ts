import { Approver } from './Approver';
import { BasicInfo } from './BasicInfo';
import { JobParam } from './JobParam';
import { Node } from './Node';
import { Schedule } from './Schedule';


export class JobInfoRequest {
    public name?: string;
    public nodes?: Array<Node>;
    public schedule?: Schedule;
    public params?: Array<JobParam>;
    private 'log_path'?: string;
    public directory?: string;
    private 'process_type'?: JobInfoRequestProcessTypeEnum | string;
    private 'single_node_job_flag'?: boolean;
    private 'single_node_job_type'?: JobInfoRequestSingleNodeJobTypeEnum | string;
    private 'create_user'?: string;
    public owner?: string;
    public priority?: string;
    private 'last_update_user'?: string;
    private 'target_status'?: JobInfoRequestTargetStatusEnum | string;
    public approvers?: Array<Approver>;
    private 'basic_config'?: BasicInfo;
    public constructor(name?: string, nodes?: Array<Node>, schedule?: Schedule, processType?: string) { 
        this['name'] = name;
        this['nodes'] = nodes;
        this['schedule'] = schedule;
        this['process_type'] = processType;
    }
    public withName(name: string): JobInfoRequest {
        this['name'] = name;
        return this;
    }
    public withNodes(nodes: Array<Node>): JobInfoRequest {
        this['nodes'] = nodes;
        return this;
    }
    public withSchedule(schedule: Schedule): JobInfoRequest {
        this['schedule'] = schedule;
        return this;
    }
    public withParams(params: Array<JobParam>): JobInfoRequest {
        this['params'] = params;
        return this;
    }
    public withLogPath(logPath: string): JobInfoRequest {
        this['log_path'] = logPath;
        return this;
    }
    public set logPath(logPath: string  | undefined) {
        this['log_path'] = logPath;
    }
    public get logPath(): string | undefined {
        return this['log_path'];
    }
    public withDirectory(directory: string): JobInfoRequest {
        this['directory'] = directory;
        return this;
    }
    public withProcessType(processType: JobInfoRequestProcessTypeEnum | string): JobInfoRequest {
        this['process_type'] = processType;
        return this;
    }
    public set processType(processType: JobInfoRequestProcessTypeEnum | string  | undefined) {
        this['process_type'] = processType;
    }
    public get processType(): JobInfoRequestProcessTypeEnum | string | undefined {
        return this['process_type'];
    }
    public withSingleNodeJobFlag(singleNodeJobFlag: boolean): JobInfoRequest {
        this['single_node_job_flag'] = singleNodeJobFlag;
        return this;
    }
    public set singleNodeJobFlag(singleNodeJobFlag: boolean  | undefined) {
        this['single_node_job_flag'] = singleNodeJobFlag;
    }
    public get singleNodeJobFlag(): boolean | undefined {
        return this['single_node_job_flag'];
    }
    public withSingleNodeJobType(singleNodeJobType: JobInfoRequestSingleNodeJobTypeEnum | string): JobInfoRequest {
        this['single_node_job_type'] = singleNodeJobType;
        return this;
    }
    public set singleNodeJobType(singleNodeJobType: JobInfoRequestSingleNodeJobTypeEnum | string  | undefined) {
        this['single_node_job_type'] = singleNodeJobType;
    }
    public get singleNodeJobType(): JobInfoRequestSingleNodeJobTypeEnum | string | undefined {
        return this['single_node_job_type'];
    }
    public withCreateUser(createUser: string): JobInfoRequest {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withOwner(owner: string): JobInfoRequest {
        this['owner'] = owner;
        return this;
    }
    public withPriority(priority: string): JobInfoRequest {
        this['priority'] = priority;
        return this;
    }
    public withLastUpdateUser(lastUpdateUser: string): JobInfoRequest {
        this['last_update_user'] = lastUpdateUser;
        return this;
    }
    public set lastUpdateUser(lastUpdateUser: string  | undefined) {
        this['last_update_user'] = lastUpdateUser;
    }
    public get lastUpdateUser(): string | undefined {
        return this['last_update_user'];
    }
    public withTargetStatus(targetStatus: JobInfoRequestTargetStatusEnum | string): JobInfoRequest {
        this['target_status'] = targetStatus;
        return this;
    }
    public set targetStatus(targetStatus: JobInfoRequestTargetStatusEnum | string  | undefined) {
        this['target_status'] = targetStatus;
    }
    public get targetStatus(): JobInfoRequestTargetStatusEnum | string | undefined {
        return this['target_status'];
    }
    public withApprovers(approvers: Array<Approver>): JobInfoRequest {
        this['approvers'] = approvers;
        return this;
    }
    public withBasicConfig(basicConfig: BasicInfo): JobInfoRequest {
        this['basic_config'] = basicConfig;
        return this;
    }
    public set basicConfig(basicConfig: BasicInfo  | undefined) {
        this['basic_config'] = basicConfig;
    }
    public get basicConfig(): BasicInfo | undefined {
        return this['basic_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobInfoRequestProcessTypeEnum {
    BATCH = 'BATCH',
    REAL_TIME = 'REAL_TIME'
}
/**
    * @export
    * @enum {string}
    */
export enum JobInfoRequestSingleNodeJobTypeEnum {
    DLISQL = 'DliSQL',
    DWSSQL = 'DwsSQL',
    HIVESQL = 'HiveSQL',
    SPARKSQL = 'SparkSQL',
    RDSSQL = 'RdsSQL',
    DORISSQL = 'DorisSQL',
    ASSIGNMENT = 'ASSIGNMENT',
    BRANCH = 'BRANCH',
    MERGE = 'MERGE',
    NORMALJOB = 'NormalJob',
    ONECLICK = 'OneClick',
    MRSFLINK = 'MrsFlink',
    FLINKSQL = 'FlinkSQL',
    FLINKJAR = 'FlinkJar',
    DLISPARK = 'DLISpark'
}
/**
    * @export
    * @enum {string}
    */
export enum JobInfoRequestTargetStatusEnum {
    SAVED = 'SAVED',
    SUBMITTED = 'SUBMITTED',
    PRODUCTION = 'PRODUCTION'
}
