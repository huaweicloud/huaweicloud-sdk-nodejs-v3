import { BlockPage } from './BlockPage';
import { CircuitBreaker } from './CircuitBreaker';
import { HostFlag } from './HostFlag';
import { PremiumWafServer } from './PremiumWafServer';
import { TimeoutConfig } from './TimeoutConfig';
import { TrafficMark } from './TrafficMark';


export class UpdatePremiumHostRequestBody {
    public proxy?: boolean;
    public certificateid?: string;
    public certificatename?: string;
    public server?: Array<PremiumWafServer>;
    public tls?: UpdatePremiumHostRequestBodyTlsEnum | string;
    public cipher?: UpdatePremiumHostRequestBodyCipherEnum | string;
    public mode?: string;
    public locked?: number;
    private 'protect_status'?: number;
    private 'access_status'?: number;
    public timestamp?: number;
    private 'pool_ids'?: Array<string>;
    private 'block_page'?: BlockPage;
    private 'traffic_mark'?: TrafficMark;
    private 'circuit_breaker'?: CircuitBreaker;
    private 'timeout_config'?: TimeoutConfig;
    public flag?: HostFlag;
    private 'forward_header_map'?: { [key: string]: string; };
    public constructor() { 
    }
    public withProxy(proxy: boolean): UpdatePremiumHostRequestBody {
        this['proxy'] = proxy;
        return this;
    }
    public withCertificateid(certificateid: string): UpdatePremiumHostRequestBody {
        this['certificateid'] = certificateid;
        return this;
    }
    public withCertificatename(certificatename: string): UpdatePremiumHostRequestBody {
        this['certificatename'] = certificatename;
        return this;
    }
    public withServer(server: Array<PremiumWafServer>): UpdatePremiumHostRequestBody {
        this['server'] = server;
        return this;
    }
    public withTls(tls: UpdatePremiumHostRequestBodyTlsEnum | string): UpdatePremiumHostRequestBody {
        this['tls'] = tls;
        return this;
    }
    public withCipher(cipher: UpdatePremiumHostRequestBodyCipherEnum | string): UpdatePremiumHostRequestBody {
        this['cipher'] = cipher;
        return this;
    }
    public withMode(mode: string): UpdatePremiumHostRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withLocked(locked: number): UpdatePremiumHostRequestBody {
        this['locked'] = locked;
        return this;
    }
    public withProtectStatus(protectStatus: number): UpdatePremiumHostRequestBody {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): number | undefined {
        return this['protect_status'];
    }
    public withAccessStatus(accessStatus: number): UpdatePremiumHostRequestBody {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): number | undefined {
        return this['access_status'];
    }
    public withTimestamp(timestamp: number): UpdatePremiumHostRequestBody {
        this['timestamp'] = timestamp;
        return this;
    }
    public withPoolIds(poolIds: Array<string>): UpdatePremiumHostRequestBody {
        this['pool_ids'] = poolIds;
        return this;
    }
    public set poolIds(poolIds: Array<string>  | undefined) {
        this['pool_ids'] = poolIds;
    }
    public get poolIds(): Array<string> | undefined {
        return this['pool_ids'];
    }
    public withBlockPage(blockPage: BlockPage): UpdatePremiumHostRequestBody {
        this['block_page'] = blockPage;
        return this;
    }
    public set blockPage(blockPage: BlockPage  | undefined) {
        this['block_page'] = blockPage;
    }
    public get blockPage(): BlockPage | undefined {
        return this['block_page'];
    }
    public withTrafficMark(trafficMark: TrafficMark): UpdatePremiumHostRequestBody {
        this['traffic_mark'] = trafficMark;
        return this;
    }
    public set trafficMark(trafficMark: TrafficMark  | undefined) {
        this['traffic_mark'] = trafficMark;
    }
    public get trafficMark(): TrafficMark | undefined {
        return this['traffic_mark'];
    }
    public withCircuitBreaker(circuitBreaker: CircuitBreaker): UpdatePremiumHostRequestBody {
        this['circuit_breaker'] = circuitBreaker;
        return this;
    }
    public set circuitBreaker(circuitBreaker: CircuitBreaker  | undefined) {
        this['circuit_breaker'] = circuitBreaker;
    }
    public get circuitBreaker(): CircuitBreaker | undefined {
        return this['circuit_breaker'];
    }
    public withTimeoutConfig(timeoutConfig: TimeoutConfig): UpdatePremiumHostRequestBody {
        this['timeout_config'] = timeoutConfig;
        return this;
    }
    public set timeoutConfig(timeoutConfig: TimeoutConfig  | undefined) {
        this['timeout_config'] = timeoutConfig;
    }
    public get timeoutConfig(): TimeoutConfig | undefined {
        return this['timeout_config'];
    }
    public withFlag(flag: HostFlag): UpdatePremiumHostRequestBody {
        this['flag'] = flag;
        return this;
    }
    public withForwardHeaderMap(forwardHeaderMap: { [key: string]: string; }): UpdatePremiumHostRequestBody {
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
export enum UpdatePremiumHostRequestBodyTlsEnum {
    TLS_V1_0 = 'TLS v1.0',
    TLS_V1_1 = 'TLS v1.1',
    TLS_V1_2 = 'TLS v1.2'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdatePremiumHostRequestBodyCipherEnum {
    CIPHER_1 = 'cipher_1',
    CIPHER_2 = 'cipher_2',
    CIPHER_3 = 'cipher_3',
    CIPHER_4 = 'cipher_4',
    CIPHER_5 = 'cipher_5',
    CIPHER_6 = 'cipher_6',
    CIPHER_DEFAULT = 'cipher_default'
}
