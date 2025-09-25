import { LlmRuleInfoPromptDetectOptsActionResponse } from './LlmRuleInfoPromptDetectOptsActionResponse';


export class LlmRuleInfoPromptDetectOptsAction {
    public category?: string;
    public response?: LlmRuleInfoPromptDetectOptsActionResponse;
    public constructor() { 
    }
    public withCategory(category: string): LlmRuleInfoPromptDetectOptsAction {
        this['category'] = category;
        return this;
    }
    public withResponse(response: LlmRuleInfoPromptDetectOptsActionResponse): LlmRuleInfoPromptDetectOptsAction {
        this['response'] = response;
        return this;
    }
}