import { ApiCreateBase } from './ApiCreateBase';
import { ApiFuncCreate } from './ApiFuncCreate';
import { ApiMockCreate } from './ApiMockCreate';
import { ApiPolicyFunctionCreate } from './ApiPolicyFunctionCreate';
import { ApiPolicyHttpCreate } from './ApiPolicyHttpCreate';
import { ApiPolicyMockCreate } from './ApiPolicyMockCreate';
import { AuthOpt } from './AuthOpt';
import { BackendApiCreate } from './BackendApiCreate';
import { BackendParamBase } from './BackendParamBase';
import { ReqParamBase } from './ReqParamBase';


export class ApiCreate {
    public name?: string;
    public type?: ApiCreateTypeEnum | number;
    public version?: string;
    private 'req_protocol'?: ApiCreateReqProtocolEnum | string;
    private 'req_method'?: ApiCreateReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'auth_type'?: ApiCreateAuthTypeEnum | string;
    private 'auth_opt'?: AuthOpt;
    public cors?: boolean;
    private 'match_mode'?: ApiCreateMatchModeEnum | string;
    private 'backend_type'?: ApiCreateBackendTypeEnum | string;
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
    private 'content_type'?: ApiCreateContentTypeEnum | string;
    private 'is_send_fg_body_base64'?: boolean;
    private 'mock_info'?: ApiMockCreate;
    private 'func_info'?: ApiFuncCreate;
    private 'req_params'?: Array<ReqParamBase>;
    private 'backend_params'?: Array<BackendParamBase>;
    private 'policy_mocks'?: Array<ApiPolicyMockCreate>;
    private 'policy_functions'?: Array<ApiPolicyFunctionCreate>;
    private 'backend_api'?: BackendApiCreate;
    private 'policy_https'?: Array<ApiPolicyHttpCreate>;
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
    public withName(name: string): ApiCreate {
        this['name'] = name;
        return this;
    }
    public withType(type: ApiCreateTypeEnum | number): ApiCreate {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ApiCreate {
        this['version'] = version;
        return this;
    }
    public withReqProtocol(reqProtocol: ApiCreateReqProtocolEnum | string): ApiCreate {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: ApiCreateReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): ApiCreateReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: ApiCreateReqMethodEnum | string): ApiCreate {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiCreateReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiCreateReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ApiCreate {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withAuthType(authType: ApiCreateAuthTypeEnum | string): ApiCreate {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ApiCreateAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ApiCreateAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withAuthOpt(authOpt: AuthOpt): ApiCreate {
        this['auth_opt'] = authOpt;
        return this;
    }
    public set authOpt(authOpt: AuthOpt  | undefined) {
        this['auth_opt'] = authOpt;
    }
    public get authOpt(): AuthOpt | undefined {
        return this['auth_opt'];
    }
    public withCors(cors: boolean): ApiCreate {
        this['cors'] = cors;
        return this;
    }
    public withMatchMode(matchMode: ApiCreateMatchModeEnum | string): ApiCreate {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: ApiCreateMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): ApiCreateMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withBackendType(backendType: ApiCreateBackendTypeEnum | string): ApiCreate {
        this['backend_type'] = backendType;
        return this;
    }
    public set backendType(backendType: ApiCreateBackendTypeEnum | string  | undefined) {
        this['backend_type'] = backendType;
    }
    public get backendType(): ApiCreateBackendTypeEnum | string | undefined {
        return this['backend_type'];
    }
    public withRemark(remark: string): ApiCreate {
        this['remark'] = remark;
        return this;
    }
    public withGroupId(groupId: string): ApiCreate {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBodyRemark(bodyRemark: string): ApiCreate {
        this['body_remark'] = bodyRemark;
        return this;
    }
    public set bodyRemark(bodyRemark: string  | undefined) {
        this['body_remark'] = bodyRemark;
    }
    public get bodyRemark(): string | undefined {
        return this['body_remark'];
    }
    public withResultNormalSample(resultNormalSample: string): ApiCreate {
        this['result_normal_sample'] = resultNormalSample;
        return this;
    }
    public set resultNormalSample(resultNormalSample: string  | undefined) {
        this['result_normal_sample'] = resultNormalSample;
    }
    public get resultNormalSample(): string | undefined {
        return this['result_normal_sample'];
    }
    public withResultFailureSample(resultFailureSample: string): ApiCreate {
        this['result_failure_sample'] = resultFailureSample;
        return this;
    }
    public set resultFailureSample(resultFailureSample: string  | undefined) {
        this['result_failure_sample'] = resultFailureSample;
    }
    public get resultFailureSample(): string | undefined {
        return this['result_failure_sample'];
    }
    public withAuthorizerId(authorizerId: string): ApiCreate {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withTags(tags: Array<string>): ApiCreate {
        this['tags'] = tags;
        return this;
    }
    public withResponseId(responseId: string): ApiCreate {
        this['response_id'] = responseId;
        return this;
    }
    public set responseId(responseId: string  | undefined) {
        this['response_id'] = responseId;
    }
    public get responseId(): string | undefined {
        return this['response_id'];
    }
    public withRomaAppId(romaAppId: string): ApiCreate {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withDomainName(domainName: string): ApiCreate {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withTag(tag: string): ApiCreate {
        this['tag'] = tag;
        return this;
    }
    public withContentType(contentType: ApiCreateContentTypeEnum | string): ApiCreate {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: ApiCreateContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): ApiCreateContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withIsSendFgBodyBase64(isSendFgBodyBase64: boolean): ApiCreate {
        this['is_send_fg_body_base64'] = isSendFgBodyBase64;
        return this;
    }
    public set isSendFgBodyBase64(isSendFgBodyBase64: boolean  | undefined) {
        this['is_send_fg_body_base64'] = isSendFgBodyBase64;
    }
    public get isSendFgBodyBase64(): boolean | undefined {
        return this['is_send_fg_body_base64'];
    }
    public withMockInfo(mockInfo: ApiMockCreate): ApiCreate {
        this['mock_info'] = mockInfo;
        return this;
    }
    public set mockInfo(mockInfo: ApiMockCreate  | undefined) {
        this['mock_info'] = mockInfo;
    }
    public get mockInfo(): ApiMockCreate | undefined {
        return this['mock_info'];
    }
    public withFuncInfo(funcInfo: ApiFuncCreate): ApiCreate {
        this['func_info'] = funcInfo;
        return this;
    }
    public set funcInfo(funcInfo: ApiFuncCreate  | undefined) {
        this['func_info'] = funcInfo;
    }
    public get funcInfo(): ApiFuncCreate | undefined {
        return this['func_info'];
    }
    public withReqParams(reqParams: Array<ReqParamBase>): ApiCreate {
        this['req_params'] = reqParams;
        return this;
    }
    public set reqParams(reqParams: Array<ReqParamBase>  | undefined) {
        this['req_params'] = reqParams;
    }
    public get reqParams(): Array<ReqParamBase> | undefined {
        return this['req_params'];
    }
    public withBackendParams(backendParams: Array<BackendParamBase>): ApiCreate {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParamBase>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParamBase> | undefined {
        return this['backend_params'];
    }
    public withPolicyMocks(policyMocks: Array<ApiPolicyMockCreate>): ApiCreate {
        this['policy_mocks'] = policyMocks;
        return this;
    }
    public set policyMocks(policyMocks: Array<ApiPolicyMockCreate>  | undefined) {
        this['policy_mocks'] = policyMocks;
    }
    public get policyMocks(): Array<ApiPolicyMockCreate> | undefined {
        return this['policy_mocks'];
    }
    public withPolicyFunctions(policyFunctions: Array<ApiPolicyFunctionCreate>): ApiCreate {
        this['policy_functions'] = policyFunctions;
        return this;
    }
    public set policyFunctions(policyFunctions: Array<ApiPolicyFunctionCreate>  | undefined) {
        this['policy_functions'] = policyFunctions;
    }
    public get policyFunctions(): Array<ApiPolicyFunctionCreate> | undefined {
        return this['policy_functions'];
    }
    public withBackendApi(backendApi: BackendApiCreate): ApiCreate {
        this['backend_api'] = backendApi;
        return this;
    }
    public set backendApi(backendApi: BackendApiCreate  | undefined) {
        this['backend_api'] = backendApi;
    }
    public get backendApi(): BackendApiCreate | undefined {
        return this['backend_api'];
    }
    public withPolicyHttps(policyHttps: Array<ApiPolicyHttpCreate>): ApiCreate {
        this['policy_https'] = policyHttps;
        return this;
    }
    public set policyHttps(policyHttps: Array<ApiPolicyHttpCreate>  | undefined) {
        this['policy_https'] = policyHttps;
    }
    public get policyHttps(): Array<ApiPolicyHttpCreate> | undefined {
        return this['policy_https'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiCreateTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCreateReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    BOTH = 'BOTH',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCreateReqMethodEnum {
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
export enum ApiCreateAuthTypeEnum {
    NONE = 'NONE',
    APP = 'APP',
    IAM = 'IAM',
    AUTHORIZER = 'AUTHORIZER'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCreateMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCreateBackendTypeEnum {
    HTTP = 'HTTP',
    FUNCTION = 'FUNCTION',
    MOCK = 'MOCK',
    GRPC = 'GRPC'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiCreateContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    APPLICATION_XML = 'application/xml',
    MULTIPART_FORM_DATA = 'multipart/form-data',
    TEXT_PLAIN = 'text/plain'
}
