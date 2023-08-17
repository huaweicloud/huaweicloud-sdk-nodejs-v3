import { ApiFunc } from './ApiFunc';
import { ApiGroupCommonInfo } from './ApiGroupCommonInfo';
import { ApiMock } from './ApiMock';
import { ApiPolicyFunctionResp } from './ApiPolicyFunctionResp';
import { ApiPolicyMockResp } from './ApiPolicyMockResp';
import { ApiRespBaseInfo } from './ApiRespBaseInfo';
import { AuthOpt } from './AuthOpt';
import { BackendApi } from './BackendApi';
import { BackendParam } from './BackendParam';
import { ReqParam } from './ReqParam';


export class ApiCommon {
    public name?: string;
    public type?: ApiCommonTypeEnum | number;
    public version?: string;
    private 'req_protocol'?: ApiCommonReqProtocolEnum | string;
    private 'req_method'?: ApiCommonReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'auth_type'?: ApiCommonAuthTypeEnum | string;
    private 'auth_opt'?: AuthOpt;
    public cors?: boolean;
    private 'match_mode'?: ApiCommonMatchModeEnum | string;
    private 'backend_type'?: ApiCommonBackendTypeEnum | string;
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
    private 'content_type'?: ApiCommonContentTypeEnum | string;
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
    private 'func_info'?: ApiFunc;
    private 'mock_info'?: ApiMock;
    private 'req_params'?: Array<ReqParam>;
    private 'backend_params'?: Array<BackendParam>;
    private 'policy_functions'?: Array<ApiPolicyFunctionResp>;
    private 'policy_mocks'?: Array<ApiPolicyMockResp>;
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
    public withName(name: string): ApiCommon {
        this['name'] = name;
        return this;
    }
    public withType(type: ApiCommonTypeEnum | number): ApiCommon {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ApiCommon {
        this['version'] = version;
        return this;
    }
    public withReqProtocol(reqProtocol: ApiCommonReqProtocolEnum | string): ApiCommon {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: ApiCommonReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): ApiCommonReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: ApiCommonReqMethodEnum | string): ApiCommon {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiCommonReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiCommonReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ApiCommon {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withAuthType(authType: ApiCommonAuthTypeEnum | string): ApiCommon {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ApiCommonAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ApiCommonAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withAuthOpt(authOpt: AuthOpt): ApiCommon {
        this['auth_opt'] = authOpt;
        return this;
    }
    public set authOpt(authOpt: AuthOpt  | undefined) {
        this['auth_opt'] = authOpt;
    }
    public get authOpt(): AuthOpt | undefined {
        return this['auth_opt'];
    }
    public withCors(cors: boolean): ApiCommon {
        this['cors'] = cors;
        return this;
    }
    public withMatchMode(matchMode: ApiCommonMatchModeEnum | string): ApiCommon {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: ApiCommonMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): ApiCommonMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withBackendType(backendType: ApiCommonBackendTypeEnum | string): ApiCommon {
        this['backend_type'] = backendType;
        return this;
    }
    public set backendType(backendType: ApiCommonBackendTypeEnum | string  | undefined) {
        this['backend_type'] = backendType;
    }
    public get backendType(): ApiCommonBackendTypeEnum | string | undefined {
        return this['backend_type'];
    }
    public withRemark(remark: string): ApiCommon {
        this['remark'] = remark;
        return this;
    }
    public withGroupId(groupId: string): ApiCommon {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBodyRemark(bodyRemark: string): ApiCommon {
        this['body_remark'] = bodyRemark;
        return this;
    }
    public set bodyRemark(bodyRemark: string  | undefined) {
        this['body_remark'] = bodyRemark;
    }
    public get bodyRemark(): string | undefined {
        return this['body_remark'];
    }
    public withResultNormalSample(resultNormalSample: string): ApiCommon {
        this['result_normal_sample'] = resultNormalSample;
        return this;
    }
    public set resultNormalSample(resultNormalSample: string  | undefined) {
        this['result_normal_sample'] = resultNormalSample;
    }
    public get resultNormalSample(): string | undefined {
        return this['result_normal_sample'];
    }
    public withResultFailureSample(resultFailureSample: string): ApiCommon {
        this['result_failure_sample'] = resultFailureSample;
        return this;
    }
    public set resultFailureSample(resultFailureSample: string  | undefined) {
        this['result_failure_sample'] = resultFailureSample;
    }
    public get resultFailureSample(): string | undefined {
        return this['result_failure_sample'];
    }
    public withAuthorizerId(authorizerId: string): ApiCommon {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withTags(tags: Array<string>): ApiCommon {
        this['tags'] = tags;
        return this;
    }
    public withResponseId(responseId: string): ApiCommon {
        this['response_id'] = responseId;
        return this;
    }
    public set responseId(responseId: string  | undefined) {
        this['response_id'] = responseId;
    }
    public get responseId(): string | undefined {
        return this['response_id'];
    }
    public withRomaAppId(romaAppId: string): ApiCommon {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withDomainName(domainName: string): ApiCommon {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withTag(tag: string): ApiCommon {
        this['tag'] = tag;
        return this;
    }
    public withContentType(contentType: ApiCommonContentTypeEnum | string): ApiCommon {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: ApiCommonContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): ApiCommonContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withId(id: string): ApiCommon {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): ApiCommon {
        this['status'] = status;
        return this;
    }
    public withArrangeNecessary(arrangeNecessary: number): ApiCommon {
        this['arrange_necessary'] = arrangeNecessary;
        return this;
    }
    public set arrangeNecessary(arrangeNecessary: number  | undefined) {
        this['arrange_necessary'] = arrangeNecessary;
    }
    public get arrangeNecessary(): number | undefined {
        return this['arrange_necessary'];
    }
    public withRegisterTime(registerTime: Date): ApiCommon {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withUpdateTime(updateTime: Date): ApiCommon {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withGroupName(groupName: string): ApiCommon {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupVersion(groupVersion: string): ApiCommon {
        this['group_version'] = groupVersion;
        return this;
    }
    public set groupVersion(groupVersion: string  | undefined) {
        this['group_version'] = groupVersion;
    }
    public get groupVersion(): string | undefined {
        return this['group_version'];
    }
    public withRunEnvId(runEnvId: string): ApiCommon {
        this['run_env_id'] = runEnvId;
        return this;
    }
    public set runEnvId(runEnvId: string  | undefined) {
        this['run_env_id'] = runEnvId;
    }
    public get runEnvId(): string | undefined {
        return this['run_env_id'];
    }
    public withRunEnvName(runEnvName: string): ApiCommon {
        this['run_env_name'] = runEnvName;
        return this;
    }
    public set runEnvName(runEnvName: string  | undefined) {
        this['run_env_name'] = runEnvName;
    }
    public get runEnvName(): string | undefined {
        return this['run_env_name'];
    }
    public withPublishId(publishId: string): ApiCommon {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withPublishTime(publishTime: string): ApiCommon {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: string  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): string | undefined {
        return this['publish_time'];
    }
    public withRomaAppName(romaAppName: string): ApiCommon {
        this['roma_app_name'] = romaAppName;
        return this;
    }
    public set romaAppName(romaAppName: string  | undefined) {
        this['roma_app_name'] = romaAppName;
    }
    public get romaAppName(): string | undefined {
        return this['roma_app_name'];
    }
    public withLdApiId(ldApiId: string): ApiCommon {
        this['ld_api_id'] = ldApiId;
        return this;
    }
    public set ldApiId(ldApiId: string  | undefined) {
        this['ld_api_id'] = ldApiId;
    }
    public get ldApiId(): string | undefined {
        return this['ld_api_id'];
    }
    public withBackendApi(backendApi: BackendApi): ApiCommon {
        this['backend_api'] = backendApi;
        return this;
    }
    public set backendApi(backendApi: BackendApi  | undefined) {
        this['backend_api'] = backendApi;
    }
    public get backendApi(): BackendApi | undefined {
        return this['backend_api'];
    }
    public withApiGroupInfo(apiGroupInfo: ApiGroupCommonInfo): ApiCommon {
        this['api_group_info'] = apiGroupInfo;
        return this;
    }
    public set apiGroupInfo(apiGroupInfo: ApiGroupCommonInfo  | undefined) {
        this['api_group_info'] = apiGroupInfo;
    }
    public get apiGroupInfo(): ApiGroupCommonInfo | undefined {
        return this['api_group_info'];
    }
    public withFuncInfo(funcInfo: ApiFunc): ApiCommon {
        this['func_info'] = funcInfo;
        return this;
    }
    public set funcInfo(funcInfo: ApiFunc  | undefined) {
        this['func_info'] = funcInfo;
    }
    public get funcInfo(): ApiFunc | undefined {
        return this['func_info'];
    }
    public withMockInfo(mockInfo: ApiMock): ApiCommon {
        this['mock_info'] = mockInfo;
        return this;
    }
    public set mockInfo(mockInfo: ApiMock  | undefined) {
        this['mock_info'] = mockInfo;
    }
    public get mockInfo(): ApiMock | undefined {
        return this['mock_info'];
    }
    public withReqParams(reqParams: Array<ReqParam>): ApiCommon {
        this['req_params'] = reqParams;
        return this;
    }
    public set reqParams(reqParams: Array<ReqParam>  | undefined) {
        this['req_params'] = reqParams;
    }
    public get reqParams(): Array<ReqParam> | undefined {
        return this['req_params'];
    }
    public withBackendParams(backendParams: Array<BackendParam>): ApiCommon {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParam>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParam> | undefined {
        return this['backend_params'];
    }
    public withPolicyFunctions(policyFunctions: Array<ApiPolicyFunctionResp>): ApiCommon {
        this['policy_functions'] = policyFunctions;
        return this;
    }
    public set policyFunctions(policyFunctions: Array<ApiPolicyFunctionResp>  | undefined) {
        this['policy_functions'] = policyFunctions;
    }
    public get policyFunctions(): Array<ApiPolicyFunctionResp> | undefined {
        return this['policy_functions'];
    }
    public withPolicyMocks(policyMocks: Array<ApiPolicyMockResp>): ApiCommon {
        this['policy_mocks'] = policyMocks;
        return this;
    }
    public set policyMocks(policyMocks: Array<ApiPolicyMockResp>  | undefined) {
        this['policy_mocks'] = policyMocks;
    }
    public get policyMocks(): Array<ApiPolicyMockResp> | undefined {
        return this['policy_mocks'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiCommonTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCommonReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    BOTH = 'BOTH',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCommonReqMethodEnum {
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
export enum ApiCommonAuthTypeEnum {
    NONE = 'NONE',
    APP = 'APP',
    IAM = 'IAM',
    AUTHORIZER = 'AUTHORIZER'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCommonMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCommonBackendTypeEnum {
    HTTP = 'HTTP',
    FUNCTION = 'FUNCTION',
    MOCK = 'MOCK',
    GRPC = 'GRPC'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCommonContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    APPLICATION_XML = 'application/xml',
    MULTIPART_FORM_DATE = 'multipart/form-date',
    TEXT_PLAIN = 'text/plain'
}
