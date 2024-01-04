import { MessageAttribute } from './MessageAttribute';


export class PublishMessageRequestBody {
    public subject?: string;
    public message?: string;
    private 'message_structure'?: string;
    private 'message_template_name'?: string;
    public tags?: { [key: string]: string; };
    private 'time_to_live'?: string;
    private 'message_attributes'?: Array<MessageAttribute>;
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
    public set messageStructure(messageStructure: string  | undefined) {
        this['message_structure'] = messageStructure;
    }
    public get messageStructure(): string | undefined {
        return this['message_structure'];
    }
    public withMessageTemplateName(messageTemplateName: string): PublishMessageRequestBody {
        this['message_template_name'] = messageTemplateName;
        return this;
    }
    public set messageTemplateName(messageTemplateName: string  | undefined) {
        this['message_template_name'] = messageTemplateName;
    }
    public get messageTemplateName(): string | undefined {
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
    public set timeToLive(timeToLive: string  | undefined) {
        this['time_to_live'] = timeToLive;
    }
    public get timeToLive(): string | undefined {
        return this['time_to_live'];
    }
    public withMessageAttributes(messageAttributes: Array<MessageAttribute>): PublishMessageRequestBody {
        this['message_attributes'] = messageAttributes;
        return this;
    }
    public set messageAttributes(messageAttributes: Array<MessageAttribute>  | undefined) {
        this['message_attributes'] = messageAttributes;
    }
    public get messageAttributes(): Array<MessageAttribute> | undefined {
        return this['message_attributes'];
    }
}