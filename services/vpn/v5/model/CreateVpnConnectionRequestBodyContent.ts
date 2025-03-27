import { IkePolicy } from './IkePolicy';
import { IpsecPolicy } from './IpsecPolicy';
import { PolicyRule } from './PolicyRule';
import { VpnResourceTag } from './VpnResourceTag';


export class CreateVpnConnectionRequestBodyContent {
    public name?: string;
    private 'vgw_id'?: string;
    private 'vgw_ip'?: string;
    public style?: CreateVpnConnectionRequestBodyContentStyleEnum | string;
    private 'cgw_id'?: string;
    private 'peer_subnets'?: Array<string>;
    private 'tunnel_local_address'?: string;
    private 'tunnel_peer_address'?: string;
    private 'enable_nqa'?: boolean;
    private 'enable_hub'?: boolean;
    public psk?: string;
    private 'policy_rules'?: Array<PolicyRule>;
    public ikepolicy?: IkePolicy;
    public ipsecpolicy?: IpsecPolicy;
    private 'ha_role'?: CreateVpnConnectionRequestBodyContentHaRoleEnum | string;
    public tags?: Array<VpnResourceTag>;
    private 'peer_subnets_v6'?: Array<string>;
    private 'tunnel_local_address_v6'?: string;
    private 'tunnel_peer_address_v6'?: string;
    private 'policy_rules_v6'?: Array<PolicyRule>;
    public constructor(vgwId?: string, vgwIp?: string, cgwId?: string) { 
        this['vgw_id'] = vgwId;
        this['vgw_ip'] = vgwIp;
        this['cgw_id'] = cgwId;
    }
    public withName(name: string): CreateVpnConnectionRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withVgwId(vgwId: string): CreateVpnConnectionRequestBodyContent {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withVgwIp(vgwIp: string): CreateVpnConnectionRequestBodyContent {
        this['vgw_ip'] = vgwIp;
        return this;
    }
    public set vgwIp(vgwIp: string  | undefined) {
        this['vgw_ip'] = vgwIp;
    }
    public get vgwIp(): string | undefined {
        return this['vgw_ip'];
    }
    public withStyle(style: CreateVpnConnectionRequestBodyContentStyleEnum | string): CreateVpnConnectionRequestBodyContent {
        this['style'] = style;
        return this;
    }
    public withCgwId(cgwId: string): CreateVpnConnectionRequestBodyContent {
        this['cgw_id'] = cgwId;
        return this;
    }
    public set cgwId(cgwId: string  | undefined) {
        this['cgw_id'] = cgwId;
    }
    public get cgwId(): string | undefined {
        return this['cgw_id'];
    }
    public withPeerSubnets(peerSubnets: Array<string>): CreateVpnConnectionRequestBodyContent {
        this['peer_subnets'] = peerSubnets;
        return this;
    }
    public set peerSubnets(peerSubnets: Array<string>  | undefined) {
        this['peer_subnets'] = peerSubnets;
    }
    public get peerSubnets(): Array<string> | undefined {
        return this['peer_subnets'];
    }
    public withTunnelLocalAddress(tunnelLocalAddress: string): CreateVpnConnectionRequestBodyContent {
        this['tunnel_local_address'] = tunnelLocalAddress;
        return this;
    }
    public set tunnelLocalAddress(tunnelLocalAddress: string  | undefined) {
        this['tunnel_local_address'] = tunnelLocalAddress;
    }
    public get tunnelLocalAddress(): string | undefined {
        return this['tunnel_local_address'];
    }
    public withTunnelPeerAddress(tunnelPeerAddress: string): CreateVpnConnectionRequestBodyContent {
        this['tunnel_peer_address'] = tunnelPeerAddress;
        return this;
    }
    public set tunnelPeerAddress(tunnelPeerAddress: string  | undefined) {
        this['tunnel_peer_address'] = tunnelPeerAddress;
    }
    public get tunnelPeerAddress(): string | undefined {
        return this['tunnel_peer_address'];
    }
    public withEnableNqa(enableNqa: boolean): CreateVpnConnectionRequestBodyContent {
        this['enable_nqa'] = enableNqa;
        return this;
    }
    public set enableNqa(enableNqa: boolean  | undefined) {
        this['enable_nqa'] = enableNqa;
    }
    public get enableNqa(): boolean | undefined {
        return this['enable_nqa'];
    }
    public withEnableHub(enableHub: boolean): CreateVpnConnectionRequestBodyContent {
        this['enable_hub'] = enableHub;
        return this;
    }
    public set enableHub(enableHub: boolean  | undefined) {
        this['enable_hub'] = enableHub;
    }
    public get enableHub(): boolean | undefined {
        return this['enable_hub'];
    }
    public withPsk(psk: string): CreateVpnConnectionRequestBodyContent {
        this['psk'] = psk;
        return this;
    }
    public withPolicyRules(policyRules: Array<PolicyRule>): CreateVpnConnectionRequestBodyContent {
        this['policy_rules'] = policyRules;
        return this;
    }
    public set policyRules(policyRules: Array<PolicyRule>  | undefined) {
        this['policy_rules'] = policyRules;
    }
    public get policyRules(): Array<PolicyRule> | undefined {
        return this['policy_rules'];
    }
    public withIkepolicy(ikepolicy: IkePolicy): CreateVpnConnectionRequestBodyContent {
        this['ikepolicy'] = ikepolicy;
        return this;
    }
    public withIpsecpolicy(ipsecpolicy: IpsecPolicy): CreateVpnConnectionRequestBodyContent {
        this['ipsecpolicy'] = ipsecpolicy;
        return this;
    }
    public withHaRole(haRole: CreateVpnConnectionRequestBodyContentHaRoleEnum | string): CreateVpnConnectionRequestBodyContent {
        this['ha_role'] = haRole;
        return this;
    }
    public set haRole(haRole: CreateVpnConnectionRequestBodyContentHaRoleEnum | string  | undefined) {
        this['ha_role'] = haRole;
    }
    public get haRole(): CreateVpnConnectionRequestBodyContentHaRoleEnum | string | undefined {
        return this['ha_role'];
    }
    public withTags(tags: Array<VpnResourceTag>): CreateVpnConnectionRequestBodyContent {
        this['tags'] = tags;
        return this;
    }
    public withPeerSubnetsV6(peerSubnetsV6: Array<string>): CreateVpnConnectionRequestBodyContent {
        this['peer_subnets_v6'] = peerSubnetsV6;
        return this;
    }
    public set peerSubnetsV6(peerSubnetsV6: Array<string>  | undefined) {
        this['peer_subnets_v6'] = peerSubnetsV6;
    }
    public get peerSubnetsV6(): Array<string> | undefined {
        return this['peer_subnets_v6'];
    }
    public withTunnelLocalAddressV6(tunnelLocalAddressV6: string): CreateVpnConnectionRequestBodyContent {
        this['tunnel_local_address_v6'] = tunnelLocalAddressV6;
        return this;
    }
    public set tunnelLocalAddressV6(tunnelLocalAddressV6: string  | undefined) {
        this['tunnel_local_address_v6'] = tunnelLocalAddressV6;
    }
    public get tunnelLocalAddressV6(): string | undefined {
        return this['tunnel_local_address_v6'];
    }
    public withTunnelPeerAddressV6(tunnelPeerAddressV6: string): CreateVpnConnectionRequestBodyContent {
        this['tunnel_peer_address_v6'] = tunnelPeerAddressV6;
        return this;
    }
    public set tunnelPeerAddressV6(tunnelPeerAddressV6: string  | undefined) {
        this['tunnel_peer_address_v6'] = tunnelPeerAddressV6;
    }
    public get tunnelPeerAddressV6(): string | undefined {
        return this['tunnel_peer_address_v6'];
    }
    public withPolicyRulesV6(policyRulesV6: Array<PolicyRule>): CreateVpnConnectionRequestBodyContent {
        this['policy_rules_v6'] = policyRulesV6;
        return this;
    }
    public set policyRulesV6(policyRulesV6: Array<PolicyRule>  | undefined) {
        this['policy_rules_v6'] = policyRulesV6;
    }
    public get policyRulesV6(): Array<PolicyRule> | undefined {
        return this['policy_rules_v6'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateVpnConnectionRequestBodyContentStyleEnum {
    POLICY = 'policy',
    STATIC = 'static',
    BGP = 'bgp'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateVpnConnectionRequestBodyContentHaRoleEnum {
    MASTER = 'master',
    SLAVE = 'slave'
}
