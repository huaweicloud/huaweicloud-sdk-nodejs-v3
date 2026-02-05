import { ApiBackendVpcReq } from './ApiBackendVpcReq';
import { BackendApiBaseInfo } from './BackendApiBaseInfo';
import { MemberGroupUrlInfo } from './MemberGroupUrlInfo';


export class BackendApiCreate {
    private 'authorizer_id'?: string;
    private 'url_domain'?: string;
    private 'req_protocol'?: BackendApiCreateReqProtocolEnum | string;
    public remark?: string;
    private 'req_method'?: BackendApiCreateReqMethodEnum | string;
    public version?: string;
    private 'req_uri'?: string;
    public timeout?: number;
    private 'enable_client_ssl'?: boolean;
    private 'retry_count'?: string;
    private 'enable_sm_channel'?: boolean;
    private 'member_group_url_infos'?: Array<MemberGroupUrlInfo>;
    private 'vpc_channel_info'?: ApiBackendVpcReq;
    private 'vpc_channel_status'?: BackendApiCreateVpcChannelStatusEnum | number;
    public constructor(timeout?: number) { 
        this['timeout'] = timeout;
    }
    public withAuthorizerId(authorizerId: string): BackendApiCreate {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withUrlDomain(urlDomain: string): BackendApiCreate {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
    public withReqProtocol(reqProtocol: BackendApiCreateReqProtocolEnum | string): BackendApiCreate {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: BackendApiCreateReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): BackendApiCreateReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withRemark(remark: string): BackendApiCreate {
        this['remark'] = remark;
        return this;
    }
    public withReqMethod(reqMethod: BackendApiCreateReqMethodEnum | string): BackendApiCreate {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: BackendApiCreateReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): BackendApiCreateReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withVersion(version: string): BackendApiCreate {
        this['version'] = version;
        return this;
    }
    public withReqUri(reqUri: string): BackendApiCreate {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withTimeout(timeout: number): BackendApiCreate {
        this['timeout'] = timeout;
        return this;
    }
    public withEnableClientSsl(enableClientSsl: boolean): BackendApiCreate {
        this['enable_client_ssl'] = enableClientSsl;
        return this;
    }
    public set enableClientSsl(enableClientSsl: boolean  | undefined) {
        this['enable_client_ssl'] = enableClientSsl;
    }
    public get enableClientSsl(): boolean | undefined {
        return this['enable_client_ssl'];
    }
    public withRetryCount(retryCount: string): BackendApiCreate {
        this['retry_count'] = retryCount;
        return this;
    }
    public set retryCount(retryCount: string  | undefined) {
        this['retry_count'] = retryCount;
    }
    public get retryCount(): string | undefined {
        return this['retry_count'];
    }
    public withEnableSmChannel(enableSmChannel: boolean): BackendApiCreate {
        this['enable_sm_channel'] = enableSmChannel;
        return this;
    }
    public set enableSmChannel(enableSmChannel: boolean  | undefined) {
        this['enable_sm_channel'] = enableSmChannel;
    }
    public get enableSmChannel(): boolean | undefined {
        return this['enable_sm_channel'];
    }
    public withMemberGroupUrlInfos(memberGroupUrlInfos: Array<MemberGroupUrlInfo>): BackendApiCreate {
        this['member_group_url_infos'] = memberGroupUrlInfos;
        return this;
    }
    public set memberGroupUrlInfos(memberGroupUrlInfos: Array<MemberGroupUrlInfo>  | undefined) {
        this['member_group_url_infos'] = memberGroupUrlInfos;
    }
    public get memberGroupUrlInfos(): Array<MemberGroupUrlInfo> | undefined {
        return this['member_group_url_infos'];
    }
    public withVpcChannelInfo(vpcChannelInfo: ApiBackendVpcReq): BackendApiCreate {
        this['vpc_channel_info'] = vpcChannelInfo;
        return this;
    }
    public set vpcChannelInfo(vpcChannelInfo: ApiBackendVpcReq  | undefined) {
        this['vpc_channel_info'] = vpcChannelInfo;
    }
    public get vpcChannelInfo(): ApiBackendVpcReq | undefined {
        return this['vpc_channel_info'];
    }
    public withVpcChannelStatus(vpcChannelStatus: BackendApiCreateVpcChannelStatusEnum | number): BackendApiCreate {
        this['vpc_channel_status'] = vpcChannelStatus;
        return this;
    }
    public set vpcChannelStatus(vpcChannelStatus: BackendApiCreateVpcChannelStatusEnum | number  | undefined) {
        this['vpc_channel_status'] = vpcChannelStatus;
    }
    public get vpcChannelStatus(): BackendApiCreateVpcChannelStatusEnum | number | undefined {
        return this['vpc_channel_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackendApiCreateReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    GRPC = 'GRPC',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum BackendApiCreateReqMethodEnum {
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
export enum BackendApiCreateVpcChannelStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
