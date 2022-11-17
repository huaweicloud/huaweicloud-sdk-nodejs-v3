

export class PublishMessageRequestBody {
    public subject?: string;
    public message?: string;
    private 'message_structure'?: string | undefined;
    private 'message_template_name'?: string | undefined;
    public tags?: { [key: string]: string; };
    private 'time_to_live'?: string | undefined;
    public constructor() { 
    }
    public withSubject(subject: string): PublishMessageRequestBody {
        this['subject'] = subject;
        return this;
    }
    public withMessage(message: string): PublishMessageRequestBody {
        this['message'] = message;
        return this;
    }
    public withMessageStructure(messageStructure: string): PublishMessageRequestBody {
        this['message_structure'] = messageStructure;
        return this;
    }
    public set messageStructure(messageStructure: string | undefined) {
        this['message_structure'] = messageStructure;
    }
    public get messageStructure() {
        return this['message_structure'];
    }
    public withMessageTemplateName(messageTemplateName: string): PublishMessageRequestBody {
        this['message_template_name'] = messageTemplateName;
        return this;
    }
    public set messageTemplateName(messageTemplateName: string | undefined) {
        this['message_template_name'] = messageTemplateName;
    }
    public get messageTemplateName() {
        return this['message_template_name'];
    }
    public withTags(tags: { [key: string]: string; }): PublishMessageRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withTimeToLive(timeToLive: string): PublishMessageRequestBody {
        this['time_to_live'] = timeToLive;
        return this;
    }
    public set timeToLive(timeToLive: string | undefined) {
        this['time_to_live'] = timeToLive;
    }
    public get timeToLive() {
        return this['time_to_live'];
    }
}