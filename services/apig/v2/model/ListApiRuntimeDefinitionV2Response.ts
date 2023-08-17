import { ApiBaseInfo } from './ApiBaseInfo';
import { AuthOpt } from './AuthOpt';
import { ReqParam } from './ReqParam';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiRuntimeDefinitionV2Response extends SdkResponse {
    public name?: string;
    public type?: ListApiRuntimeDefinitionV2ResponseTypeEnum | number;
    public version?: string;
    private 'req_protocol'?: ListApiRuntimeDefinitionV2ResponseReqProtocolEnum | string;
    private 'req_method'?: ListApiRuntimeDefinitionV2ResponseReqMethodEnum | string;
    private 'req_uri'?: string;
    private 'auth_type'?: ListApiRuntimeDefinitionV2ResponseAuthTypeEnum | string;
    private 'auth_opt'?: AuthOpt;
    public cors?: boolean;
    private 'match_mode'?: ListApiRuntimeDefinitionV2ResponseMatchModeEnum | string;
    private 'backend_type'?: ListApiRuntimeDefinitionV2ResponseBackendTypeEnum | string;
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
    private 'content_type'?: ListApiRuntimeDefinitionV2ResponseContentTypeEnum | string;
    public id?: string;
    private 'group_name'?: string;
    private 'run_env_name'?: string;
    private 'run_env_id'?: string;
    private 'publish_id'?: string;
    private 'sl_domain'?: string;
    private 'sl_domains'?: Array<string>;
    private 'req_params'?: Array<ReqParam>;
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
    public withName(name: string): ListApiRuntimeDefinitionV2Response {
        this['name'] = name;
        return this;
    }
    public withType(type: ListApiRuntimeDefinitionV2ResponseTypeEnum | number): ListApiRuntimeDefinitionV2Response {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ListApiRuntimeDefinitionV2Response {
        this['version'] = version;
        return this;
    }
    public withReqProtocol(reqProtocol: ListApiRuntimeDefinitionV2ResponseReqProtocolEnum | string): ListApiRuntimeDefinitionV2Response {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: ListApiRuntimeDefinitionV2ResponseReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): ListApiRuntimeDefinitionV2ResponseReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: ListApiRuntimeDefinitionV2ResponseReqMethodEnum | string): ListApiRuntimeDefinitionV2Response {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ListApiRuntimeDefinitionV2ResponseReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ListApiRuntimeDefinitionV2ResponseReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ListApiRuntimeDefinitionV2Response {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withAuthType(authType: ListApiRuntimeDefinitionV2ResponseAuthTypeEnum | string): ListApiRuntimeDefinitionV2Response {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ListApiRuntimeDefinitionV2ResponseAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ListApiRuntimeDefinitionV2ResponseAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withAuthOpt(authOpt: AuthOpt): ListApiRuntimeDefinitionV2Response {
        this['auth_opt'] = authOpt;
        return this;
    }
    public set authOpt(authOpt: AuthOpt  | undefined) {
        this['auth_opt'] = authOpt;
    }
    public get authOpt(): AuthOpt | undefined {
        return this['auth_opt'];
    }
    public withCors(cors: boolean): ListApiRuntimeDefinitionV2Response {
        this['cors'] = cors;
        return this;
    }
    public withMatchMode(matchMode: ListApiRuntimeDefinitionV2ResponseMatchModeEnum | string): ListApiRuntimeDefinitionV2Response {
        this['match_mode'] = matchMode;
        return this;
    }
    public set matchMode(matchMode: ListApiRuntimeDefinitionV2ResponseMatchModeEnum | string  | undefined) {
        this['match_mode'] = matchMode;
    }
    public get matchMode(): ListApiRuntimeDefinitionV2ResponseMatchModeEnum | string | undefined {
        return this['match_mode'];
    }
    public withBackendType(backendType: ListApiRuntimeDefinitionV2ResponseBackendTypeEnum | string): ListApiRuntimeDefinitionV2Response {
        this['backend_type'] = backendType;
        return this;
    }
    public set backendType(backendType: ListApiRuntimeDefinitionV2ResponseBackendTypeEnum | string  | undefined) {
        this['backend_type'] = backendType;
    }
    public get backendType(): ListApiRuntimeDefinitionV2ResponseBackendTypeEnum | string | undefined {
        return this['backend_type'];
    }
    public withRemark(remark: string): ListApiRuntimeDefinitionV2Response {
        this['remark'] = remark;
        return this;
    }
    public withGroupId(groupId: string): ListApiRuntimeDefinitionV2Response {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBodyRemark(bodyRemark: string): ListApiRuntimeDefinitionV2Response {
        this['body_remark'] = bodyRemark;
        return this;
    }
    public set bodyRemark(bodyRemark: string  | undefined) {
        this['body_remark'] = bodyRemark;
    }
    public get bodyRemark(): string | undefined {
        return this['body_remark'];
    }
    public withResultNormalSample(resultNormalSample: string): ListApiRuntimeDefinitionV2Response {
        this['result_normal_sample'] = resultNormalSample;
        return this;
    }
    public set resultNormalSample(resultNormalSample: string  | undefined) {
        this['result_normal_sample'] = resultNormalSample;
    }
    public get resultNormalSample(): string | undefined {
        return this['result_normal_sample'];
    }
    public withResultFailureSample(resultFailureSample: string): ListApiRuntimeDefinitionV2Response {
        this['result_failure_sample'] = resultFailureSample;
        return this;
    }
    public set resultFailureSample(resultFailureSample: string  | undefined) {
        this['result_failure_sample'] = resultFailureSample;
    }
    public get resultFailureSample(): string | undefined {
        return this['result_failure_sample'];
    }
    public withAuthorizerId(authorizerId: string): ListApiRuntimeDefinitionV2Response {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withTags(tags: Array<string>): ListApiRuntimeDefinitionV2Response {
        this['tags'] = tags;
        return this;
    }
    public withResponseId(responseId: string): ListApiRuntimeDefinitionV2Response {
        this['response_id'] = responseId;
        return this;
    }
    public set responseId(responseId: string  | undefined) {
        this['response_id'] = responseId;
    }
    public get responseId(): string | undefined {
        return this['response_id'];
    }
    public withRomaAppId(romaAppId: string): ListApiRuntimeDefinitionV2Response {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
    public withDomainName(domainName: string): ListApiRuntimeDefinitionV2Response {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withTag(tag: string): ListApiRuntimeDefinitionV2Response {
        this['tag'] = tag;
        return this;
    }
    public withContentType(contentType: ListApiRuntimeDefinitionV2ResponseContentTypeEnum | string): ListApiRuntimeDefinitionV2Response {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListApiRuntimeDefinitionV2ResponseContentTypeEnum | string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): ListApiRuntimeDefinitionV2ResponseContentTypeEnum | string | undefined {
        return this['content_type'];
    }
    public withId(id: string): ListApiRuntimeDefinitionV2Response {
        this['id'] = id;
        return this;
    }
    public withGroupName(groupName: string): ListApiRuntimeDefinitionV2Response {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withRunEnvName(runEnvName: string): ListApiRuntimeDefinitionV2Response {
        this['run_env_name'] = runEnvName;
        return this;
    }
    public set runEnvName(runEnvName: string  | undefined) {
        this['run_env_name'] = runEnvName;
    }
    public get runEnvName(): string | undefined {
        return this['run_env_name'];
    }
    public withRunEnvId(runEnvId: string): ListApiRuntimeDefinitionV2Response {
        this['run_env_id'] = runEnvId;
        return this;
    }
    public set runEnvId(runEnvId: string  | undefined) {
        this['run_env_id'] = runEnvId;
    }
    public get runEnvId(): string | undefined {
        return this['run_env_id'];
    }
    public withPublishId(publishId: string): ListApiRuntimeDefinitionV2Response {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withSlDomain(slDomain: string): ListApiRuntimeDefinitionV2Response {
        this['sl_domain'] = slDomain;
        return this;
    }
    public set slDomain(slDomain: string  | undefined) {
        this['sl_domain'] = slDomain;
    }
    public get slDomain(): string | undefined {
        return this['sl_domain'];
    }
    public withSlDomains(slDomains: Array<string>): ListApiRuntimeDefinitionV2Response {
        this['sl_domains'] = slDomains;
        return this;
    }
    public set slDomains(slDomains: Array<string>  | undefined) {
        this['sl_domains'] = slDomains;
    }
    public get slDomains(): Array<string> | undefined {
        return this['sl_domains'];
    }
    public withReqParams(reqParams: Array<ReqParam>): ListApiRuntimeDefinitionV2Response {
        this['req_params'] = reqParams;
        return this;
    }
    public set reqParams(reqParams: Array<ReqParam>  | undefined) {
        this['req_params'] = reqParams;
    }
    public get reqParams(): Array<ReqParam> | undefined {
        return this['req_params'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApiRuntimeDefinitionV2ResponseTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ListApiRuntimeDefinitionV2ResponseReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    BOTH = 'BOTH',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApiRuntimeDefinitionV2ResponseReqMethodEnum {
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
export enum ListApiRuntimeDefinitionV2ResponseAuthTypeEnum {
    NONE = 'NONE',
    APP = 'APP',
    IAM = 'IAM',
    AUTHORIZER = 'AUTHORIZER'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApiRuntimeDefinitionV2ResponseMatchModeEnum {
    SWA = 'SWA',
    NORMAL = 'NORMAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApiRuntimeDefinitionV2ResponseBackendTypeEnum {
    HTTP = 'HTTP',
    FUNCTION = 'FUNCTION',
    MOCK = 'MOCK',
    GRPC = 'GRPC'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApiRuntimeDefinitionV2ResponseContentTypeEnum {
    APPLICATION_JSON = 'application/json',
    APPLICATION_XML = 'application/xml',
    MULTIPART_FORM_DATE = 'multipart/form-date',
    TEXT_PLAIN = 'text/plain'
}
