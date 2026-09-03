

export class SubscribeInstanceReportNewRequestBody {
    public protocol?: string;
    public endpoint?: string;
    public topic?: string;
    private 'topic_urn'?: string;
    private 'bucket_name'?: string;
    public level?: string;
    private 'service_uri'?: string;
    public constructor(protocol?: string, endpoint?: string, topic?: string, topicUrn?: string, level?: string, serviceUri?: string) { 
        this['protocol'] = protocol;
        this['endpoint'] = endpoint;
        this['topic'] = topic;
        this['topic_urn'] = topicUrn;
        this['level'] = level;
        this['service_uri'] = serviceUri;
    }
    public withProtocol(protocol: string): SubscribeInstanceReportNewRequestBody {
        this['protocol'] = protocol;
        return this;
    }
    public withEndpoint(endpoint: string): SubscribeInstanceReportNewRequestBody {
        this['endpoint'] = endpoint;
        return this;
    }
    public withTopic(topic: string): SubscribeInstanceReportNewRequestBody {
        this['topic'] = topic;
        return this;
    }
    public withTopicUrn(topicUrn: string): SubscribeInstanceReportNewRequestBody {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withBucketName(bucketName: string): SubscribeInstanceReportNewRequestBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withLevel(level: string): SubscribeInstanceReportNewRequestBody {
        this['level'] = level;
        return this;
    }
    public withServiceUri(serviceUri: string): SubscribeInstanceReportNewRequestBody {
        this['service_uri'] = serviceUri;
        return this;
    }
    public set serviceUri(serviceUri: string  | undefined) {
        this['service_uri'] = serviceUri;
    }
    public get serviceUri(): string | undefined {
        return this['service_uri'];
    }
}