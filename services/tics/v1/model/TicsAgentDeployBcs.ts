

export class TicsAgentDeployBcs {
    private 'agent_id'?: string;
    private 'bcs_ip'?: string;
    private 'block_chain_id'?: string;
    private 'block_chain_name'?: string;
    private 'channel_name'?: string;
    private 'org_name'?: string;
    private 'org_name_hash'?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): TicsAgentDeployBcs {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withBcsIp(bcsIp: string): TicsAgentDeployBcs {
        this['bcs_ip'] = bcsIp;
        return this;
    }
    public set bcsIp(bcsIp: string  | undefined) {
        this['bcs_ip'] = bcsIp;
    }
    public get bcsIp(): string | undefined {
        return this['bcs_ip'];
    }
    public withBlockChainId(blockChainId: string): TicsAgentDeployBcs {
        this['block_chain_id'] = blockChainId;
        return this;
    }
    public set blockChainId(blockChainId: string  | undefined) {
        this['block_chain_id'] = blockChainId;
    }
    public get blockChainId(): string | undefined {
        return this['block_chain_id'];
    }
    public withBlockChainName(blockChainName: string): TicsAgentDeployBcs {
        this['block_chain_name'] = blockChainName;
        return this;
    }
    public set blockChainName(blockChainName: string  | undefined) {
        this['block_chain_name'] = blockChainName;
    }
    public get blockChainName(): string | undefined {
        return this['block_chain_name'];
    }
    public withChannelName(channelName: string): TicsAgentDeployBcs {
        this['channel_name'] = channelName;
        return this;
    }
    public set channelName(channelName: string  | undefined) {
        this['channel_name'] = channelName;
    }
    public get channelName(): string | undefined {
        return this['channel_name'];
    }
    public withOrgName(orgName: string): TicsAgentDeployBcs {
        this['org_name'] = orgName;
        return this;
    }
    public set orgName(orgName: string  | undefined) {
        this['org_name'] = orgName;
    }
    public get orgName(): string | undefined {
        return this['org_name'];
    }
    public withOrgNameHash(orgNameHash: string): TicsAgentDeployBcs {
        this['org_name_hash'] = orgNameHash;
        return this;
    }
    public set orgNameHash(orgNameHash: string  | undefined) {
        this['org_name_hash'] = orgNameHash;
    }
    public get orgNameHash(): string | undefined {
        return this['org_name_hash'];
    }
}