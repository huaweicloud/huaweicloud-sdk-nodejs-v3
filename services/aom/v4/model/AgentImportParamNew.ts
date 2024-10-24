

export class AgentImportParamNew {
    public password?: string;
    private 'agent_id'?: string;
    private 'inner_ip'?: string;
    public port?: number;
    public account?: string;
    private 'os_type'?: string;
    private 'vpc_id'?: string;
    private 'coc_cmdb_id'?: string;
    public constructor(password?: string, innerIp?: string, port?: number, account?: string, osType?: string) { 
        this['password'] = password;
        this['inner_ip'] = innerIp;
        this['port'] = port;
        this['account'] = account;
        this['os_type'] = osType;
    }
    public withPassword(password: string): AgentImportParamNew {
        this['password'] = password;
        return this;
    }
    public withAgentId(agentId: string): AgentImportParamNew {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withInnerIp(innerIp: string): AgentImportParamNew {
        this['inner_ip'] = innerIp;
        return this;
    }
    public set innerIp(innerIp: string  | undefined) {
        this['inner_ip'] = innerIp;
    }
    public get innerIp(): string | undefined {
        return this['inner_ip'];
    }
    public withPort(port: number): AgentImportParamNew {
        this['port'] = port;
        return this;
    }
    public withAccount(account: string): AgentImportParamNew {
        this['account'] = account;
        return this;
    }
    public withOsType(osType: string): AgentImportParamNew {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withVpcId(vpcId: string): AgentImportParamNew {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCocCmdbId(cocCmdbId: string): AgentImportParamNew {
        this['coc_cmdb_id'] = cocCmdbId;
        return this;
    }
    public set cocCmdbId(cocCmdbId: string  | undefined) {
        this['coc_cmdb_id'] = cocCmdbId;
    }
    public get cocCmdbId(): string | undefined {
        return this['coc_cmdb_id'];
    }
}