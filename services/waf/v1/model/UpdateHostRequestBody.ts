import { BlockPage } from './BlockPage';
import { CircuitBreaker } from './CircuitBreaker';
import { CloudWafServer } from './CloudWafServer';
import { Flag } from './Flag';
import { TimeoutConfig } from './TimeoutConfig';
import { TrafficMark } from './TrafficMark';


export class UpdateHostRequestBody {
    public proxy?: boolean;
    public certificateid?: string;
    public certificatename?: string;
    public server?: Array<CloudWafServer>;
    public tls?: UpdateHostRequestBodyTlsEnum | string;
    public cipher?: UpdateHostRequestBodyCipherEnum | string;
    private 'http2_enable'?: boolean;
    private 'ipv6_enable'?: boolean;
    private 'web_tag'?: string;
    private 'exclusive_ip'?: boolean;
    private 'paid_type'?: string;
    private 'block_page'?: BlockPage;
    private 'traffic_mark'?: TrafficMark;
    public flag?: Flag;
    public extend?: { [key: string]: string; };
    private 'circuit_breaker'?: CircuitBreaker;
    private 'timeout_config'?: TimeoutConfig;
    private 'forward_header_map'?: { [key: string]: string; };
    public constructor() { 
    }
    public withProxy(proxy: boolean): UpdateHostRequestBody {
        this['proxy'] = proxy;
        return this;
    }
    public withCertificateid(certificateid: string): UpdateHostRequestBody {
        this['certificateid'] = certificateid;
        return this;
    }
    public withCertificatename(certificatename: string): UpdateHostRequestBody {
        this['certificatename'] = certificatename;
        return this;
    }
    public withServer(server: Array<CloudWafServer>): UpdateHostRequestBody {
        this['server'] = server;
        return this;
    }
    public withTls(tls: UpdateHostRequestBodyTlsEnum | string): UpdateHostRequestBody {
        this['tls'] = tls;
        return this;
    }
    public withCipher(cipher: UpdateHostRequestBodyCipherEnum | string): UpdateHostRequestBody {
        this['cipher'] = cipher;
        return this;
    }
    public withHttp2Enable(http2Enable: boolean): UpdateHostRequestBody {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean  | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable(): boolean | undefined {
        return this['http2_enable'];
    }
    public withIpv6Enable(ipv6Enable: boolean): UpdateHostRequestBody {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withWebTag(webTag: string): UpdateHostRequestBody {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string  | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag(): string | undefined {
        return this['web_tag'];
    }
    public withExclusiveIp(exclusiveIp: boolean): UpdateHostRequestBody {
        this['exclusive_ip'] = exclusiveIp;
        return this;
    }
    public set exclusiveIp(exclusiveIp: boolean  | undefined) {
        this['exclusive_ip'] = exclusiveIp;
    }
    public get exclusiveIp(): boolean | undefined {
        return this['exclusive_ip'];
    }
    public withPaidType(paidType: string): UpdateHostRequestBody {
        this['paid_type'] = paidType;
        return this;
    }
    public set paidType(paidType: string  | undefined) {
        this['paid_type'] = paidType;
    }
    public get paidType(): string | undefined {
        return this['paid_type'];
    }
    public withBlockPage(blockPage: BlockPage): UpdateHostRequestBody {
        this['block_page'] = blockPage;
        return this;
    }
    public set blockPage(blockPage: BlockPage  | undefined) {
        this['block_page'] = blockPage;
    }
    public get blockPage(): BlockPage | undefined {
        return this['block_page'];
    }
    public withTrafficMark(trafficMark: TrafficMark): UpdateHostRequestBody {
        this['traffic_mark'] = trafficMark;
        return this;
    }
    public set trafficMark(trafficMark: TrafficMark  | undefined) {
        this['traffic_mark'] = trafficMark;
    }
    public get trafficMark(): TrafficMark | undefined {
        return this['traffic_mark'];
    }
    public withFlag(flag: Flag): UpdateHostRequestBody {
        this['flag'] = flag;
        return this;
    }
    public withExtend(extend: { [key: string]: string; }): UpdateHostRequestBody {
        this['extend'] = extend;
        return this;
    }
    public withCircuitBreaker(circuitBreaker: CircuitBreaker): UpdateHostRequestBody {
        this['circuit_breaker'] = circuitBreaker;
        return this;
    }
    public set circuitBreaker(circuitBreaker: CircuitBreaker  | undefined) {
        this['circuit_breaker'] = circuitBreaker;
    }
    public get circuitBreaker(): CircuitBreaker | undefined {
        return this['circuit_breaker'];
    }
    public withTimeoutConfig(timeoutConfig: TimeoutConfig): UpdateHostRequestBody {
        this['timeout_config'] = timeoutConfig;
        return this;
    }
    public set timeoutConfig(timeoutConfig: TimeoutConfig  | undefined) {
        this['timeout_config'] = timeoutConfig;
    }
    public get timeoutConfig(): TimeoutConfig | undefined {
        return this['timeout_config'];
    }
    public withForwardHeaderMap(forwardHeaderMap: { [key: string]: string; }): UpdateHostRequestBody {
        this['forward_header_map'] = forwardHeaderMap;
        return this;
    }
    public set forwardHeaderMap(forwardHeaderMap: { [key: string]: string; }  | undefined) {
        this['forward_header_map'] = forwardHeaderMap;
    }
    public get forwardHeaderMap(): { [key: string]: string; } | undefined {
        return this['forward_header_map'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateHostRequestBodyTlsEnum {
    TLS_V1_0 = 'TLS v1.0',
    TLS_V1_1 = 'TLS v1.1',
    TLS_V1_2 = 'TLS v1.2'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateHostRequestBodyCipherEnum {
    CIPHER_1 = 'cipher_1',
    CIPHER_2 = 'cipher_2',
    CIPHER_3 = 'cipher_3',
    CIPHER_4 = 'cipher_4',
    CIPHER_5 = 'cipher_5',
    CIPHER_6 = 'cipher_6',
    CIPHER_DEFAULT = 'cipher_default'
}
