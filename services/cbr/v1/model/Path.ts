

export class Path {
    public id?: string;
    public status?: string;
    private 'agent_id'?: string | undefined;
    private 'dir_path'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): Path {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): Path {
        this['status'] = status;
        return this;
    }
    public withAgentId(agentId: string): Path {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId() {
        return this['agent_id'];
    }
    public withDirPath(dirPath: string): Path {
        this['dir_path'] = dirPath;
        return this;
    }
    public set dirPath(dirPath: string | undefined) {
        this['dir_path'] = dirPath;
    }
    public get dirPath() {
        return this['dir_path'];
    }
}