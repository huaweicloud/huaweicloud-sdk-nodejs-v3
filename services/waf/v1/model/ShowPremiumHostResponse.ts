import { AccessProgress } from './AccessProgress';
import { BlockPage } from './BlockPage';
import { Flag } from './Flag';
import { PremiumWafServer } from './PremiumWafServer';
import { TimeoutConfig } from './TimeoutConfig';
import { TrafficMark } from './TrafficMark';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPremiumHostResponse extends SdkResponse {
    public id?: string;
    public hostname?: string;
    public protocol?: string;
    public server?: Array<PremiumWafServer>;
    public proxy?: boolean;
    public locked?: number;
    public timestamp?: number;
    public tls?: ShowPremiumHostResponseTlsEnum | string;
    public cipher?: ShowPremiumHostResponseCipherEnum | string;
    public extend?: { [key: string]: string; };
    public flag?: Flag;
    public mode?: string;
    private 'loadbalancer_id'?: string;
    private 'listener_id'?: string;
    private 'protocol_port'?: number;
    public description?: string;
    public policyid?: string;
    public domainid?: string;
    public projectid?: string;
    private 'enterprise_project_id'?: string;
    public certificateid?: string;
    public certificatename?: string;
    private 'protect_status'?: ShowPremiumHostResponseProtectStatusEnum | number;
    private 'access_status'?: ShowPremiumHostResponseAccessStatusEnum | number;
    private 'web_tag'?: string;
    private 'block_page'?: BlockPage;
    private 'traffic_mark'?: TrafficMark;
    private 'timeout_config'?: TimeoutConfig;
    private 'forward_header_map'?: { [key: string]: string; };
    private 'access_progress'?: Array<AccessProgress>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowPremiumHostResponse {
        this['id'] = id;
        return this;
    }
    public withHostname(hostname: string): ShowPremiumHostResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withProtocol(protocol: string): ShowPremiumHostResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withServer(server: Array<PremiumWafServer>): ShowPremiumHostResponse {
        this['server'] = server;
        return this;
    }
    public withProxy(proxy: boolean): ShowPremiumHostResponse {
        this['proxy'] = proxy;
        return this;
    }
    public withLocked(locked: number): ShowPremiumHostResponse {
        this['locked'] = locked;
        return this;
    }
    public withTimestamp(timestamp: number): ShowPremiumHostResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withTls(tls: ShowPremiumHostResponseTlsEnum | string): ShowPremiumHostResponse {
        this['tls'] = tls;
        return this;
    }
    public withCipher(cipher: ShowPremiumHostResponseCipherEnum | string): ShowPremiumHostResponse {
        this['cipher'] = cipher;
        return this;
    }
    public withExtend(extend: { [key: string]: string; }): ShowPremiumHostResponse {
        this['extend'] = extend;
        return this;
    }
    public withFlag(flag: Flag): ShowPremiumHostResponse {
        this['flag'] = flag;
        return this;
    }
    public withMode(mode: string): ShowPremiumHostResponse {
        this['mode'] = mode;
        return this;
    }
    public withLoadbalancerId(loadbalancerId: string): ShowPremiumHostResponse {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withListenerId(listenerId: string): ShowPremiumHostResponse {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withProtocolPort(protocolPort: number): ShowPremiumHostResponse {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withDescription(description: string): ShowPremiumHostResponse {
        this['description'] = description;
        return this;
    }
    public withPolicyid(policyid: string): ShowPremiumHostResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withDomainid(domainid: string): ShowPremiumHostResponse {
        this['domainid'] = domainid;
        return this;
    }
    public withProjectid(projectid: string): ShowPremiumHostResponse {
        this['projectid'] = projectid;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowPremiumHostResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCertificateid(certificateid: string): ShowPremiumHostResponse {
        this['certificateid'] = certificateid;
        return this;
    }
    public withCertificatename(certificatename: string): ShowPremiumHostResponse {
        this['certificatename'] = certificatename;
        return this;
    }
    public withProtectStatus(protectStatus: ShowPremiumHostResponseProtectStatusEnum | number): ShowPremiumHostResponse {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: ShowPremiumHostResponseProtectStatusEnum | number  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): ShowPremiumHostResponseProtectStatusEnum | number | undefined {
        return this['protect_status'];
    }
    public withAccessStatus(accessStatus: ShowPremiumHostResponseAccessStatusEnum | number): ShowPremiumHostResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: ShowPremiumHostResponseAccessStatusEnum | number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): ShowPremiumHostResponseAccessStatusEnum | number | undefined {
        return this['access_status'];
    }
    public withWebTag(webTag: string): ShowPremiumHostResponse {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string  | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag(): string | undefined {
        return this['web_tag'];
    }
    public withBlockPage(blockPage: BlockPage): ShowPremiumHostResponse {
        this['block_page'] = blockPage;
        return this;
    }
    public set blockPage(blockPage: BlockPage  | undefined) {
        this['block_page'] = blockPage;
    }
    public get blockPage(): BlockPage | undefined {
        return this['block_page'];
    }
    public withTrafficMark(trafficMark: TrafficMark): ShowPremiumHostResponse {
        this['traffic_mark'] = trafficMark;
        return this;
    }
    public set trafficMark(trafficMark: TrafficMark  | undefined) {
        this['traffic_mark'] = trafficMark;
    }
    public get trafficMark(): TrafficMark | undefined {
        return this['traffic_mark'];
    }
    public withTimeoutConfig(timeoutConfig: TimeoutConfig): ShowPremiumHostResponse {
        this['timeout_config'] = timeoutConfig;
        return this;
    }
    public set timeoutConfig(timeoutConfig: TimeoutConfig  | undefined) {
        this['timeout_config'] = timeoutConfig;
    }
    public get timeoutConfig(): TimeoutConfig | undefined {
        return this['timeout_config'];
    }
    public withForwardHeaderMap(forwardHeaderMap: { [key: string]: string; }): ShowPremiumHostResponse {
        this['forward_header_map'] = forwardHeaderMap;
        return this;
    }
    public set forwardHeaderMap(forwardHeaderMap: { [key: string]: string; }  | undefined) {
        this['forward_header_map'] = forwardHeaderMap;
    }
    public get forwardHeaderMap(): { [key: string]: string; } | undefined {
        return this['forward_header_map'];
    }
    public withAccessProgress(accessProgress: Array<AccessProgress>): ShowPremiumHostResponse {
        this['access_progress'] = accessProgress;
        return this;
    }
    public set accessProgress(accessProgress: Array<AccessProgress>  | undefined) {
        this['access_progress'] = accessProgress;
    }
    public get accessProgress(): Array<AccessProgress> | undefined {
        return this['access_progress'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPremiumHostResponseTlsEnum {
    TLS_V1_0 = 'TLS v1.0',
    TLS_V1_1 = 'TLS v1.1',
    TLS_V1_2 = 'TLS v1.2'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowPremiumHostResponseCipherEnum {
    CIPHER_1 = 'cipher_1',
    CIPHER_2 = 'cipher_2',
    CIPHER_3 = 'cipher_3',
    CIPHER_4 = 'cipher_4',
    CIPHER_5 = 'cipher_5',
    CIPHER_6 = 'cipher_6',
    CIPHER_DEFAULT = 'cipher_default'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowPremiumHostResponseProtectStatusEnum {
    NUMBER_MINUS_1 = -1,
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum ShowPremiumHostResponseAccessStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
