

export class ShowFactoryDependInstancesRespDependInstancesInfo {
    public id?: number;
    private 'job_id'?: number;
    private 'job_name'?: string;
    private 'directory_path'?: string;
    private 'force_success'?: boolean;
    private 'ignore_success'?: boolean;
    private 'parent_instance_ids'?: Array<number>;
    private 'plan_time'?: number;
    private 'running_time'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public status?: string;
    private 'submit_time'?: number;
    public version?: number;
    private 'workspace_id'?: string;
    private 'workspace_name'?: string;
    private 'avg_execute_time_ms'?: number;
    public constructor() { 
    }
    public withId(id: number): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['id'] = id;
        return this;
    }
    public withJobId(jobId: number): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withDirectoryPath(directoryPath: string): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['directory_path'] = directoryPath;
        return this;
    }
    public set directoryPath(directoryPath: string  | undefined) {
        this['directory_path'] = directoryPath;
    }
    public get directoryPath(): string | undefined {
        return this['directory_path'];
    }
    public withForceSuccess(forceSuccess: boolean): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['force_success'] = forceSuccess;
        return this;
    }
    public set forceSuccess(forceSuccess: boolean  | undefined) {
        this['force_success'] = forceSuccess;
    }
    public get forceSuccess(): boolean | undefined {
        return this['force_success'];
    }
    public withIgnoreSuccess(ignoreSuccess: boolean): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['ignore_success'] = ignoreSuccess;
        return this;
    }
    public set ignoreSuccess(ignoreSuccess: boolean  | undefined) {
        this['ignore_success'] = ignoreSuccess;
    }
    public get ignoreSuccess(): boolean | undefined {
        return this['ignore_success'];
    }
    public withParentInstanceIds(parentInstanceIds: Array<number>): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['parent_instance_ids'] = parentInstanceIds;
        return this;
    }
    public set parentInstanceIds(parentInstanceIds: Array<number>  | undefined) {
        this['parent_instance_ids'] = parentInstanceIds;
    }
    public get parentInstanceIds(): Array<number> | undefined {
        return this['parent_instance_ids'];
    }
    public withPlanTime(planTime: number): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['plan_time'] = planTime;
        return this;
    }
    public set planTime(planTime: number  | undefined) {
        this['plan_time'] = planTime;
    }
    public get planTime(): number | undefined {
        return this['plan_time'];
    }
    public withRunningTime(runningTime: number): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['running_time'] = runningTime;
        return this;
    }
    public set runningTime(runningTime: number  | undefined) {
        this['running_time'] = runningTime;
    }
    public get runningTime(): number | undefined {
        return this['running_time'];
    }
    public withStartTime(startTime: number): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['status'] = status;
        return this;
    }
    public withSubmitTime(submitTime: number): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['submit_time'] = submitTime;
        return this;
    }
    public set submitTime(submitTime: number  | undefined) {
        this['submit_time'] = submitTime;
    }
    public get submitTime(): number | undefined {
        return this['submit_time'];
    }
    public withVersion(version: number): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['version'] = version;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWorkspaceName(workspaceName: string): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['workspace_name'] = workspaceName;
        return this;
    }
    public set workspaceName(workspaceName: string  | undefined) {
        this['workspace_name'] = workspaceName;
    }
    public get workspaceName(): string | undefined {
        return this['workspace_name'];
    }
    public withAvgExecuteTimeMs(avgExecuteTimeMs: number): ShowFactoryDependInstancesRespDependInstancesInfo {
        this['avg_execute_time_ms'] = avgExecuteTimeMs;
        return this;
    }
    public set avgExecuteTimeMs(avgExecuteTimeMs: number  | undefined) {
        this['avg_execute_time_ms'] = avgExecuteTimeMs;
    }
    public get avgExecuteTimeMs(): number | undefined {
        return this['avg_execute_time_ms'];
    }
}