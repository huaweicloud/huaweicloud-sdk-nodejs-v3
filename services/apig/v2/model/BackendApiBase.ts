import { BackendApiBaseInfo } from './BackendApiBaseInfo';


export class BackendApiBase {
    private 'authorizer_id'?: string;
    private 'url_domain'?: string;
    private 'req_protocol'?: BackendApiBaseReqProtocolEnum | string;
    public remark?: string;
    private 'req_method'?: BackendApiBaseReqMethodEnum | string;
    public version?: string;
    private 'req_uri'?: string;
    public timeout?: number;
    private 'enable_client_ssl'?: boolean;
    private 'retry_count'?: string;
    public id?: string;
    public status?: number;
    private 'register_time'?: Date;
    private 'update_time'?: Date;
    public constructor(reqProtocol?: string, reqMethod?: string, reqUri?: string, timeout?: number) { 
        this['req_protocol'] = reqProtocol;
        this['req_method'] = reqMethod;
        this['req_uri'] = reqUri;
        this['timeout'] = timeout;
    }
    public withAuthorizerId(authorizerId: string): BackendApiBase {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
    public withUrlDomain(urlDomain: string): BackendApiBase {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
    public withReqProtocol(reqProtocol: BackendApiBaseReqProtocolEnum | string): BackendApiBase {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: BackendApiBaseReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): BackendApiBaseReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withRemark(remark: string): BackendApiBase {
        this['remark'] = remark;
        return this;
    }
    public withReqMethod(reqMethod: BackendApiBaseReqMethodEnum | string): BackendApiBase {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: BackendApiBaseReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): BackendApiBaseReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withVersion(version: string): BackendApiBase {
        this['version'] = version;
        return this;
    }
    public withReqUri(reqUri: string): BackendApiBase {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
    public withTimeout(timeout: number): BackendApiBase {
        this['timeout'] = timeout;
        return this;
    }
    public withEnableClientSsl(enableClientSsl: boolean): BackendApiBase {
        this['enable_client_ssl'] = enableClientSsl;
        return this;
    }
    public set enableClientSsl(enableClientSsl: boolean  | undefined) {
        this['enable_client_ssl'] = enableClientSsl;
    }
    public get enableClientSsl(): boolean | undefined {
        return this['enable_client_ssl'];
    }
    public withRetryCount(retryCount: string): BackendApiBase {
        this['retry_count'] = retryCount;
        return this;
    }
    public set retryCount(retryCount: string  | undefined) {
        this['retry_count'] = retryCount;
    }
    public get retryCount(): string | undefined {
        return this['retry_count'];
    }
    public withId(id: string): BackendApiBase {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): BackendApiBase {
        this['status'] = status;
        return this;
    }
    public withRegisterTime(registerTime: Date): BackendApiBase {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withUpdateTime(updateTime: Date): BackendApiBase {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackendApiBaseReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    GRPC = 'GRPC',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum BackendApiBaseReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
