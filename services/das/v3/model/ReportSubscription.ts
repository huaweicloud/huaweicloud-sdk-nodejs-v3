

export class ReportSubscription {
    private 'subscribe_id'?: string;
    private 'instance_id'?: string;
    private 'project_id'?: string;
    public protocol?: string;
    public endpoint?: string;
    public topic?: string;
    private 'topic_urn'?: string;
    private 'obs_bucket_name'?: string;
    public level?: string;
    public locale?: string;
    public extra?: object;
    public constructor() { 
    }
    public withSubscribeId(subscribeId: string): ReportSubscription {
        this['subscribe_id'] = subscribeId;
        return this;
    }
    public set subscribeId(subscribeId: string  | undefined) {
        this['subscribe_id'] = subscribeId;
    }
    public get subscribeId(): string | undefined {
        return this['subscribe_id'];
    }
    public withInstanceId(instanceId: string): ReportSubscription {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): ReportSubscription {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProtocol(protocol: string): ReportSubscription {
        this['protocol'] = protocol;
        return this;
    }
    public withEndpoint(endpoint: string): ReportSubscription {
        this['endpoint'] = endpoint;
        return this;
    }
    public withTopic(topic: string): ReportSubscription {
        this['topic'] = topic;
        return this;
    }
    public withTopicUrn(topicUrn: string): ReportSubscription {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withObsBucketName(obsBucketName: string): ReportSubscription {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withLevel(level: string): ReportSubscription {
        this['level'] = level;
        return this;
    }
    public withLocale(locale: string): ReportSubscription {
        this['locale'] = locale;
        return this;
    }
    public withExtra(extra: object): ReportSubscription {
        this['extra'] = extra;
        return this;
    }
}