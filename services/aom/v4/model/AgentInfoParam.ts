

export class AgentInfoParam {
    public page?: number;
    private 'page_size'?: number;
    private 'ecs_id_list'?: Array<string>;
    private 'agent_id_list'?: Array<string>;
    private 'coc_cmdb_id_list'?: Array<string>;
    public constructor() { 
    }
    public withPage(page: number): AgentInfoParam {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): AgentInfoParam {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withEcsIdList(ecsIdList: Array<string>): AgentInfoParam {
        this['ecs_id_list'] = ecsIdList;
        return this;
    }
    public set ecsIdList(ecsIdList: Array<string>  | undefined) {
        this['ecs_id_list'] = ecsIdList;
    }
    public get ecsIdList(): Array<string> | undefined {
        return this['ecs_id_list'];
    }
    public withAgentIdList(agentIdList: Array<string>): AgentInfoParam {
        this['agent_id_list'] = agentIdList;
        return this;
    }
    public set agentIdList(agentIdList: Array<string>  | undefined) {
        this['agent_id_list'] = agentIdList;
    }
    public get agentIdList(): Array<string> | undefined {
        return this['agent_id_list'];
    }
    public withCocCmdbIdList(cocCmdbIdList: Array<string>): AgentInfoParam {
        this['coc_cmdb_id_list'] = cocCmdbIdList;
        return this;
    }
    public set cocCmdbIdList(cocCmdbIdList: Array<string>  | undefined) {
        this['coc_cmdb_id_list'] = cocCmdbIdList;
    }
    public get cocCmdbIdList(): Array<string> | undefined {
        return this['coc_cmdb_id_list'];
    }
}