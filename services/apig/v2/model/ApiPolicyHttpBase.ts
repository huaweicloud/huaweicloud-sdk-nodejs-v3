import { MemberGroupUrlInfo } from './MemberGroupUrlInfo';


export class ApiPolicyHttpBase {
    private 'url_domain'?: string;
    private 'req_protocol'?: ApiPolicyHttpBaseReqProtocolEnum | string;
    private 'req_method'?: ApiPolicyHttpBaseReqMethodEnum | string;
    private 'req_uri'?: string;
    public timeout?: number;
    private 'retry_count'?: string;
    private 'enable_sm_channel'?: boolean;
    private 'member_group_url_infos'?: Array<MemberGroupUrlInfo>;
    public constructor() { 
    }
    public withUrlDomain(urlDomain: string): ApiPolicyHttpBase {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
    public withReqProtocol(reqProtocol: ApiPolicyHttpBaseReqProtocolEnum | string): ApiPolicyHttpBase {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: ApiPolicyHttpBaseReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): ApiPolicyHttpBaseReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: ApiPolicyHttpBaseReqMethodEnum | string): ApiPolicyHttpBase {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: ApiPolicyHttpBaseReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): ApiPolicyHttpBaseReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): ApiPolicyHttpBase {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withTimeout(timeout: number): ApiPolicyHttpBase {
        this['timeout'] = timeout;
        return this;
    }
    public withRetryCount(retryCount: string): ApiPolicyHttpBase {
        this['retry_count'] = retryCount;
        return this;
    }
    public set retryCount(retryCount: string  | undefined) {
        this['retry_count'] = retryCount;
    }
    public get retryCount(): string | undefined {
        return this['retry_count'];
    }
    public withEnableSmChannel(enableSmChannel: boolean): ApiPolicyHttpBase {
        this['enable_sm_channel'] = enableSmChannel;
        return this;
    }
    public set enableSmChannel(enableSmChannel: boolean  | undefined) {
        this['enable_sm_channel'] = enableSmChannel;
    }
    public get enableSmChannel(): boolean | undefined {
        return this['enable_sm_channel'];
    }
    public withMemberGroupUrlInfos(memberGroupUrlInfos: Array<MemberGroupUrlInfo>): ApiPolicyHttpBase {
        this['member_group_url_infos'] = memberGroupUrlInfos;
        return this;
    }
    public set memberGroupUrlInfos(memberGroupUrlInfos: Array<MemberGroupUrlInfo>  | undefined) {
        this['member_group_url_infos'] = memberGroupUrlInfos;
    }
    public get memberGroupUrlInfos(): Array<MemberGroupUrlInfo> | undefined {
        return this['member_group_url_infos'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyHttpBaseReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    GRPC = 'GRPC',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiPolicyHttpBaseReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
