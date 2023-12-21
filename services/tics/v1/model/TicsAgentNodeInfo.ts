

export class TicsAgentNodeInfo {
    private 'agent_id'?: string;
    private 'agent_vpcep_eps_id'?: string;
    private 'ecs_server_id'?: string;
    private 'league_server_ip_security_group_rule'?: string;
    private 'league_server_snat_ip'?: string;
    private 'nat_eip'?: string;
    private 'nat_eip_id'?: string;
    private 'node_az'?: string;
    private 'node_id'?: string;
    private 'node_ip'?: string;
    private 'node_name'?: string;
    private 'server_to_agent_vpcep_epi_id'?: string;
    private 'server_to_agent_vpcep_epi_ip'?: string;
    private 'snat_rule_id'?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): TicsAgentNodeInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentVpcepEpsId(agentVpcepEpsId: string): TicsAgentNodeInfo {
        this['agent_vpcep_eps_id'] = agentVpcepEpsId;
        return this;
    }
    public set agentVpcepEpsId(agentVpcepEpsId: string  | undefined) {
        this['agent_vpcep_eps_id'] = agentVpcepEpsId;
    }
    public get agentVpcepEpsId(): string | undefined {
        return this['agent_vpcep_eps_id'];
    }
    public withEcsServerId(ecsServerId: string): TicsAgentNodeInfo {
        this['ecs_server_id'] = ecsServerId;
        return this;
    }
    public set ecsServerId(ecsServerId: string  | undefined) {
        this['ecs_server_id'] = ecsServerId;
    }
    public get ecsServerId(): string | undefined {
        return this['ecs_server_id'];
    }
    public withLeagueServerIpSecurityGroupRule(leagueServerIpSecurityGroupRule: string): TicsAgentNodeInfo {
        this['league_server_ip_security_group_rule'] = leagueServerIpSecurityGroupRule;
        return this;
    }
    public set leagueServerIpSecurityGroupRule(leagueServerIpSecurityGroupRule: string  | undefined) {
        this['league_server_ip_security_group_rule'] = leagueServerIpSecurityGroupRule;
    }
    public get leagueServerIpSecurityGroupRule(): string | undefined {
        return this['league_server_ip_security_group_rule'];
    }
    public withLeagueServerSnatIp(leagueServerSnatIp: string): TicsAgentNodeInfo {
        this['league_server_snat_ip'] = leagueServerSnatIp;
        return this;
    }
    public set leagueServerSnatIp(leagueServerSnatIp: string  | undefined) {
        this['league_server_snat_ip'] = leagueServerSnatIp;
    }
    public get leagueServerSnatIp(): string | undefined {
        return this['league_server_snat_ip'];
    }
    public withNatEip(natEip: string): TicsAgentNodeInfo {
        this['nat_eip'] = natEip;
        return this;
    }
    public set natEip(natEip: string  | undefined) {
        this['nat_eip'] = natEip;
    }
    public get natEip(): string | undefined {
        return this['nat_eip'];
    }
    public withNatEipId(natEipId: string): TicsAgentNodeInfo {
        this['nat_eip_id'] = natEipId;
        return this;
    }
    public set natEipId(natEipId: string  | undefined) {
        this['nat_eip_id'] = natEipId;
    }
    public get natEipId(): string | undefined {
        return this['nat_eip_id'];
    }
    public withNodeAz(nodeAz: string): TicsAgentNodeInfo {
        this['node_az'] = nodeAz;
        return this;
    }
    public set nodeAz(nodeAz: string  | undefined) {
        this['node_az'] = nodeAz;
    }
    public get nodeAz(): string | undefined {
        return this['node_az'];
    }
    public withNodeId(nodeId: string): TicsAgentNodeInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeIp(nodeIp: string): TicsAgentNodeInfo {
        this['node_ip'] = nodeIp;
        return this;
    }
    public set nodeIp(nodeIp: string  | undefined) {
        this['node_ip'] = nodeIp;
    }
    public get nodeIp(): string | undefined {
        return this['node_ip'];
    }
    public withNodeName(nodeName: string): TicsAgentNodeInfo {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withServerToAgentVpcepEpiId(serverToAgentVpcepEpiId: string): TicsAgentNodeInfo {
        this['server_to_agent_vpcep_epi_id'] = serverToAgentVpcepEpiId;
        return this;
    }
    public set serverToAgentVpcepEpiId(serverToAgentVpcepEpiId: string  | undefined) {
        this['server_to_agent_vpcep_epi_id'] = serverToAgentVpcepEpiId;
    }
    public get serverToAgentVpcepEpiId(): string | undefined {
        return this['server_to_agent_vpcep_epi_id'];
    }
    public withServerToAgentVpcepEpiIp(serverToAgentVpcepEpiIp: string): TicsAgentNodeInfo {
        this['server_to_agent_vpcep_epi_ip'] = serverToAgentVpcepEpiIp;
        return this;
    }
    public set serverToAgentVpcepEpiIp(serverToAgentVpcepEpiIp: string  | undefined) {
        this['server_to_agent_vpcep_epi_ip'] = serverToAgentVpcepEpiIp;
    }
    public get serverToAgentVpcepEpiIp(): string | undefined {
        return this['server_to_agent_vpcep_epi_ip'];
    }
    public withSnatRuleId(snatRuleId: string): TicsAgentNodeInfo {
        this['snat_rule_id'] = snatRuleId;
        return this;
    }
    public set snatRuleId(snatRuleId: string  | undefined) {
        this['snat_rule_id'] = snatRuleId;
    }
    public get snatRuleId(): string | undefined {
        return this['snat_rule_id'];
    }
}