

export class TrackerSMNChannelConfigBody {
    private 'region_id'?: string;
    private 'project_id'?: string;
    private 'topic_urn'?: string;
    public constructor(regionId?: string, projectId?: string, topicUrn?: string) { 
        this['region_id'] = regionId;
        this['project_id'] = projectId;
        this['topic_urn'] = topicUrn;
    }
    public withRegionId(regionId: string): TrackerSMNChannelConfigBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): TrackerSMNChannelConfigBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTopicUrn(topicUrn: string): TrackerSMNChannelConfigBody {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
}