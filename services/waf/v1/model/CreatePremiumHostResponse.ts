import { BlockPage } from './BlockPage';
import { Flag } from './Flag';
import { PremiumWafServer } from './PremiumWafServer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePremiumHostResponse extends SdkResponse {
    public id?: string;
    public hostname?: string;
    public protocol?: CreatePremiumHostResponseProtocolEnum;
    public server?: Array<PremiumWafServer>;
    public proxy?: boolean;
    public locked?: number;
    public timestamp?: number;
    public tls?: CreatePremiumHostResponseTlsEnum;
    public cipher?: CreatePremiumHostResponseCipherEnum;
    public extend?: { [key: string]: string; };
    public flag?: Flag;
    public description?: string;
    public policyid?: string;
    public domainid?: string;
    public projectid?: string;
    private 'enterprise_project_id'?: string | undefined;
    private 'protect_status'?: number | undefined;
    private 'access_status'?: number | undefined;
    private 'block_page'?: BlockPage | undefined;
    private 'forward_header_map'?: { [key: string]: string; } | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): CreatePremiumHostResponse {
        this['id'] = id;
        return this;
    }
    public withHostname(hostname: string): CreatePremiumHostResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withProtocol(protocol: CreatePremiumHostResponseProtocolEnum): CreatePremiumHostResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withServer(server: Array<PremiumWafServer>): CreatePremiumHostResponse {
        this['server'] = server;
        return this;
    }
    public withProxy(proxy: boolean): CreatePremiumHostResponse {
        this['proxy'] = proxy;
        return this;
    }
    public withLocked(locked: number): CreatePremiumHostResponse {
        this['locked'] = locked;
        return this;
    }
    public withTimestamp(timestamp: number): CreatePremiumHostResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withTls(tls: CreatePremiumHostResponseTlsEnum): CreatePremiumHostResponse {
        this['tls'] = tls;
        return this;
    }
    public withCipher(cipher: CreatePremiumHostResponseCipherEnum): CreatePremiumHostResponse {
        this['cipher'] = cipher;
        return this;
    }
    public withExtend(extend: { [key: string]: string; }): CreatePremiumHostResponse {
        this['extend'] = extend;
        return this;
    }
    public withFlag(flag: Flag): CreatePremiumHostResponse {
        this['flag'] = flag;
        return this;
    }
    public withDescription(description: string): CreatePremiumHostResponse {
        this['description'] = description;
        return this;
    }
    public withPolicyid(policyid: string): CreatePremiumHostResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withDomainid(domainid: string): CreatePremiumHostResponse {
        this['domainid'] = domainid;
        return this;
    }
    public withProjectid(projectid: string): CreatePremiumHostResponse {
        this['projectid'] = projectid;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePremiumHostResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withProtectStatus(protectStatus: number): CreatePremiumHostResponse {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus() {
        return this['protect_status'];
    }
    public withAccessStatus(accessStatus: number): CreatePremiumHostResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus() {
        return this['access_status'];
    }
    public withBlockPage(blockPage: BlockPage): CreatePremiumHostResponse {
        this['block_page'] = blockPage;
        return this;
    }
    public set blockPage(blockPage: BlockPage | undefined) {
        this['block_page'] = blockPage;
    }
    public get blockPage() {
        return this['block_page'];
    }
    public withForwardHeaderMap(forwardHeaderMap: { [key: string]: string; }): CreatePremiumHostResponse {
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
export enum CreatePremiumHostResponseProtocolEnum {
    HTTPS = 'HTTPS',
    HTTP = 'HTTP',
    HTTPHTTPS = 'HTTP&HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePremiumHostResponseTlsEnum {
    TLS_V1_0 = 'TLS v1.0',
    TLS_V1_1 = 'TLS v1.1',
    TLS_V1_2 = 'TLS v1.2'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePremiumHostResponseCipherEnum {
    CIPHER_1 = 'cipher_1',
    CIPHER_2 = 'cipher_2',
    CIPHER_3 = 'cipher_3',
    CIPHER_4 = 'cipher_4',
    CIPHER_DEFAULT = 'cipher_default'
}
