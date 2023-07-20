

export class JobQueryBean {
    private 'job_id'?: string;
    public user?: string;
    private 'job_name'?: string;
    private 'job_result'?: string;
    private 'job_state'?: string;
    private 'job_progress'?: number;
    private 'job_type'?: string;
    private 'started_time'?: number;
    private 'submitted_time'?: number;
    private 'finished_time'?: number;
    private 'elapsed_time'?: number;
    private 'arguments'?: string;
    private 'launcher_id'?: string;
    public properties?: string;
    private 'app_id'?: string;
    private 'tracking_url'?: string;
    public queue?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): JobQueryBean {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withUser(user: string): JobQueryBean {
        this['user'] = user;
        return this;
    }
    public withJobName(jobName: string): JobQueryBean {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobResult(jobResult: string): JobQueryBean {
        this['job_result'] = jobResult;
        return this;
    }
    public set jobResult(jobResult: string  | undefined) {
        this['job_result'] = jobResult;
    }
    public get jobResult(): string | undefined {
        return this['job_result'];
    }
    public withJobState(jobState: string): JobQueryBean {
        this['job_state'] = jobState;
        return this;
    }
    public set jobState(jobState: string  | undefined) {
        this['job_state'] = jobState;
    }
    public get jobState(): string | undefined {
        return this['job_state'];
    }
    public withJobProgress(jobProgress: number): JobQueryBean {
        this['job_progress'] = jobProgress;
        return this;
    }
    public set jobProgress(jobProgress: number  | undefined) {
        this['job_progress'] = jobProgress;
    }
    public get jobProgress(): number | undefined {
        return this['job_progress'];
    }
    public withJobType(jobType: string): JobQueryBean {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withStartedTime(startedTime: number): JobQueryBean {
        this['started_time'] = startedTime;
        return this;
    }
    public set startedTime(startedTime: number  | undefined) {
        this['started_time'] = startedTime;
    }
    public get startedTime(): number | undefined {
        return this['started_time'];
    }
    public withSubmittedTime(submittedTime: number): JobQueryBean {
        this['submitted_time'] = submittedTime;
        return this;
    }
    public set submittedTime(submittedTime: number  | undefined) {
        this['submitted_time'] = submittedTime;
    }
    public get submittedTime(): number | undefined {
        return this['submitted_time'];
    }
    public withFinishedTime(finishedTime: number): JobQueryBean {
        this['finished_time'] = finishedTime;
        return this;
    }
    public set finishedTime(finishedTime: number  | undefined) {
        this['finished_time'] = finishedTime;
    }
    public get finishedTime(): number | undefined {
        return this['finished_time'];
    }
    public withElapsedTime(elapsedTime: number): JobQueryBean {
        this['elapsed_time'] = elapsedTime;
        return this;
    }
    public set elapsedTime(elapsedTime: number  | undefined) {
        this['elapsed_time'] = elapsedTime;
    }
    public get elapsedTime(): number | undefined {
        return this['elapsed_time'];
    }
    public withArguments(_arguments: string): JobQueryBean {
        this['arguments'] = _arguments;
        return this;
    }
    public set _arguments(_arguments: string  | undefined) {
        this['arguments'] = _arguments;
    }
    public get _arguments(): string | undefined {
        return this['arguments'];
    }
    public withLauncherId(launcherId: string): JobQueryBean {
        this['launcher_id'] = launcherId;
        return this;
    }
    public set launcherId(launcherId: string  | undefined) {
        this['launcher_id'] = launcherId;
    }
    public get launcherId(): string | undefined {
        return this['launcher_id'];
    }
    public withProperties(properties: string): JobQueryBean {
        this['properties'] = properties;
        return this;
    }
    public withAppId(appId: string): JobQueryBean {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withTrackingUrl(trackingUrl: string): JobQueryBean {
        this['tracking_url'] = trackingUrl;
        return this;
    }
    public set trackingUrl(trackingUrl: string  | undefined) {
        this['tracking_url'] = trackingUrl;
    }
    public get trackingUrl(): string | undefined {
        return this['tracking_url'];
    }
    public withQueue(queue: string): JobQueryBean {
        this['queue'] = queue;
        return this;
    }
}