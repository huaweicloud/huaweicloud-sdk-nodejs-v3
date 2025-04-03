

export class InstanceAccesslog {
    public id?: string;
    private 'request_id'?: string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'access_time'?: number;
    public duration?: number;
    private 'status_code'?: string;
    private 'error_code'?: string;
    private 'error_message'?: string;
    public detail?: string;
    private 'in_flow_size'?: number;
    private 'out_flow_size'?: number;
    private 'out_total_size'?: number;
    public constructor() { 
    }
    public withId(id: string): InstanceAccesslog {
        this['id'] = id;
        return this;
    }
    public withRequestId(requestId: string): InstanceAccesslog {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withApiId(apiId: string): InstanceAccesslog {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): InstanceAccesslog {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withAppId(appId: string): InstanceAccesslog {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): InstanceAccesslog {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAccessTime(accessTime: number): InstanceAccesslog {
        this['access_time'] = accessTime;
        return this;
    }
    public set accessTime(accessTime: number  | undefined) {
        this['access_time'] = accessTime;
    }
    public get accessTime(): number | undefined {
        return this['access_time'];
    }
    public withDuration(duration: number): InstanceAccesslog {
        this['duration'] = duration;
        return this;
    }
    public withStatusCode(statusCode: string): InstanceAccesslog {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): string | undefined {
        return this['status_code'];
    }
    public withErrorCode(errorCode: string): InstanceAccesslog {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): InstanceAccesslog {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withDetail(detail: string): InstanceAccesslog {
        this['detail'] = detail;
        return this;
    }
    public withInFlowSize(inFlowSize: number): InstanceAccesslog {
        this['in_flow_size'] = inFlowSize;
        return this;
    }
    public set inFlowSize(inFlowSize: number  | undefined) {
        this['in_flow_size'] = inFlowSize;
    }
    public get inFlowSize(): number | undefined {
        return this['in_flow_size'];
    }
    public withOutFlowSize(outFlowSize: number): InstanceAccesslog {
        this['out_flow_size'] = outFlowSize;
        return this;
    }
    public set outFlowSize(outFlowSize: number  | undefined) {
        this['out_flow_size'] = outFlowSize;
    }
    public get outFlowSize(): number | undefined {
        return this['out_flow_size'];
    }
    public withOutTotalSize(outTotalSize: number): InstanceAccesslog {
        this['out_total_size'] = outTotalSize;
        return this;
    }
    public set outTotalSize(outTotalSize: number  | undefined) {
        this['out_total_size'] = outTotalSize;
    }
    public get outTotalSize(): number | undefined {
        return this['out_total_size'];
    }
}