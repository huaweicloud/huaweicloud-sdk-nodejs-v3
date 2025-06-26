import { BgpPeer } from './BgpPeer';
import { IkePolicy } from './IkePolicy';
import { IpsecPolicy } from './IpsecPolicy';
import { PolicyRule } from './PolicyRule';
import { VpnResourceTag } from './VpnResourceTag';


export class ResponseVpnConnection {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'vgw_id'?: string;
    private 'vgw_ip'?: string;
    public style?: ResponseVpnConnectionStyleEnum | string;
    private 'cgw_id'?: string;
    private 'peer_subnets'?: Array<string>;
    private 'tunnel_local_address'?: string;
    private 'tunnel_peer_address'?: string;
    private 'enable_nqa'?: boolean;
    private 'enable_hub'?: boolean;
    private 'policy_rules'?: Array<PolicyRule>;
    public ikepolicy?: IkePolicy;
    public ipsecpolicy?: IpsecPolicy;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'enterprise_project_id'?: string;
    private 'connection_monitor_id'?: string;
    private 'ha_role'?: string;
    public tags?: Array<VpnResourceTag>;
    private 'peer_subnets_v6'?: Array<string>;
    private 'policy_rules_v6'?: Array<PolicyRule>;
    private 'bgp_peer'?: BgpPeer;
    public constructor() { 
    }
    public withId(id: string): ResponseVpnConnection {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResponseVpnConnection {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ResponseVpnConnection {
        this['status'] = status;
        return this;
    }
    public withVgwId(vgwId: string): ResponseVpnConnection {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withVgwIp(vgwIp: string): ResponseVpnConnection {
        this['vgw_ip'] = vgwIp;
        return this;
    }
    public set vgwIp(vgwIp: string  | undefined) {
        this['vgw_ip'] = vgwIp;
    }
    public get vgwIp(): string | undefined {
        return this['vgw_ip'];
    }
    public withStyle(style: ResponseVpnConnectionStyleEnum | string): ResponseVpnConnection {
        this['style'] = style;
        return this;
    }
    public withCgwId(cgwId: string): ResponseVpnConnection {
        this['cgw_id'] = cgwId;
        return this;
    }
    public set cgwId(cgwId: string  | undefined) {
        this['cgw_id'] = cgwId;
    }
    public get cgwId(): string | undefined {
        return this['cgw_id'];
    }
    public withPeerSubnets(peerSubnets: Array<string>): ResponseVpnConnection {
        this['peer_subnets'] = peerSubnets;
        return this;
    }
    public set peerSubnets(peerSubnets: Array<string>  | undefined) {
        this['peer_subnets'] = peerSubnets;
    }
    public get peerSubnets(): Array<string> | undefined {
        return this['peer_subnets'];
    }
    public withTunnelLocalAddress(tunnelLocalAddress: string): ResponseVpnConnection {
        this['tunnel_local_address'] = tunnelLocalAddress;
        return this;
    }
    public set tunnelLocalAddress(tunnelLocalAddress: string  | undefined) {
        this['tunnel_local_address'] = tunnelLocalAddress;
    }
    public get tunnelLocalAddress(): string | undefined {
        return this['tunnel_local_address'];
    }
    public withTunnelPeerAddress(tunnelPeerAddress: string): ResponseVpnConnection {
        this['tunnel_peer_address'] = tunnelPeerAddress;
        return this;
    }
    public set tunnelPeerAddress(tunnelPeerAddress: string  | undefined) {
        this['tunnel_peer_address'] = tunnelPeerAddress;
    }
    public get tunnelPeerAddress(): string | undefined {
        return this['tunnel_peer_address'];
    }
    public withEnableNqa(enableNqa: boolean): ResponseVpnConnection {
        this['enable_nqa'] = enableNqa;
        return this;
    }
    public set enableNqa(enableNqa: boolean  | undefined) {
        this['enable_nqa'] = enableNqa;
    }
    public get enableNqa(): boolean | undefined {
        return this['enable_nqa'];
    }
    public withEnableHub(enableHub: boolean): ResponseVpnConnection {
        this['enable_hub'] = enableHub;
        return this;
    }
    public set enableHub(enableHub: boolean  | undefined) {
        this['enable_hub'] = enableHub;
    }
    public get enableHub(): boolean | undefined {
        return this['enable_hub'];
    }
    public withPolicyRules(policyRules: Array<PolicyRule>): ResponseVpnConnection {
        this['policy_rules'] = policyRules;
        return this;
    }
    public set policyRules(policyRules: Array<PolicyRule>  | undefined) {
        this['policy_rules'] = policyRules;
    }
    public get policyRules(): Array<PolicyRule> | undefined {
        return this['policy_rules'];
    }
    public withIkepolicy(ikepolicy: IkePolicy): ResponseVpnConnection {
        this['ikepolicy'] = ikepolicy;
        return this;
    }
    public withIpsecpolicy(ipsecpolicy: IpsecPolicy): ResponseVpnConnection {
        this['ipsecpolicy'] = ipsecpolicy;
        return this;
    }
    public withCreatedAt(createdAt: string): ResponseVpnConnection {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ResponseVpnConnection {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ResponseVpnConnection {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withConnectionMonitorId(connectionMonitorId: string): ResponseVpnConnection {
        this['connection_monitor_id'] = connectionMonitorId;
        return this;
    }
    public set connectionMonitorId(connectionMonitorId: string  | undefined) {
        this['connection_monitor_id'] = connectionMonitorId;
    }
    public get connectionMonitorId(): string | undefined {
        return this['connection_monitor_id'];
    }
    public withHaRole(haRole: string): ResponseVpnConnection {
        this['ha_role'] = haRole;
        return this;
    }
    public set haRole(haRole: string  | undefined) {
        this['ha_role'] = haRole;
    }
    public get haRole(): string | undefined {
        return this['ha_role'];
    }
    public withTags(tags: Array<VpnResourceTag>): ResponseVpnConnection {
        this['tags'] = tags;
        return this;
    }
    public withPeerSubnetsV6(peerSubnetsV6: Array<string>): ResponseVpnConnection {
        this['peer_subnets_v6'] = peerSubnetsV6;
        return this;
    }
    public set peerSubnetsV6(peerSubnetsV6: Array<string>  | undefined) {
        this['peer_subnets_v6'] = peerSubnetsV6;
    }
    public get peerSubnetsV6(): Array<string> | undefined {
        return this['peer_subnets_v6'];
    }
    public withPolicyRulesV6(policyRulesV6: Array<PolicyRule>): ResponseVpnConnection {
        this['policy_rules_v6'] = policyRulesV6;
        return this;
    }
    public set policyRulesV6(policyRulesV6: Array<PolicyRule>  | undefined) {
        this['policy_rules_v6'] = policyRulesV6;
    }
    public get policyRulesV6(): Array<PolicyRule> | undefined {
        return this['policy_rules_v6'];
    }
    public withBgpPeer(bgpPeer: BgpPeer): ResponseVpnConnection {
        this['bgp_peer'] = bgpPeer;
        return this;
    }
    public set bgpPeer(bgpPeer: BgpPeer  | undefined) {
        this['bgp_peer'] = bgpPeer;
    }
    public get bgpPeer(): BgpPeer | undefined {
        return this['bgp_peer'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResponseVpnConnectionStyleEnum {
    POLICY = 'POLICY',
    STATIC = 'STATIC',
    BGP = 'BGP'
}
