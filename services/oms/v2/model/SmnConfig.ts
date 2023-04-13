

export class SmnConfig {
    public language?: SmnConfigLanguageEnum;
    private 'topic_urn': string | undefined;
    private 'trigger_conditions': Array<string> | undefined;
    public constructor(topicUrn?: any, triggerConditions?: any) { 
        this['topic_urn'] = topicUrn;
        this['trigger_conditions'] = triggerConditions;
    }
    public withLanguage(language: SmnConfigLanguageEnum): SmnConfig {
        this['language'] = language;
        return this;
    }
    public withTopicUrn(topicUrn: string): SmnConfig {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
        return this['topic_urn'];
    }
    public withTriggerConditions(triggerConditions: Array<string>): SmnConfig {
        this['trigger_conditions'] = triggerConditions;
        return this;
    }
    public set triggerConditions(triggerConditions: Array<string> | undefined) {
        this['trigger_conditions'] = triggerConditions;
    }
    public get triggerConditions() {
        return this['trigger_conditions'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SmnConfigLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
