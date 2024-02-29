

export class ListFactoryJobInstancesByNameRequest {
    public workspace?: string;
    private 'Content-Type'?: string;
    public limit?: number;
    public offset?: number;
    private 'min_plan_time'?: number;
    private 'max_plan_time'?: number;
    public status?: ListFactoryJobInstancesByNameRequestStatusEnum | string;
    private 'job_name'?: string;
    private 'force_success'?: boolean;
    private 'ignore_success'?: boolean;
    private 'instance_type'?: string;
    public constructor(jobName?: string) { 
        this['job_name'] = jobName;
    }
    public withWorkspace(workspace: string): ListFactoryJobInstancesByNameRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withContentType(contentType: string): ListFactoryJobInstancesByNameRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLimit(limit: number): ListFactoryJobInstancesByNameRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFactoryJobInstancesByNameRequest {
        this['offset'] = offset;
        return this;
    }
    public withMinPlanTime(minPlanTime: number): ListFactoryJobInstancesByNameRequest {
        this['min_plan_time'] = minPlanTime;
        return this;
    }
    public set minPlanTime(minPlanTime: number  | undefined) {
        this['min_plan_time'] = minPlanTime;
    }
    public get minPlanTime(): number | undefined {
        return this['min_plan_time'];
    }
    public withMaxPlanTime(maxPlanTime: number): ListFactoryJobInstancesByNameRequest {
        this['max_plan_time'] = maxPlanTime;
        return this;
    }
    public set maxPlanTime(maxPlanTime: number  | undefined) {
        this['max_plan_time'] = maxPlanTime;
    }
    public get maxPlanTime(): number | undefined {
        return this['max_plan_time'];
    }
    public withStatus(status: ListFactoryJobInstancesByNameRequestStatusEnum | string): ListFactoryJobInstancesByNameRequest {
        this['status'] = status;
        return this;
    }
    public withJobName(jobName: string): ListFactoryJobInstancesByNameRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withForceSuccess(forceSuccess: boolean): ListFactoryJobInstancesByNameRequest {
        this['force_success'] = forceSuccess;
        return this;
    }
    public set forceSuccess(forceSuccess: boolean  | undefined) {
        this['force_success'] = forceSuccess;
    }
    public get forceSuccess(): boolean | undefined {
        return this['force_success'];
    }
    public withIgnoreSuccess(ignoreSuccess: boolean): ListFactoryJobInstancesByNameRequest {
        this['ignore_success'] = ignoreSuccess;
        return this;
    }
    public set ignoreSuccess(ignoreSuccess: boolean  | undefined) {
        this['ignore_success'] = ignoreSuccess;
    }
    public get ignoreSuccess(): boolean | undefined {
        return this['ignore_success'];
    }
    public withInstanceType(instanceType: string): ListFactoryJobInstancesByNameRequest {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFactoryJobInstancesByNameRequestStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAIL = 'fail',
    RUNNING_EXCEPTION = 'running-exception',
    PAUSE = 'pause',
    MANUAL_STOP = 'manual-stop',
    SKIP_BY_DEPEND = 'skip-by-depend',
    FREEZE = 'freeze'
}
