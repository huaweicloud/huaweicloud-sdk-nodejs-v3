import { ApiBackendVpcReq } from './ApiBackendVpcReq';
import { ApiConditionBase } from './ApiConditionBase';
import { ApiPolicyHttpBase } from './ApiPolicyHttpBase';
import { ApiPolicyReqBase } from './ApiPolicyReqBase';
import { BackendParamBase } from './BackendParamBase';


export class ApiPolicyHttpCreate {
    private 'url_domain'?: string;
    private 'req_protocol'?: ApiPolicyHttpCreateReqProtocolEnum | string;
    private 'req_method'?: ApiPolicyHttpCreateReqMethodEnum | string;
    private 'req_uri'?: string;
    public timeout?: number;
    private 'retry_count'?: string;
    private 'effect_mode'?: ApiPolicyHttpCreateEffectModeEnum | string;
    public name?: string;
    private 'backend_params'?: Array<BackendParamBase>;
    public conditions?: Array<ApiConditionBase>;
    private 'authorizer_id'?: string;
    private 'vpc_channel_info'?: ApiBackendVpcReq;
    private 'vpc_channel_status'?: ApiPolicyHttpCreateVpcChannelStatusEnum | number;
    public constructor(reqProtocol?: string, reqMethod?: string, reqUri?: string, effectMode?: string, name?: string, conditions?: Array<ApiConditionBase>) { 
        this['req_protocol'] = reqProtocol;
        this['req_method'] = reqMethod;
        this['req_uri'] = reqUri;
        this['effect_mode'] = effectMode;
        this['name'] = name;
        this['conditions'] = conditions;
    }
    public withUrlDomain(urlDomain: string): ApiPolicyHttpCreate {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
    public withReqProtocol(reqProtocol: ApiPolicyHttpCreateReqProtocolEnum | string): ApiPolicyHttpCreate {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: ApiPolicyHttpCreateReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): ApiPolicyHttpCreateReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: ApiPolicyHttpCreateReqMethodEnum | string): ApiPolicyHttpCreate {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiPolicyHttpCreateReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiPolicyHttpCreateReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ApiPolicyHttpCreate {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withTimeout(timeout: number): ApiPolicyHttpCreate {
        this['timeout'] = timeout;
        return this;
    }
    public withRetryCount(retryCount: string): ApiPolicyHttpCreate {
        this['retry_count'] = retryCount;
        return this;
    }
    public set retryCount(retryCount: string  | undefined) {
        this['retry_count'] = retryCount;
    }
    public get retryCount(): string | undefined {
        return this['retry_count'];
    }
    public withEffectMode(effectMode: ApiPolicyHttpCreateEffectModeEnum | string): ApiPolicyHttpCreate {
        this['effect_mode'] = effectMode;
        return this;
    }
    public set effectMode(effectMode: ApiPolicyHttpCreateEffectModeEnum | string  | undefined) {
        this['effect_mode'] = effectMode;
    }
    public get effectMode(): ApiPolicyHttpCreateEffectModeEnum | string | undefined {
        return this['effect_mode'];
    }
    public withName(name: string): ApiPolicyHttpCreate {
        this['name'] = name;
        return this;
    }
    public withBackendParams(backendParams: Array<BackendParamBase>): ApiPolicyHttpCreate {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParamBase>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParamBase> | undefined {
        return this['backend_params'];
    }
    public withConditions(conditions: Array<ApiConditionBase>): ApiPolicyHttpCreate {
        this['conditions'] = conditions;
        return this;
    }
    public withAuthorizerId(authorizerId: string): ApiPolicyHttpCreate {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withVpcChannelInfo(vpcChannelInfo: ApiBackendVpcReq): ApiPolicyHttpCreate {
        this['vpc_channel_info'] = vpcChannelInfo;
        return this;
    }
    public set vpcChannelInfo(vpcChannelInfo: ApiBackendVpcReq  | undefined) {
        this['vpc_channel_info'] = vpcChannelInfo;
    }
    public get vpcChannelInfo(): ApiBackendVpcReq | undefined {
        return this['vpc_channel_info'];
    }
    public withVpcChannelStatus(vpcChannelStatus: ApiPolicyHttpCreateVpcChannelStatusEnum | number): ApiPolicyHttpCreate {
        this['vpc_channel_status'] = vpcChannelStatus;
        return this;
    }
    public set vpcChannelStatus(vpcChannelStatus: ApiPolicyHttpCreateVpcChannelStatusEnum | number  | undefined) {
        this['vpc_channel_status'] = vpcChannelStatus;
    }
    public get vpcChannelStatus(): ApiPolicyHttpCreateVpcChannelStatusEnum | number | undefined {
        return this['vpc_channel_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyHttpCreateReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    GRPC = 'GRPC',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyHttpCreateReqMethodEnum {
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
export enum ApiPolicyHttpCreateEffectModeEnum {
    ALL = 'ALL',
    ANY = 'ANY'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyHttpCreateVpcChannelStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
