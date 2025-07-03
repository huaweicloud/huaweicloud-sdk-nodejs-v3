

export class ClientSpanInfo {
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
    public constructor() { 
    }
    public withGlobalTraceId(globalTraceId: string): ClientSpanInfo {
        this['global_trace_id'] = globalTraceId;
        return this;
    }
    public set globalTraceId(globalTraceId: string  | undefined) {
        this['global_trace_id'] = globalTraceId;
    }
    public get globalTraceId(): string | undefined {
        return this['global_trace_id'];
    }
    public withGlobalPath(globalPath: string): ClientSpanInfo {
        this['global_path'] = globalPath;
        return this;
    }
    public set globalPath(globalPath: string  | undefined) {
        this['global_path'] = globalPath;
    }
    public get globalPath(): string | undefined {
        return this['global_path'];
    }
    public withTraceId(traceId: string): ClientSpanInfo {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withSpanId(spanId: string): ClientSpanInfo {
        this['span_id'] = spanId;
        return this;
    }
    public set spanId(spanId: string  | undefined) {
        this['span_id'] = spanId;
    }
    public get spanId(): string | undefined {
        return this['span_id'];
    }
    public withEnvId(envId: number): ClientSpanInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withInstanceId(instanceId: number): ClientSpanInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withAppId(appId: number): ClientSpanInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: number  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): number | undefined {
        return this['app_id'];
    }
    public withBizId(bizId: number): ClientSpanInfo {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: number  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): number | undefined {
        return this['biz_id'];
    }
    public withDomainId(domainId: number): ClientSpanInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: number  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): number | undefined {
        return this['domain_id'];
    }
    public withSource(source: string): ClientSpanInfo {
        this['source'] = source;
        return this;
    }
    public withRealSource(realSource: string): ClientSpanInfo {
        this['real_source'] = realSource;
        return this;
    }
    public set realSource(realSource: string  | undefined) {
        this['real_source'] = realSource;
    }
    public get realSource(): string | undefined {
        return this['real_source'];
    }
    public withStartTime(startTime: number): ClientSpanInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTimeUsed(timeUsed: number): ClientSpanInfo {
        this['time_used'] = timeUsed;
        return this;
    }
    public set timeUsed(timeUsed: number  | undefined) {
        this['time_used'] = timeUsed;
    }
    public get timeUsed(): number | undefined {
        return this['time_used'];
    }
    public withCode(code: number): ClientSpanInfo {
        this['code'] = code;
        return this;
    }
    public withClassName(className: string): ClientSpanInfo {
        this['class_name'] = className;
        return this;
    }
    public set className(className: string  | undefined) {
        this['class_name'] = className;
    }
    public get className(): string | undefined {
        return this['class_name'];
    }
    public withIsAsync(isAsync: boolean): ClientSpanInfo {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
    public withTags(tags: { [key: string]: string; }): ClientSpanInfo {
        this['tags'] = tags;
        return this;
    }
    public withHasError(hasError: boolean): ClientSpanInfo {
        this['has_error'] = hasError;
        return this;
    }
    public set hasError(hasError: boolean  | undefined) {
        this['has_error'] = hasError;
    }
    public get hasError(): boolean | undefined {
        return this['has_error'];
    }
    public withErrorReasons(errorReasons: string): ClientSpanInfo {
        this['error_reasons'] = errorReasons;
        return this;
    }
    public set errorReasons(errorReasons: string  | undefined) {
        this['error_reasons'] = errorReasons;
    }
    public get errorReasons(): string | undefined {
        return this['error_reasons'];
    }
    public withType(type: string): ClientSpanInfo {
        this['type'] = type;
        return this;
    }
    public withHttpMethod(httpMethod: string): ClientSpanInfo {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string  | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod(): string | undefined {
        return this['http_method'];
    }
    public withBizCode(bizCode: string): ClientSpanInfo {
        this['biz_code'] = bizCode;
        return this;
    }
    public set bizCode(bizCode: string  | undefined) {
        this['biz_code'] = bizCode;
    }
    public get bizCode(): string | undefined {
        return this['biz_code'];
    }
}