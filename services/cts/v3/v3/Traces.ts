import { UserInfo } from './UserInfo';


export class Traces {
    private 'resource_id'?: string | undefined;
    private 'trace_name'?: string | undefined;
    private 'trace_rating'?: TracesTraceRatingEnum | undefined;
    private 'trace_type'?: string | undefined;
    public request?: string;
    public response?: string;
    public code?: string;
    private 'api_version'?: string | undefined;
    public message?: string;
    private 'record_time'?: number | undefined;
    private 'trace_id'?: string | undefined;
    public time?: number;
    public user?: UserInfo;
    private 'service_type'?: string | undefined;
    private 'resource_type'?: string | undefined;
    private 'source_ip'?: string | undefined;
    private 'resource_name'?: string | undefined;
    private 'request_id'?: string | undefined;
    private 'location_info'?: string | undefined;
    public endpoint?: string;
    private 'resource_url'?: string | undefined;
    public constructor() { 
    }
    public withResourceId(resourceId: string): Traces {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withTraceName(traceName: string): Traces {
        this['trace_name'] = traceName;
        return this;
    }
    public set traceName(traceName: string | undefined) {
        this['trace_name'] = traceName;
    }
    public get traceName() {
        return this['trace_name'];
    }
    public withTraceRating(traceRating: TracesTraceRatingEnum): Traces {
        this['trace_rating'] = traceRating;
        return this;
    }
    public set traceRating(traceRating: TracesTraceRatingEnum | undefined) {
        this['trace_rating'] = traceRating;
    }
    public get traceRating() {
        return this['trace_rating'];
    }
    public withTraceType(traceType: string): Traces {
        this['trace_type'] = traceType;
        return this;
    }
    public set traceType(traceType: string | undefined) {
        this['trace_type'] = traceType;
    }
    public get traceType() {
        return this['trace_type'];
    }
    public withRequest(request: string): Traces {
        this['request'] = request;
        return this;
    }
    public withResponse(response: string): Traces {
        this['response'] = response;
        return this;
    }
    public withCode(code: string): Traces {
        this['code'] = code;
        return this;
    }
    public withApiVersion(apiVersion: string): Traces {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion() {
        return this['api_version'];
    }
    public withMessage(message: string): Traces {
        this['message'] = message;
        return this;
    }
    public withRecordTime(recordTime: number): Traces {
        this['record_time'] = recordTime;
        return this;
    }
    public set recordTime(recordTime: number | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime() {
        return this['record_time'];
    }
    public withTraceId(traceId: string): Traces {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId() {
        return this['trace_id'];
    }
    public withTime(time: number): Traces {
        this['time'] = time;
        return this;
    }
    public withUser(user: UserInfo): Traces {
        this['user'] = user;
        return this;
    }
    public withServiceType(serviceType: string): Traces {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withResourceType(resourceType: string): Traces {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withSourceIp(sourceIp: string): Traces {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: string | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp() {
        return this['source_ip'];
    }
    public withResourceName(resourceName: string): Traces {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withRequestId(requestId: string): Traces {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withLocationInfo(locationInfo: string): Traces {
        this['location_info'] = locationInfo;
        return this;
    }
    public set locationInfo(locationInfo: string | undefined) {
        this['location_info'] = locationInfo;
    }
    public get locationInfo() {
        return this['location_info'];
    }
    public withEndpoint(endpoint: string): Traces {
        this['endpoint'] = endpoint;
        return this;
    }
    public withResourceUrl(resourceUrl: string): Traces {
        this['resource_url'] = resourceUrl;
        return this;
    }
    public set resourceUrl(resourceUrl: string | undefined) {
        this['resource_url'] = resourceUrl;
    }
    public get resourceUrl() {
        return this['resource_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TracesTraceRatingEnum {
    NORMAL = 'normal',
    WARNING = 'warning',
    INCIDENT = 'incident'
}
