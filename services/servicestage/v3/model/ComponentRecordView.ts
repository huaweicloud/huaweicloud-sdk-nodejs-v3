import { RecordJob } from './RecordJob';


export class ComponentRecordView {
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public description?: object;
    private 'instance_id'?: string;
    public version?: string;
    private 'current_used'?: boolean;
    public status?: string;
    private 'deploy_type'?: string;
    public jobs?: Array<RecordJob>;
    public constructor() { 
    }
    public withBeginTime(beginTime: string): ComponentRecordView {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ComponentRecordView {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDescription(description: object): ComponentRecordView {
        this['description'] = description;
        return this;
    }
    public withInstanceId(instanceId: string): ComponentRecordView {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVersion(version: string): ComponentRecordView {
        this['version'] = version;
        return this;
    }
    public withCurrentUsed(currentUsed: boolean): ComponentRecordView {
        this['current_used'] = currentUsed;
        return this;
    }
    public set currentUsed(currentUsed: boolean  | undefined) {
        this['current_used'] = currentUsed;
    }
    public get currentUsed(): boolean | undefined {
        return this['current_used'];
    }
    public withStatus(status: string): ComponentRecordView {
        this['status'] = status;
        return this;
    }
    public withDeployType(deployType: string): ComponentRecordView {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withJobs(jobs: Array<RecordJob>): ComponentRecordView {
        this['jobs'] = jobs;
        return this;
    }
}