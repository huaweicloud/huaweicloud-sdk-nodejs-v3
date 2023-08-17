import { ApiBaseInfo } from './ApiBaseInfo';
import { ApiGroupCommonInfo } from './ApiGroupCommonInfo';
import { AuthOpt } from './AuthOpt';
import { BackendApi } from './BackendApi';


export class ApiRespBaseInfo {
    public name?: string;
    public type?: ApiRespBaseInfoTypeEnum | number;
    public version?: string;
    private 'req_protocol'?: ApiRespBaseInfoReqProtocolEnum | string;
    private 'req_method'?: ApiRespBaseInfoReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'auth_type'?: ApiRespBaseInfoAuthTypeEnum | string;
    private 'auth_opt'?: AuthOpt;
    public cors?: boolean;
    private 'match_mode'?: ApiRespBaseInfoMatchModeEnum | string;
    private 'backend_type'?: ApiRespBaseInfoBackendTypeEnum | string;
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
    private 'content_type'?: ApiRespBaseInfoContentTypeEnum | string;
    public id?: string;
    public status?: number;
    private 'arrange_necessary'?: number;
    private 'register_time'?: Date;
    private 'update_time'?: Date;
    private 'group_name'?: string;
    private 'group_version'?: string;
    private 'run_env_id'?: string;
    private 'run_env_name'?: string;
    private 'publish_id'?: string;
    private 'publish_time'?: string;
    private 'roma_app_name'?: string;
    private 'ld_api_id'?: string;
    private 'backend_api'?: BackendApi;
    private 'api_group_info'?: ApiGroupCommonInfo;
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
    public withName(name: string): ApiRespBaseInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: ApiRespBaseInfoTypeEnum | number): ApiRespBaseInfo {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ApiRespBaseInfo {
        this['version'] = version;
        return this;
    }
    public withReqProtocol(reqProtocol: ApiRespBaseInfoReqProtocolEnum | string): ApiRespBaseInfo {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: ApiRespBaseInfoReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): ApiRespBaseInfoReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: ApiRespBaseInfoReqMethodEnum | string): ApiRespBaseInfo {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiRespBaseInfoReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiRespBaseInfoReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ApiRespBaseInfo {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withAuthType(authType: ApiRespBaseInfoAuthTypeEnum | string): ApiRespBaseInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ApiRespBaseInfoAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ApiRespBaseInfoAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withAuthOpt(authOpt: AuthOpt): ApiRespBaseInfo {
        this['auth_opt'] = authOpt;
        return this;
    }
    public set authOpt(authOpt: AuthOpt  | undefined) {
        this['auth_opt'] = authOpt;
    }
    public get authOpt(): AuthOpt | undefined {
        return this['auth_opt'];
    }
    public withCors(cors: boolean): ApiRespBaseInfo {
        this['cors'] = cors;
        return this;
    }
    public withMatchMode(matchMode: ApiRespBaseInfoMatchModeEnum | string): ApiRespBaseInfo {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: ApiRespBaseInfoMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): ApiRespBaseInfoMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withBackendType(backendType: ApiRespBaseInfoBackendTypeEnum | string): ApiRespBaseInfo {
        this['backend_type'] = backendType;
        return this;
    }
    public set backendType(backendType: ApiRespBaseInfoBackendTypeEnum | string  | undefined) {
        this['backend_type'] = backendType;
    }
    public get backendType(): ApiRespBaseInfoBackendTypeEnum | string | undefined {
        return this['backend_type'];
    }
    public withRemark(remark: string): ApiRespBaseInfo {
        this['remark'] = remark;
        return this;
    }
    public withGroupId(groupId: string): ApiRespBaseInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBodyRemark(bodyRemark: string): ApiRespBaseInfo {
        this['body_remark'] = bodyRemark;
        return this;
    }
    public set bodyRemark(bodyRemark: string  | undefined) {
        this['body_remark'] = bodyRemark;
    }
    public get bodyRemark(): string | undefined {
        return this['body_remark'];
    }
    public withResultNormalSample(resultNormalSample: string): ApiRespBaseInfo {
        this['result_normal_sample'] = resultNormalSample;
        return this;
    }
    public set resultNormalSample(resultNormalSample: string  | undefined) {
        this['result_normal_sample'] = resultNormalSample;
    }
    public get resultNormalSample(): string | undefined {
        return this['result_normal_sample'];
    }
    public withResultFailureSample(resultFailureSample: string): ApiRespBaseInfo {
        this['result_failure_sample'] = resultFailureSample;
        return this;
    }
    public set resultFailureSample(resultFailureSample: string  | undefined) {
        this['result_failure_sample'] = resultFailureSample;
    }
    public get resultFailureSample(): string | undefined {
        return this['result_failure_sample'];
    }
    public withAuthorizerId(authorizerId: string): ApiRespBaseInfo {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withTags(tags: Array<string>): ApiRespBaseInfo {
        this['tags'] = tags;
        return this;
    }
    public withResponseId(responseId: string): ApiRespBaseInfo {
        this['response_id'] = responseId;
        return this;
    }
    public set responseId(responseId: string  | undefined) {
        this['response_id'] = responseId;
    }
    public get responseId(): string | undefined {
        return this['response_id'];
    }
    public withRomaAppId(romaAppId: string): ApiRespBaseInfo {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withDomainName(domainName: string): ApiRespBaseInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withTag(tag: string): ApiRespBaseInfo {
        this['tag'] = tag;
        return this;
    }
    public withContentType(contentType: ApiRespBaseInfoContentTypeEnum | string): ApiRespBaseInfo {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: ApiRespBaseInfoContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): ApiRespBaseInfoContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withId(id: string): ApiRespBaseInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): ApiRespBaseInfo {
        this['status'] = status;
        return this;
    }
    public withArrangeNecessary(arrangeNecessary: number): ApiRespBaseInfo {
        this['arrange_necessary'] = arrangeNecessary;
        return this;
    }
    public set arrangeNecessary(arrangeNecessary: number  | undefined) {
        this['arrange_necessary'] = arrangeNecessary;
    }
    public get arrangeNecessary(): number | undefined {
        return this['arrange_necessary'];
    }
    public withRegisterTime(registerTime: Date): ApiRespBaseInfo {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withUpdateTime(updateTime: Date): ApiRespBaseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withGroupName(groupName: string): ApiRespBaseInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupVersion(groupVersion: string): ApiRespBaseInfo {
        this['group_version'] = groupVersion;
        return this;
    }
    public set groupVersion(groupVersion: string  | undefined) {
        this['group_version'] = groupVersion;
    }
    public get groupVersion(): string | undefined {
        return this['group_version'];
    }
    public withRunEnvId(runEnvId: string): ApiRespBaseInfo {
        this['run_env_id'] = runEnvId;
        return this;
    }
    public set runEnvId(runEnvId: string  | undefined) {
        this['run_env_id'] = runEnvId;
    }
    public get runEnvId(): string | undefined {
        return this['run_env_id'];
    }
    public withRunEnvName(runEnvName: string): ApiRespBaseInfo {
        this['run_env_name'] = runEnvName;
        return this;
    }
    public set runEnvName(runEnvName: string  | undefined) {
        this['run_env_name'] = runEnvName;
    }
    public get runEnvName(): string | undefined {
        return this['run_env_name'];
    }
    public withPublishId(publishId: string): ApiRespBaseInfo {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withPublishTime(publishTime: string): ApiRespBaseInfo {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: string  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): string | undefined {
        return this['publish_time'];
    }
    public withRomaAppName(romaAppName: string): ApiRespBaseInfo {
        this['roma_app_name'] = romaAppName;
        return this;
    }
    public set romaAppName(romaAppName: string  | undefined) {
        this['roma_app_name'] = romaAppName;
    }
    public get romaAppName(): string | undefined {
        return this['roma_app_name'];
    }
    public withLdApiId(ldApiId: string): ApiRespBaseInfo {
        this['ld_api_id'] = ldApiId;
        return this;
    }
    public set ldApiId(ldApiId: string  | undefined) {
        this['ld_api_id'] = ldApiId;
    }
    public get ldApiId(): string | undefined {
        return this['ld_api_id'];
    }
    public withBackendApi(backendApi: BackendApi): ApiRespBaseInfo {
        this['backend_api'] = backendApi;
        return this;
    }
    public set backendApi(backendApi: BackendApi  | undefined) {
        this['backend_api'] = backendApi;
    }
    public get backendApi(): BackendApi | undefined {
        return this['backend_api'];
    }
    public withApiGroupInfo(apiGroupInfo: ApiGroupCommonInfo): ApiRespBaseInfo {
        this['api_group_info'] = apiGroupInfo;
        return this;
    }
    public set apiGroupInfo(apiGroupInfo: ApiGroupCommonInfo  | undefined) {
        this['api_group_info'] = apiGroupInfo;
    }
    public get apiGroupInfo(): ApiGroupCommonInfo | undefined {
        return this['api_group_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiRespBaseInfoTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ApiRespBaseInfoReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    BOTH = 'BOTH',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiRespBaseInfoReqMethodEnum {
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
export enum ApiRespBaseInfoAuthTypeEnum {
    NONE = 'NONE',
    APP = 'APP',
    IAM = 'IAM',
    AUTHORIZER = 'AUTHORIZER'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiRespBaseInfoMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiRespBaseInfoBackendTypeEnum {
    HTTP = 'HTTP',
    FUNCTION = 'FUNCTION',
    MOCK = 'MOCK',
    GRPC = 'GRPC'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiRespBaseInfoContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    APPLICATION_XML = 'application/xml',
    MULTIPART_FORM_DATE = 'multipart/form-date',
    TEXT_PLAIN = 'text/plain'
}
