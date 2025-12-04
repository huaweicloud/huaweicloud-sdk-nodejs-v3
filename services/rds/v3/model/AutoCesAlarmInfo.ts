

export class AutoCesAlarmInfo {
    public id?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'engine_name'?: string;
    private 'new_instance_default'?: boolean;
    private 'switch_status'?: string;
    private 'alarm_id'?: string;
    private 'topic_urn'?: string;
    private 'created_at'?: number;
    private 'updated_at'?: number;
    public constructor() { 
    }
    public withId(id: string): AutoCesAlarmInfo {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): AutoCesAlarmInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): AutoCesAlarmInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withUserId(userId: string): AutoCesAlarmInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): AutoCesAlarmInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withProjectId(projectId: string): AutoCesAlarmInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): AutoCesAlarmInfo {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withEngineName(engineName: string): AutoCesAlarmInfo {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withNewInstanceDefault(newInstanceDefault: boolean): AutoCesAlarmInfo {
        this['new_instance_default'] = newInstanceDefault;
        return this;
    }
    public set newInstanceDefault(newInstanceDefault: boolean  | undefined) {
        this['new_instance_default'] = newInstanceDefault;
    }
    public get newInstanceDefault(): boolean | undefined {
        return this['new_instance_default'];
    }
    public withSwitchStatus(switchStatus: string): AutoCesAlarmInfo {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): string | undefined {
        return this['switch_status'];
    }
    public withAlarmId(alarmId: string): AutoCesAlarmInfo {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withTopicUrn(topicUrn: string): AutoCesAlarmInfo {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withCreatedAt(createdAt: number): AutoCesAlarmInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: number): AutoCesAlarmInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
}