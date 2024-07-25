

export class OrchestrationApiInfo {
    private 'api_id'?: string;
    private 'api_name'?: string;
    private 'req_method'?: OrchestrationApiInfoReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'auth_type'?: OrchestrationApiInfoAuthTypeEnum | string;
    private 'match_mode'?: OrchestrationApiInfoMatchModeEnum | string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'attached_time'?: Date;
    public constructor() { 
    }
    public withApiId(apiId: string): OrchestrationApiInfo {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): OrchestrationApiInfo {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withReqMethod(reqMethod: OrchestrationApiInfoReqMethodEnum | string): OrchestrationApiInfo {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: OrchestrationApiInfoReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): OrchestrationApiInfoReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): OrchestrationApiInfo {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withAuthType(authType: OrchestrationApiInfoAuthTypeEnum | string): OrchestrationApiInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: OrchestrationApiInfoAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): OrchestrationApiInfoAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withMatchMode(matchMode: OrchestrationApiInfoMatchModeEnum | string): OrchestrationApiInfo {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: OrchestrationApiInfoMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): OrchestrationApiInfoMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withGroupId(groupId: string): OrchestrationApiInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): OrchestrationApiInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withAttachedTime(attachedTime: Date): OrchestrationApiInfo {
        this['attached_time'] = attachedTime;
        return this;
    }
    public set attachedTime(attachedTime: Date  | undefined) {
        this['attached_time'] = attachedTime;
    }
    public get attachedTime(): Date | undefined {
        return this['attached_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OrchestrationApiInfoReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
/**
    * @export
    * @enum {string}
    */
export enum OrchestrationApiInfoAuthTypeEnum {
    NONE = 'NONE',
    APP = 'APP',
    IAM = 'IAM',
    AUTHORIZER = 'AUTHORIZER'
}
/**
    * @export
    * @enum {string}
    */
export enum OrchestrationApiInfoMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
