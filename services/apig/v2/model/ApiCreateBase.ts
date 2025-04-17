import { ApiBaseInfo } from './ApiBaseInfo';
import { ApiFuncCreate } from './ApiFuncCreate';
import { ApiMockCreate } from './ApiMockCreate';
import { ApiPolicyFunctionCreate } from './ApiPolicyFunctionCreate';
import { ApiPolicyMockCreate } from './ApiPolicyMockCreate';
import { AuthOpt } from './AuthOpt';
import { BackendParamBase } from './BackendParamBase';
import { ReqParamBase } from './ReqParamBase';


export class ApiCreateBase {
    public name?: string;
    public type?: ApiCreateBaseTypeEnum | number;
    public version?: string;
    private 'req_protocol'?: ApiCreateBaseReqProtocolEnum | string;
    private 'req_method'?: ApiCreateBaseReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'auth_type'?: ApiCreateBaseAuthTypeEnum | string;
    private 'auth_opt'?: AuthOpt;
    public cors?: boolean;
    private 'trace_enabled'?: boolean;
    private 'sampling_strategy'?: ApiCreateBaseSamplingStrategyEnum | string;
    private 'sampling_param'?: string;
    private 'match_mode'?: ApiCreateBaseMatchModeEnum | string;
    private 'backend_type'?: ApiCreateBaseBackendTypeEnum | string;
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
    private 'content_type'?: ApiCreateBaseContentTypeEnum | string;
    private 'is_send_fg_body_base64'?: boolean;
    private 'mock_info'?: ApiMockCreate;
    private 'func_info'?: ApiFuncCreate;
    private 'req_params'?: Array<ReqParamBase>;
    private 'backend_params'?: Array<BackendParamBase>;
    private 'policy_mocks'?: Array<ApiPolicyMockCreate>;
    private 'policy_functions'?: Array<ApiPolicyFunctionCreate>;
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
    public withName(name: string): ApiCreateBase {
        this['name'] = name;
        return this;
    }
    public withType(type: ApiCreateBaseTypeEnum | number): ApiCreateBase {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ApiCreateBase {
        this['version'] = version;
        return this;
    }
    public withReqProtocol(reqProtocol: ApiCreateBaseReqProtocolEnum | string): ApiCreateBase {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: ApiCreateBaseReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): ApiCreateBaseReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: ApiCreateBaseReqMethodEnum | string): ApiCreateBase {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiCreateBaseReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiCreateBaseReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ApiCreateBase {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withAuthType(authType: ApiCreateBaseAuthTypeEnum | string): ApiCreateBase {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ApiCreateBaseAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ApiCreateBaseAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withAuthOpt(authOpt: AuthOpt): ApiCreateBase {
        this['auth_opt'] = authOpt;
        return this;
    }
    public set authOpt(authOpt: AuthOpt  | undefined) {
        this['auth_opt'] = authOpt;
    }
    public get authOpt(): AuthOpt | undefined {
        return this['auth_opt'];
    }
    public withCors(cors: boolean): ApiCreateBase {
        this['cors'] = cors;
        return this;
    }
    public withTraceEnabled(traceEnabled: boolean): ApiCreateBase {
        this['trace_enabled'] = traceEnabled;
        return this;
    }
    public set traceEnabled(traceEnabled: boolean  | undefined) {
        this['trace_enabled'] = traceEnabled;
    }
    public get traceEnabled(): boolean | undefined {
        return this['trace_enabled'];
    }
    public withSamplingStrategy(samplingStrategy: ApiCreateBaseSamplingStrategyEnum | string): ApiCreateBase {
        this['sampling_strategy'] = samplingStrategy;
        return this;
    }
    public set samplingStrategy(samplingStrategy: ApiCreateBaseSamplingStrategyEnum | string  | undefined) {
        this['sampling_strategy'] = samplingStrategy;
    }
    public get samplingStrategy(): ApiCreateBaseSamplingStrategyEnum | string | undefined {
        return this['sampling_strategy'];
    }
    public withSamplingParam(samplingParam: string): ApiCreateBase {
        this['sampling_param'] = samplingParam;
        return this;
    }
    public set samplingParam(samplingParam: string  | undefined) {
        this['sampling_param'] = samplingParam;
    }
    public get samplingParam(): string | undefined {
        return this['sampling_param'];
    }
    public withMatchMode(matchMode: ApiCreateBaseMatchModeEnum | string): ApiCreateBase {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: ApiCreateBaseMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): ApiCreateBaseMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withBackendType(backendType: ApiCreateBaseBackendTypeEnum | string): ApiCreateBase {
        this['backend_type'] = backendType;
        return this;
    }
    public set backendType(backendType: ApiCreateBaseBackendTypeEnum | string  | undefined) {
        this['backend_type'] = backendType;
    }
    public get backendType(): ApiCreateBaseBackendTypeEnum | string | undefined {
        return this['backend_type'];
    }
    public withRemark(remark: string): ApiCreateBase {
        this['remark'] = remark;
        return this;
    }
    public withGroupId(groupId: string): ApiCreateBase {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBodyRemark(bodyRemark: string): ApiCreateBase {
        this['body_remark'] = bodyRemark;
        return this;
    }
    public set bodyRemark(bodyRemark: string  | undefined) {
        this['body_remark'] = bodyRemark;
    }
    public get bodyRemark(): string | undefined {
        return this['body_remark'];
    }
    public withResultNormalSample(resultNormalSample: string): ApiCreateBase {
        this['result_normal_sample'] = resultNormalSample;
        return this;
    }
    public set resultNormalSample(resultNormalSample: string  | undefined) {
        this['result_normal_sample'] = resultNormalSample;
    }
    public get resultNormalSample(): string | undefined {
        return this['result_normal_sample'];
    }
    public withResultFailureSample(resultFailureSample: string): ApiCreateBase {
        this['result_failure_sample'] = resultFailureSample;
        return this;
    }
    public set resultFailureSample(resultFailureSample: string  | undefined) {
        this['result_failure_sample'] = resultFailureSample;
    }
    public get resultFailureSample(): string | undefined {
        return this['result_failure_sample'];
    }
    public withAuthorizerId(authorizerId: string): ApiCreateBase {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withTags(tags: Array<string>): ApiCreateBase {
        this['tags'] = tags;
        return this;
    }
    public withResponseId(responseId: string): ApiCreateBase {
        this['response_id'] = responseId;
        return this;
    }
    public set responseId(responseId: string  | undefined) {
        this['response_id'] = responseId;
    }
    public get responseId(): string | undefined {
        return this['response_id'];
    }
    public withRomaAppId(romaAppId: string): ApiCreateBase {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withDomainName(domainName: string): ApiCreateBase {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withTag(tag: string): ApiCreateBase {
        this['tag'] = tag;
        return this;
    }
    public withContentType(contentType: ApiCreateBaseContentTypeEnum | string): ApiCreateBase {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: ApiCreateBaseContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): ApiCreateBaseContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withIsSendFgBodyBase64(isSendFgBodyBase64: boolean): ApiCreateBase {
        this['is_send_fg_body_base64'] = isSendFgBodyBase64;
        return this;
    }
    public set isSendFgBodyBase64(isSendFgBodyBase64: boolean  | undefined) {
        this['is_send_fg_body_base64'] = isSendFgBodyBase64;
    }
    public get isSendFgBodyBase64(): boolean | undefined {
        return this['is_send_fg_body_base64'];
    }
    public withMockInfo(mockInfo: ApiMockCreate): ApiCreateBase {
        this['mock_info'] = mockInfo;
        return this;
    }
    public set mockInfo(mockInfo: ApiMockCreate  | undefined) {
        this['mock_info'] = mockInfo;
    }
    public get mockInfo(): ApiMockCreate | undefined {
        return this['mock_info'];
    }
    public withFuncInfo(funcInfo: ApiFuncCreate): ApiCreateBase {
        this['func_info'] = funcInfo;
        return this;
    }
    public set funcInfo(funcInfo: ApiFuncCreate  | undefined) {
        this['func_info'] = funcInfo;
    }
    public get funcInfo(): ApiFuncCreate | undefined {
        return this['func_info'];
    }
    public withReqParams(reqParams: Array<ReqParamBase>): ApiCreateBase {
        this['req_params'] = reqParams;
        return this;
    }
    public set reqParams(reqParams: Array<ReqParamBase>  | undefined) {
        this['req_params'] = reqParams;
    }
    public get reqParams(): Array<ReqParamBase> | undefined {
        return this['req_params'];
    }
    public withBackendParams(backendParams: Array<BackendParamBase>): ApiCreateBase {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParamBase>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParamBase> | undefined {
        return this['backend_params'];
    }
    public withPolicyMocks(policyMocks: Array<ApiPolicyMockCreate>): ApiCreateBase {
        this['policy_mocks'] = policyMocks;
        return this;
    }
    public set policyMocks(policyMocks: Array<ApiPolicyMockCreate>  | undefined) {
        this['policy_mocks'] = policyMocks;
    }
    public get policyMocks(): Array<ApiPolicyMockCreate> | undefined {
        return this['policy_mocks'];
    }
    public withPolicyFunctions(policyFunctions: Array<ApiPolicyFunctionCreate>): ApiCreateBase {
        this['policy_functions'] = policyFunctions;
        return this;
    }
    public set policyFunctions(policyFunctions: Array<ApiPolicyFunctionCreate>  | undefined) {
        this['policy_functions'] = policyFunctions;
    }
    public get policyFunctions(): Array<ApiPolicyFunctionCreate> | undefined {
        return this['policy_functions'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiCreateBaseTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCreateBaseReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    BOTH = 'BOTH',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCreateBaseReqMethodEnum {
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
export enum ApiCreateBaseAuthTypeEnum {
    NONE = 'NONE',
    APP = 'APP',
    IAM = 'IAM',
    AUTHORIZER = 'AUTHORIZER'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCreateBaseSamplingStrategyEnum {
    RATE = 'RATE'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCreateBaseMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCreateBaseBackendTypeEnum {
    HTTP = 'HTTP',
    FUNCTION = 'FUNCTION',
    MOCK = 'MOCK',
    GRPC = 'GRPC'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCreateBaseContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    APPLICATION_XML = 'application/xml',
    MULTIPART_FORM_DATA = 'multipart/form-data',
    TEXT_PLAIN = 'text/plain'
}
