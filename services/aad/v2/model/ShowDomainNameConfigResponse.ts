
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainNameConfigResponse extends SdkResponse {
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'real_server_type'?: number;
    private 'port_http'?: Array<number>;
    private 'port_https'?: Array<number>;
    private 'real_server'?: string;
    private 'pp_enable'?: number;
    private 'overseas_type'?: number;
    public tls?: string;
    public cipher?: string;
    private 'http2_enable'?: boolean;
    private 'header_map'?: object;
    public constructor() { 
        super();
    }
    public withDomainId(domainId: string): ShowDomainNameConfigResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): ShowDomainNameConfigResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withRealServerType(realServerType: number): ShowDomainNameConfigResponse {
        this['real_server_type'] = realServerType;
        return this;
    }
    public set realServerType(realServerType: number  | undefined) {
        this['real_server_type'] = realServerType;
    }
    public get realServerType(): number | undefined {
        return this['real_server_type'];
    }
    public withPortHttp(portHttp: Array<number>): ShowDomainNameConfigResponse {
        this['port_http'] = portHttp;
        return this;
    }
    public set portHttp(portHttp: Array<number>  | undefined) {
        this['port_http'] = portHttp;
    }
    public get portHttp(): Array<number> | undefined {
        return this['port_http'];
    }
    public withPortHttps(portHttps: Array<number>): ShowDomainNameConfigResponse {
        this['port_https'] = portHttps;
        return this;
    }
    public set portHttps(portHttps: Array<number>  | undefined) {
        this['port_https'] = portHttps;
    }
    public get portHttps(): Array<number> | undefined {
        return this['port_https'];
    }
    public withRealServer(realServer: string): ShowDomainNameConfigResponse {
        this['real_server'] = realServer;
        return this;
    }
    public set realServer(realServer: string  | undefined) {
        this['real_server'] = realServer;
    }
    public get realServer(): string | undefined {
        return this['real_server'];
    }
    public withPpEnable(ppEnable: number): ShowDomainNameConfigResponse {
        this['pp_enable'] = ppEnable;
        return this;
    }
    public set ppEnable(ppEnable: number  | undefined) {
        this['pp_enable'] = ppEnable;
    }
    public get ppEnable(): number | undefined {
        return this['pp_enable'];
    }
    public withOverseasType(overseasType: number): ShowDomainNameConfigResponse {
        this['overseas_type'] = overseasType;
        return this;
    }
    public set overseasType(overseasType: number  | undefined) {
        this['overseas_type'] = overseasType;
    }
    public get overseasType(): number | undefined {
        return this['overseas_type'];
    }
    public withTls(tls: string): ShowDomainNameConfigResponse {
        this['tls'] = tls;
        return this;
    }
    public withCipher(cipher: string): ShowDomainNameConfigResponse {
        this['cipher'] = cipher;
        return this;
    }
    public withHttp2Enable(http2Enable: boolean): ShowDomainNameConfigResponse {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean  | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable(): boolean | undefined {
        return this['http2_enable'];
    }
    public withHeaderMap(headerMap: object): ShowDomainNameConfigResponse {
        this['header_map'] = headerMap;
        return this;
    }
    public set headerMap(headerMap: object  | undefined) {
        this['header_map'] = headerMap;
    }
    public get headerMap(): object | undefined {
        return this['header_map'];
    }
}