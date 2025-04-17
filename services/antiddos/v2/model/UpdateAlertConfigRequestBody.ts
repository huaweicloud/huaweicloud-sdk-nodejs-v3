import { WarnConfig } from './WarnConfig';


export class UpdateAlertConfigRequestBody {
    private 'display_name'?: string;
    private 'topic_urn'?: string;
    private 'warn_config'?: WarnConfig;
    public constructor(displayName?: string, topicUrn?: string, warnConfig?: WarnConfig) { 
        this['display_name'] = displayName;
        this['topic_urn'] = topicUrn;
        this['warn_config'] = warnConfig;
    }
    public withDisplayName(displayName: string): UpdateAlertConfigRequestBody {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withTopicUrn(topicUrn: string): UpdateAlertConfigRequestBody {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withWarnConfig(warnConfig: WarnConfig): UpdateAlertConfigRequestBody {
        this['warn_config'] = warnConfig;
        return this;
    }
    public set warnConfig(warnConfig: WarnConfig  | undefined) {
        this['warn_config'] = warnConfig;
    }
    public get warnConfig(): WarnConfig | undefined {
        return this['warn_config'];
    }
}