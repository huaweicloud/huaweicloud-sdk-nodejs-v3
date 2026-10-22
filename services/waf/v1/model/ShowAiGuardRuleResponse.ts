import { AbuseConfig } from './AbuseConfig';
import { AiGuardRuleAction } from './AiGuardRuleAction';
import { DetectLabels } from './DetectLabels';
import { DetectLabelsInfo } from './DetectLabelsInfo';
import { DetectOpt } from './DetectOpt';
import { TopicConfig } from './TopicConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAiGuardRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'detect_type'?: ShowAiGuardRuleResponseDetectTypeEnum | string;
    private 'detect_target'?: ShowAiGuardRuleResponseDetectTargetEnum | string;
    private 'policy_id'?: string;
    public status?: ShowAiGuardRuleResponseStatusEnum | string;
    private 'detect_opts'?: Array<DetectOpt>;
    public action?: AiGuardRuleAction;
    private 'detect_labels'?: DetectLabels;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'detect_labels_info'?: DetectLabelsInfo;
    private 'not_supported_language_action'?: ShowAiGuardRuleResponseNotSupportedLanguageActionEnum | string;
    public source?: ShowAiGuardRuleResponseSourceEnum | string;
    private 'source_id'?: string;
    public description?: string;
    private 'custom_answers_id'?: string;
    private 'custom_answers_name'?: string;
    private 'abuse_config'?: AbuseConfig;
    private 'topic_config'?: TopicConfig;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowAiGuardRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowAiGuardRuleResponse {
        this['name'] = name;
        return this;
    }
    public withDetectType(detectType: ShowAiGuardRuleResponseDetectTypeEnum | string): ShowAiGuardRuleResponse {
        this['detect_type'] = detectType;
        return this;
    }
    public set detectType(detectType: ShowAiGuardRuleResponseDetectTypeEnum | string  | undefined) {
        this['detect_type'] = detectType;
    }
    public get detectType(): ShowAiGuardRuleResponseDetectTypeEnum | string | undefined {
        return this['detect_type'];
    }
    public withDetectTarget(detectTarget: ShowAiGuardRuleResponseDetectTargetEnum | string): ShowAiGuardRuleResponse {
        this['detect_target'] = detectTarget;
        return this;
    }
    public set detectTarget(detectTarget: ShowAiGuardRuleResponseDetectTargetEnum | string  | undefined) {
        this['detect_target'] = detectTarget;
    }
    public get detectTarget(): ShowAiGuardRuleResponseDetectTargetEnum | string | undefined {
        return this['detect_target'];
    }
    public withPolicyId(policyId: string): ShowAiGuardRuleResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withStatus(status: ShowAiGuardRuleResponseStatusEnum | string): ShowAiGuardRuleResponse {
        this['status'] = status;
        return this;
    }
    public withDetectOpts(detectOpts: Array<DetectOpt>): ShowAiGuardRuleResponse {
        this['detect_opts'] = detectOpts;
        return this;
    }
    public set detectOpts(detectOpts: Array<DetectOpt>  | undefined) {
        this['detect_opts'] = detectOpts;
    }
    public get detectOpts(): Array<DetectOpt> | undefined {
        return this['detect_opts'];
    }
    public withAction(action: AiGuardRuleAction): ShowAiGuardRuleResponse {
        this['action'] = action;
        return this;
    }
    public withDetectLabels(detectLabels: DetectLabels): ShowAiGuardRuleResponse {
        this['detect_labels'] = detectLabels;
        return this;
    }
    public set detectLabels(detectLabels: DetectLabels  | undefined) {
        this['detect_labels'] = detectLabels;
    }
    public get detectLabels(): DetectLabels | undefined {
        return this['detect_labels'];
    }
    public withCreateTime(createTime: number): ShowAiGuardRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowAiGuardRuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDetectLabelsInfo(detectLabelsInfo: DetectLabelsInfo): ShowAiGuardRuleResponse {
        this['detect_labels_info'] = detectLabelsInfo;
        return this;
    }
    public set detectLabelsInfo(detectLabelsInfo: DetectLabelsInfo  | undefined) {
        this['detect_labels_info'] = detectLabelsInfo;
    }
    public get detectLabelsInfo(): DetectLabelsInfo | undefined {
        return this['detect_labels_info'];
    }
    public withNotSupportedLanguageAction(notSupportedLanguageAction: ShowAiGuardRuleResponseNotSupportedLanguageActionEnum | string): ShowAiGuardRuleResponse {
        this['not_supported_language_action'] = notSupportedLanguageAction;
        return this;
    }
    public set notSupportedLanguageAction(notSupportedLanguageAction: ShowAiGuardRuleResponseNotSupportedLanguageActionEnum | string  | undefined) {
        this['not_supported_language_action'] = notSupportedLanguageAction;
    }
    public get notSupportedLanguageAction(): ShowAiGuardRuleResponseNotSupportedLanguageActionEnum | string | undefined {
        return this['not_supported_language_action'];
    }
    public withSource(source: ShowAiGuardRuleResponseSourceEnum | string): ShowAiGuardRuleResponse {
        this['source'] = source;
        return this;
    }
    public withSourceId(sourceId: string): ShowAiGuardRuleResponse {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withDescription(description: string): ShowAiGuardRuleResponse {
        this['description'] = description;
        return this;
    }
    public withCustomAnswersId(customAnswersId: string): ShowAiGuardRuleResponse {
        this['custom_answers_id'] = customAnswersId;
        return this;
    }
    public set customAnswersId(customAnswersId: string  | undefined) {
        this['custom_answers_id'] = customAnswersId;
    }
    public get customAnswersId(): string | undefined {
        return this['custom_answers_id'];
    }
    public withCustomAnswersName(customAnswersName: string): ShowAiGuardRuleResponse {
        this['custom_answers_name'] = customAnswersName;
        return this;
    }
    public set customAnswersName(customAnswersName: string  | undefined) {
        this['custom_answers_name'] = customAnswersName;
    }
    public get customAnswersName(): string | undefined {
        return this['custom_answers_name'];
    }
    public withAbuseConfig(abuseConfig: AbuseConfig): ShowAiGuardRuleResponse {
        this['abuse_config'] = abuseConfig;
        return this;
    }
    public set abuseConfig(abuseConfig: AbuseConfig  | undefined) {
        this['abuse_config'] = abuseConfig;
    }
    public get abuseConfig(): AbuseConfig | undefined {
        return this['abuse_config'];
    }
    public withTopicConfig(topicConfig: TopicConfig): ShowAiGuardRuleResponse {
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
export enum ShowAiGuardRuleResponseDetectTypeEnum {
    TEXT = 'text',
    IMAGE = 'image'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAiGuardRuleResponseDetectTargetEnum {
    OCR = 'ocr',
    CONTENT = 'content'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAiGuardRuleResponseStatusEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAiGuardRuleResponseNotSupportedLanguageActionEnum {
    PASS = 'pass',
    BLOCK = 'block'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAiGuardRuleResponseSourceEnum {
    SYSTEM = 'system',
    CUSTOM = 'custom'
}
