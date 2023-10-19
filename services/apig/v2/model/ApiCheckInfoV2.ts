import { ApiCheckInfo } from './ApiCheckInfo';


export class ApiCheckInfoV2 {
    public name?: string;
    private 'req_method'?: ApiCheckInfoV2ReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'match_mode'?: ApiCheckInfoV2MatchModeEnum | string;
    private 'group_id'?: string;
    private 'roma_app_id'?: string;
    private 'api_id'?: string;
    public type?: ApiCheckInfoV2TypeEnum | string;
    public constructor() { 
    }
    public withName(name: string): ApiCheckInfoV2 {
        this['name'] = name;
        return this;
    }
    public withReqMethod(reqMethod: ApiCheckInfoV2ReqMethodEnum | string): ApiCheckInfoV2 {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiCheckInfoV2ReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiCheckInfoV2ReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ApiCheckInfoV2 {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withMatchMode(matchMode: ApiCheckInfoV2MatchModeEnum | string): ApiCheckInfoV2 {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: ApiCheckInfoV2MatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): ApiCheckInfoV2MatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withGroupId(groupId: string): ApiCheckInfoV2 {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withRomaAppId(romaAppId: string): ApiCheckInfoV2 {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withApiId(apiId: string): ApiCheckInfoV2 {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withType(type: ApiCheckInfoV2TypeEnum | string): ApiCheckInfoV2 {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiCheckInfoV2ReqMethodEnum {
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
export enum ApiCheckInfoV2MatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCheckInfoV2TypeEnum {
    PATH = 'path',
    NAME = 'name'
}
