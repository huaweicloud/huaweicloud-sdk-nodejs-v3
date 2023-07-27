import { ApiCommon } from './ApiCommon';
import { ApiFunc } from './ApiFunc';
import { ApiGroupCommonInfo } from './ApiGroupCommonInfo';
import { ApiMock } from './ApiMock';
import { ApiPolicyFunctionResp } from './ApiPolicyFunctionResp';
import { ApiPolicyHttpResp } from './ApiPolicyHttpResp';
import { ApiPolicyMockResp } from './ApiPolicyMockResp';
import { AuthOpt } from './AuthOpt';
import { BackendApi } from './BackendApi';
import { BackendParam } from './BackendParam';
import { ReqParam } from './ReqParam';


export class ApiInfo {
    public name?: string;
    public type?: ApiInfoTypeEnum | number;
    public version?: string;
    private 'req_protocol'?: ApiInfoReqProtocolEnum | string;
    private 'req_method'?: ApiInfoReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'auth_type'?: ApiInfoAuthTypeEnum | string;
    private 'auth_opt'?: AuthOpt;
    public cors?: boolean;
    private 'match_mode'?: ApiInfoMatchModeEnum | string;
    private 'backend_type'?: ApiInfoBackendTypeEnum | string;
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
    private 'content_type'?: ApiInfoContentTypeEnum | string;
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
    private 'policy_https'?: Array<ApiPolicyHttpResp>;
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
    public withName(name: string): ApiInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: ApiInfoTypeEnum | number): ApiInfo {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ApiInfo {
        this['version'] = version;
        return this;
    }
    public withReqProtocol(reqProtocol: ApiInfoReqProtocolEnum | string): ApiInfo {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: ApiInfoReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): ApiInfoReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: ApiInfoReqMethodEnum | string): ApiInfo {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiInfoReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiInfoReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ApiInfo {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withAuthType(authType: ApiInfoAuthTypeEnum | string): ApiInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ApiInfoAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ApiInfoAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withAuthOpt(authOpt: AuthOpt): ApiInfo {
        this['auth_opt'] = authOpt;
        return this;
    }
    public set authOpt(authOpt: AuthOpt  | undefined) {
        this['auth_opt'] = authOpt;
    }
    public get authOpt(): AuthOpt | undefined {
        return this['auth_opt'];
    }
    public withCors(cors: boolean): ApiInfo {
        this['cors'] = cors;
        return this;
    }
    public withMatchMode(matchMode: ApiInfoMatchModeEnum | string): ApiInfo {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: ApiInfoMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): ApiInfoMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withBackendType(backendType: ApiInfoBackendTypeEnum | string): ApiInfo {
        this['backend_type'] = backendType;
        return this;
    }
    public set backendType(backendType: ApiInfoBackendTypeEnum | string  | undefined) {
        this['backend_type'] = backendType;
    }
    public get backendType(): ApiInfoBackendTypeEnum | string | undefined {
        return this['backend_type'];
    }
    public withRemark(remark: string): ApiInfo {
        this['remark'] = remark;
        return this;
    }
    public withGroupId(groupId: string): ApiInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBodyRemark(bodyRemark: string): ApiInfo {
        this['body_remark'] = bodyRemark;
        return this;
    }
    public set bodyRemark(bodyRemark: string  | undefined) {
        this['body_remark'] = bodyRemark;
    }
    public get bodyRemark(): string | undefined {
        return this['body_remark'];
    }
    public withResultNormalSample(resultNormalSample: string): ApiInfo {
        this['result_normal_sample'] = resultNormalSample;
        return this;
    }
    public set resultNormalSample(resultNormalSample: string  | undefined) {
        this['result_normal_sample'] = resultNormalSample;
    }
    public get resultNormalSample(): string | undefined {
        return this['result_normal_sample'];
    }
    public withResultFailureSample(resultFailureSample: string): ApiInfo {
        this['result_failure_sample'] = resultFailureSample;
        return this;
    }
    public set resultFailureSample(resultFailureSample: string  | undefined) {
        this['result_failure_sample'] = resultFailureSample;
    }
    public get resultFailureSample(): string | undefined {
        return this['result_failure_sample'];
    }
    public withAuthorizerId(authorizerId: string): ApiInfo {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withTags(tags: Array<string>): ApiInfo {
        this['tags'] = tags;
        return this;
    }
    public withResponseId(responseId: string): ApiInfo {
        this['response_id'] = responseId;
        return this;
    }
    public set responseId(responseId: string  | undefined) {
        this['response_id'] = responseId;
    }
    public get responseId(): string | undefined {
        return this['response_id'];
    }
    public withRomaAppId(romaAppId: string): ApiInfo {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withDomainName(domainName: string): ApiInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withTag(tag: string): ApiInfo {
        this['tag'] = tag;
        return this;
    }
    public withContentType(contentType: ApiInfoContentTypeEnum | string): ApiInfo {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: ApiInfoContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): ApiInfoContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withId(id: string): ApiInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): ApiInfo {
        this['status'] = status;
        return this;
    }
    public withArrangeNecessary(arrangeNecessary: number): ApiInfo {
        this['arrange_necessary'] = arrangeNecessary;
        return this;
    }
    public set arrangeNecessary(arrangeNecessary: number  | undefined) {
        this['arrange_necessary'] = arrangeNecessary;
    }
    public get arrangeNecessary(): number | undefined {
        return this['arrange_necessary'];
    }
    public withRegisterTime(registerTime: Date): ApiInfo {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withUpdateTime(updateTime: Date): ApiInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withGroupName(groupName: string): ApiInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupVersion(groupVersion: string): ApiInfo {
        this['group_version'] = groupVersion;
        return this;
    }
    public set groupVersion(groupVersion: string  | undefined) {
        this['group_version'] = groupVersion;
    }
    public get groupVersion(): string | undefined {
        return this['group_version'];
    }
    public withRunEnvId(runEnvId: string): ApiInfo {
        this['run_env_id'] = runEnvId;
        return this;
    }
    public set runEnvId(runEnvId: string  | undefined) {
        this['run_env_id'] = runEnvId;
    }
    public get runEnvId(): string | undefined {
        return this['run_env_id'];
    }
    public withRunEnvName(runEnvName: string): ApiInfo {
        this['run_env_name'] = runEnvName;
        return this;
    }
    public set runEnvName(runEnvName: string  | undefined) {
        this['run_env_name'] = runEnvName;
    }
    public get runEnvName(): string | undefined {
        return this['run_env_name'];
    }
    public withPublishId(publishId: string): ApiInfo {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withPublishTime(publishTime: string): ApiInfo {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: string  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): string | undefined {
        return this['publish_time'];
    }
    public withRomaAppName(romaAppName: string): ApiInfo {
        this['roma_app_name'] = romaAppName;
        return this;
    }
    public set romaAppName(romaAppName: string  | undefined) {
        this['roma_app_name'] = romaAppName;
    }
    public get romaAppName(): string | undefined {
        return this['roma_app_name'];
    }
    public withLdApiId(ldApiId: string): ApiInfo {
        this['ld_api_id'] = ldApiId;
        return this;
    }
    public set ldApiId(ldApiId: string  | undefined) {
        this['ld_api_id'] = ldApiId;
    }
    public get ldApiId(): string | undefined {
        return this['ld_api_id'];
    }
    public withBackendApi(backendApi: BackendApi): ApiInfo {
        this['backend_api'] = backendApi;
        return this;
    }
    public set backendApi(backendApi: BackendApi  | undefined) {
        this['backend_api'] = backendApi;
    }
    public get backendApi(): BackendApi | undefined {
        return this['backend_api'];
    }
    public withApiGroupInfo(apiGroupInfo: ApiGroupCommonInfo): ApiInfo {
        this['api_group_info'] = apiGroupInfo;
        return this;
    }
    public set apiGroupInfo(apiGroupInfo: ApiGroupCommonInfo  | undefined) {
        this['api_group_info'] = apiGroupInfo;
    }
    public get apiGroupInfo(): ApiGroupCommonInfo | undefined {
        return this['api_group_info'];
    }
    public withFuncInfo(funcInfo: ApiFunc): ApiInfo {
        this['func_info'] = funcInfo;
        return this;
    }
    public set funcInfo(funcInfo: ApiFunc  | undefined) {
        this['func_info'] = funcInfo;
    }
    public get funcInfo(): ApiFunc | undefined {
        return this['func_info'];
    }
    public withMockInfo(mockInfo: ApiMock): ApiInfo {
        this['mock_info'] = mockInfo;
        return this;
    }
    public set mockInfo(mockInfo: ApiMock  | undefined) {
        this['mock_info'] = mockInfo;
    }
    public get mockInfo(): ApiMock | undefined {
        return this['mock_info'];
    }
    public withReqParams(reqParams: Array<ReqParam>): ApiInfo {
        this['req_params'] = reqParams;
        return this;
    }
    public set reqParams(reqParams: Array<ReqParam>  | undefined) {
        this['req_params'] = reqParams;
    }
    public get reqParams(): Array<ReqParam> | undefined {
        return this['req_params'];
    }
    public withBackendParams(backendParams: Array<BackendParam>): ApiInfo {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParam>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParam> | undefined {
        return this['backend_params'];
    }
    public withPolicyFunctions(policyFunctions: Array<ApiPolicyFunctionResp>): ApiInfo {
        this['policy_functions'] = policyFunctions;
        return this;
    }
    public set policyFunctions(policyFunctions: Array<ApiPolicyFunctionResp>  | undefined) {
        this['policy_functions'] = policyFunctions;
    }
    public get policyFunctions(): Array<ApiPolicyFunctionResp> | undefined {
        return this['policy_functions'];
    }
    public withPolicyMocks(policyMocks: Array<ApiPolicyMockResp>): ApiInfo {
        this['policy_mocks'] = policyMocks;
        return this;
    }
    public set policyMocks(policyMocks: Array<ApiPolicyMockResp>  | undefined) {
        this['policy_mocks'] = policyMocks;
    }
    public get policyMocks(): Array<ApiPolicyMockResp> | undefined {
        return this['policy_mocks'];
    }
    public withPolicyHttps(policyHttps: Array<ApiPolicyHttpResp>): ApiInfo {
        this['policy_https'] = policyHttps;
        return this;
    }
    public set policyHttps(policyHttps: Array<ApiPolicyHttpResp>  | undefined) {
        this['policy_https'] = policyHttps;
    }
    public get policyHttps(): Array<ApiPolicyHttpResp> | undefined {
        return this['policy_https'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiInfoTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ApiInfoReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    BOTH = 'BOTH'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiInfoReqMethodEnum {
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
export enum ApiInfoAuthTypeEnum {
    NONE = 'NONE',
    APP = 'APP',
    IAM = 'IAM',
    AUTHORIZER = 'AUTHORIZER'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiInfoMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiInfoBackendTypeEnum {
    HTTP = 'HTTP',
    FUNCTION = 'FUNCTION',
    MOCK = 'MOCK'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiInfoContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    APPLICATION_XML = 'application/xml',
    MULTIPART_FORM_DATE = 'multipart/form-date',
    TEXT_PLAIN = 'text/plain'
}
