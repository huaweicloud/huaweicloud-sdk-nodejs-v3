

export class ListWatermarkRuleRequest {
    private 'template_id'?: string;
    public domain?: string;
    public app?: string;
    private 'channel_id'?: string;
    public stream?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withTemplateId(templateId: string): ListWatermarkRuleRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withDomain(domain: string): ListWatermarkRuleRequest {
        this['domain'] = domain;
        return this;
    }
    public withApp(app: string): ListWatermarkRuleRequest {
        this['app'] = app;
        return this;
    }
    public withChannelId(channelId: string): ListWatermarkRuleRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withStream(stream: string): ListWatermarkRuleRequest {
        this['stream'] = stream;
        return this;
    }
    public withOffset(offset: number): ListWatermarkRuleRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWatermarkRuleRequest {
        this['limit'] = limit;
        return this;
    }
}