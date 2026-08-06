import { JobAlarm } from './JobAlarm';


export class JobResultV2 {
    public name?: string;
    private 'job_type'?: string;
    public status?: string;
    private 'create_user'?: string;
    private 'create_time'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'last_instance_status'?: string;
    private 'last_instance_end_time'?: number;
    public owner?: string;
    private 'last_update_user'?: string;
    public priority?: number;
    private 'flink_job_info'?: string;
    public path?: string;
    private 'single_node_job_flag'?: boolean;
    public alarms?: Array<JobAlarm>;
    private 'last_update_time'?: number;
    private 'single_node_job_type'?: string;
    private 'empty_running_job'?: string;
    private 'next_plan_time'?: string;
    public constructor() { 
    }
    public withName(name: string): JobResultV2 {
        this['name'] = name;
        return this;
    }
    public withJobType(jobType: string): JobResultV2 {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withStatus(status: string): JobResultV2 {
        this['status'] = status;
        return this;
    }
    public withCreateUser(createUser: string): JobResultV2 {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCreateTime(createTime: number): JobResultV2 {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: number): JobResultV2 {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): JobResultV2 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLastInstanceStatus(lastInstanceStatus: string): JobResultV2 {
        this['last_instance_status'] = lastInstanceStatus;
        return this;
    }
    public set lastInstanceStatus(lastInstanceStatus: string  | undefined) {
        this['last_instance_status'] = lastInstanceStatus;
    }
    public get lastInstanceStatus(): string | undefined {
        return this['last_instance_status'];
    }
    public withLastInstanceEndTime(lastInstanceEndTime: number): JobResultV2 {
        this['last_instance_end_time'] = lastInstanceEndTime;
        return this;
    }
    public set lastInstanceEndTime(lastInstanceEndTime: number  | undefined) {
        this['last_instance_end_time'] = lastInstanceEndTime;
    }
    public get lastInstanceEndTime(): number | undefined {
        return this['last_instance_end_time'];
    }
    public withOwner(owner: string): JobResultV2 {
        this['owner'] = owner;
        return this;
    }
    public withLastUpdateUser(lastUpdateUser: string): JobResultV2 {
        this['last_update_user'] = lastUpdateUser;
        return this;
    }
    public set lastUpdateUser(lastUpdateUser: string  | undefined) {
        this['last_update_user'] = lastUpdateUser;
    }
    public get lastUpdateUser(): string | undefined {
        return this['last_update_user'];
    }
    public withPriority(priority: number): JobResultV2 {
        this['priority'] = priority;
        return this;
    }
    public withFlinkJobInfo(flinkJobInfo: string): JobResultV2 {
        this['flink_job_info'] = flinkJobInfo;
        return this;
    }
    public set flinkJobInfo(flinkJobInfo: string  | undefined) {
        this['flink_job_info'] = flinkJobInfo;
    }
    public get flinkJobInfo(): string | undefined {
        return this['flink_job_info'];
    }
    public withPath(path: string): JobResultV2 {
        this['path'] = path;
        return this;
    }
    public withSingleNodeJobFlag(singleNodeJobFlag: boolean): JobResultV2 {
        this['single_node_job_flag'] = singleNodeJobFlag;
        return this;
    }
    public set singleNodeJobFlag(singleNodeJobFlag: boolean  | undefined) {
        this['single_node_job_flag'] = singleNodeJobFlag;
    }
    public get singleNodeJobFlag(): boolean | undefined {
        return this['single_node_job_flag'];
    }
    public withAlarms(alarms: Array<JobAlarm>): JobResultV2 {
        this['alarms'] = alarms;
        return this;
    }
    public withLastUpdateTime(lastUpdateTime: number): JobResultV2 {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withSingleNodeJobType(singleNodeJobType: string): JobResultV2 {
        this['single_node_job_type'] = singleNodeJobType;
        return this;
    }
    public set singleNodeJobType(singleNodeJobType: string  | undefined) {
        this['single_node_job_type'] = singleNodeJobType;
    }
    public get singleNodeJobType(): string | undefined {
        return this['single_node_job_type'];
    }
    public withEmptyRunningJob(emptyRunningJob: string): JobResultV2 {
        this['empty_running_job'] = emptyRunningJob;
        return this;
    }
    public set emptyRunningJob(emptyRunningJob: string  | undefined) {
        this['empty_running_job'] = emptyRunningJob;
    }
    public get emptyRunningJob(): string | undefined {
        return this['empty_running_job'];
    }
    public withNextPlanTime(nextPlanTime: string): JobResultV2 {
        this['next_plan_time'] = nextPlanTime;
        return this;
    }
    public set nextPlanTime(nextPlanTime: string  | undefined) {
        this['next_plan_time'] = nextPlanTime;
    }
    public get nextPlanTime(): string | undefined {
        return this['next_plan_time'];
    }
}