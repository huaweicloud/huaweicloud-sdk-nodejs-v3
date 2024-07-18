

export class ListTracesRequest {
    private 'trace_type'?: ListTracesRequestTraceTypeEnum | string;
    public limit?: number;
    public from?: number;
    public next?: string;
    public to?: number;
    private 'tracker_name'?: string;
    private 'service_type'?: string;
    public user?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    private 'trace_id'?: string;
    private 'trace_name'?: string;
    private 'trace_rating'?: ListTracesRequestTraceRatingEnum | string;
    private 'access_key_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(traceType?: string) { 
        this['trace_type'] = traceType;
    }
    public withTraceType(traceType: ListTracesRequestTraceTypeEnum | string): ListTracesRequest {
        this['trace_type'] = traceType;
        return this;
    }
    public set traceType(traceType: ListTracesRequestTraceTypeEnum | string  | undefined) {
        this['trace_type'] = traceType;
    }
    public get traceType(): ListTracesRequestTraceTypeEnum | string | undefined {
        return this['trace_type'];
    }
    public withLimit(limit: number): ListTracesRequest {
        this['limit'] = limit;
        return this;
    }
    public withFrom(from: number): ListTracesRequest {
        this['from'] = from;
        return this;
    }
    public withNext(next: string): ListTracesRequest {
        this['next'] = next;
        return this;
    }
    public withTo(to: number): ListTracesRequest {
        this['to'] = to;
        return this;
    }
    public withTrackerName(trackerName: string): ListTracesRequest {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string  | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName(): string | undefined {
        return this['tracker_name'];
    }
    public withServiceType(serviceType: string): ListTracesRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withUser(user: string): ListTracesRequest {
        this['user'] = user;
        return this;
    }
    public withResourceId(resourceId: string): ListTracesRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ListTracesRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): ListTracesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withTraceId(traceId: string): ListTracesRequest {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withTraceName(traceName: string): ListTracesRequest {
        this['trace_name'] = traceName;
        return this;
    }
    public set traceName(traceName: string  | undefined) {
        this['trace_name'] = traceName;
    }
    public get traceName(): string | undefined {
        return this['trace_name'];
    }
    public withTraceRating(traceRating: ListTracesRequestTraceRatingEnum | string): ListTracesRequest {
        this['trace_rating'] = traceRating;
        return this;
    }
    public set traceRating(traceRating: ListTracesRequestTraceRatingEnum | string  | undefined) {
        this['trace_rating'] = traceRating;
    }
    public get traceRating(): ListTracesRequestTraceRatingEnum | string | undefined {
        return this['trace_rating'];
    }
    public withAccessKeyId(accessKeyId: string): ListTracesRequest {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTracesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTracesRequestTraceTypeEnum {
    SYSTEM = 'system',
    DATA = 'data'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTracesRequestTraceRatingEnum {
    NORMAL = 'normal',
    WARNING = 'warning',
    INCIDENT = 'incident'
}
