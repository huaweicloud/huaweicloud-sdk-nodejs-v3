

export class HISFastScript {
    private 'script_type'?: string;
    private 'cmd_user'?: string;
    private 'script_content'?: string;
    private 'ecs_id_list'?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'script_args'?: string;
    public constructor(scriptType?: string, cmdUser?: string, scriptContent?: string, ecsIdList?: string, name?: string, projectId?: string) { 
        this['script_type'] = scriptType;
        this['cmd_user'] = cmdUser;
        this['script_content'] = scriptContent;
        this['ecs_id_list'] = ecsIdList;
        this['name'] = name;
        this['project_id'] = projectId;
    }
    public withScriptType(scriptType: string): HISFastScript {
        this['script_type'] = scriptType;
        return this;
    }
    public set scriptType(scriptType: string  | undefined) {
        this['script_type'] = scriptType;
    }
    public get scriptType(): string | undefined {
        return this['script_type'];
    }
    public withCmdUser(cmdUser: string): HISFastScript {
        this['cmd_user'] = cmdUser;
        return this;
    }
    public set cmdUser(cmdUser: string  | undefined) {
        this['cmd_user'] = cmdUser;
    }
    public get cmdUser(): string | undefined {
        return this['cmd_user'];
    }
    public withScriptContent(scriptContent: string): HISFastScript {
        this['script_content'] = scriptContent;
        return this;
    }
    public set scriptContent(scriptContent: string  | undefined) {
        this['script_content'] = scriptContent;
    }
    public get scriptContent(): string | undefined {
        return this['script_content'];
    }
    public withEcsIdList(ecsIdList: string): HISFastScript {
        this['ecs_id_list'] = ecsIdList;
        return this;
    }
    public set ecsIdList(ecsIdList: string  | undefined) {
        this['ecs_id_list'] = ecsIdList;
    }
    public get ecsIdList(): string | undefined {
        return this['ecs_id_list'];
    }
    public withName(name: string): HISFastScript {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): HISFastScript {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withScriptArgs(scriptArgs: string): HISFastScript {
        this['script_args'] = scriptArgs;
        return this;
    }
    public set scriptArgs(scriptArgs: string  | undefined) {
        this['script_args'] = scriptArgs;
    }
    public get scriptArgs(): string | undefined {
        return this['script_args'];
    }
}