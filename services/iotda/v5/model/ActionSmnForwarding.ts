

export class ActionSmnForwarding {
    private 'region_name': string | undefined;
    private 'project_id': string | undefined;
    private 'theme_name': string | undefined;
    private 'topic_urn': string | undefined;
    private 'message_content': string | undefined;
    private 'message_title': string | undefined;
    public constructor(regionName?: any, projectId?: any, themeName?: any, topicUrn?: any, messageContent?: any, messageTitle?: any) { 
        this['region_name'] = regionName;
        this['project_id'] = projectId;
        this['theme_name'] = themeName;
        this['topic_urn'] = topicUrn;
        this['message_content'] = messageContent;
        this['message_title'] = messageTitle;
    }
    public withRegionName(regionName: string): ActionSmnForwarding {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName() {
        return this['region_name'];
    }
    public withProjectId(projectId: string): ActionSmnForwarding {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withThemeName(themeName: string): ActionSmnForwarding {
        this['theme_name'] = themeName;
        return this;
    }
    public set themeName(themeName: string | undefined) {
        this['theme_name'] = themeName;
    }
    public get themeName() {
        return this['theme_name'];
    }
    public withTopicUrn(topicUrn: string): ActionSmnForwarding {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
        return this['topic_urn'];
    }
    public withMessageContent(messageContent: string): ActionSmnForwarding {
        this['message_content'] = messageContent;
        return this;
    }
    public set messageContent(messageContent: string | undefined) {
        this['message_content'] = messageContent;
    }
    public get messageContent() {
        return this['message_content'];
    }
    public withMessageTitle(messageTitle: string): ActionSmnForwarding {
        this['message_title'] = messageTitle;
        return this;
    }
    public set messageTitle(messageTitle: string | undefined) {
        this['message_title'] = messageTitle;
    }
    public get messageTitle() {
        return this['message_title'];
    }
}