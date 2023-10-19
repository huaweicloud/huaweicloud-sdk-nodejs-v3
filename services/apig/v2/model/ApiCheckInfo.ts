

export class ApiCheckInfo {
    public name?: string;
    private 'req_method'?: ApiCheckInfoReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'match_mode'?: ApiCheckInfoMatchModeEnum | string;
    private 'group_id'?: string;
    private 'roma_app_id'?: string;
    private 'api_id'?: string;
    public constructor() { 
    }
    public withName(name: string): ApiCheckInfo {
        this['name'] = name;
        return this;
    }
    public withReqMethod(reqMethod: ApiCheckInfoReqMethodEnum | string): ApiCheckInfo {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiCheckInfoReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiCheckInfoReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ApiCheckInfo {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withMatchMode(matchMode: ApiCheckInfoMatchModeEnum | string): ApiCheckInfo {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: ApiCheckInfoMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): ApiCheckInfoMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withGroupId(groupId: string): ApiCheckInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withRomaAppId(romaAppId: string): ApiCheckInfo {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withApiId(apiId: string): ApiCheckInfo {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiCheckInfoReqMethodEnum {
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
export enum ApiCheckInfoMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
