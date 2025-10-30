import { WatermarkLocation } from './WatermarkLocation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWatermarkRuleResponse extends SdkResponse {
    private 'rule_name'?: string;
    private 'template_id'?: string;
    public domain?: string;
    public app?: string;
    public stream?: string;
    public location?: WatermarkLocation;
    private 'channel_id'?: string;
    private 'transcode_template_name'?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withRuleName(ruleName: string): UpdateWatermarkRuleResponse {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withTemplateId(templateId: string): UpdateWatermarkRuleResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withDomain(domain: string): UpdateWatermarkRuleResponse {
        this['domain'] = domain;
        return this;
    }
    public withApp(app: string): UpdateWatermarkRuleResponse {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): UpdateWatermarkRuleResponse {
        this['stream'] = stream;
        return this;
    }
    public withLocation(location: WatermarkLocation): UpdateWatermarkRuleResponse {
        this['location'] = location;
        return this;
    }
    public withChannelId(channelId: string): UpdateWatermarkRuleResponse {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withTranscodeTemplateName(transcodeTemplateName: string): UpdateWatermarkRuleResponse {
        this['transcode_template_name'] = transcodeTemplateName;
        return this;
    }
    public set transcodeTemplateName(transcodeTemplateName: string  | undefined) {
        this['transcode_template_name'] = transcodeTemplateName;
    }
    public get transcodeTemplateName(): string | undefined {
        return this['transcode_template_name'];
    }
    public withXRequestId(xRequestId: string): UpdateWatermarkRuleResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}