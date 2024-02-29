

export class ActionSmnForwarding {
    private 'region_name'?: string;
    private 'project_id'?: string;
    private 'theme_name'?: string;
    private 'topic_urn'?: string;
    private 'message_content'?: string;
    private 'message_template_name'?: string;
    private 'message_title'?: string;
    public constructor(regionName?: string, projectId?: string, themeName?: string, topicUrn?: string, messageTitle?: string) { 
        this['region_name'] = regionName;
        this['project_id'] = projectId;
        this['theme_name'] = themeName;
        this['topic_urn'] = topicUrn;
        this['message_title'] = messageTitle;
    }
    public withRegionName(regionName: string): ActionSmnForwarding {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withProjectId(projectId: string): ActionSmnForwarding {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withThemeName(themeName: string): ActionSmnForwarding {
        this['theme_name'] = themeName;
        return this;
    }
    public set themeName(themeName: string  | undefined) {
        this['theme_name'] = themeName;
    }
    public get themeName(): string | undefined {
        return this['theme_name'];
    }
    public withTopicUrn(topicUrn: string): ActionSmnForwarding {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withMessageContent(messageContent: string): ActionSmnForwarding {
        this['message_content'] = messageContent;
        return this;
    }
    public set messageContent(messageContent: string  | undefined) {
        this['message_content'] = messageContent;
    }
    public get messageContent(): string | undefined {
        return this['message_content'];
    }
    public withMessageTemplateName(messageTemplateName: string): ActionSmnForwarding {
        this['message_template_name'] = messageTemplateName;
        return this;
    }
    public set messageTemplateName(messageTemplateName: string  | undefined) {
        this['message_template_name'] = messageTemplateName;
    }
    public get messageTemplateName(): string | undefined {
        return this['message_template_name'];
    }
    public withMessageTitle(messageTitle: string): ActionSmnForwarding {
        this['message_title'] = messageTitle;
        return this;
    }
    public set messageTitle(messageTitle: string  | undefined) {
        this['message_title'] = messageTitle;
    }
    public get messageTitle(): string | undefined {
        return this['message_title'];
    }
}