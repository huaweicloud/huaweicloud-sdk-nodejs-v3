

export class LlmConfigInfo {
    private 'llm_config_id'?: string;
    public name?: string;
    private 'llm_url'?: string;
    public model?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withLlmConfigId(llmConfigId: string): LlmConfigInfo {
        this['llm_config_id'] = llmConfigId;
        return this;
    }
    public set llmConfigId(llmConfigId: string  | undefined) {
        this['llm_config_id'] = llmConfigId;
    }
    public get llmConfigId(): string | undefined {
        return this['llm_config_id'];
    }
    public withName(name: string): LlmConfigInfo {
        this['name'] = name;
        return this;
    }
    public withLlmUrl(llmUrl: string): LlmConfigInfo {
        this['llm_url'] = llmUrl;
        return this;
    }
    public set llmUrl(llmUrl: string  | undefined) {
        this['llm_url'] = llmUrl;
    }
    public get llmUrl(): string | undefined {
        return this['llm_url'];
    }
    public withModel(model: string): LlmConfigInfo {
        this['model'] = model;
        return this;
    }
    public withCreateTime(createTime: string): LlmConfigInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): LlmConfigInfo {
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