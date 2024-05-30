

export class ApproverVO {
    public id?: string;
    private 'approver_name'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    public email?: string;
    private 'user_type'?: ApproverVOUserTypeEnum | string;
    private 'phone_number'?: string;
    private 'create_by'?: string;
    private 'create_time'?: string;
    private 'app_name'?: string;
    private 'topic_urn'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ApproverVO {
        this['id'] = id;
        return this;
    }
    public withApproverName(approverName: string): ApproverVO {
        this['approver_name'] = approverName;
        return this;
    }
    public set approverName(approverName: string  | undefined) {
        this['approver_name'] = approverName;
    }
    public get approverName(): string | undefined {
        return this['approver_name'];
    }
    public withUserId(userId: string): ApproverVO {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ApproverVO {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withEmail(email: string): ApproverVO {
        this['email'] = email;
        return this;
    }
    public withUserType(userType: ApproverVOUserTypeEnum | string): ApproverVO {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: ApproverVOUserTypeEnum | string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): ApproverVOUserTypeEnum | string | undefined {
        return this['user_type'];
    }
    public withPhoneNumber(phoneNumber: string): ApproverVO {
        this['phone_number'] = phoneNumber;
        return this;
    }
    public set phoneNumber(phoneNumber: string  | undefined) {
        this['phone_number'] = phoneNumber;
    }
    public get phoneNumber(): string | undefined {
        return this['phone_number'];
    }
    public withCreateBy(createBy: string): ApproverVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: string): ApproverVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withAppName(appName: string): ApproverVO {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withTopicUrn(topicUrn: string): ApproverVO {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withProjectId(projectId: string): ApproverVO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApproverVOUserTypeEnum {
    BIZ_METRIC_OWNER = 'BIZ_METRIC_OWNER',
    APPROVER = 'APPROVER',
    BIZ_METRIC_OWNER_AND_APPROVER = 'BIZ_METRIC_OWNER_AND_APPROVER'
}
