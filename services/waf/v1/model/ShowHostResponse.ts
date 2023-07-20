import { AccessProgress } from './AccessProgress';
import { BlockPage } from './BlockPage';
import { CircuitBreaker } from './CircuitBreaker';
import { CloudWafServer } from './CloudWafServer';
import { Flag } from './Flag';
import { TimeoutConfig } from './TimeoutConfig';
import { TrafficMark } from './TrafficMark';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHostResponse extends SdkResponse {
    public id?: string;
    public hostname?: string;
    public policyid?: string;
    public domainid?: string;
    public projectid?: string;
    private 'enterprise_project_id'?: string;
    public protocol?: string;
    public server?: Array<CloudWafServer>;
    public proxy?: boolean;
    private 'protect_status'?: number;
    private 'access_status'?: number;
    private 'access_code'?: string;
    public locked?: number;
    public timestamp?: number;
    public certificateid?: string;
    public certificatename?: string;
    public tls?: ShowHostResponseTlsEnum | string;
    public cipher?: ShowHostResponseCipherEnum | string;
    private 'block_page'?: BlockPage;
    public extend?: { [key: string]: string; };
    private 'traffic_mark'?: TrafficMark;
    private 'circuit_breaker'?: CircuitBreaker;
    private 'lb_algorithm'?: ShowHostResponseLbAlgorithmEnum | string;
    private 'timeout_config'?: TimeoutConfig;
    private 'web_tag'?: string;
    public flag?: Flag;
    public description?: string;
    private 'http2_enable'?: boolean;
    private 'exclusive_ip'?: boolean;
    private 'access_progress'?: Array<AccessProgress>;
    private 'forward_header_map'?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withId(id: string): ShowHostResponse {
        this['id'] = id;
        return this;
    }
    public withHostname(hostname: string): ShowHostResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withPolicyid(policyid: string): ShowHostResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withDomainid(domainid: string): ShowHostResponse {
        this['domainid'] = domainid;
        return this;
    }
    public withProjectid(projectid: string): ShowHostResponse {
        this['projectid'] = projectid;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowHostResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProtocol(protocol: string): ShowHostResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withServer(server: Array<CloudWafServer>): ShowHostResponse {
        this['server'] = server;
        return this;
    }
    public withProxy(proxy: boolean): ShowHostResponse {
        this['proxy'] = proxy;
        return this;
    }
    public withProtectStatus(protectStatus: number): ShowHostResponse {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): number | undefined {
        return this['protect_status'];
    }
    public withAccessStatus(accessStatus: number): ShowHostResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): number | undefined {
        return this['access_status'];
    }
    public withAccessCode(accessCode: string): ShowHostResponse {
        this['access_code'] = accessCode;
        return this;
    }
    public set accessCode(accessCode: string  | undefined) {
        this['access_code'] = accessCode;
    }
    public get accessCode(): string | undefined {
        return this['access_code'];
    }
    public withLocked(locked: number): ShowHostResponse {
        this['locked'] = locked;
        return this;
    }
    public withTimestamp(timestamp: number): ShowHostResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withCertificateid(certificateid: string): ShowHostResponse {
        this['certificateid'] = certificateid;
        return this;
    }
    public withCertificatename(certificatename: string): ShowHostResponse {
        this['certificatename'] = certificatename;
        return this;
    }
    public withTls(tls: ShowHostResponseTlsEnum | string): ShowHostResponse {
        this['tls'] = tls;
        return this;
    }
    public withCipher(cipher: ShowHostResponseCipherEnum | string): ShowHostResponse {
        this['cipher'] = cipher;
        return this;
    }
    public withBlockPage(blockPage: BlockPage): ShowHostResponse {
        this['block_page'] = blockPage;
        return this;
    }
    public set blockPage(blockPage: BlockPage  | undefined) {
        this['block_page'] = blockPage;
    }
    public get blockPage(): BlockPage | undefined {
        return this['block_page'];
    }
    public withExtend(extend: { [key: string]: string; }): ShowHostResponse {
        this['extend'] = extend;
        return this;
    }
    public withTrafficMark(trafficMark: TrafficMark): ShowHostResponse {
        this['traffic_mark'] = trafficMark;
        return this;
    }
    public set trafficMark(trafficMark: TrafficMark  | undefined) {
        this['traffic_mark'] = trafficMark;
    }
    public get trafficMark(): TrafficMark | undefined {
        return this['traffic_mark'];
    }
    public withCircuitBreaker(circuitBreaker: CircuitBreaker): ShowHostResponse {
        this['circuit_breaker'] = circuitBreaker;
        return this;
    }
    public set circuitBreaker(circuitBreaker: CircuitBreaker  | undefined) {
        this['circuit_breaker'] = circuitBreaker;
    }
    public get circuitBreaker(): CircuitBreaker | undefined {
        return this['circuit_breaker'];
    }
    public withLbAlgorithm(lbAlgorithm: ShowHostResponseLbAlgorithmEnum | string): ShowHostResponse {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: ShowHostResponseLbAlgorithmEnum | string  | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm(): ShowHostResponseLbAlgorithmEnum | string | undefined {
        return this['lb_algorithm'];
    }
    public withTimeoutConfig(timeoutConfig: TimeoutConfig): ShowHostResponse {
        this['timeout_config'] = timeoutConfig;
        return this;
    }
    public set timeoutConfig(timeoutConfig: TimeoutConfig  | undefined) {
        this['timeout_config'] = timeoutConfig;
    }
    public get timeoutConfig(): TimeoutConfig | undefined {
        return this['timeout_config'];
    }
    public withWebTag(webTag: string): ShowHostResponse {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string  | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag(): string | undefined {
        return this['web_tag'];
    }
    public withFlag(flag: Flag): ShowHostResponse {
        this['flag'] = flag;
        return this;
    }
    public withDescription(description: string): ShowHostResponse {
        this['description'] = description;
        return this;
    }
    public withHttp2Enable(http2Enable: boolean): ShowHostResponse {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean  | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable(): boolean | undefined {
        return this['http2_enable'];
    }
    public withExclusiveIp(exclusiveIp: boolean): ShowHostResponse {
        this['exclusive_ip'] = exclusiveIp;
        return this;
    }
    public set exclusiveIp(exclusiveIp: boolean  | undefined) {
        this['exclusive_ip'] = exclusiveIp;
    }
    public get exclusiveIp(): boolean | undefined {
        return this['exclusive_ip'];
    }
    public withAccessProgress(accessProgress: Array<AccessProgress>): ShowHostResponse {
        this['access_progress'] = accessProgress;
        return this;
    }
    public set accessProgress(accessProgress: Array<AccessProgress>  | undefined) {
        this['access_progress'] = accessProgress;
    }
    public get accessProgress(): Array<AccessProgress> | undefined {
        return this['access_progress'];
    }
    public withForwardHeaderMap(forwardHeaderMap: { [key: string]: string; }): ShowHostResponse {
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
export enum ShowHostResponseTlsEnum {
    TLS_V1_0 = 'TLS v1.0',
    TLS_V1_1 = 'TLS v1.1',
    TLS_V1_2 = 'TLS v1.2'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowHostResponseCipherEnum {
    CIPHER_1 = 'cipher_1',
    CIPHER_2 = 'cipher_2',
    CIPHER_3 = 'cipher_3',
    CIPHER_4 = 'cipher_4',
    CIPHER_DEFAULT = 'cipher_default'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowHostResponseLbAlgorithmEnum {
    IP_HASH = 'ip_hash',
    ROUND_ROBIN = 'round_robin',
    SESSION_HASH = 'session_hash'
}
