

export class QueryAppConfigsTemplateBriefRespDTO {
    private 'tpl_id'?: string;
    public name?: string;
    public description?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withTplId(tplId: string): QueryAppConfigsTemplateBriefRespDTO {
        this['tpl_id'] = tplId;
        return this;
    }
    public set tplId(tplId: string  | undefined) {
        this['tpl_id'] = tplId;
    }
    public get tplId(): string | undefined {
        return this['tpl_id'];
    }
    public withName(name: string): QueryAppConfigsTemplateBriefRespDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): QueryAppConfigsTemplateBriefRespDTO {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): QueryAppConfigsTemplateBriefRespDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): QueryAppConfigsTemplateBriefRespDTO {
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