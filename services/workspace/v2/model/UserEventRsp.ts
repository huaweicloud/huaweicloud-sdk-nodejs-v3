

export class UserEventRsp {
    private 'project_id'?: string;
    public username?: string;
    private 'workspace_id'?: string;
    private 'event_trace_id'?: string;
    private 'event_type'?: string;
    private 'event_time'?: string;
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'client_type'?: string;
    private 'client_ip'?: string;
    private 'client_mac'?: string;
    private 'source_ip'?: string;
    private 'is_success'?: boolean;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withProjectId(projectId: string): UserEventRsp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUsername(username: string): UserEventRsp {
        this['username'] = username;
        return this;
    }
    public withWorkspaceId(workspaceId: string): UserEventRsp {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withEventTraceId(eventTraceId: string): UserEventRsp {
        this['event_trace_id'] = eventTraceId;
        return this;
    }
    public set eventTraceId(eventTraceId: string  | undefined) {
        this['event_trace_id'] = eventTraceId;
    }
    public get eventTraceId(): string | undefined {
        return this['event_trace_id'];
    }
    public withEventType(eventType: string): UserEventRsp {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withEventTime(eventTime: string): UserEventRsp {
        this['event_time'] = eventTime;
        return this;
    }
    public set eventTime(eventTime: string  | undefined) {
        this['event_time'] = eventTime;
    }
    public get eventTime(): string | undefined {
        return this['event_time'];
    }
    public withResourceType(resourceType: string): UserEventRsp {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): UserEventRsp {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): UserEventRsp {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withClientType(clientType: string): UserEventRsp {
        this['client_type'] = clientType;
        return this;
    }
    public set clientType(clientType: string  | undefined) {
        this['client_type'] = clientType;
    }
    public get clientType(): string | undefined {
        return this['client_type'];
    }
    public withClientIp(clientIp: string): UserEventRsp {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withClientMac(clientMac: string): UserEventRsp {
        this['client_mac'] = clientMac;
        return this;
    }
    public set clientMac(clientMac: string  | undefined) {
        this['client_mac'] = clientMac;
    }
    public get clientMac(): string | undefined {
        return this['client_mac'];
    }
    public withSourceIp(sourceIp: string): UserEventRsp {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: string  | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp(): string | undefined {
        return this['source_ip'];
    }
    public withIsSuccess(isSuccess: boolean): UserEventRsp {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withErrorCode(errorCode: string): UserEventRsp {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): UserEventRsp {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}