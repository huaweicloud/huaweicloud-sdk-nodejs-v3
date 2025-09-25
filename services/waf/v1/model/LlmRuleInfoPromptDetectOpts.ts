import { LlmRuleInfoPromptDetectOptsAction } from './LlmRuleInfoPromptDetectOptsAction';


export class LlmRuleInfoPromptDetectOpts {
    public content?: string;
    private 'inject_enable'?: boolean;
    private 'compliance_enable'?: boolean;
    public action?: LlmRuleInfoPromptDetectOptsAction;
    public constructor() { 
    }
    public withContent(content: string): LlmRuleInfoPromptDetectOpts {
        this['content'] = content;
        return this;
    }
    public withInjectEnable(injectEnable: boolean): LlmRuleInfoPromptDetectOpts {
        this['inject_enable'] = injectEnable;
        return this;
    }
    public set injectEnable(injectEnable: boolean  | undefined) {
        this['inject_enable'] = injectEnable;
    }
    public get injectEnable(): boolean | undefined {
        return this['inject_enable'];
    }
    public withComplianceEnable(complianceEnable: boolean): LlmRuleInfoPromptDetectOpts {
        this['compliance_enable'] = complianceEnable;
        return this;
    }
    public set complianceEnable(complianceEnable: boolean  | undefined) {
        this['compliance_enable'] = complianceEnable;
    }
    public get complianceEnable(): boolean | undefined {
        return this['compliance_enable'];
    }
    public withAction(action: LlmRuleInfoPromptDetectOptsAction): LlmRuleInfoPromptDetectOpts {
        this['action'] = action;
        return this;
    }
}