import { MemberGroupUrlInfo } from './MemberGroupUrlInfo';


export class BackendApiBaseInfo {
    private 'authorizer_id'?: string;
    private 'url_domain'?: string;
    private 'req_protocol'?: BackendApiBaseInfoReqProtocolEnum | string;
    public remark?: string;
    private 'req_method'?: BackendApiBaseInfoReqMethodEnum | string;
    public version?: string;
    private 'req_uri'?: string;
    public timeout?: number;
    private 'enable_client_ssl'?: boolean;
    private 'retry_count'?: string;
    private 'enable_sm_channel'?: boolean;
    private 'member_group_url_infos'?: Array<MemberGroupUrlInfo>;
    public constructor(timeout?: number) { 
        this['timeout'] = timeout;
    }
    public withAuthorizerId(authorizerId: string): BackendApiBaseInfo {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withUrlDomain(urlDomain: string): BackendApiBaseInfo {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
    public withReqProtocol(reqProtocol: BackendApiBaseInfoReqProtocolEnum | string): BackendApiBaseInfo {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: BackendApiBaseInfoReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): BackendApiBaseInfoReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withRemark(remark: string): BackendApiBaseInfo {
        this['remark'] = remark;
        return this;
    }
    public withReqMethod(reqMethod: BackendApiBaseInfoReqMethodEnum | string): BackendApiBaseInfo {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: BackendApiBaseInfoReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): BackendApiBaseInfoReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withVersion(version: string): BackendApiBaseInfo {
        this['version'] = version;
        return this;
    }
    public withReqUri(reqUri: string): BackendApiBaseInfo {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withTimeout(timeout: number): BackendApiBaseInfo {
        this['timeout'] = timeout;
        return this;
    }
    public withEnableClientSsl(enableClientSsl: boolean): BackendApiBaseInfo {
        this['enable_client_ssl'] = enableClientSsl;
        return this;
    }
    public set enableClientSsl(enableClientSsl: boolean  | undefined) {
        this['enable_client_ssl'] = enableClientSsl;
    }
    public get enableClientSsl(): boolean | undefined {
        return this['enable_client_ssl'];
    }
    public withRetryCount(retryCount: string): BackendApiBaseInfo {
        this['retry_count'] = retryCount;
        return this;
    }
    public set retryCount(retryCount: string  | undefined) {
        this['retry_count'] = retryCount;
    }
    public get retryCount(): string | undefined {
        return this['retry_count'];
    }
    public withEnableSmChannel(enableSmChannel: boolean): BackendApiBaseInfo {
        this['enable_sm_channel'] = enableSmChannel;
        return this;
    }
    public set enableSmChannel(enableSmChannel: boolean  | undefined) {
        this['enable_sm_channel'] = enableSmChannel;
    }
    public get enableSmChannel(): boolean | undefined {
        return this['enable_sm_channel'];
    }
    public withMemberGroupUrlInfos(memberGroupUrlInfos: Array<MemberGroupUrlInfo>): BackendApiBaseInfo {
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
export enum BackendApiBaseInfoReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    GRPC = 'GRPC',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum BackendApiBaseInfoReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
