

export class ModifyOttChannelEncoderSettingsEncoderSettings {
    private 'template_id'?: string;
    public constructor() { 
    }
    public withTemplateId(templateId: string): ModifyOttChannelEncoderSettingsEncoderSettings {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
}