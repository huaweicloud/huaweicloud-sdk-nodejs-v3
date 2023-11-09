

export class TicsAgentNodeInfo {
    private 'agent_id'?: string;
    private 'ecs_server_id'?: string;
    private 'nat_eip'?: string;
    private 'nat_eip_id'?: string;
    private 'node_az'?: string;
    private 'node_id'?: string;
    private 'node_ip'?: string;
    private 'node_name'?: string;
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
}