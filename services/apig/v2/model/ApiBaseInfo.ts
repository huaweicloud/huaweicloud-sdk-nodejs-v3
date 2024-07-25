import { AuthOpt } from './AuthOpt';


export class ApiBaseInfo {
    public name?: string;
    public type?: ApiBaseInfoTypeEnum | number;
    public version?: string;
    private 'req_protocol'?: ApiBaseInfoReqProtocolEnum | string;
    private 'req_method'?: ApiBaseInfoReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'auth_type'?: ApiBaseInfoAuthTypeEnum | string;
    private 'auth_opt'?: AuthOpt;
    public cors?: boolean;
    private 'match_mode'?: ApiBaseInfoMatchModeEnum | string;
    private 'backend_type'?: ApiBaseInfoBackendTypeEnum | string;
    public remark?: string;
    private 'group_id'?: string;
    private 'body_remark'?: string;
    private 'result_normal_sample'?: string;
    private 'result_failure_sample'?: string;
    private 'authorizer_id'?: string;
    public tags?: Array<string>;
    private 'response_id'?: string;
    private 'roma_app_id'?: string;
    private 'domain_name'?: string;
    public tag?: string;
    private 'content_type'?: ApiBaseInfoContentTypeEnum | string;
    private 'is_send_fg_body_base64'?: boolean;
    public constructor(name?: string, type?: number, reqProtocol?: string, reqMethod?: string, reqUri?: string, authType?: string, backendType?: string, groupId?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['req_protocol'] = reqProtocol;
        this['req_method'] = reqMethod;
        this['req_uri'] = reqUri;
        this['auth_type'] = authType;
        this['backend_type'] = backendType;
        this['group_id'] = groupId;
    }
    public withName(name: string): ApiBaseInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: ApiBaseInfoTypeEnum | number): ApiBaseInfo {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ApiBaseInfo {
        this['version'] = version;
        return this;
    }
    public withReqProtocol(reqProtocol: ApiBaseInfoReqProtocolEnum | string): ApiBaseInfo {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: ApiBaseInfoReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): ApiBaseInfoReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: ApiBaseInfoReqMethodEnum | string): ApiBaseInfo {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiBaseInfoReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiBaseInfoReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ApiBaseInfo {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withAuthType(authType: ApiBaseInfoAuthTypeEnum | string): ApiBaseInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ApiBaseInfoAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ApiBaseInfoAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withAuthOpt(authOpt: AuthOpt): ApiBaseInfo {
        this['auth_opt'] = authOpt;
        return this;
    }
    public set authOpt(authOpt: AuthOpt  | undefined) {
        this['auth_opt'] = authOpt;
    }
    public get authOpt(): AuthOpt | undefined {
        return this['auth_opt'];
    }
    public withCors(cors: boolean): ApiBaseInfo {
        this['cors'] = cors;
        return this;
    }
    public withMatchMode(matchMode: ApiBaseInfoMatchModeEnum | string): ApiBaseInfo {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: ApiBaseInfoMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): ApiBaseInfoMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withBackendType(backendType: ApiBaseInfoBackendTypeEnum | string): ApiBaseInfo {
        this['backend_type'] = backendType;
        return this;
    }
    public set backendType(backendType: ApiBaseInfoBackendTypeEnum | string  | undefined) {
        this['backend_type'] = backendType;
    }
    public get backendType(): ApiBaseInfoBackendTypeEnum | string | undefined {
        return this['backend_type'];
    }
    public withRemark(remark: string): ApiBaseInfo {
        this['remark'] = remark;
        return this;
    }
    public withGroupId(groupId: string): ApiBaseInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBodyRemark(bodyRemark: string): ApiBaseInfo {
        this['body_remark'] = bodyRemark;
        return this;
    }
    public set bodyRemark(bodyRemark: string  | undefined) {
        this['body_remark'] = bodyRemark;
    }
    public get bodyRemark(): string | undefined {
        return this['body_remark'];
    }
    public withResultNormalSample(resultNormalSample: string): ApiBaseInfo {
        this['result_normal_sample'] = resultNormalSample;
        return this;
    }
    public set resultNormalSample(resultNormalSample: string  | undefined) {
        this['result_normal_sample'] = resultNormalSample;
    }
    public get resultNormalSample(): string | undefined {
        return this['result_normal_sample'];
    }
    public withResultFailureSample(resultFailureSample: string): ApiBaseInfo {
        this['result_failure_sample'] = resultFailureSample;
        return this;
    }
    public set resultFailureSample(resultFailureSample: string  | undefined) {
        this['result_failure_sample'] = resultFailureSample;
    }
    public get resultFailureSample(): string | undefined {
        return this['result_failure_sample'];
    }
    public withAuthorizerId(authorizerId: string): ApiBaseInfo {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withTags(tags: Array<string>): ApiBaseInfo {
        this['tags'] = tags;
        return this;
    }
    public withResponseId(responseId: string): ApiBaseInfo {
        this['response_id'] = responseId;
        return this;
    }
    public set responseId(responseId: string  | undefined) {
        this['response_id'] = responseId;
    }
    public get responseId(): string | undefined {
        return this['response_id'];
    }
    public withRomaAppId(romaAppId: string): ApiBaseInfo {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withDomainName(domainName: string): ApiBaseInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withTag(tag: string): ApiBaseInfo {
        this['tag'] = tag;
        return this;
    }
    public withContentType(contentType: ApiBaseInfoContentTypeEnum | string): ApiBaseInfo {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: ApiBaseInfoContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): ApiBaseInfoContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withIsSendFgBodyBase64(isSendFgBodyBase64: boolean): ApiBaseInfo {
        this['is_send_fg_body_base64'] = isSendFgBodyBase64;
        return this;
    }
    public set isSendFgBodyBase64(isSendFgBodyBase64: boolean  | undefined) {
        this['is_send_fg_body_base64'] = isSendFgBodyBase64;
    }
    public get isSendFgBodyBase64(): boolean | undefined {
        return this['is_send_fg_body_base64'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiBaseInfoTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ApiBaseInfoReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    BOTH = 'BOTH',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiBaseInfoReqMethodEnum {
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
export enum ApiBaseInfoAuthTypeEnum {
    NONE = 'NONE',
    APP = 'APP',
    IAM = 'IAM',
    AUTHORIZER = 'AUTHORIZER'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiBaseInfoMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiBaseInfoBackendTypeEnum {
    HTTP = 'HTTP',
    FUNCTION = 'FUNCTION',
    MOCK = 'MOCK',
    GRPC = 'GRPC'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiBaseInfoContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    APPLICATION_XML = 'application/xml',
    MULTIPART_FORM_DATA = 'multipart/form-data',
    TEXT_PLAIN = 'text/plain'
}
