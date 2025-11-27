

export class BatchSendEmailRequestBody {
    private 'task_id_list'?: Array<string>;
    public email?: string;
    public topic?: string;
    private 'topic_urn'?: string;
    private 'obs_bucket_name'?: string;
    private 'service_uri'?: string;
    public constructor(taskIdList?: Array<string>) { 
        this['task_id_list'] = taskIdList;
    }
    public withTaskIdList(taskIdList: Array<string>): BatchSendEmailRequestBody {
        this['task_id_list'] = taskIdList;
        return this;
    }
    public set taskIdList(taskIdList: Array<string>  | undefined) {
        this['task_id_list'] = taskIdList;
    }
    public get taskIdList(): Array<string> | undefined {
        return this['task_id_list'];
    }
    public withEmail(email: string): BatchSendEmailRequestBody {
        this['email'] = email;
        return this;
    }
    public withTopic(topic: string): BatchSendEmailRequestBody {
        this['topic'] = topic;
        return this;
    }
    public withTopicUrn(topicUrn: string): BatchSendEmailRequestBody {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withObsBucketName(obsBucketName: string): BatchSendEmailRequestBody {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withServiceUri(serviceUri: string): BatchSendEmailRequestBody {
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