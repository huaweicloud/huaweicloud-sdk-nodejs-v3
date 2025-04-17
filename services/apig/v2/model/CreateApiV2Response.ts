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

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApiV2Response extends SdkResponse {
    public name?: string;
    public type?: CreateApiV2ResponseTypeEnum | number;
    public version?: string;
    private 'req_protocol'?: CreateApiV2ResponseReqProtocolEnum | string;
    private 'req_method'?: CreateApiV2ResponseReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'auth_type'?: CreateApiV2ResponseAuthTypeEnum | string;
    private 'auth_opt'?: AuthOpt;
    public cors?: boolean;
    private 'trace_enabled'?: boolean;
    private 'sampling_strategy'?: CreateApiV2ResponseSamplingStrategyEnum | string;
    private 'sampling_param'?: string;
    private 'match_mode'?: CreateApiV2ResponseMatchModeEnum | string;
    private 'backend_type'?: CreateApiV2ResponseBackendTypeEnum | string;
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
    private 'content_type'?: CreateApiV2ResponseContentTypeEnum | string;
    private 'is_send_fg_body_base64'?: boolean;
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
        super();
        this['name'] = name;
        this['type'] = type;
        this['req_protocol'] = reqProtocol;
        this['req_method'] = reqMethod;
        this['req_uri'] = reqUri;
        this['auth_type'] = authType;
        this['backend_type'] = backendType;
        this['group_id'] = groupId;
    }
    public withName(name: string): CreateApiV2Response {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateApiV2ResponseTypeEnum | number): CreateApiV2Response {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): CreateApiV2Response {
        this['version'] = version;
        return this;
    }
    public withReqProtocol(reqProtocol: CreateApiV2ResponseReqProtocolEnum | string): CreateApiV2Response {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: CreateApiV2ResponseReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): CreateApiV2ResponseReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: CreateApiV2ResponseReqMethodEnum | string): CreateApiV2Response {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: CreateApiV2ResponseReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): CreateApiV2ResponseReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): CreateApiV2Response {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withAuthType(authType: CreateApiV2ResponseAuthTypeEnum | string): CreateApiV2Response {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: CreateApiV2ResponseAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): CreateApiV2ResponseAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withAuthOpt(authOpt: AuthOpt): CreateApiV2Response {
        this['auth_opt'] = authOpt;
        return this;
    }
    public set authOpt(authOpt: AuthOpt  | undefined) {
        this['auth_opt'] = authOpt;
    }
    public get authOpt(): AuthOpt | undefined {
        return this['auth_opt'];
    }
    public withCors(cors: boolean): CreateApiV2Response {
        this['cors'] = cors;
        return this;
    }
    public withTraceEnabled(traceEnabled: boolean): CreateApiV2Response {
        this['trace_enabled'] = traceEnabled;
        return this;
    }
    public set traceEnabled(traceEnabled: boolean  | undefined) {
        this['trace_enabled'] = traceEnabled;
    }
    public get traceEnabled(): boolean | undefined {
        return this['trace_enabled'];
    }
    public withSamplingStrategy(samplingStrategy: CreateApiV2ResponseSamplingStrategyEnum | string): CreateApiV2Response {
        this['sampling_strategy'] = samplingStrategy;
        return this;
    }
    public set samplingStrategy(samplingStrategy: CreateApiV2ResponseSamplingStrategyEnum | string  | undefined) {
        this['sampling_strategy'] = samplingStrategy;
    }
    public get samplingStrategy(): CreateApiV2ResponseSamplingStrategyEnum | string | undefined {
        return this['sampling_strategy'];
    }
    public withSamplingParam(samplingParam: string): CreateApiV2Response {
        this['sampling_param'] = samplingParam;
        return this;
    }
    public set samplingParam(samplingParam: string  | undefined) {
        this['sampling_param'] = samplingParam;
    }
    public get samplingParam(): string | undefined {
        return this['sampling_param'];
    }
    public withMatchMode(matchMode: CreateApiV2ResponseMatchModeEnum | string): CreateApiV2Response {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: CreateApiV2ResponseMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): CreateApiV2ResponseMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withBackendType(backendType: CreateApiV2ResponseBackendTypeEnum | string): CreateApiV2Response {
        this['backend_type'] = backendType;
        return this;
    }
    public set backendType(backendType: CreateApiV2ResponseBackendTypeEnum | string  | undefined) {
        this['backend_type'] = backendType;
    }
    public get backendType(): CreateApiV2ResponseBackendTypeEnum | string | undefined {
        return this['backend_type'];
    }
    public withRemark(remark: string): CreateApiV2Response {
        this['remark'] = remark;
        return this;
    }
    public withGroupId(groupId: string): CreateApiV2Response {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBodyRemark(bodyRemark: string): CreateApiV2Response {
        this['body_remark'] = bodyRemark;
        return this;
    }
    public set bodyRemark(bodyRemark: string  | undefined) {
        this['body_remark'] = bodyRemark;
    }
    public get bodyRemark(): string | undefined {
        return this['body_remark'];
    }
    public withResultNormalSample(resultNormalSample: string): CreateApiV2Response {
        this['result_normal_sample'] = resultNormalSample;
        return this;
    }
    public set resultNormalSample(resultNormalSample: string  | undefined) {
        this['result_normal_sample'] = resultNormalSample;
    }
    public get resultNormalSample(): string | undefined {
        return this['result_normal_sample'];
    }
    public withResultFailureSample(resultFailureSample: string): CreateApiV2Response {
        this['result_failure_sample'] = resultFailureSample;
        return this;
    }
    public set resultFailureSample(resultFailureSample: string  | undefined) {
        this['result_failure_sample'] = resultFailureSample;
    }
    public get resultFailureSample(): string | undefined {
        return this['result_failure_sample'];
    }
    public withAuthorizerId(authorizerId: string): CreateApiV2Response {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withTags(tags: Array<string>): CreateApiV2Response {
        this['tags'] = tags;
        return this;
    }
    public withResponseId(responseId: string): CreateApiV2Response {
        this['response_id'] = responseId;
        return this;
    }
    public set responseId(responseId: string  | undefined) {
        this['response_id'] = responseId;
    }
    public get responseId(): string | undefined {
        return this['response_id'];
    }
    public withRomaAppId(romaAppId: string): CreateApiV2Response {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withDomainName(domainName: string): CreateApiV2Response {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withTag(tag: string): CreateApiV2Response {
        this['tag'] = tag;
        return this;
    }
    public withContentType(contentType: CreateApiV2ResponseContentTypeEnum | string): CreateApiV2Response {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateApiV2ResponseContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): CreateApiV2ResponseContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withIsSendFgBodyBase64(isSendFgBodyBase64: boolean): CreateApiV2Response {
        this['is_send_fg_body_base64'] = isSendFgBodyBase64;
        return this;
    }
    public set isSendFgBodyBase64(isSendFgBodyBase64: boolean  | undefined) {
        this['is_send_fg_body_base64'] = isSendFgBodyBase64;
    }
    public get isSendFgBodyBase64(): boolean | undefined {
        return this['is_send_fg_body_base64'];
    }
    public withId(id: string): CreateApiV2Response {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): CreateApiV2Response {
        this['status'] = status;
        return this;
    }
    public withArrangeNecessary(arrangeNecessary: number): CreateApiV2Response {
        this['arrange_necessary'] = arrangeNecessary;
        return this;
    }
    public set arrangeNecessary(arrangeNecessary: number  | undefined) {
        this['arrange_necessary'] = arrangeNecessary;
    }
    public get arrangeNecessary(): number | undefined {
        return this['arrange_necessary'];
    }
    public withRegisterTime(registerTime: Date): CreateApiV2Response {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withUpdateTime(updateTime: Date): CreateApiV2Response {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withGroupName(groupName: string): CreateApiV2Response {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupVersion(groupVersion: string): CreateApiV2Response {
        this['group_version'] = groupVersion;
        return this;
    }
    public set groupVersion(groupVersion: string  | undefined) {
        this['group_version'] = groupVersion;
    }
    public get groupVersion(): string | undefined {
        return this['group_version'];
    }
    public withRunEnvId(runEnvId: string): CreateApiV2Response {
        this['run_env_id'] = runEnvId;
        return this;
    }
    public set runEnvId(runEnvId: string  | undefined) {
        this['run_env_id'] = runEnvId;
    }
    public get runEnvId(): string | undefined {
        return this['run_env_id'];
    }
    public withRunEnvName(runEnvName: string): CreateApiV2Response {
        this['run_env_name'] = runEnvName;
        return this;
    }
    public set runEnvName(runEnvName: string  | undefined) {
        this['run_env_name'] = runEnvName;
    }
    public get runEnvName(): string | undefined {
        return this['run_env_name'];
    }
    public withPublishId(publishId: string): CreateApiV2Response {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withPublishTime(publishTime: string): CreateApiV2Response {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: string  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): string | undefined {
        return this['publish_time'];
    }
    public withRomaAppName(romaAppName: string): CreateApiV2Response {
        this['roma_app_name'] = romaAppName;
        return this;
    }
    public set romaAppName(romaAppName: string  | undefined) {
        this['roma_app_name'] = romaAppName;
    }
    public get romaAppName(): string | undefined {
        return this['roma_app_name'];
    }
    public withLdApiId(ldApiId: string): CreateApiV2Response {
        this['ld_api_id'] = ldApiId;
        return this;
    }
    public set ldApiId(ldApiId: string  | undefined) {
        this['ld_api_id'] = ldApiId;
    }
    public get ldApiId(): string | undefined {
        return this['ld_api_id'];
    }
    public withBackendApi(backendApi: BackendApi): CreateApiV2Response {
        this['backend_api'] = backendApi;
        return this;
    }
    public set backendApi(backendApi: BackendApi  | undefined) {
        this['backend_api'] = backendApi;
    }
    public get backendApi(): BackendApi | undefined {
        return this['backend_api'];
    }
    public withApiGroupInfo(apiGroupInfo: ApiGroupCommonInfo): CreateApiV2Response {
        this['api_group_info'] = apiGroupInfo;
        return this;
    }
    public set apiGroupInfo(apiGroupInfo: ApiGroupCommonInfo  | undefined) {
        this['api_group_info'] = apiGroupInfo;
    }
    public get apiGroupInfo(): ApiGroupCommonInfo | undefined {
        return this['api_group_info'];
    }
    public withFuncInfo(funcInfo: ApiFunc): CreateApiV2Response {
        this['func_info'] = funcInfo;
        return this;
    }
    public set funcInfo(funcInfo: ApiFunc  | undefined) {
        this['func_info'] = funcInfo;
    }
    public get funcInfo(): ApiFunc | undefined {
        return this['func_info'];
    }
    public withMockInfo(mockInfo: ApiMock): CreateApiV2Response {
        this['mock_info'] = mockInfo;
        return this;
    }
    public set mockInfo(mockInfo: ApiMock  | undefined) {
        this['mock_info'] = mockInfo;
    }
    public get mockInfo(): ApiMock | undefined {
        return this['mock_info'];
    }
    public withReqParams(reqParams: Array<ReqParam>): CreateApiV2Response {
        this['req_params'] = reqParams;
        return this;
    }
    public set reqParams(reqParams: Array<ReqParam>  | undefined) {
        this['req_params'] = reqParams;
    }
    public get reqParams(): Array<ReqParam> | undefined {
        return this['req_params'];
    }
    public withBackendParams(backendParams: Array<BackendParam>): CreateApiV2Response {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParam>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParam> | undefined {
        return this['backend_params'];
    }
    public withPolicyFunctions(policyFunctions: Array<ApiPolicyFunctionResp>): CreateApiV2Response {
        this['policy_functions'] = policyFunctions;
        return this;
    }
    public set policyFunctions(policyFunctions: Array<ApiPolicyFunctionResp>  | undefined) {
        this['policy_functions'] = policyFunctions;
    }
    public get policyFunctions(): Array<ApiPolicyFunctionResp> | undefined {
        return this['policy_functions'];
    }
    public withPolicyMocks(policyMocks: Array<ApiPolicyMockResp>): CreateApiV2Response {
        this['policy_mocks'] = policyMocks;
        return this;
    }
    public set policyMocks(policyMocks: Array<ApiPolicyMockResp>  | undefined) {
        this['policy_mocks'] = policyMocks;
    }
    public get policyMocks(): Array<ApiPolicyMockResp> | undefined {
        return this['policy_mocks'];
    }
    public withPolicyHttps(policyHttps: Array<ApiPolicyHttpResp>): CreateApiV2Response {
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
export enum CreateApiV2ResponseTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum CreateApiV2ResponseReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    BOTH = 'BOTH',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateApiV2ResponseReqMethodEnum {
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
export enum CreateApiV2ResponseAuthTypeEnum {
    NONE = 'NONE',
    APP = 'APP',
    IAM = 'IAM',
    AUTHORIZER = 'AUTHORIZER'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateApiV2ResponseSamplingStrategyEnum {
    RATE = 'RATE'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateApiV2ResponseMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateApiV2ResponseBackendTypeEnum {
    HTTP = 'HTTP',
    FUNCTION = 'FUNCTION',
    MOCK = 'MOCK',
    GRPC = 'GRPC'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateApiV2ResponseContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    APPLICATION_XML = 'application/xml',
    MULTIPART_FORM_DATA = 'multipart/form-data',
    TEXT_PLAIN = 'text/plain'
}
