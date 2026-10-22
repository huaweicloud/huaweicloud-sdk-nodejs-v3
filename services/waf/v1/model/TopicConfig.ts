

export class TopicConfig {
    private 'topic_name'?: string;
    private 'topic_description'?: string;
    private 'sensitive_words'?: Array<string>;
    private 'black_samples'?: Array<string>;
    private 'white_samples'?: Array<string>;
    public scope?: string;
    private 'block_response'?: string;
    private 'custom_llm_id'?: string;
    public constructor(topicName?: string, topicDescription?: string, scope?: string) { 
        this['topic_name'] = topicName;
        this['topic_description'] = topicDescription;
        this['scope'] = scope;
    }
    public withTopicName(topicName: string): TopicConfig {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
    }
    public withTopicDescription(topicDescription: string): TopicConfig {
        this['topic_description'] = topicDescription;
        return this;
    }
    public set topicDescription(topicDescription: string  | undefined) {
        this['topic_description'] = topicDescription;
    }
    public get topicDescription(): string | undefined {
        return this['topic_description'];
    }
    public withSensitiveWords(sensitiveWords: Array<string>): TopicConfig {
        this['sensitive_words'] = sensitiveWords;
        return this;
    }
    public set sensitiveWords(sensitiveWords: Array<string>  | undefined) {
        this['sensitive_words'] = sensitiveWords;
    }
    public get sensitiveWords(): Array<string> | undefined {
        return this['sensitive_words'];
    }
    public withBlackSamples(blackSamples: Array<string>): TopicConfig {
        this['black_samples'] = blackSamples;
        return this;
    }
    public set blackSamples(blackSamples: Array<string>  | undefined) {
        this['black_samples'] = blackSamples;
    }
    public get blackSamples(): Array<string> | undefined {
        return this['black_samples'];
    }
    public withWhiteSamples(whiteSamples: Array<string>): TopicConfig {
        this['white_samples'] = whiteSamples;
        return this;
    }
    public set whiteSamples(whiteSamples: Array<string>  | undefined) {
        this['white_samples'] = whiteSamples;
    }
    public get whiteSamples(): Array<string> | undefined {
        return this['white_samples'];
    }
    public withScope(scope: string): TopicConfig {
        this['scope'] = scope;
        return this;
    }
    public withBlockResponse(blockResponse: string): TopicConfig {
        this['block_response'] = blockResponse;
        return this;
    }
    public set blockResponse(blockResponse: string  | undefined) {
        this['block_response'] = blockResponse;
    }
    public get blockResponse(): string | undefined {
        return this['block_response'];
    }
    public withCustomLlmId(customLlmId: string): TopicConfig {
        this['custom_llm_id'] = customLlmId;
        return this;
    }
    public set customLlmId(customLlmId: string  | undefined) {
        this['custom_llm_id'] = customLlmId;
    }
    public get customLlmId(): string | undefined {
        return this['custom_llm_id'];
    }
}