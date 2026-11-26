

export class ApproverListApprovers {
    public id?: string;
    public email?: string;
    public department?: string;
    public description?: string;
    public character?: string;
    private 'approver_name'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'phone_number'?: string;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'app_name'?: string;
    private 'topic_urn'?: string;
    private 'template_id'?: string;
    private 'project_id'?: string;
    private 'approver_type'?: number;
    public constructor() { 
    }
    public withId(id: string): ApproverListApprovers {
        this['id'] = id;
        return this;
    }
    public withEmail(email: string): ApproverListApprovers {
        this['email'] = email;
        return this;
    }
    public withDepartment(department: string): ApproverListApprovers {
        this['department'] = department;
        return this;
    }
    public withDescription(description: string): ApproverListApprovers {
        this['description'] = description;
        return this;
    }
    public withCharacter(character: string): ApproverListApprovers {
        this['character'] = character;
        return this;
    }
    public withApproverName(approverName: string): ApproverListApprovers {
        this['approver_name'] = approverName;
        return this;
    }
    public set approverName(approverName: string  | undefined) {
        this['approver_name'] = approverName;
    }
    public get approverName(): string | undefined {
        return this['approver_name'];
    }
    public withUserId(userId: string): ApproverListApprovers {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ApproverListApprovers {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPhoneNumber(phoneNumber: string): ApproverListApprovers {
        this['phone_number'] = phoneNumber;
        return this;
    }
    public set phoneNumber(phoneNumber: string  | undefined) {
        this['phone_number'] = phoneNumber;
    }
    public get phoneNumber(): string | undefined {
        return this['phone_number'];
    }
    public withCreateBy(createBy: string): ApproverListApprovers {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): ApproverListApprovers {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withAppName(appName: string): ApproverListApprovers {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withTopicUrn(topicUrn: string): ApproverListApprovers {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withTemplateId(templateId: string): ApproverListApprovers {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withProjectId(projectId: string): ApproverListApprovers {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withApproverType(approverType: number): ApproverListApprovers {
        this['approver_type'] = approverType;
        return this;
    }
    public set approverType(approverType: number  | undefined) {
        this['approver_type'] = approverType;
    }
    public get approverType(): number | undefined {
        return this['approver_type'];
    }
}