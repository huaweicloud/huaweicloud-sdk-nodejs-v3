

export class CustomLlmBatchDeleteBody {
    private 'llm_ids'?: Array<string>;
    public constructor(llmIds?: Array<string>) { 
        this['llm_ids'] = llmIds;
    }
    public withLlmIds(llmIds: Array<string>): CustomLlmBatchDeleteBody {
        this['llm_ids'] = llmIds;
        return this;
    }
    public set llmIds(llmIds: Array<string>  | undefined) {
        this['llm_ids'] = llmIds;
    }
    public get llmIds(): Array<string> | undefined {
        return this['llm_ids'];
    }
}