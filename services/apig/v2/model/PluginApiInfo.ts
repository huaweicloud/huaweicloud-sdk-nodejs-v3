

export class PluginApiInfo {
    private 'api_id'?: string;
    private 'api_name'?: string;
    public type?: number;
    private 'req_protocol'?: PluginApiInfoReqProtocolEnum | string;
    private 'req_method'?: PluginApiInfoReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'auth_type'?: PluginApiInfoAuthTypeEnum | string;
    private 'match_mode'?: PluginApiInfoMatchModeEnum | string;
    public remark?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'roma_app_id'?: string;
    private 'env_id'?: string;
    private 'env_name'?: string;
    private 'publish_id'?: string;
    private 'plugin_attach_id'?: string;
    private 'attached_time'?: Date;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withApiId(apiId: string): PluginApiInfo {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): PluginApiInfo {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withType(type: number): PluginApiInfo {
        this['type'] = type;
        return this;
    }
    public withReqProtocol(reqProtocol: PluginApiInfoReqProtocolEnum | string): PluginApiInfo {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: PluginApiInfoReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): PluginApiInfoReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: PluginApiInfoReqMethodEnum | string): PluginApiInfo {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: PluginApiInfoReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): PluginApiInfoReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): PluginApiInfo {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withAuthType(authType: PluginApiInfoAuthTypeEnum | string): PluginApiInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: PluginApiInfoAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): PluginApiInfoAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withMatchMode(matchMode: PluginApiInfoMatchModeEnum | string): PluginApiInfo {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: PluginApiInfoMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): PluginApiInfoMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withRemark(remark: string): PluginApiInfo {
        this['remark'] = remark;
        return this;
    }
    public withGroupId(groupId: string): PluginApiInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): PluginApiInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withRomaAppId(romaAppId: string): PluginApiInfo {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withEnvId(envId: string): PluginApiInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withEnvName(envName: string): PluginApiInfo {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withPublishId(publishId: string): PluginApiInfo {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withPluginAttachId(pluginAttachId: string): PluginApiInfo {
        this['plugin_attach_id'] = pluginAttachId;
        return this;
    }
    public set pluginAttachId(pluginAttachId: string  | undefined) {
        this['plugin_attach_id'] = pluginAttachId;
    }
    public get pluginAttachId(): string | undefined {
        return this['plugin_attach_id'];
    }
    public withAttachedTime(attachedTime: Date): PluginApiInfo {
        this['attached_time'] = attachedTime;
        return this;
    }
    public set attachedTime(attachedTime: Date  | undefined) {
        this['attached_time'] = attachedTime;
    }
    public get attachedTime(): Date | undefined {
        return this['attached_time'];
    }
    public withTags(tags: Array<string>): PluginApiInfo {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PluginApiInfoReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    BOTH = 'BOTH'
}
/**
    * @export
    * @enum {string}
    */
export enum PluginApiInfoReqMethodEnum {
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
export enum PluginApiInfoAuthTypeEnum {
    NONE = 'NONE',
    APP = 'APP',
    IAM = 'IAM',
    AUTHORIZER = 'AUTHORIZER'
}
/**
    * @export
    * @enum {string}
    */
export enum PluginApiInfoMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
