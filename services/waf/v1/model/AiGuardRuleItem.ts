import { AbuseConfig } from './AbuseConfig';
import { AiGuardRuleAction } from './AiGuardRuleAction';
import { DetectLabels } from './DetectLabels';
import { DetectLabelsInfo } from './DetectLabelsInfo';
import { DetectOpt } from './DetectOpt';
import { TopicConfig } from './TopicConfig';


export class AiGuardRuleItem {
    public id?: string;
    public name?: string;
    private 'detect_type'?: AiGuardRuleItemDetectTypeEnum | string;
    private 'detect_target'?: AiGuardRuleItemDetectTargetEnum | string;
    private 'policy_id'?: string;
    public status?: AiGuardRuleItemStatusEnum | string;
    private 'detect_opts'?: Array<DetectOpt>;
    public action?: AiGuardRuleAction;
    private 'detect_labels'?: DetectLabels;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'detect_labels_info'?: DetectLabelsInfo;
    private 'not_supported_language_action'?: AiGuardRuleItemNotSupportedLanguageActionEnum | string;
    public source?: AiGuardRuleItemSourceEnum | string;
    private 'source_id'?: string;
    public description?: string;
    private 'custom_answers_id'?: string;
    private 'custom_answers_name'?: string;
    private 'abuse_config'?: AbuseConfig;
    private 'topic_config'?: TopicConfig;
    public constructor() { 
    }
    public withId(id: string): AiGuardRuleItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AiGuardRuleItem {
        this['name'] = name;
        return this;
    }
    public withDetectType(detectType: AiGuardRuleItemDetectTypeEnum | string): AiGuardRuleItem {
        this['detect_type'] = detectType;
        return this;
    }
    public set detectType(detectType: AiGuardRuleItemDetectTypeEnum | string  | undefined) {
        this['detect_type'] = detectType;
    }
    public get detectType(): AiGuardRuleItemDetectTypeEnum | string | undefined {
        return this['detect_type'];
    }
    public withDetectTarget(detectTarget: AiGuardRuleItemDetectTargetEnum | string): AiGuardRuleItem {
        this['detect_target'] = detectTarget;
        return this;
    }
    public set detectTarget(detectTarget: AiGuardRuleItemDetectTargetEnum | string  | undefined) {
        this['detect_target'] = detectTarget;
    }
    public get detectTarget(): AiGuardRuleItemDetectTargetEnum | string | undefined {
        return this['detect_target'];
    }
    public withPolicyId(policyId: string): AiGuardRuleItem {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withStatus(status: AiGuardRuleItemStatusEnum | string): AiGuardRuleItem {
        this['status'] = status;
        return this;
    }
    public withDetectOpts(detectOpts: Array<DetectOpt>): AiGuardRuleItem {
        this['detect_opts'] = detectOpts;
        return this;
    }
    public set detectOpts(detectOpts: Array<DetectOpt>  | undefined) {
        this['detect_opts'] = detectOpts;
    }
    public get detectOpts(): Array<DetectOpt> | undefined {
        return this['detect_opts'];
    }
    public withAction(action: AiGuardRuleAction): AiGuardRuleItem {
        this['action'] = action;
        return this;
    }
    public withDetectLabels(detectLabels: DetectLabels): AiGuardRuleItem {
        this['detect_labels'] = detectLabels;
        return this;
    }
    public set detectLabels(detectLabels: DetectLabels  | undefined) {
        this['detect_labels'] = detectLabels;
    }
    public get detectLabels(): DetectLabels | undefined {
        return this['detect_labels'];
    }
    public withCreateTime(createTime: number): AiGuardRuleItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): AiGuardRuleItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDetectLabelsInfo(detectLabelsInfo: DetectLabelsInfo): AiGuardRuleItem {
        this['detect_labels_info'] = detectLabelsInfo;
        return this;
    }
    public set detectLabelsInfo(detectLabelsInfo: DetectLabelsInfo  | undefined) {
        this['detect_labels_info'] = detectLabelsInfo;
    }
    public get detectLabelsInfo(): DetectLabelsInfo | undefined {
        return this['detect_labels_info'];
    }
    public withNotSupportedLanguageAction(notSupportedLanguageAction: AiGuardRuleItemNotSupportedLanguageActionEnum | string): AiGuardRuleItem {
        this['not_supported_language_action'] = notSupportedLanguageAction;
        return this;
    }
    public set notSupportedLanguageAction(notSupportedLanguageAction: AiGuardRuleItemNotSupportedLanguageActionEnum | string  | undefined) {
        this['not_supported_language_action'] = notSupportedLanguageAction;
    }
    public get notSupportedLanguageAction(): AiGuardRuleItemNotSupportedLanguageActionEnum | string | undefined {
        return this['not_supported_language_action'];
    }
    public withSource(source: AiGuardRuleItemSourceEnum | string): AiGuardRuleItem {
        this['source'] = source;
        return this;
    }
    public withSourceId(sourceId: string): AiGuardRuleItem {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withDescription(description: string): AiGuardRuleItem {
        this['description'] = description;
        return this;
    }
    public withCustomAnswersId(customAnswersId: string): AiGuardRuleItem {
        this['custom_answers_id'] = customAnswersId;
        return this;
    }
    public set customAnswersId(customAnswersId: string  | undefined) {
        this['custom_answers_id'] = customAnswersId;
    }
    public get customAnswersId(): string | undefined {
        return this['custom_answers_id'];
    }
    public withCustomAnswersName(customAnswersName: string): AiGuardRuleItem {
        this['custom_answers_name'] = customAnswersName;
        return this;
    }
    public set customAnswersName(customAnswersName: string  | undefined) {
        this['custom_answers_name'] = customAnswersName;
    }
    public get customAnswersName(): string | undefined {
        return this['custom_answers_name'];
    }
    public withAbuseConfig(abuseConfig: AbuseConfig): AiGuardRuleItem {
        this['abuse_config'] = abuseConfig;
        return this;
    }
    public set abuseConfig(abuseConfig: AbuseConfig  | undefined) {
        this['abuse_config'] = abuseConfig;
    }
    public get abuseConfig(): AbuseConfig | undefined {
        return this['abuse_config'];
    }
    public withTopicConfig(topicConfig: TopicConfig): AiGuardRuleItem {
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
export enum AiGuardRuleItemDetectTypeEnum {
    TEXT = 'text',
    IMAGE = 'image'
}
/**
    * @export
    * @enum {string}
    */
export enum AiGuardRuleItemDetectTargetEnum {
    OCR = 'ocr',
    CONTENT = 'content'
}
/**
    * @export
    * @enum {string}
    */
export enum AiGuardRuleItemStatusEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
/**
    * @export
    * @enum {string}
    */
export enum AiGuardRuleItemNotSupportedLanguageActionEnum {
    PASS = 'pass',
    BLOCK = 'block'
}
/**
    * @export
    * @enum {string}
    */
export enum AiGuardRuleItemSourceEnum {
    SYSTEM = 'system',
    CUSTOM = 'custom'
}
