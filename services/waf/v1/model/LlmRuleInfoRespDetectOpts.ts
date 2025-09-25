import { LlmRuleInfoRespDetectOptsAction } from './LlmRuleInfoRespDetectOptsAction';


export class LlmRuleInfoRespDetectOpts {
    public enable?: boolean;
    private 'content_idx'?: string;
    public action?: LlmRuleInfoRespDetectOptsAction;
    public constructor() { 
    }
    public withEnable(enable: boolean): LlmRuleInfoRespDetectOpts {
        this['enable'] = enable;
        return this;
    }
    public withContentIdx(contentIdx: string): LlmRuleInfoRespDetectOpts {
        this['content_idx'] = contentIdx;
        return this;
    }
    public set contentIdx(contentIdx: string  | undefined) {
        this['content_idx'] = contentIdx;
    }
    public get contentIdx(): string | undefined {
        return this['content_idx'];
    }
    public withAction(action: LlmRuleInfoRespDetectOptsAction): LlmRuleInfoRespDetectOpts {
        this['action'] = action;
        return this;
    }
}