import { ApiPolicyHttpBase } from './ApiPolicyHttpBase';
import { ApiPolicyRespBase } from './ApiPolicyRespBase';
import { BackendParam } from './BackendParam';
import { CoditionResp } from './CoditionResp';
import { VpcInfo } from './VpcInfo';


export class ApiPolicyHttpResp {
    public id?: string;
    private 'effect_mode'?: ApiPolicyHttpRespEffectModeEnum | string;
    public name?: string;
    private 'backend_params'?: Array<BackendParam>;
    public conditions?: Array<CoditionResp>;
    private 'authorizer_id'?: string;
    private 'url_domain'?: string;
    private 'req_protocol'?: ApiPolicyHttpRespReqProtocolEnum | string;
    private 'req_method'?: ApiPolicyHttpRespReqMethodEnum | string;
    private 'req_uri'?: string;
    public timeout?: number;
    private 'retry_count'?: string;
    private 'enable_sm_channel'?: boolean;
    private 'vpc_channel_info'?: VpcInfo;
    private 'vpc_channel_status'?: number;
    public constructor(effectMode?: string, name?: string, conditions?: Array<CoditionResp>, reqProtocol?: string, reqMethod?: string, reqUri?: string) { 
        this['effect_mode'] = effectMode;
        this['name'] = name;
        this['conditions'] = conditions;
        this['req_protocol'] = reqProtocol;
        this['req_method'] = reqMethod;
        this['req_uri'] = reqUri;
    }
    public withId(id: string): ApiPolicyHttpResp {
        this['id'] = id;
        return this;
    }
    public withEffectMode(effectMode: ApiPolicyHttpRespEffectModeEnum | string): ApiPolicyHttpResp {
        this['effect_mode'] = effectMode;
        return this;
    }
    public set effectMode(effectMode: ApiPolicyHttpRespEffectModeEnum | string  | undefined) {
        this['effect_mode'] = effectMode;
    }
    public get effectMode(): ApiPolicyHttpRespEffectModeEnum | string | undefined {
        return this['effect_mode'];
    }
    public withName(name: string): ApiPolicyHttpResp {
        this['name'] = name;
        return this;
    }
    public withBackendParams(backendParams: Array<BackendParam>): ApiPolicyHttpResp {
        this['backend_params'] = backendParams;
        return this;
    }
    public set backendParams(backendParams: Array<BackendParam>  | undefined) {
        this['backend_params'] = backendParams;
    }
    public get backendParams(): Array<BackendParam> | undefined {
        return this['backend_params'];
    }
    public withConditions(conditions: Array<CoditionResp>): ApiPolicyHttpResp {
        this['conditions'] = conditions;
        return this;
    }
    public withAuthorizerId(authorizerId: string): ApiPolicyHttpResp {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withUrlDomain(urlDomain: string): ApiPolicyHttpResp {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
    public withReqProtocol(reqProtocol: ApiPolicyHttpRespReqProtocolEnum | string): ApiPolicyHttpResp {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: ApiPolicyHttpRespReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): ApiPolicyHttpRespReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: ApiPolicyHttpRespReqMethodEnum | string): ApiPolicyHttpResp {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiPolicyHttpRespReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiPolicyHttpRespReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ApiPolicyHttpResp {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withTimeout(timeout: number): ApiPolicyHttpResp {
        this['timeout'] = timeout;
        return this;
    }
    public withRetryCount(retryCount: string): ApiPolicyHttpResp {
        this['retry_count'] = retryCount;
        return this;
    }
    public set retryCount(retryCount: string  | undefined) {
        this['retry_count'] = retryCount;
    }
    public get retryCount(): string | undefined {
        return this['retry_count'];
    }
    public withEnableSmChannel(enableSmChannel: boolean): ApiPolicyHttpResp {
        this['enable_sm_channel'] = enableSmChannel;
        return this;
    }
    public set enableSmChannel(enableSmChannel: boolean  | undefined) {
        this['enable_sm_channel'] = enableSmChannel;
    }
    public get enableSmChannel(): boolean | undefined {
        return this['enable_sm_channel'];
    }
    public withVpcChannelInfo(vpcChannelInfo: VpcInfo): ApiPolicyHttpResp {
        this['vpc_channel_info'] = vpcChannelInfo;
        return this;
    }
    public set vpcChannelInfo(vpcChannelInfo: VpcInfo  | undefined) {
        this['vpc_channel_info'] = vpcChannelInfo;
    }
    public get vpcChannelInfo(): VpcInfo | undefined {
        return this['vpc_channel_info'];
    }
    public withVpcChannelStatus(vpcChannelStatus: number): ApiPolicyHttpResp {
        this['vpc_channel_status'] = vpcChannelStatus;
        return this;
    }
    public set vpcChannelStatus(vpcChannelStatus: number  | undefined) {
        this['vpc_channel_status'] = vpcChannelStatus;
    }
    public get vpcChannelStatus(): number | undefined {
        return this['vpc_channel_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyHttpRespEffectModeEnum {
    ALL = 'ALL',
    ANY = 'ANY'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyHttpRespReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    GRPC = 'GRPC',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyHttpRespReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
