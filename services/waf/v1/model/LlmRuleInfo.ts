import { LlmRuleInfoPromptDetectOpts } from './LlmRuleInfoPromptDetectOpts';
import { LlmRuleInfoRespDetectOpts } from './LlmRuleInfoRespDetectOpts';


export class LlmRuleInfo {
    public id?: string;
    public name?: string;
    public discription?: string;
    public url?: string;
    private 'prompt_detect_opts'?: LlmRuleInfoPromptDetectOpts;
    private 'resp_detect_opts'?: LlmRuleInfoRespDetectOpts;
    public constructor() { 
    }
    public withId(id: string): LlmRuleInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): LlmRuleInfo {
        this['name'] = name;
        return this;
    }
    public withDiscription(discription: string): LlmRuleInfo {
        this['discription'] = discription;
        return this;
    }
    public withUrl(url: string): LlmRuleInfo {
        this['url'] = url;
        return this;
    }
    public withPromptDetectOpts(promptDetectOpts: LlmRuleInfoPromptDetectOpts): LlmRuleInfo {
        this['prompt_detect_opts'] = promptDetectOpts;
        return this;
    }
    public set promptDetectOpts(promptDetectOpts: LlmRuleInfoPromptDetectOpts  | undefined) {
        this['prompt_detect_opts'] = promptDetectOpts;
    }
    public get promptDetectOpts(): LlmRuleInfoPromptDetectOpts | undefined {
        return this['prompt_detect_opts'];
    }
    public withRespDetectOpts(respDetectOpts: LlmRuleInfoRespDetectOpts): LlmRuleInfo {
        this['resp_detect_opts'] = respDetectOpts;
        return this;
    }
    public set respDetectOpts(respDetectOpts: LlmRuleInfoRespDetectOpts  | undefined) {
        this['resp_detect_opts'] = respDetectOpts;
    }
    public get respDetectOpts(): LlmRuleInfoRespDetectOpts | undefined {
        return this['resp_detect_opts'];
    }
}