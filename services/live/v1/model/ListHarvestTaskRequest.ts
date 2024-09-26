

export class ListHarvestTaskRequest {
    private 'Access-Control-Allow-Internal'?: string;
    private 'Access-Control-Allow-External'?: string;
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    private 'job_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'event_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withAccessControlAllowInternal(accessControlAllowInternal: string): ListHarvestTaskRequest {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
        return this;
    }
    public set accessControlAllowInternal(accessControlAllowInternal: string  | undefined) {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
    }
    public get accessControlAllowInternal(): string | undefined {
        return this['Access-Control-Allow-Internal'];
    }
    public withAccessControlAllowExternal(accessControlAllowExternal: string): ListHarvestTaskRequest {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
        return this;
    }
    public set accessControlAllowExternal(accessControlAllowExternal: string  | undefined) {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
    }
    public get accessControlAllowExternal(): string | undefined {
        return this['Access-Control-Allow-External'];
    }
    public withDomain(domain: string): ListHarvestTaskRequest {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ListHarvestTaskRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): ListHarvestTaskRequest {
        this['id'] = id;
        return this;
    }
    public withJobId(jobId: string): ListHarvestTaskRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStartTime(startTime: number): ListHarvestTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListHarvestTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withEventName(eventName: string): ListHarvestTaskRequest {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withLimit(limit: number): ListHarvestTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListHarvestTaskRequest {
        this['offset'] = offset;
        return this;
    }
}