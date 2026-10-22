import { AbuseConfig } from './AbuseConfig';
import { AiGuardRuleAction } from './AiGuardRuleAction';
import { DetectLabels } from './DetectLabels';
import { DetectOpt } from './DetectOpt';
import { TopicConfig } from './TopicConfig';


export class UpdateAiGuardRuleRequestBody {
    public name?: string;
    public status?: UpdateAiGuardRuleRequestBodyStatusEnum | string;
    private 'detect_opts'?: Array<DetectOpt>;
    public action?: AiGuardRuleAction;
    private 'detect_labels'?: DetectLabels;
    private 'not_supported_language_action'?: UpdateAiGuardRuleRequestBodyNotSupportedLanguageActionEnum | string;
    public description?: string;
    private 'custom_answers_id'?: string;
    private 'custom_answers_name'?: string;
    private 'abuse_config'?: AbuseConfig;
    private 'topic_config'?: TopicConfig;
    public constructor() { 
    }
    public withName(name: string): UpdateAiGuardRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withStatus(status: UpdateAiGuardRuleRequestBodyStatusEnum | string): UpdateAiGuardRuleRequestBody {
        this['status'] = status;
        return this;
    }
    public withDetectOpts(detectOpts: Array<DetectOpt>): UpdateAiGuardRuleRequestBody {
        this['detect_opts'] = detectOpts;
        return this;
    }
    public set detectOpts(detectOpts: Array<DetectOpt>  | undefined) {
        this['detect_opts'] = detectOpts;
    }
    public get detectOpts(): Array<DetectOpt> | undefined {
        return this['detect_opts'];
    }
    public withAction(action: AiGuardRuleAction): UpdateAiGuardRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withDetectLabels(detectLabels: DetectLabels): UpdateAiGuardRuleRequestBody {
        this['detect_labels'] = detectLabels;
        return this;
    }
    public set detectLabels(detectLabels: DetectLabels  | undefined) {
        this['detect_labels'] = detectLabels;
    }
    public get detectLabels(): DetectLabels | undefined {
        return this['detect_labels'];
    }
    public withNotSupportedLanguageAction(notSupportedLanguageAction: UpdateAiGuardRuleRequestBodyNotSupportedLanguageActionEnum | string): UpdateAiGuardRuleRequestBody {
        this['not_supported_language_action'] = notSupportedLanguageAction;
        return this;
    }
    public set notSupportedLanguageAction(notSupportedLanguageAction: UpdateAiGuardRuleRequestBodyNotSupportedLanguageActionEnum | string  | undefined) {
        this['not_supported_language_action'] = notSupportedLanguageAction;
    }
    public get notSupportedLanguageAction(): UpdateAiGuardRuleRequestBodyNotSupportedLanguageActionEnum | string | undefined {
        return this['not_supported_language_action'];
    }
    public withDescription(description: string): UpdateAiGuardRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withCustomAnswersId(customAnswersId: string): UpdateAiGuardRuleRequestBody {
        this['custom_answers_id'] = customAnswersId;
        return this;
    }
    public set customAnswersId(customAnswersId: string  | undefined) {
        this['custom_answers_id'] = customAnswersId;
    }
    public get customAnswersId(): string | undefined {
        return this['custom_answers_id'];
    }
    public withCustomAnswersName(customAnswersName: string): UpdateAiGuardRuleRequestBody {
        this['custom_answers_name'] = customAnswersName;
        return this;
    }
    public set customAnswersName(customAnswersName: string  | undefined) {
        this['custom_answers_name'] = customAnswersName;
    }
    public get customAnswersName(): string | undefined {
        return this['custom_answers_name'];
    }
    public withAbuseConfig(abuseConfig: AbuseConfig): UpdateAiGuardRuleRequestBody {
        this['abuse_config'] = abuseConfig;
        return this;
    }
    public set abuseConfig(abuseConfig: AbuseConfig  | undefined) {
        this['abuse_config'] = abuseConfig;
    }
    public get abuseConfig(): AbuseConfig | undefined {
        return this['abuse_config'];
    }
    public withTopicConfig(topicConfig: TopicConfig): UpdateAiGuardRuleRequestBody {
        this['topic_config'] = topicConfig;
        return this;
    }
    public set topicConfig(topicConfig: TopicConfig  | undefined) {
        this['topic_config'] = topicConfig;
    }
    public get topicConfig(): TopicConfig | undefined {
        return this['topic_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAiGuardRuleRequestBodyStatusEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateAiGuardRuleRequestBodyNotSupportedLanguageActionEnum {
    PASS = 'pass',
    BLOCK = 'block'
}
