import { DiscardInfo } from './DiscardInfo';


export class SpanEventInfo {
    private 'env_name'?: string;
    private 'app_name'?: string;
    public indent?: number;
    public region?: string;
    private 'host_name'?: string;
    private 'ip_address'?: string;
    private 'instance_name'?: string;
    private 'event_id'?: string;
    private 'next_spanId'?: string;
    private 'source_event_id'?: string;
    public method?: string;
    private 'children_event_count'?: number;
    public discard?: Array<DiscardInfo>;
    public argument?: string;
    public attachment?: { [key: string]: string; };
    private 'global_trace_id'?: string;
    private 'global_path'?: string;
    private 'trace_id'?: string;
    private 'span_id'?: string;
    private 'env_id'?: number;
    private 'instance_id'?: number;
    private 'app_id'?: number;
    private 'biz_id'?: number;
    private 'domain_id'?: number;
    public source?: string;
    private 'real_source'?: string;
    private 'start_time'?: number;
    private 'time_used'?: number;
    public code?: number;
    private 'class_name'?: string;
    private 'is_async'?: boolean;
    public tags?: { [key: string]: string; };
    private 'has_error'?: boolean;
    private 'error_reasons'?: string;
    public type?: string;
    private 'http_method'?: string;
    private 'biz_code'?: string;
    public id?: string;
    public constructor() { 
    }
    public withEnvName(envName: string): SpanEventInfo {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withAppName(appName: string): SpanEventInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withIndent(indent: number): SpanEventInfo {
        this['indent'] = indent;
        return this;
    }
    public withRegion(region: string): SpanEventInfo {
        this['region'] = region;
        return this;
    }
    public withHostName(hostName: string): SpanEventInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withIpAddress(ipAddress: string): SpanEventInfo {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withInstanceName(instanceName: string): SpanEventInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withEventId(eventId: string): SpanEventInfo {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withNextSpanId(nextSpanId: string): SpanEventInfo {
        this['next_spanId'] = nextSpanId;
        return this;
    }
    public set nextSpanId(nextSpanId: string  | undefined) {
        this['next_spanId'] = nextSpanId;
    }
    public get nextSpanId(): string | undefined {
        return this['next_spanId'];
    }
    public withSourceEventId(sourceEventId: string): SpanEventInfo {
        this['source_event_id'] = sourceEventId;
        return this;
    }
    public set sourceEventId(sourceEventId: string  | undefined) {
        this['source_event_id'] = sourceEventId;
    }
    public get sourceEventId(): string | undefined {
        return this['source_event_id'];
    }
    public withMethod(method: string): SpanEventInfo {
        this['method'] = method;
        return this;
    }
    public withChildrenEventCount(childrenEventCount: number): SpanEventInfo {
        this['children_event_count'] = childrenEventCount;
        return this;
    }
    public set childrenEventCount(childrenEventCount: number  | undefined) {
        this['children_event_count'] = childrenEventCount;
    }
    public get childrenEventCount(): number | undefined {
        return this['children_event_count'];
    }
    public withDiscard(discard: Array<DiscardInfo>): SpanEventInfo {
        this['discard'] = discard;
        return this;
    }
    public withArgument(argument: string): SpanEventInfo {
        this['argument'] = argument;
        return this;
    }
    public withAttachment(attachment: { [key: string]: string; }): SpanEventInfo {
        this['attachment'] = attachment;
        return this;
    }
    public withGlobalTraceId(globalTraceId: string): SpanEventInfo {
        this['global_trace_id'] = globalTraceId;
        return this;
    }
    public set globalTraceId(globalTraceId: string  | undefined) {
        this['global_trace_id'] = globalTraceId;
    }
    public get globalTraceId(): string | undefined {
        return this['global_trace_id'];
    }
    public withGlobalPath(globalPath: string): SpanEventInfo {
        this['global_path'] = globalPath;
        return this;
    }
    public set globalPath(globalPath: string  | undefined) {
        this['global_path'] = globalPath;
    }
    public get globalPath(): string | undefined {
        return this['global_path'];
    }
    public withTraceId(traceId: string): SpanEventInfo {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withSpanId(spanId: string): SpanEventInfo {
        this['span_id'] = spanId;
        return this;
    }
    public set spanId(spanId: string  | undefined) {
        this['span_id'] = spanId;
    }
    public get spanId(): string | undefined {
        return this['span_id'];
    }
    public withEnvId(envId: number): SpanEventInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withInstanceId(instanceId: number): SpanEventInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withAppId(appId: number): SpanEventInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: number  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): number | undefined {
        return this['app_id'];
    }
    public withBizId(bizId: number): SpanEventInfo {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: number  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): number | undefined {
        return this['biz_id'];
    }
    public withDomainId(domainId: number): SpanEventInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: number  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): number | undefined {
        return this['domain_id'];
    }
    public withSource(source: string): SpanEventInfo {
        this['source'] = source;
        return this;
    }
    public withRealSource(realSource: string): SpanEventInfo {
        this['real_source'] = realSource;
        return this;
    }
    public set realSource(realSource: string  | undefined) {
        this['real_source'] = realSource;
    }
    public get realSource(): string | undefined {
        return this['real_source'];
    }
    public withStartTime(startTime: number): SpanEventInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTimeUsed(timeUsed: number): SpanEventInfo {
        this['time_used'] = timeUsed;
        return this;
    }
    public set timeUsed(timeUsed: number  | undefined) {
        this['time_used'] = timeUsed;
    }
    public get timeUsed(): number | undefined {
        return this['time_used'];
    }
    public withCode(code: number): SpanEventInfo {
        this['code'] = code;
        return this;
    }
    public withClassName(className: string): SpanEventInfo {
        this['class_name'] = className;
        return this;
    }
    public set className(className: string  | undefined) {
        this['class_name'] = className;
    }
    public get className(): string | undefined {
        return this['class_name'];
    }
    public withIsAsync(isAsync: boolean): SpanEventInfo {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
    public withTags(tags: { [key: string]: string; }): SpanEventInfo {
        this['tags'] = tags;
        return this;
    }
    public withHasError(hasError: boolean): SpanEventInfo {
        this['has_error'] = hasError;
        return this;
    }
    public set hasError(hasError: boolean  | undefined) {
        this['has_error'] = hasError;
    }
    public get hasError(): boolean | undefined {
        return this['has_error'];
    }
    public withErrorReasons(errorReasons: string): SpanEventInfo {
        this['error_reasons'] = errorReasons;
        return this;
    }
    public set errorReasons(errorReasons: string  | undefined) {
        this['error_reasons'] = errorReasons;
    }
    public get errorReasons(): string | undefined {
        return this['error_reasons'];
    }
    public withType(type: string): SpanEventInfo {
        this['type'] = type;
        return this;
    }
    public withHttpMethod(httpMethod: string): SpanEventInfo {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string  | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod(): string | undefined {
        return this['http_method'];
    }
    public withBizCode(bizCode: string): SpanEventInfo {
        this['biz_code'] = bizCode;
        return this;
    }
    public set bizCode(bizCode: string  | undefined) {
        this['biz_code'] = bizCode;
    }
    public get bizCode(): string | undefined {
        return this['biz_code'];
    }
    public withId(id: string): SpanEventInfo {
        this['id'] = id;
        return this;
    }
}