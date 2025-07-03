import { OrderParam } from './OrderParam';


export class TraceSearchParam {
    public region?: string;
    private 'order_param'?: OrderParam;
    private 'real_source_full_match'?: boolean;
    private 'source_full_match'?: boolean;
    private 'tags_content'?: string;
    private 'start_time_string'?: string;
    private 'end_time_string'?: string;
    private 'time_used_min'?: number;
    private 'time_used_max'?: string;
    private 'contain_tags_content'?: boolean;
    private 'page_size'?: number;
    public page?: number;
    public parameters?: string;
    public codes?: Array<number>;
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
    public constructor(region?: string, bizId?: number) { 
        this['region'] = region;
        this['biz_id'] = bizId;
    }
    public withRegion(region: string): TraceSearchParam {
        this['region'] = region;
        return this;
    }
    public withOrderParam(orderParam: OrderParam): TraceSearchParam {
        this['order_param'] = orderParam;
        return this;
    }
    public set orderParam(orderParam: OrderParam  | undefined) {
        this['order_param'] = orderParam;
    }
    public get orderParam(): OrderParam | undefined {
        return this['order_param'];
    }
    public withRealSourceFullMatch(realSourceFullMatch: boolean): TraceSearchParam {
        this['real_source_full_match'] = realSourceFullMatch;
        return this;
    }
    public set realSourceFullMatch(realSourceFullMatch: boolean  | undefined) {
        this['real_source_full_match'] = realSourceFullMatch;
    }
    public get realSourceFullMatch(): boolean | undefined {
        return this['real_source_full_match'];
    }
    public withSourceFullMatch(sourceFullMatch: boolean): TraceSearchParam {
        this['source_full_match'] = sourceFullMatch;
        return this;
    }
    public set sourceFullMatch(sourceFullMatch: boolean  | undefined) {
        this['source_full_match'] = sourceFullMatch;
    }
    public get sourceFullMatch(): boolean | undefined {
        return this['source_full_match'];
    }
    public withTagsContent(tagsContent: string): TraceSearchParam {
        this['tags_content'] = tagsContent;
        return this;
    }
    public set tagsContent(tagsContent: string  | undefined) {
        this['tags_content'] = tagsContent;
    }
    public get tagsContent(): string | undefined {
        return this['tags_content'];
    }
    public withStartTimeString(startTimeString: string): TraceSearchParam {
        this['start_time_string'] = startTimeString;
        return this;
    }
    public set startTimeString(startTimeString: string  | undefined) {
        this['start_time_string'] = startTimeString;
    }
    public get startTimeString(): string | undefined {
        return this['start_time_string'];
    }
    public withEndTimeString(endTimeString: string): TraceSearchParam {
        this['end_time_string'] = endTimeString;
        return this;
    }
    public set endTimeString(endTimeString: string  | undefined) {
        this['end_time_string'] = endTimeString;
    }
    public get endTimeString(): string | undefined {
        return this['end_time_string'];
    }
    public withTimeUsedMin(timeUsedMin: number): TraceSearchParam {
        this['time_used_min'] = timeUsedMin;
        return this;
    }
    public set timeUsedMin(timeUsedMin: number  | undefined) {
        this['time_used_min'] = timeUsedMin;
    }
    public get timeUsedMin(): number | undefined {
        return this['time_used_min'];
    }
    public withTimeUsedMax(timeUsedMax: string): TraceSearchParam {
        this['time_used_max'] = timeUsedMax;
        return this;
    }
    public set timeUsedMax(timeUsedMax: string  | undefined) {
        this['time_used_max'] = timeUsedMax;
    }
    public get timeUsedMax(): string | undefined {
        return this['time_used_max'];
    }
    public withContainTagsContent(containTagsContent: boolean): TraceSearchParam {
        this['contain_tags_content'] = containTagsContent;
        return this;
    }
    public set containTagsContent(containTagsContent: boolean  | undefined) {
        this['contain_tags_content'] = containTagsContent;
    }
    public get containTagsContent(): boolean | undefined {
        return this['contain_tags_content'];
    }
    public withPageSize(pageSize: number): TraceSearchParam {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPage(page: number): TraceSearchParam {
        this['page'] = page;
        return this;
    }
    public withParameters(parameters: string): TraceSearchParam {
        this['parameters'] = parameters;
        return this;
    }
    public withCodes(codes: Array<number>): TraceSearchParam {
        this['codes'] = codes;
        return this;
    }
    public withGlobalTraceId(globalTraceId: string): TraceSearchParam {
        this['global_trace_id'] = globalTraceId;
        return this;
    }
    public set globalTraceId(globalTraceId: string  | undefined) {
        this['global_trace_id'] = globalTraceId;
    }
    public get globalTraceId(): string | undefined {
        return this['global_trace_id'];
    }
    public withGlobalPath(globalPath: string): TraceSearchParam {
        this['global_path'] = globalPath;
        return this;
    }
    public set globalPath(globalPath: string  | undefined) {
        this['global_path'] = globalPath;
    }
    public get globalPath(): string | undefined {
        return this['global_path'];
    }
    public withTraceId(traceId: string): TraceSearchParam {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withSpanId(spanId: string): TraceSearchParam {
        this['span_id'] = spanId;
        return this;
    }
    public set spanId(spanId: string  | undefined) {
        this['span_id'] = spanId;
    }
    public get spanId(): string | undefined {
        return this['span_id'];
    }
    public withEnvId(envId: number): TraceSearchParam {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withInstanceId(instanceId: number): TraceSearchParam {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withAppId(appId: number): TraceSearchParam {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: number  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): number | undefined {
        return this['app_id'];
    }
    public withBizId(bizId: number): TraceSearchParam {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: number  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): number | undefined {
        return this['biz_id'];
    }
    public withDomainId(domainId: number): TraceSearchParam {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: number  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): number | undefined {
        return this['domain_id'];
    }
    public withSource(source: string): TraceSearchParam {
        this['source'] = source;
        return this;
    }
    public withRealSource(realSource: string): TraceSearchParam {
        this['real_source'] = realSource;
        return this;
    }
    public set realSource(realSource: string  | undefined) {
        this['real_source'] = realSource;
    }
    public get realSource(): string | undefined {
        return this['real_source'];
    }
    public withStartTime(startTime: number): TraceSearchParam {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTimeUsed(timeUsed: number): TraceSearchParam {
        this['time_used'] = timeUsed;
        return this;
    }
    public set timeUsed(timeUsed: number  | undefined) {
        this['time_used'] = timeUsed;
    }
    public get timeUsed(): number | undefined {
        return this['time_used'];
    }
    public withCode(code: number): TraceSearchParam {
        this['code'] = code;
        return this;
    }
    public withClassName(className: string): TraceSearchParam {
        this['class_name'] = className;
        return this;
    }
    public set className(className: string  | undefined) {
        this['class_name'] = className;
    }
    public get className(): string | undefined {
        return this['class_name'];
    }
    public withIsAsync(isAsync: boolean): TraceSearchParam {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
    public withTags(tags: { [key: string]: string; }): TraceSearchParam {
        this['tags'] = tags;
        return this;
    }
    public withHasError(hasError: boolean): TraceSearchParam {
        this['has_error'] = hasError;
        return this;
    }
    public set hasError(hasError: boolean  | undefined) {
        this['has_error'] = hasError;
    }
    public get hasError(): boolean | undefined {
        return this['has_error'];
    }
    public withErrorReasons(errorReasons: string): TraceSearchParam {
        this['error_reasons'] = errorReasons;
        return this;
    }
    public set errorReasons(errorReasons: string  | undefined) {
        this['error_reasons'] = errorReasons;
    }
    public get errorReasons(): string | undefined {
        return this['error_reasons'];
    }
    public withType(type: string): TraceSearchParam {
        this['type'] = type;
        return this;
    }
    public withHttpMethod(httpMethod: string): TraceSearchParam {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string  | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod(): string | undefined {
        return this['http_method'];
    }
    public withBizCode(bizCode: string): TraceSearchParam {
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