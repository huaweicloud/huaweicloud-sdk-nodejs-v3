import { JobStatus } from './JobStatus';


export class AppInstallJob {
    public id?: string;
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'app_version'?: string;
    private 'instance_id'?: string;
    private 'instance_sid'?: string;
    private 'instance_name'?: string;
    public operator?: string;
    public target?: string;
    private 'job_status'?: JobStatus;
    private 'error_message'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): AppInstallJob {
        this['id'] = id;
        return this;
    }
    public withAppId(appId: string): AppInstallJob {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): AppInstallJob {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppVersion(appVersion: string): AppInstallJob {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withInstanceId(instanceId: string): AppInstallJob {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceSid(instanceSid: string): AppInstallJob {
        this['instance_sid'] = instanceSid;
        return this;
    }
    public set instanceSid(instanceSid: string  | undefined) {
        this['instance_sid'] = instanceSid;
    }
    public get instanceSid(): string | undefined {
        return this['instance_sid'];
    }
    public withInstanceName(instanceName: string): AppInstallJob {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withOperator(operator: string): AppInstallJob {
        this['operator'] = operator;
        return this;
    }
    public withTarget(target: string): AppInstallJob {
        this['target'] = target;
        return this;
    }
    public withJobStatus(jobStatus: JobStatus): AppInstallJob {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: JobStatus  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): JobStatus | undefined {
        return this['job_status'];
    }
    public withErrorMessage(errorMessage: string): AppInstallJob {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withCreateTime(createTime: Date): AppInstallJob {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): AppInstallJob {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}