

export class VpcQuotas {
    private 'acl_policy_contain_rules'?: number;
    private 'address_group'?: number;
    private 'address_group_contain_ipset'?: number;
    private 'clouddcn_firewall_group'?: number;
    private 'clouddcn_acl_policy_contain_rules'?: number;
    private 'edge_gateway'?: number;
    private 'eni_contain_secgroup'?: number;
    private 'firewall_policy_contain_ipv4_composite_rules'?: number;
    private 'firewall_policy_contain_ipv6_composite_rules'?: number;
    private 'forward_policy'?: number;
    private 'forward_policy_contain_ports'?: number;
    private 'forward_rule'?: number;
    public peering?: number;
    private 'roce_cluster_contain_networks'?: number;
    private 'rtb_allow_sys_cidr_routes'?: number;
    private 'shared_bandwidth'?: number;
    private 'shared_bandwidth_contain_publicip'?: number;
    private 'secgroup_contain_rules'?: number;
    private 'secgroup_referred_by_nic'?: number;
    private 'security_group'?: number;
    private 'security_group_contain_egress_ipv4_composite_rules'?: number;
    private 'security_group_contain_egress_ipv6_composite_rules'?: number;
    private 'security_group_contain_ingress_ipv4_composite_rules'?: number;
    private 'security_group_contain_ingress_ipv6_composite_rules'?: number;
    private 'security_group_rule'?: number;
    private 'subnet_contain_eni'?: number;
    private 'traffic_mirror_filter'?: number;
    private 'traffic_mirror_filter_referred_by_session'?: number;
    private 'traffic_mirror_filter_contain_rules_each_direction'?: number;
    private 'traffic_mirror_session'?: number;
    private 'traffic_mirror_session_contain_sources'?: number;
    private 'traffic_mirror_source_referred_by_session'?: number;
    private 'traffic_mirror_target_elb_referred_by_session'?: number;
    private 'traffic_mirror_target_eni_referred_by_session'?: number;
    public vip?: number;
    public virsubnet?: number;
    private 'virsubnet_contain_ipv4_cidr_reservations'?: number;
    private 'virsubnet_contain_ipv6_cidr_reservations'?: number;
    public vpc?: number;
    private 'vpc_contain_eni'?: number;
    private 'vpc_contain_vip'?: number;
    private 'vpc_contain_virsubnet'?: number;
    public constructor() { 
    }
    public withAclPolicyContainRules(aclPolicyContainRules: number): VpcQuotas {
        this['acl_policy_contain_rules'] = aclPolicyContainRules;
        return this;
    }
    public set aclPolicyContainRules(aclPolicyContainRules: number  | undefined) {
        this['acl_policy_contain_rules'] = aclPolicyContainRules;
    }
    public get aclPolicyContainRules(): number | undefined {
        return this['acl_policy_contain_rules'];
    }
    public withAddressGroup(addressGroup: number): VpcQuotas {
        this['address_group'] = addressGroup;
        return this;
    }
    public set addressGroup(addressGroup: number  | undefined) {
        this['address_group'] = addressGroup;
    }
    public get addressGroup(): number | undefined {
        return this['address_group'];
    }
    public withAddressGroupContainIpset(addressGroupContainIpset: number): VpcQuotas {
        this['address_group_contain_ipset'] = addressGroupContainIpset;
        return this;
    }
    public set addressGroupContainIpset(addressGroupContainIpset: number  | undefined) {
        this['address_group_contain_ipset'] = addressGroupContainIpset;
    }
    public get addressGroupContainIpset(): number | undefined {
        return this['address_group_contain_ipset'];
    }
    public withClouddcnFirewallGroup(clouddcnFirewallGroup: number): VpcQuotas {
        this['clouddcn_firewall_group'] = clouddcnFirewallGroup;
        return this;
    }
    public set clouddcnFirewallGroup(clouddcnFirewallGroup: number  | undefined) {
        this['clouddcn_firewall_group'] = clouddcnFirewallGroup;
    }
    public get clouddcnFirewallGroup(): number | undefined {
        return this['clouddcn_firewall_group'];
    }
    public withClouddcnAclPolicyContainRules(clouddcnAclPolicyContainRules: number): VpcQuotas {
        this['clouddcn_acl_policy_contain_rules'] = clouddcnAclPolicyContainRules;
        return this;
    }
    public set clouddcnAclPolicyContainRules(clouddcnAclPolicyContainRules: number  | undefined) {
        this['clouddcn_acl_policy_contain_rules'] = clouddcnAclPolicyContainRules;
    }
    public get clouddcnAclPolicyContainRules(): number | undefined {
        return this['clouddcn_acl_policy_contain_rules'];
    }
    public withEdgeGateway(edgeGateway: number): VpcQuotas {
        this['edge_gateway'] = edgeGateway;
        return this;
    }
    public set edgeGateway(edgeGateway: number  | undefined) {
        this['edge_gateway'] = edgeGateway;
    }
    public get edgeGateway(): number | undefined {
        return this['edge_gateway'];
    }
    public withEniContainSecgroup(eniContainSecgroup: number): VpcQuotas {
        this['eni_contain_secgroup'] = eniContainSecgroup;
        return this;
    }
    public set eniContainSecgroup(eniContainSecgroup: number  | undefined) {
        this['eni_contain_secgroup'] = eniContainSecgroup;
    }
    public get eniContainSecgroup(): number | undefined {
        return this['eni_contain_secgroup'];
    }
    public withFirewallPolicyContainIpv4CompositeRules(firewallPolicyContainIpv4CompositeRules: number): VpcQuotas {
        this['firewall_policy_contain_ipv4_composite_rules'] = firewallPolicyContainIpv4CompositeRules;
        return this;
    }
    public set firewallPolicyContainIpv4CompositeRules(firewallPolicyContainIpv4CompositeRules: number  | undefined) {
        this['firewall_policy_contain_ipv4_composite_rules'] = firewallPolicyContainIpv4CompositeRules;
    }
    public get firewallPolicyContainIpv4CompositeRules(): number | undefined {
        return this['firewall_policy_contain_ipv4_composite_rules'];
    }
    public withFirewallPolicyContainIpv6CompositeRules(firewallPolicyContainIpv6CompositeRules: number): VpcQuotas {
        this['firewall_policy_contain_ipv6_composite_rules'] = firewallPolicyContainIpv6CompositeRules;
        return this;
    }
    public set firewallPolicyContainIpv6CompositeRules(firewallPolicyContainIpv6CompositeRules: number  | undefined) {
        this['firewall_policy_contain_ipv6_composite_rules'] = firewallPolicyContainIpv6CompositeRules;
    }
    public get firewallPolicyContainIpv6CompositeRules(): number | undefined {
        return this['firewall_policy_contain_ipv6_composite_rules'];
    }
    public withForwardPolicy(forwardPolicy: number): VpcQuotas {
        this['forward_policy'] = forwardPolicy;
        return this;
    }
    public set forwardPolicy(forwardPolicy: number  | undefined) {
        this['forward_policy'] = forwardPolicy;
    }
    public get forwardPolicy(): number | undefined {
        return this['forward_policy'];
    }
    public withForwardPolicyContainPorts(forwardPolicyContainPorts: number): VpcQuotas {
        this['forward_policy_contain_ports'] = forwardPolicyContainPorts;
        return this;
    }
    public set forwardPolicyContainPorts(forwardPolicyContainPorts: number  | undefined) {
        this['forward_policy_contain_ports'] = forwardPolicyContainPorts;
    }
    public get forwardPolicyContainPorts(): number | undefined {
        return this['forward_policy_contain_ports'];
    }
    public withForwardRule(forwardRule: number): VpcQuotas {
        this['forward_rule'] = forwardRule;
        return this;
    }
    public set forwardRule(forwardRule: number  | undefined) {
        this['forward_rule'] = forwardRule;
    }
    public get forwardRule(): number | undefined {
        return this['forward_rule'];
    }
    public withPeering(peering: number): VpcQuotas {
        this['peering'] = peering;
        return this;
    }
    public withRoceClusterContainNetworks(roceClusterContainNetworks: number): VpcQuotas {
        this['roce_cluster_contain_networks'] = roceClusterContainNetworks;
        return this;
    }
    public set roceClusterContainNetworks(roceClusterContainNetworks: number  | undefined) {
        this['roce_cluster_contain_networks'] = roceClusterContainNetworks;
    }
    public get roceClusterContainNetworks(): number | undefined {
        return this['roce_cluster_contain_networks'];
    }
    public withRtbAllowSysCidrRoutes(rtbAllowSysCidrRoutes: number): VpcQuotas {
        this['rtb_allow_sys_cidr_routes'] = rtbAllowSysCidrRoutes;
        return this;
    }
    public set rtbAllowSysCidrRoutes(rtbAllowSysCidrRoutes: number  | undefined) {
        this['rtb_allow_sys_cidr_routes'] = rtbAllowSysCidrRoutes;
    }
    public get rtbAllowSysCidrRoutes(): number | undefined {
        return this['rtb_allow_sys_cidr_routes'];
    }
    public withSharedBandwidth(sharedBandwidth: number): VpcQuotas {
        this['shared_bandwidth'] = sharedBandwidth;
        return this;
    }
    public set sharedBandwidth(sharedBandwidth: number  | undefined) {
        this['shared_bandwidth'] = sharedBandwidth;
    }
    public get sharedBandwidth(): number | undefined {
        return this['shared_bandwidth'];
    }
    public withSharedBandwidthContainPublicip(sharedBandwidthContainPublicip: number): VpcQuotas {
        this['shared_bandwidth_contain_publicip'] = sharedBandwidthContainPublicip;
        return this;
    }
    public set sharedBandwidthContainPublicip(sharedBandwidthContainPublicip: number  | undefined) {
        this['shared_bandwidth_contain_publicip'] = sharedBandwidthContainPublicip;
    }
    public get sharedBandwidthContainPublicip(): number | undefined {
        return this['shared_bandwidth_contain_publicip'];
    }
    public withSecgroupContainRules(secgroupContainRules: number): VpcQuotas {
        this['secgroup_contain_rules'] = secgroupContainRules;
        return this;
    }
    public set secgroupContainRules(secgroupContainRules: number  | undefined) {
        this['secgroup_contain_rules'] = secgroupContainRules;
    }
    public get secgroupContainRules(): number | undefined {
        return this['secgroup_contain_rules'];
    }
    public withSecgroupReferredByNic(secgroupReferredByNic: number): VpcQuotas {
        this['secgroup_referred_by_nic'] = secgroupReferredByNic;
        return this;
    }
    public set secgroupReferredByNic(secgroupReferredByNic: number  | undefined) {
        this['secgroup_referred_by_nic'] = secgroupReferredByNic;
    }
    public get secgroupReferredByNic(): number | undefined {
        return this['secgroup_referred_by_nic'];
    }
    public withSecurityGroup(securityGroup: number): VpcQuotas {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: number  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): number | undefined {
        return this['security_group'];
    }
    public withSecurityGroupContainEgressIpv4CompositeRules(securityGroupContainEgressIpv4CompositeRules: number): VpcQuotas {
        this['security_group_contain_egress_ipv4_composite_rules'] = securityGroupContainEgressIpv4CompositeRules;
        return this;
    }
    public set securityGroupContainEgressIpv4CompositeRules(securityGroupContainEgressIpv4CompositeRules: number  | undefined) {
        this['security_group_contain_egress_ipv4_composite_rules'] = securityGroupContainEgressIpv4CompositeRules;
    }
    public get securityGroupContainEgressIpv4CompositeRules(): number | undefined {
        return this['security_group_contain_egress_ipv4_composite_rules'];
    }
    public withSecurityGroupContainEgressIpv6CompositeRules(securityGroupContainEgressIpv6CompositeRules: number): VpcQuotas {
        this['security_group_contain_egress_ipv6_composite_rules'] = securityGroupContainEgressIpv6CompositeRules;
        return this;
    }
    public set securityGroupContainEgressIpv6CompositeRules(securityGroupContainEgressIpv6CompositeRules: number  | undefined) {
        this['security_group_contain_egress_ipv6_composite_rules'] = securityGroupContainEgressIpv6CompositeRules;
    }
    public get securityGroupContainEgressIpv6CompositeRules(): number | undefined {
        return this['security_group_contain_egress_ipv6_composite_rules'];
    }
    public withSecurityGroupContainIngressIpv4CompositeRules(securityGroupContainIngressIpv4CompositeRules: number): VpcQuotas {
        this['security_group_contain_ingress_ipv4_composite_rules'] = securityGroupContainIngressIpv4CompositeRules;
        return this;
    }
    public set securityGroupContainIngressIpv4CompositeRules(securityGroupContainIngressIpv4CompositeRules: number  | undefined) {
        this['security_group_contain_ingress_ipv4_composite_rules'] = securityGroupContainIngressIpv4CompositeRules;
    }
    public get securityGroupContainIngressIpv4CompositeRules(): number | undefined {
        return this['security_group_contain_ingress_ipv4_composite_rules'];
    }
    public withSecurityGroupContainIngressIpv6CompositeRules(securityGroupContainIngressIpv6CompositeRules: number): VpcQuotas {
        this['security_group_contain_ingress_ipv6_composite_rules'] = securityGroupContainIngressIpv6CompositeRules;
        return this;
    }
    public set securityGroupContainIngressIpv6CompositeRules(securityGroupContainIngressIpv6CompositeRules: number  | undefined) {
        this['security_group_contain_ingress_ipv6_composite_rules'] = securityGroupContainIngressIpv6CompositeRules;
    }
    public get securityGroupContainIngressIpv6CompositeRules(): number | undefined {
        return this['security_group_contain_ingress_ipv6_composite_rules'];
    }
    public withSecurityGroupRule(securityGroupRule: number): VpcQuotas {
        this['security_group_rule'] = securityGroupRule;
        return this;
    }
    public set securityGroupRule(securityGroupRule: number  | undefined) {
        this['security_group_rule'] = securityGroupRule;
    }
    public get securityGroupRule(): number | undefined {
        return this['security_group_rule'];
    }
    public withSubnetContainEni(subnetContainEni: number): VpcQuotas {
        this['subnet_contain_eni'] = subnetContainEni;
        return this;
    }
    public set subnetContainEni(subnetContainEni: number  | undefined) {
        this['subnet_contain_eni'] = subnetContainEni;
    }
    public get subnetContainEni(): number | undefined {
        return this['subnet_contain_eni'];
    }
    public withTrafficMirrorFilter(trafficMirrorFilter: number): VpcQuotas {
        this['traffic_mirror_filter'] = trafficMirrorFilter;
        return this;
    }
    public set trafficMirrorFilter(trafficMirrorFilter: number  | undefined) {
        this['traffic_mirror_filter'] = trafficMirrorFilter;
    }
    public get trafficMirrorFilter(): number | undefined {
        return this['traffic_mirror_filter'];
    }
    public withTrafficMirrorFilterReferredBySession(trafficMirrorFilterReferredBySession: number): VpcQuotas {
        this['traffic_mirror_filter_referred_by_session'] = trafficMirrorFilterReferredBySession;
        return this;
    }
    public set trafficMirrorFilterReferredBySession(trafficMirrorFilterReferredBySession: number  | undefined) {
        this['traffic_mirror_filter_referred_by_session'] = trafficMirrorFilterReferredBySession;
    }
    public get trafficMirrorFilterReferredBySession(): number | undefined {
        return this['traffic_mirror_filter_referred_by_session'];
    }
    public withTrafficMirrorFilterContainRulesEachDirection(trafficMirrorFilterContainRulesEachDirection: number): VpcQuotas {
        this['traffic_mirror_filter_contain_rules_each_direction'] = trafficMirrorFilterContainRulesEachDirection;
        return this;
    }
    public set trafficMirrorFilterContainRulesEachDirection(trafficMirrorFilterContainRulesEachDirection: number  | undefined) {
        this['traffic_mirror_filter_contain_rules_each_direction'] = trafficMirrorFilterContainRulesEachDirection;
    }
    public get trafficMirrorFilterContainRulesEachDirection(): number | undefined {
        return this['traffic_mirror_filter_contain_rules_each_direction'];
    }
    public withTrafficMirrorSession(trafficMirrorSession: number): VpcQuotas {
        this['traffic_mirror_session'] = trafficMirrorSession;
        return this;
    }
    public set trafficMirrorSession(trafficMirrorSession: number  | undefined) {
        this['traffic_mirror_session'] = trafficMirrorSession;
    }
    public get trafficMirrorSession(): number | undefined {
        return this['traffic_mirror_session'];
    }
    public withTrafficMirrorSessionContainSources(trafficMirrorSessionContainSources: number): VpcQuotas {
        this['traffic_mirror_session_contain_sources'] = trafficMirrorSessionContainSources;
        return this;
    }
    public set trafficMirrorSessionContainSources(trafficMirrorSessionContainSources: number  | undefined) {
        this['traffic_mirror_session_contain_sources'] = trafficMirrorSessionContainSources;
    }
    public get trafficMirrorSessionContainSources(): number | undefined {
        return this['traffic_mirror_session_contain_sources'];
    }
    public withTrafficMirrorSourceReferredBySession(trafficMirrorSourceReferredBySession: number): VpcQuotas {
        this['traffic_mirror_source_referred_by_session'] = trafficMirrorSourceReferredBySession;
        return this;
    }
    public set trafficMirrorSourceReferredBySession(trafficMirrorSourceReferredBySession: number  | undefined) {
        this['traffic_mirror_source_referred_by_session'] = trafficMirrorSourceReferredBySession;
    }
    public get trafficMirrorSourceReferredBySession(): number | undefined {
        return this['traffic_mirror_source_referred_by_session'];
    }
    public withTrafficMirrorTargetElbReferredBySession(trafficMirrorTargetElbReferredBySession: number): VpcQuotas {
        this['traffic_mirror_target_elb_referred_by_session'] = trafficMirrorTargetElbReferredBySession;
        return this;
    }
    public set trafficMirrorTargetElbReferredBySession(trafficMirrorTargetElbReferredBySession: number  | undefined) {
        this['traffic_mirror_target_elb_referred_by_session'] = trafficMirrorTargetElbReferredBySession;
    }
    public get trafficMirrorTargetElbReferredBySession(): number | undefined {
        return this['traffic_mirror_target_elb_referred_by_session'];
    }
    public withTrafficMirrorTargetEniReferredBySession(trafficMirrorTargetEniReferredBySession: number): VpcQuotas {
        this['traffic_mirror_target_eni_referred_by_session'] = trafficMirrorTargetEniReferredBySession;
        return this;
    }
    public set trafficMirrorTargetEniReferredBySession(trafficMirrorTargetEniReferredBySession: number  | undefined) {
        this['traffic_mirror_target_eni_referred_by_session'] = trafficMirrorTargetEniReferredBySession;
    }
    public get trafficMirrorTargetEniReferredBySession(): number | undefined {
        return this['traffic_mirror_target_eni_referred_by_session'];
    }
    public withVip(vip: number): VpcQuotas {
        this['vip'] = vip;
        return this;
    }
    public withVirsubnet(virsubnet: number): VpcQuotas {
        this['virsubnet'] = virsubnet;
        return this;
    }
    public withVirsubnetContainIpv4CidrReservations(virsubnetContainIpv4CidrReservations: number): VpcQuotas {
        this['virsubnet_contain_ipv4_cidr_reservations'] = virsubnetContainIpv4CidrReservations;
        return this;
    }
    public set virsubnetContainIpv4CidrReservations(virsubnetContainIpv4CidrReservations: number  | undefined) {
        this['virsubnet_contain_ipv4_cidr_reservations'] = virsubnetContainIpv4CidrReservations;
    }
    public get virsubnetContainIpv4CidrReservations(): number | undefined {
        return this['virsubnet_contain_ipv4_cidr_reservations'];
    }
    public withVirsubnetContainIpv6CidrReservations(virsubnetContainIpv6CidrReservations: number): VpcQuotas {
        this['virsubnet_contain_ipv6_cidr_reservations'] = virsubnetContainIpv6CidrReservations;
        return this;
    }
    public set virsubnetContainIpv6CidrReservations(virsubnetContainIpv6CidrReservations: number  | undefined) {
        this['virsubnet_contain_ipv6_cidr_reservations'] = virsubnetContainIpv6CidrReservations;
    }
    public get virsubnetContainIpv6CidrReservations(): number | undefined {
        return this['virsubnet_contain_ipv6_cidr_reservations'];
    }
    public withVpc(vpc: number): VpcQuotas {
        this['vpc'] = vpc;
        return this;
    }
    public withVpcContainEni(vpcContainEni: number): VpcQuotas {
        this['vpc_contain_eni'] = vpcContainEni;
        return this;
    }
    public set vpcContainEni(vpcContainEni: number  | undefined) {
        this['vpc_contain_eni'] = vpcContainEni;
    }
    public get vpcContainEni(): number | undefined {
        return this['vpc_contain_eni'];
    }
    public withVpcContainVip(vpcContainVip: number): VpcQuotas {
        this['vpc_contain_vip'] = vpcContainVip;
        return this;
    }
    public set vpcContainVip(vpcContainVip: number  | undefined) {
        this['vpc_contain_vip'] = vpcContainVip;
    }
    public get vpcContainVip(): number | undefined {
        return this['vpc_contain_vip'];
    }
    public withVpcContainVirsubnet(vpcContainVirsubnet: number): VpcQuotas {
        this['vpc_contain_virsubnet'] = vpcContainVirsubnet;
        return this;
    }
    public set vpcContainVirsubnet(vpcContainVirsubnet: number  | undefined) {
        this['vpc_contain_virsubnet'] = vpcContainVirsubnet;
    }
    public get vpcContainVirsubnet(): number | undefined {
        return this['vpc_contain_virsubnet'];
    }
}