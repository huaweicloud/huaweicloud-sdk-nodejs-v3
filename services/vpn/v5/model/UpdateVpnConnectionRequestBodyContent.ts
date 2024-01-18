import { PolicyRule } from './PolicyRule';
import { UpdateIkePolicy } from './UpdateIkePolicy';
import { UpdateIpsecPolicy } from './UpdateIpsecPolicy';


export class UpdateVpnConnectionRequestBodyContent {
    public name?: string;
    private 'cgw_id'?: string;
    private 'peer_subnets'?: Array<string>;
    private 'tunnel_local_address'?: string;
    private 'tunnel_peer_address'?: string;
    public psk?: string;
    private 'policy_rules'?: Array<PolicyRule>;
    public ikepolicy?: UpdateIkePolicy;
    public ipsecpolicy?: UpdateIpsecPolicy;
    public constructor() { 
    }
    public withName(name: string): UpdateVpnConnectionRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withCgwId(cgwId: string): UpdateVpnConnectionRequestBodyContent {
        this['cgw_id'] = cgwId;
        return this;
    }
    public set cgwId(cgwId: string  | undefined) {
        this['cgw_id'] = cgwId;
    }
    public get cgwId(): string | undefined {
        return this['cgw_id'];
    }
    public withPeerSubnets(peerSubnets: Array<string>): UpdateVpnConnectionRequestBodyContent {
        this['peer_subnets'] = peerSubnets;
        return this;
    }
    public set peerSubnets(peerSubnets: Array<string>  | undefined) {
        this['peer_subnets'] = peerSubnets;
    }
    public get peerSubnets(): Array<string> | undefined {
        return this['peer_subnets'];
    }
    public withTunnelLocalAddress(tunnelLocalAddress: string): UpdateVpnConnectionRequestBodyContent {
        this['tunnel_local_address'] = tunnelLocalAddress;
        return this;
    }
    public set tunnelLocalAddress(tunnelLocalAddress: string  | undefined) {
        this['tunnel_local_address'] = tunnelLocalAddress;
    }
    public get tunnelLocalAddress(): string | undefined {
        return this['tunnel_local_address'];
    }
    public withTunnelPeerAddress(tunnelPeerAddress: string): UpdateVpnConnectionRequestBodyContent {
        this['tunnel_peer_address'] = tunnelPeerAddress;
        return this;
    }
    public set tunnelPeerAddress(tunnelPeerAddress: string  | undefined) {
        this['tunnel_peer_address'] = tunnelPeerAddress;
    }
    public get tunnelPeerAddress(): string | undefined {
        return this['tunnel_peer_address'];
    }
    public withPsk(psk: string): UpdateVpnConnectionRequestBodyContent {
        this['psk'] = psk;
        return this;
    }
    public withPolicyRules(policyRules: Array<PolicyRule>): UpdateVpnConnectionRequestBodyContent {
        this['policy_rules'] = policyRules;
        return this;
    }
    public set policyRules(policyRules: Array<PolicyRule>  | undefined) {
        this['policy_rules'] = policyRules;
    }
    public get policyRules(): Array<PolicyRule> | undefined {
        return this['policy_rules'];
    }
    public withIkepolicy(ikepolicy: UpdateIkePolicy): UpdateVpnConnectionRequestBodyContent {
        this['ikepolicy'] = ikepolicy;
        return this;
    }
    public withIpsecpolicy(ipsecpolicy: UpdateIpsecPolicy): UpdateVpnConnectionRequestBodyContent {
        this['ipsecpolicy'] = ipsecpolicy;
        return this;
    }
}