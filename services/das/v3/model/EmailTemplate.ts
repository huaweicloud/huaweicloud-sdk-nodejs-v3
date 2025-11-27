

export class EmailTemplate {
    private 'template_id'?: number;
    private 'template_name'?: string;
    private 'datastore_type'?: string;
    private 'group_id'?: Array<number>;
    private 'health_rank'?: Array<string>;
    public email?: string;
    public topic?: string;
    private 'topic_urn'?: string;
    private 'obs_bucket_name'?: string;
    private 'inspection_time'?: string;
    private 'send_time'?: string;
    private 'time_zone'?: string;
    private 'update_at'?: number;
    private 'user_id'?: string;
    public status?: number;
    public constructor(templateId?: number, templateName?: string, datastoreType?: string, groupId?: Array<number>, healthRank?: Array<string>, email?: string, topic?: string, topicUrn?: string, obsBucketName?: string, inspectionTime?: string, sendTime?: string, timeZone?: string, updateAt?: number, userId?: string, status?: number) { 
        this['template_id'] = templateId;
        this['template_name'] = templateName;
        this['datastore_type'] = datastoreType;
        this['group_id'] = groupId;
        this['health_rank'] = healthRank;
        this['email'] = email;
        this['topic'] = topic;
        this['topic_urn'] = topicUrn;
        this['obs_bucket_name'] = obsBucketName;
        this['inspection_time'] = inspectionTime;
        this['send_time'] = sendTime;
        this['time_zone'] = timeZone;
        this['update_at'] = updateAt;
        this['user_id'] = userId;
        this['status'] = status;
    }
    public withTemplateId(templateId: number): EmailTemplate {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): EmailTemplate {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withDatastoreType(datastoreType: string): EmailTemplate {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withGroupId(groupId: Array<number>): EmailTemplate {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: Array<number>  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): Array<number> | undefined {
        return this['group_id'];
    }
    public withHealthRank(healthRank: Array<string>): EmailTemplate {
        this['health_rank'] = healthRank;
        return this;
    }
    public set healthRank(healthRank: Array<string>  | undefined) {
        this['health_rank'] = healthRank;
    }
    public get healthRank(): Array<string> | undefined {
        return this['health_rank'];
    }
    public withEmail(email: string): EmailTemplate {
        this['email'] = email;
        return this;
    }
    public withTopic(topic: string): EmailTemplate {
        this['topic'] = topic;
        return this;
    }
    public withTopicUrn(topicUrn: string): EmailTemplate {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withObsBucketName(obsBucketName: string): EmailTemplate {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withInspectionTime(inspectionTime: string): EmailTemplate {
        this['inspection_time'] = inspectionTime;
        return this;
    }
    public set inspectionTime(inspectionTime: string  | undefined) {
        this['inspection_time'] = inspectionTime;
    }
    public get inspectionTime(): string | undefined {
        return this['inspection_time'];
    }
    public withSendTime(sendTime: string): EmailTemplate {
        this['send_time'] = sendTime;
        return this;
    }
    public set sendTime(sendTime: string  | undefined) {
        this['send_time'] = sendTime;
    }
    public get sendTime(): string | undefined {
        return this['send_time'];
    }
    public withTimeZone(timeZone: string): EmailTemplate {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withUpdateAt(updateAt: number): EmailTemplate {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withUserId(userId: string): EmailTemplate {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withStatus(status: number): EmailTemplate {
        this['status'] = status;
        return this;
    }
}