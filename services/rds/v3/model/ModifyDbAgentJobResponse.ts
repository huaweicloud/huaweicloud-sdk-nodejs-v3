
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyDbAgentJobResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'is_enabled'?: boolean;
    private 'run_time'?: string;
    private 'run_status'?: string;
    private 'last_failure_time'?: string;
    private 'failure_count'?: number;
    private 'agent_type'?: string;
    private 'profile_id'?: string;
    private 'profile_name'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ModifyDbAgentJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): ModifyDbAgentJobResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withIsEnabled(isEnabled: boolean): ModifyDbAgentJobResponse {
        this['is_enabled'] = isEnabled;
        return this;
    }
    public set isEnabled(isEnabled: boolean  | undefined) {
        this['is_enabled'] = isEnabled;
    }
    public get isEnabled(): boolean | undefined {
        return this['is_enabled'];
    }
    public withRunTime(runTime: string): ModifyDbAgentJobResponse {
        this['run_time'] = runTime;
        return this;
    }
    public set runTime(runTime: string  | undefined) {
        this['run_time'] = runTime;
    }
    public get runTime(): string | undefined {
        return this['run_time'];
    }
    public withRunStatus(runStatus: string): ModifyDbAgentJobResponse {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: string  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): string | undefined {
        return this['run_status'];
    }
    public withLastFailureTime(lastFailureTime: string): ModifyDbAgentJobResponse {
        this['last_failure_time'] = lastFailureTime;
        return this;
    }
    public set lastFailureTime(lastFailureTime: string  | undefined) {
        this['last_failure_time'] = lastFailureTime;
    }
    public get lastFailureTime(): string | undefined {
        return this['last_failure_time'];
    }
    public withFailureCount(failureCount: number): ModifyDbAgentJobResponse {
        this['failure_count'] = failureCount;
        return this;
    }
    public set failureCount(failureCount: number  | undefined) {
        this['failure_count'] = failureCount;
    }
    public get failureCount(): number | undefined {
        return this['failure_count'];
    }
    public withAgentType(agentType: string): ModifyDbAgentJobResponse {
        this['agent_type'] = agentType;
        return this;
    }
    public set agentType(agentType: string  | undefined) {
        this['agent_type'] = agentType;
    }
    public get agentType(): string | undefined {
        return this['agent_type'];
    }
    public withProfileId(profileId: string): ModifyDbAgentJobResponse {
        this['profile_id'] = profileId;
        return this;
    }
    public set profileId(profileId: string  | undefined) {
        this['profile_id'] = profileId;
    }
    public get profileId(): string | undefined {
        return this['profile_id'];
    }
    public withProfileName(profileName: string): ModifyDbAgentJobResponse {
        this['profile_name'] = profileName;
        return this;
    }
    public set profileName(profileName: string  | undefined) {
        this['profile_name'] = profileName;
    }
    public get profileName(): string | undefined {
        return this['profile_name'];
    }
}