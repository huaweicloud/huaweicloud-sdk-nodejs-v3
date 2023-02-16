import { AccessProgress } from './AccessProgress';
import { BlockPage } from './BlockPage';
import { CircuitBreaker } from './CircuitBreaker';
import { CloudWafServer } from './CloudWafServer';
import { Flag } from './Flag';
import { TimeoutConfig } from './TimeoutConfig';
import { TrafficMark } from './TrafficMark';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHostResponse extends SdkResponse {
    public id?: string;
    public hostname?: string;
    public policyid?: string;
    public domainid?: string;
    public projectid?: string;
    private 'enterprise_project_id'?: string | undefined;
    public protocol?: string;
    public server?: Array<CloudWafServer>;
    public proxy?: boolean;
    private 'protect_status'?: number | undefined;
    private 'access_status'?: number | undefined;
    private 'access_code'?: string | undefined;
    public locked?: number;
    public timestamp?: number;
    public certificateid?: string;
    public certificatename?: string;
    public tls?: UpdateHostResponseTlsEnum;
    public cipher?: UpdateHostResponseCipherEnum;
    private 'block_page'?: BlockPage | undefined;
    public extend?: { [key: string]: string; };
    private 'web_tag'?: string | undefined;
    private 'traffic_mark'?: TrafficMark | undefined;
    private 'circuit_breaker'?: CircuitBreaker | undefined;
    private 'lb_algorithm'?: UpdateHostResponseLbAlgorithmEnum | undefined;
    private 'timeout_config'?: TimeoutConfig | undefined;
    public flag?: Flag;
    public description?: string;
    private 'http2_enable'?: boolean | undefined;
    private 'exclusive_ip'?: boolean | undefined;
    private 'access_progress'?: Array<AccessProgress> | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateHostResponse {
        this['id'] = id;
        return this;
    }
    public withHostname(hostname: string): UpdateHostResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withPolicyid(policyid: string): UpdateHostResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withDomainid(domainid: string): UpdateHostResponse {
        this['domainid'] = domainid;
        return this;
    }
    public withProjectid(projectid: string): UpdateHostResponse {
        this['projectid'] = projectid;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateHostResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withProtocol(protocol: string): UpdateHostResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withServer(server: Array<CloudWafServer>): UpdateHostResponse {
        this['server'] = server;
        return this;
    }
    public withProxy(proxy: boolean): UpdateHostResponse {
        this['proxy'] = proxy;
        return this;
    }
    public withProtectStatus(protectStatus: number): UpdateHostResponse {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus() {
        return this['protect_status'];
    }
    public withAccessStatus(accessStatus: number): UpdateHostResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus() {
        return this['access_status'];
    }
    public withAccessCode(accessCode: string): UpdateHostResponse {
        this['access_code'] = accessCode;
        return this;
    }
    public set accessCode(accessCode: string | undefined) {
        this['access_code'] = accessCode;
    }
    public get accessCode() {
        return this['access_code'];
    }
    public withLocked(locked: number): UpdateHostResponse {
        this['locked'] = locked;
        return this;
    }
    public withTimestamp(timestamp: number): UpdateHostResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withCertificateid(certificateid: string): UpdateHostResponse {
        this['certificateid'] = certificateid;
        return this;
    }
    public withCertificatename(certificatename: string): UpdateHostResponse {
        this['certificatename'] = certificatename;
        return this;
    }
    public withTls(tls: UpdateHostResponseTlsEnum): UpdateHostResponse {
        this['tls'] = tls;
        return this;
    }
    public withCipher(cipher: UpdateHostResponseCipherEnum): UpdateHostResponse {
        this['cipher'] = cipher;
        return this;
    }
    public withBlockPage(blockPage: BlockPage): UpdateHostResponse {
        this['block_page'] = blockPage;
        return this;
    }
    public set blockPage(blockPage: BlockPage | undefined) {
        this['block_page'] = blockPage;
    }
    public get blockPage() {
        return this['block_page'];
    }
    public withExtend(extend: { [key: string]: string; }): UpdateHostResponse {
        this['extend'] = extend;
        return this;
    }
    public withWebTag(webTag: string): UpdateHostResponse {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag() {
        return this['web_tag'];
    }
    public withTrafficMark(trafficMark: TrafficMark): UpdateHostResponse {
        this['traffic_mark'] = trafficMark;
        return this;
    }
    public set trafficMark(trafficMark: TrafficMark | undefined) {
        this['traffic_mark'] = trafficMark;
    }
    public get trafficMark() {
        return this['traffic_mark'];
    }
    public withCircuitBreaker(circuitBreaker: CircuitBreaker): UpdateHostResponse {
        this['circuit_breaker'] = circuitBreaker;
        return this;
    }
    public set circuitBreaker(circuitBreaker: CircuitBreaker | undefined) {
        this['circuit_breaker'] = circuitBreaker;
    }
    public get circuitBreaker() {
        return this['circuit_breaker'];
    }
    public withLbAlgorithm(lbAlgorithm: UpdateHostResponseLbAlgorithmEnum): UpdateHostResponse {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: UpdateHostResponseLbAlgorithmEnum | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm() {
        return this['lb_algorithm'];
    }
    public withTimeoutConfig(timeoutConfig: TimeoutConfig): UpdateHostResponse {
        this['timeout_config'] = timeoutConfig;
        return this;
    }
    public set timeoutConfig(timeoutConfig: TimeoutConfig | undefined) {
        this['timeout_config'] = timeoutConfig;
    }
    public get timeoutConfig() {
        return this['timeout_config'];
    }
    public withFlag(flag: Flag): UpdateHostResponse {
        this['flag'] = flag;
        return this;
    }
    public withDescription(description: string): UpdateHostResponse {
        this['description'] = description;
        return this;
    }
    public withHttp2Enable(http2Enable: boolean): UpdateHostResponse {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable() {
        return this['http2_enable'];
    }
    public withExclusiveIp(exclusiveIp: boolean): UpdateHostResponse {
        this['exclusive_ip'] = exclusiveIp;
        return this;
    }
    public set exclusiveIp(exclusiveIp: boolean | undefined) {
        this['exclusive_ip'] = exclusiveIp;
    }
    public get exclusiveIp() {
        return this['exclusive_ip'];
    }
    public withAccessProgress(accessProgress: Array<AccessProgress>): UpdateHostResponse {
        this['access_progress'] = accessProgress;
        return this;
    }
    public set accessProgress(accessProgress: Array<AccessProgress> | undefined) {
        this['access_progress'] = accessProgress;
    }
    public get accessProgress() {
        return this['access_progress'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateHostResponseTlsEnum {
    TLS_V1_0 = 'TLS v1.0',
    TLS_V1_1 = 'TLS v1.1',
    TLS_V1_2 = 'TLS v1.2'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateHostResponseCipherEnum {
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
export enum UpdateHostResponseLbAlgorithmEnum {
    IP_HASH = 'ip_hash',
    ROUND_ROBIN = 'round_robin',
    SESSION_HASH = 'session_hash'
}
