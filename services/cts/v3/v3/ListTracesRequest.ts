

export class ListTracesRequest {
    private 'trace_type': ListTracesRequestTraceTypeEnum | undefined;
    public limit?: number;
    public from?: number;
    public next?: string;
    public to?: number;
    private 'tracker_name'?: string | undefined;
    private 'service_type'?: string | undefined;
    public user?: string;
    private 'resource_id'?: string | undefined;
    private 'resource_name'?: string | undefined;
    private 'resource_type'?: string | undefined;
    private 'trace_id'?: string | undefined;
    private 'trace_name'?: string | undefined;
    private 'trace_rating'?: ListTracesRequestTraceRatingEnum | undefined;
    public constructor(traceType?: any) { 
        this['trace_type'] = traceType;
    }
    public withTraceType(traceType: ListTracesRequestTraceTypeEnum): ListTracesRequest {
        this['trace_type'] = traceType;
        return this;
    }
    public set traceType(traceType: ListTracesRequestTraceTypeEnum | undefined) {
        this['trace_type'] = traceType;
    }
    public get traceType() {
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
    public set trackerName(trackerName: string | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName() {
        return this['tracker_name'];
    }
    public withServiceType(serviceType: string): ListTracesRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
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
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ListTracesRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): ListTracesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withTraceId(traceId: string): ListTracesRequest {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId() {
        return this['trace_id'];
    }
    public withTraceName(traceName: string): ListTracesRequest {
        this['trace_name'] = traceName;
        return this;
    }
    public set traceName(traceName: string | undefined) {
        this['trace_name'] = traceName;
    }
    public get traceName() {
        return this['trace_name'];
    }
    public withTraceRating(traceRating: ListTracesRequestTraceRatingEnum): ListTracesRequest {
        this['trace_rating'] = traceRating;
        return this;
    }
    public set traceRating(traceRating: ListTracesRequestTraceRatingEnum | undefined) {
        this['trace_rating'] = traceRating;
    }
    public get traceRating() {
        return this['trace_rating'];
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
