import { UserInfo } from './UserInfo';


export class Traces {
    private 'resource_id'?: string;
    private 'trace_name'?: string;
    private 'trace_rating'?: TracesTraceRatingEnum | string;
    private 'trace_type'?: string;
    public request?: string;
    public response?: string;
    public code?: string;
    private 'api_version'?: string;
    public message?: string;
    private 'record_time'?: number;
    private 'trace_id'?: string;
    public time?: number;
    public user?: UserInfo;
    private 'service_type'?: string;
    private 'resource_type'?: string;
    private 'source_ip'?: string;
    private 'resource_name'?: string;
    private 'request_id'?: string;
    private 'location_info'?: string;
    public endpoint?: string;
    private 'resource_url'?: string;
    private 'enterprise_project_id'?: string;
    private 'resource_account_id'?: string;
    private 'read_only'?: boolean;
    private 'operation_id'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): Traces {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withTraceName(traceName: string): Traces {
        this['trace_name'] = traceName;
        return this;
    }
    public set traceName(traceName: string  | undefined) {
        this['trace_name'] = traceName;
    }
    public get traceName(): string | undefined {
        return this['trace_name'];
    }
    public withTraceRating(traceRating: TracesTraceRatingEnum | string): Traces {
        this['trace_rating'] = traceRating;
        return this;
    }
    public set traceRating(traceRating: TracesTraceRatingEnum | string  | undefined) {
        this['trace_rating'] = traceRating;
    }
    public get traceRating(): TracesTraceRatingEnum | string | undefined {
        return this['trace_rating'];
    }
    public withTraceType(traceType: string): Traces {
        this['trace_type'] = traceType;
        return this;
    }
    public set traceType(traceType: string  | undefined) {
        this['trace_type'] = traceType;
    }
    public get traceType(): string | undefined {
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
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
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
    public set recordTime(recordTime: number  | undefined) {
        this['record_time'] = recordTime;
    }
    public get recordTime(): number | undefined {
        return this['record_time'];
    }
    public withTraceId(traceId: string): Traces {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
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
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withResourceType(resourceType: string): Traces {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withSourceIp(sourceIp: string): Traces {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: string  | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp(): string | undefined {
        return this['source_ip'];
    }
    public withResourceName(resourceName: string): Traces {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withRequestId(requestId: string): Traces {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withLocationInfo(locationInfo: string): Traces {
        this['location_info'] = locationInfo;
        return this;
    }
    public set locationInfo(locationInfo: string  | undefined) {
        this['location_info'] = locationInfo;
    }
    public get locationInfo(): string | undefined {
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
    public set resourceUrl(resourceUrl: string  | undefined) {
        this['resource_url'] = resourceUrl;
    }
    public get resourceUrl(): string | undefined {
        return this['resource_url'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Traces {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withResourceAccountId(resourceAccountId: string): Traces {
        this['resource_account_id'] = resourceAccountId;
        return this;
    }
    public set resourceAccountId(resourceAccountId: string  | undefined) {
        this['resource_account_id'] = resourceAccountId;
    }
    public get resourceAccountId(): string | undefined {
        return this['resource_account_id'];
    }
    public withReadOnly(readOnly: boolean): Traces {
        this['read_only'] = readOnly;
        return this;
    }
    public set readOnly(readOnly: boolean  | undefined) {
        this['read_only'] = readOnly;
    }
    public get readOnly(): boolean | undefined {
        return this['read_only'];
    }
    public withOperationId(operationId: string): Traces {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
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
