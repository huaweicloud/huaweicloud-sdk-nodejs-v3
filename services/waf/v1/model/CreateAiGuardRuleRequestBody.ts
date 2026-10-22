import { AbuseConfig } from './AbuseConfig';
import { AiGuardRuleAction } from './AiGuardRuleAction';
import { DetectLabels } from './DetectLabels';
import { DetectOpt } from './DetectOpt';
import { TopicConfig } from './TopicConfig';


export class CreateAiGuardRuleRequestBody {
    public name?: string;
    private 'detect_opts'?: Array<DetectOpt>;
    public action?: AiGuardRuleAction;
    private 'detect_labels'?: DetectLabels;
    private 'not_supported_language_action'?: CreateAiGuardRuleRequestBodyNotSupportedLanguageActionEnum | string;
    private 'detect_target'?: CreateAiGuardRuleRequestBodyDetectTargetEnum | string;
    public description?: string;
    private 'custom_answers_id'?: string;
    private 'custom_answers_name'?: string;
    private 'abuse_config'?: AbuseConfig;
    private 'topic_config'?: TopicConfig;
    public constructor(name?: string, detectOpts?: Array<DetectOpt>, action?: AiGuardRuleAction, detectLabels?: DetectLabels) { 
        this['name'] = name;
        this['detect_opts'] = detectOpts;
        this['action'] = action;
        this['detect_labels'] = detectLabels;
    }
    public withName(name: string): CreateAiGuardRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withDetectOpts(detectOpts: Array<DetectOpt>): CreateAiGuardRuleRequestBody {
        this['detect_opts'] = detectOpts;
        return this;
    }
    public set detectOpts(detectOpts: Array<DetectOpt>  | undefined) {
        this['detect_opts'] = detectOpts;
    }
    public get detectOpts(): Array<DetectOpt> | undefined {
        return this['detect_opts'];
    }
    public withAction(action: AiGuardRuleAction): CreateAiGuardRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withDetectLabels(detectLabels: DetectLabels): CreateAiGuardRuleRequestBody {
        this['detect_labels'] = detectLabels;
        return this;
    }
    public set detectLabels(detectLabels: DetectLabels  | undefined) {
        this['detect_labels'] = detectLabels;
    }
    public get detectLabels(): DetectLabels | undefined {
        return this['detect_labels'];
    }
    public withNotSupportedLanguageAction(notSupportedLanguageAction: CreateAiGuardRuleRequestBodyNotSupportedLanguageActionEnum | string): CreateAiGuardRuleRequestBody {
        this['not_supported_language_action'] = notSupportedLanguageAction;
        return this;
    }
    public set notSupportedLanguageAction(notSupportedLanguageAction: CreateAiGuardRuleRequestBodyNotSupportedLanguageActionEnum | string  | undefined) {
        this['not_supported_language_action'] = notSupportedLanguageAction;
    }
    public get notSupportedLanguageAction(): CreateAiGuardRuleRequestBodyNotSupportedLanguageActionEnum | string | undefined {
        return this['not_supported_language_action'];
    }
    public withDetectTarget(detectTarget: CreateAiGuardRuleRequestBodyDetectTargetEnum | string): CreateAiGuardRuleRequestBody {
        this['detect_target'] = detectTarget;
        return this;
    }
    public set detectTarget(detectTarget: CreateAiGuardRuleRequestBodyDetectTargetEnum | string  | undefined) {
        this['detect_target'] = detectTarget;
    }
    public get detectTarget(): CreateAiGuardRuleRequestBodyDetectTargetEnum | string | undefined {
        return this['detect_target'];
    }
    public withDescription(description: string): CreateAiGuardRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withCustomAnswersId(customAnswersId: string): CreateAiGuardRuleRequestBody {
        this['custom_answers_id'] = customAnswersId;
        return this;
    }
    public set customAnswersId(customAnswersId: string  | undefined) {
        this['custom_answers_id'] = customAnswersId;
    }
    public get customAnswersId(): string | undefined {
        return this['custom_answers_id'];
    }
    public withCustomAnswersName(customAnswersName: string): CreateAiGuardRuleRequestBody {
        this['custom_answers_name'] = customAnswersName;
        return this;
    }
    public set customAnswersName(customAnswersName: string  | undefined) {
        this['custom_answers_name'] = customAnswersName;
    }
    public get customAnswersName(): string | undefined {
        return this['custom_answers_name'];
    }
    public withAbuseConfig(abuseConfig: AbuseConfig): CreateAiGuardRuleRequestBody {
        this['abuse_config'] = abuseConfig;
        return this;
    }
    public set abuseConfig(abuseConfig: AbuseConfig  | undefined) {
        this['abuse_config'] = abuseConfig;
    }
    public get abuseConfig(): AbuseConfig | undefined {
        return this['abuse_config'];
    }
    public withTopicConfig(topicConfig: TopicConfig): CreateAiGuardRuleRequestBody {
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
export enum CreateAiGuardRuleRequestBodyNotSupportedLanguageActionEnum {
    PASS = 'pass',
    BLOCK = 'block'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateAiGuardRuleRequestBodyDetectTargetEnum {
    OCR = 'ocr',
    CONTENT = 'content'
}
