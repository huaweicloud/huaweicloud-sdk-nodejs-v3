

export class CreateRetryPolicyRequestBodyDataObjectBlockAge {
    private 'is_block_ageing'?: boolean;
    private 'block_ageing'?: string;
    public constructor(isBlockAgeing?: boolean) { 
        this['is_block_ageing'] = isBlockAgeing;
    }
    public withIsBlockAgeing(isBlockAgeing: boolean): CreateRetryPolicyRequestBodyDataObjectBlockAge {
        this['is_block_ageing'] = isBlockAgeing;
        return this;
    }
    public set isBlockAgeing(isBlockAgeing: boolean  | undefined) {
        this['is_block_ageing'] = isBlockAgeing;
    }
    public get isBlockAgeing(): boolean | undefined {
        return this['is_block_ageing'];
    }
    public withBlockAgeing(blockAgeing: string): CreateRetryPolicyRequestBodyDataObjectBlockAge {
        this['block_ageing'] = blockAgeing;
        return this;
    }
    public set blockAgeing(blockAgeing: string  | undefined) {
        this['block_ageing'] = blockAgeing;
    }
    public get blockAgeing(): string | undefined {
        return this['block_ageing'];
    }
}