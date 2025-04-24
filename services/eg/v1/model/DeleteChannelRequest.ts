

export class DeleteChannelRequest {
    private 'channel_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(channelId?: string) { 
        this['channel_id'] = channelId;
    }
    public withChannelId(channelId: string): DeleteChannelRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteChannelRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}