

export class MessageTemplate {
    private 'message_template_id': string | undefined;
    private 'message_template_name': string | undefined;
    public protocol: string;
    private 'tag_names': Array<string> | undefined;
    private 'create_time': string | undefined;
    private 'update_time': string | undefined;
    public constructor(messageTemplateId?: any, messageTemplateName?: any, protocol?: any, tagNames?: any, createTime?: any, updateTime?: any) { 
        this['message_template_id'] = messageTemplateId;
        this['message_template_name'] = messageTemplateName;
        this['protocol'] = protocol;
        this['tag_names'] = tagNames;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
    }
    public withMessageTemplateId(messageTemplateId: string): MessageTemplate {
        this['message_template_id'] = messageTemplateId;
        return this;
    }
    public set messageTemplateId(messageTemplateId: string | undefined) {
        this['message_template_id'] = messageTemplateId;
    }
    public get messageTemplateId() {
        return this['message_template_id'];
    }
    public withMessageTemplateName(messageTemplateName: string): MessageTemplate {
        this['message_template_name'] = messageTemplateName;
        return this;
    }
    public set messageTemplateName(messageTemplateName: string | undefined) {
        this['message_template_name'] = messageTemplateName;
    }
    public get messageTemplateName() {
        return this['message_template_name'];
    }
    public withProtocol(protocol: string): MessageTemplate {
        this['protocol'] = protocol;
        return this;
    }
    public withTagNames(tagNames: Array<string>): MessageTemplate {
        this['tag_names'] = tagNames;
        return this;
    }
    public set tagNames(tagNames: Array<string> | undefined) {
        this['tag_names'] = tagNames;
    }
    public get tagNames() {
        return this['tag_names'];
    }
    public withCreateTime(createTime: string): MessageTemplate {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): MessageTemplate {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}