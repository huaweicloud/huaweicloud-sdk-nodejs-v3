

export class AddEmailTemplateRequestBody {
    private 'datastore_type'?: string;
    private 'template_name'?: string;
    private 'group_id'?: Array<number>;
    private 'health_rank'?: Array<string>;
    public email?: string;
    public topic?: string;
    private 'topic_urn'?: string;
    private 'obs_bucket_name'?: string;
    private 'inspection_time'?: string;
    private 'send_time'?: string;
    private 'time_zone'?: string;
    public constructor(datastoreType?: string, templateName?: string, groupId?: Array<number>, healthRank?: Array<string>, inspectionTime?: string, sendTime?: string, timeZone?: string) { 
        this['datastore_type'] = datastoreType;
        this['template_name'] = templateName;
        this['group_id'] = groupId;
        this['health_rank'] = healthRank;
        this['inspection_time'] = inspectionTime;
        this['send_time'] = sendTime;
        this['time_zone'] = timeZone;
    }
    public withDatastoreType(datastoreType: string): AddEmailTemplateRequestBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withTemplateName(templateName: string): AddEmailTemplateRequestBody {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withGroupId(groupId: Array<number>): AddEmailTemplateRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: Array<number>  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): Array<number> | undefined {
        return this['group_id'];
    }
    public withHealthRank(healthRank: Array<string>): AddEmailTemplateRequestBody {
        this['health_rank'] = healthRank;
        return this;
    }
    public set healthRank(healthRank: Array<string>  | undefined) {
        this['health_rank'] = healthRank;
    }
    public get healthRank(): Array<string> | undefined {
        return this['health_rank'];
    }
    public withEmail(email: string): AddEmailTemplateRequestBody {
        this['email'] = email;
        return this;
    }
    public withTopic(topic: string): AddEmailTemplateRequestBody {
        this['topic'] = topic;
        return this;
    }
    public withTopicUrn(topicUrn: string): AddEmailTemplateRequestBody {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withObsBucketName(obsBucketName: string): AddEmailTemplateRequestBody {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withInspectionTime(inspectionTime: string): AddEmailTemplateRequestBody {
        this['inspection_time'] = inspectionTime;
        return this;
    }
    public set inspectionTime(inspectionTime: string  | undefined) {
        this['inspection_time'] = inspectionTime;
    }
    public get inspectionTime(): string | undefined {
        return this['inspection_time'];
    }
    public withSendTime(sendTime: string): AddEmailTemplateRequestBody {
        this['send_time'] = sendTime;
        return this;
    }
    public set sendTime(sendTime: string  | undefined) {
        this['send_time'] = sendTime;
    }
    public get sendTime(): string | undefined {
        return this['send_time'];
    }
    public withTimeZone(timeZone: string): AddEmailTemplateRequestBody {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}