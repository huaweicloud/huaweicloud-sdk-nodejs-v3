import { AlertConfigRespWarnConfig } from './AlertConfigRespWarnConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlertConfigResponse extends SdkResponse {
    private 'topic_urn'?: string;
    private 'display_name'?: string;
    private 'warn_config'?: AlertConfigRespWarnConfig;
    public constructor() { 
        super();
    }
    public withTopicUrn(topicUrn: string): ShowAlertConfigResponse {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withDisplayName(displayName: string): ShowAlertConfigResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withWarnConfig(warnConfig: AlertConfigRespWarnConfig): ShowAlertConfigResponse {
        this['warn_config'] = warnConfig;
        return this;
    }
    public set warnConfig(warnConfig: AlertConfigRespWarnConfig  | undefined) {
        this['warn_config'] = warnConfig;
    }
    public get warnConfig(): AlertConfigRespWarnConfig | undefined {
        return this['warn_config'];
    }
}