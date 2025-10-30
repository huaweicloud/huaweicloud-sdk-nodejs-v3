import { WatermarkLocation } from './WatermarkLocation';


export class WatermarkRule {
    private 'rule_name'?: string;
    private 'template_id'?: string;
    public domain?: string;
    public app?: string;
    public stream?: string;
    public location?: WatermarkLocation;
    private 'channel_id'?: string;
    private 'transcode_template_name'?: string;
    public constructor(templateId?: string, domain?: string) { 
        this['template_id'] = templateId;
        this['domain'] = domain;
    }
    public withRuleName(ruleName: string): WatermarkRule {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withTemplateId(templateId: string): WatermarkRule {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withDomain(domain: string): WatermarkRule {
        this['domain'] = domain;
        return this;
    }
    public withApp(app: string): WatermarkRule {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): WatermarkRule {
        this['stream'] = stream;
        return this;
    }
    public withLocation(location: WatermarkLocation): WatermarkRule {
        this['location'] = location;
        return this;
    }
    public withChannelId(channelId: string): WatermarkRule {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withTranscodeTemplateName(transcodeTemplateName: string): WatermarkRule {
        this['transcode_template_name'] = transcodeTemplateName;
        return this;
    }
    public set transcodeTemplateName(transcodeTemplateName: string  | undefined) {
        this['transcode_template_name'] = transcodeTemplateName;
    }
    public get transcodeTemplateName(): string | undefined {
        return this['transcode_template_name'];
    }
}