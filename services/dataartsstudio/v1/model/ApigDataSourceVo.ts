

export class ApigDataSourceVo {
    private 'dw_name'?: string;
    private 'dw_type'?: string;
    private 'dw_config'?: object;
    private 'agent_id'?: string;
    private 'agent_name'?: string;
    private 'env_type'?: number;
    public constructor(dwName?: string, dwType?: string, dwConfig?: object) { 
        this['dw_name'] = dwName;
        this['dw_type'] = dwType;
        this['dw_config'] = dwConfig;
    }
    public withDwName(dwName: string): ApigDataSourceVo {
        this['dw_name'] = dwName;
        return this;
    }
    public set dwName(dwName: string  | undefined) {
        this['dw_name'] = dwName;
    }
    public get dwName(): string | undefined {
        return this['dw_name'];
    }
    public withDwType(dwType: string): ApigDataSourceVo {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withDwConfig(dwConfig: object): ApigDataSourceVo {
        this['dw_config'] = dwConfig;
        return this;
    }
    public set dwConfig(dwConfig: object  | undefined) {
        this['dw_config'] = dwConfig;
    }
    public get dwConfig(): object | undefined {
        return this['dw_config'];
    }
    public withAgentId(agentId: string): ApigDataSourceVo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentName(agentName: string): ApigDataSourceVo {
        this['agent_name'] = agentName;
        return this;
    }
    public set agentName(agentName: string  | undefined) {
        this['agent_name'] = agentName;
    }
    public get agentName(): string | undefined {
        return this['agent_name'];
    }
    public withEnvType(envType: number): ApigDataSourceVo {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: number  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): number | undefined {
        return this['env_type'];
    }
}