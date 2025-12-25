

export class ShowPreProcessRulesListResponseBodyData {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'mapping_id'?: string;
    private 'mapper_id'?: string;
    private 'mapper_type_id'?: string;
    public action?: ShowPreProcessRulesListResponseBodyDataActionEnum | string;
    public expression?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): ShowPreProcessRulesListResponseBodyData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowPreProcessRulesListResponseBodyData {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): ShowPreProcessRulesListResponseBodyData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): ShowPreProcessRulesListResponseBodyData {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withMappingId(mappingId: string): ShowPreProcessRulesListResponseBodyData {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string  | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId(): string | undefined {
        return this['mapping_id'];
    }
    public withMapperId(mapperId: string): ShowPreProcessRulesListResponseBodyData {
        this['mapper_id'] = mapperId;
        return this;
    }
    public set mapperId(mapperId: string  | undefined) {
        this['mapper_id'] = mapperId;
    }
    public get mapperId(): string | undefined {
        return this['mapper_id'];
    }
    public withMapperTypeId(mapperTypeId: string): ShowPreProcessRulesListResponseBodyData {
        this['mapper_type_id'] = mapperTypeId;
        return this;
    }
    public set mapperTypeId(mapperTypeId: string  | undefined) {
        this['mapper_type_id'] = mapperTypeId;
    }
    public get mapperTypeId(): string | undefined {
        return this['mapper_type_id'];
    }
    public withAction(action: ShowPreProcessRulesListResponseBodyDataActionEnum | string): ShowPreProcessRulesListResponseBodyData {
        this['action'] = action;
        return this;
    }
    public withExpression(expression: string): ShowPreProcessRulesListResponseBodyData {
        this['expression'] = expression;
        return this;
    }
    public withCreateTime(createTime: string): ShowPreProcessRulesListResponseBodyData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowPreProcessRulesListResponseBodyData {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPreProcessRulesListResponseBodyDataActionEnum {
    DROP = 'drop'
}
