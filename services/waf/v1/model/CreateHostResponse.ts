import { BlockPage } from './BlockPage';
import { CloudWafServer } from './CloudWafServer';
import { Flag } from './Flag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateHostResponse extends SdkResponse {
    public id?: string;
    public hostname?: string;
    public policyid?: string;
    private 'access_code'?: string | undefined;
    private 'protect_status'?: number | undefined;
    private 'access_status'?: number | undefined;
    private 'lb_algorithm'?: CreateHostResponseLbAlgorithmEnum | undefined;
    public protocol?: string;
    public certificateid?: string;
    public certificatename?: string;
    public server?: Array<CloudWafServer>;
    public proxy?: boolean;
    public timestamp?: number;
    private 'exclusive_ip'?: boolean | undefined;
    private 'web_tag'?: string | undefined;
    private 'http2_enable'?: boolean | undefined;
    private 'block_page'?: BlockPage | undefined;
    public flag?: Flag;
    public extend?: { [key: string]: string; };
    private 'forward_header_map'?: { [key: string]: string; } | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateHostResponse {
        this['id'] = id;
        return this;
    }
    public withHostname(hostname: string): CreateHostResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withPolicyid(policyid: string): CreateHostResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withAccessCode(accessCode: string): CreateHostResponse {
        this['access_code'] = accessCode;
        return this;
    }
    public set accessCode(accessCode: string | undefined) {
        this['access_code'] = accessCode;
    }
    public get accessCode() {
        return this['access_code'];
    }
    public withProtectStatus(protectStatus: number): CreateHostResponse {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus() {
        return this['protect_status'];
    }
    public withAccessStatus(accessStatus: number): CreateHostResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus() {
        return this['access_status'];
    }
    public withLbAlgorithm(lbAlgorithm: CreateHostResponseLbAlgorithmEnum): CreateHostResponse {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: CreateHostResponseLbAlgorithmEnum | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm() {
        return this['lb_algorithm'];
    }
    public withProtocol(protocol: string): CreateHostResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withCertificateid(certificateid: string): CreateHostResponse {
        this['certificateid'] = certificateid;
        return this;
    }
    public withCertificatename(certificatename: string): CreateHostResponse {
        this['certificatename'] = certificatename;
        return this;
    }
    public withServer(server: Array<CloudWafServer>): CreateHostResponse {
        this['server'] = server;
        return this;
    }
    public withProxy(proxy: boolean): CreateHostResponse {
        this['proxy'] = proxy;
        return this;
    }
    public withTimestamp(timestamp: number): CreateHostResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withExclusiveIp(exclusiveIp: boolean): CreateHostResponse {
        this['exclusive_ip'] = exclusiveIp;
        return this;
    }
    public set exclusiveIp(exclusiveIp: boolean | undefined) {
        this['exclusive_ip'] = exclusiveIp;
    }
    public get exclusiveIp() {
        return this['exclusive_ip'];
    }
    public withWebTag(webTag: string): CreateHostResponse {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag() {
        return this['web_tag'];
    }
    public withHttp2Enable(http2Enable: boolean): CreateHostResponse {
        this['http2_enable'] = http2Enable;
        return this;
    }
    public set http2Enable(http2Enable: boolean | undefined) {
        this['http2_enable'] = http2Enable;
    }
    public get http2Enable() {
        return this['http2_enable'];
    }
    public withBlockPage(blockPage: BlockPage): CreateHostResponse {
        this['block_page'] = blockPage;
        return this;
    }
    public set blockPage(blockPage: BlockPage | undefined) {
        this['block_page'] = blockPage;
    }
    public get blockPage() {
        return this['block_page'];
    }
    public withFlag(flag: Flag): CreateHostResponse {
        this['flag'] = flag;
        return this;
    }
    public withExtend(extend: { [key: string]: string; }): CreateHostResponse {
        this['extend'] = extend;
        return this;
    }
    public withForwardHeaderMap(forwardHeaderMap: { [key: string]: string; }): CreateHostResponse {
        this['forward_header_map'] = forwardHeaderMap;
        return this;
    }
    public set forwardHeaderMap(forwardHeaderMap: { [key: string]: string; } | undefined) {
        this['forward_header_map'] = forwardHeaderMap;
    }
    public get forwardHeaderMap() {
        return this['forward_header_map'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHostResponseLbAlgorithmEnum {
    IP_HASH = 'ip_hash',
    ROUND_ROBIN = 'round_robin',
    SESSION_HASH = 'session_hash'
}
