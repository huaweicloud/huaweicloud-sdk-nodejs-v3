import { BackendApiBase } from './BackendApiBase';
import { MemberGroupUrlInfo } from './MemberGroupUrlInfo';
import { VpcInfo } from './VpcInfo';


export class BackendApi {
    private 'authorizer_id'?: string;
    private 'url_domain'?: string;
    private 'req_protocol'?: BackendApiReqProtocolEnum | string;
    public remark?: string;
    private 'req_method'?: BackendApiReqMethodEnum | string;
    public version?: string;
    private 'req_uri'?: string;
    public timeout?: number;
    private 'enable_client_ssl'?: boolean;
    private 'retry_count'?: string;
    private 'enable_sm_channel'?: boolean;
    private 'member_group_url_infos'?: Array<MemberGroupUrlInfo>;
    public id?: string;
    public status?: number;
    private 'register_time'?: Date;
    private 'update_time'?: Date;
    private 'vpc_channel_info'?: VpcInfo;
    private 'vpc_channel_status'?: number;
    public constructor(timeout?: number) { 
        this['timeout'] = timeout;
    }
    public withAuthorizerId(authorizerId: string): BackendApi {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withUrlDomain(urlDomain: string): BackendApi {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
    public withReqProtocol(reqProtocol: BackendApiReqProtocolEnum | string): BackendApi {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: BackendApiReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): BackendApiReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withRemark(remark: string): BackendApi {
        this['remark'] = remark;
        return this;
    }
    public withReqMethod(reqMethod: BackendApiReqMethodEnum | string): BackendApi {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: BackendApiReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): BackendApiReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withVersion(version: string): BackendApi {
        this['version'] = version;
        return this;
    }
    public withReqUri(reqUri: string): BackendApi {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withTimeout(timeout: number): BackendApi {
        this['timeout'] = timeout;
        return this;
    }
    public withEnableClientSsl(enableClientSsl: boolean): BackendApi {
        this['enable_client_ssl'] = enableClientSsl;
        return this;
    }
    public set enableClientSsl(enableClientSsl: boolean  | undefined) {
        this['enable_client_ssl'] = enableClientSsl;
    }
    public get enableClientSsl(): boolean | undefined {
        return this['enable_client_ssl'];
    }
    public withRetryCount(retryCount: string): BackendApi {
        this['retry_count'] = retryCount;
        return this;
    }
    public set retryCount(retryCount: string  | undefined) {
        this['retry_count'] = retryCount;
    }
    public get retryCount(): string | undefined {
        return this['retry_count'];
    }
    public withEnableSmChannel(enableSmChannel: boolean): BackendApi {
        this['enable_sm_channel'] = enableSmChannel;
        return this;
    }
    public set enableSmChannel(enableSmChannel: boolean  | undefined) {
        this['enable_sm_channel'] = enableSmChannel;
    }
    public get enableSmChannel(): boolean | undefined {
        return this['enable_sm_channel'];
    }
    public withMemberGroupUrlInfos(memberGroupUrlInfos: Array<MemberGroupUrlInfo>): BackendApi {
        this['member_group_url_infos'] = memberGroupUrlInfos;
        return this;
    }
    public set memberGroupUrlInfos(memberGroupUrlInfos: Array<MemberGroupUrlInfo>  | undefined) {
        this['member_group_url_infos'] = memberGroupUrlInfos;
    }
    public get memberGroupUrlInfos(): Array<MemberGroupUrlInfo> | undefined {
        return this['member_group_url_infos'];
    }
    public withId(id: string): BackendApi {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): BackendApi {
        this['status'] = status;
        return this;
    }
    public withRegisterTime(registerTime: Date): BackendApi {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withUpdateTime(updateTime: Date): BackendApi {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withVpcChannelInfo(vpcChannelInfo: VpcInfo): BackendApi {
        this['vpc_channel_info'] = vpcChannelInfo;
        return this;
    }
    public set vpcChannelInfo(vpcChannelInfo: VpcInfo  | undefined) {
        this['vpc_channel_info'] = vpcChannelInfo;
    }
    public get vpcChannelInfo(): VpcInfo | undefined {
        return this['vpc_channel_info'];
    }
    public withVpcChannelStatus(vpcChannelStatus: number): BackendApi {
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
export enum BackendApiReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    GRPC = 'GRPC',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum BackendApiReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
