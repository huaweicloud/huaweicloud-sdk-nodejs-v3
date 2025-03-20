

export class AlarmInfoDTO {
    public id?: string;
    public name?: string;
    public importance?: string;
    private 'come_from'?: string;
    private 'come_from_en'?: string;
    private 'transfer_rule'?: string;
    private 'transfer_rule_name'?: string;
    public app?: string;
    public status?: string;
    public owner?: string;
    private 'owner_name'?: string;
    private 'owner_alias'?: string;
    private 'converge_count'?: number;
    private 'associate_event_id'?: string;
    private 'domain_id'?: string;
    public creator?: string;
    private 'creator_name'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public remarks?: string;
    public region?: string;
    private 'task_type'?: string;
    private 'associated_task_type'?: string;
    private 'associated_task_id'?: string;
    private 'associated_task_name'?: string;
    public constructor() { 
    }
    public withId(id: string): AlarmInfoDTO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AlarmInfoDTO {
        this['name'] = name;
        return this;
    }
    public withImportance(importance: string): AlarmInfoDTO {
        this['importance'] = importance;
        return this;
    }
    public withComeFrom(comeFrom: string): AlarmInfoDTO {
        this['come_from'] = comeFrom;
        return this;
    }
    public set comeFrom(comeFrom: string  | undefined) {
        this['come_from'] = comeFrom;
    }
    public get comeFrom(): string | undefined {
        return this['come_from'];
    }
    public withComeFromEn(comeFromEn: string): AlarmInfoDTO {
        this['come_from_en'] = comeFromEn;
        return this;
    }
    public set comeFromEn(comeFromEn: string  | undefined) {
        this['come_from_en'] = comeFromEn;
    }
    public get comeFromEn(): string | undefined {
        return this['come_from_en'];
    }
    public withTransferRule(transferRule: string): AlarmInfoDTO {
        this['transfer_rule'] = transferRule;
        return this;
    }
    public set transferRule(transferRule: string  | undefined) {
        this['transfer_rule'] = transferRule;
    }
    public get transferRule(): string | undefined {
        return this['transfer_rule'];
    }
    public withTransferRuleName(transferRuleName: string): AlarmInfoDTO {
        this['transfer_rule_name'] = transferRuleName;
        return this;
    }
    public set transferRuleName(transferRuleName: string  | undefined) {
        this['transfer_rule_name'] = transferRuleName;
    }
    public get transferRuleName(): string | undefined {
        return this['transfer_rule_name'];
    }
    public withApp(app: string): AlarmInfoDTO {
        this['app'] = app;
        return this;
    }
    public withStatus(status: string): AlarmInfoDTO {
        this['status'] = status;
        return this;
    }
    public withOwner(owner: string): AlarmInfoDTO {
        this['owner'] = owner;
        return this;
    }
    public withOwnerName(ownerName: string): AlarmInfoDTO {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withOwnerAlias(ownerAlias: string): AlarmInfoDTO {
        this['owner_alias'] = ownerAlias;
        return this;
    }
    public set ownerAlias(ownerAlias: string  | undefined) {
        this['owner_alias'] = ownerAlias;
    }
    public get ownerAlias(): string | undefined {
        return this['owner_alias'];
    }
    public withConvergeCount(convergeCount: number): AlarmInfoDTO {
        this['converge_count'] = convergeCount;
        return this;
    }
    public set convergeCount(convergeCount: number  | undefined) {
        this['converge_count'] = convergeCount;
    }
    public get convergeCount(): number | undefined {
        return this['converge_count'];
    }
    public withAssociateEventId(associateEventId: string): AlarmInfoDTO {
        this['associate_event_id'] = associateEventId;
        return this;
    }
    public set associateEventId(associateEventId: string  | undefined) {
        this['associate_event_id'] = associateEventId;
    }
    public get associateEventId(): string | undefined {
        return this['associate_event_id'];
    }
    public withDomainId(domainId: string): AlarmInfoDTO {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCreator(creator: string): AlarmInfoDTO {
        this['creator'] = creator;
        return this;
    }
    public withCreatorName(creatorName: string): AlarmInfoDTO {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreateTime(createTime: number): AlarmInfoDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): AlarmInfoDTO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withRemarks(remarks: string): AlarmInfoDTO {
        this['remarks'] = remarks;
        return this;
    }
    public withRegion(region: string): AlarmInfoDTO {
        this['region'] = region;
        return this;
    }
    public withTaskType(taskType: string): AlarmInfoDTO {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withAssociatedTaskType(associatedTaskType: string): AlarmInfoDTO {
        this['associated_task_type'] = associatedTaskType;
        return this;
    }
    public set associatedTaskType(associatedTaskType: string  | undefined) {
        this['associated_task_type'] = associatedTaskType;
    }
    public get associatedTaskType(): string | undefined {
        return this['associated_task_type'];
    }
    public withAssociatedTaskId(associatedTaskId: string): AlarmInfoDTO {
        this['associated_task_id'] = associatedTaskId;
        return this;
    }
    public set associatedTaskId(associatedTaskId: string  | undefined) {
        this['associated_task_id'] = associatedTaskId;
    }
    public get associatedTaskId(): string | undefined {
        return this['associated_task_id'];
    }
    public withAssociatedTaskName(associatedTaskName: string): AlarmInfoDTO {
        this['associated_task_name'] = associatedTaskName;
        return this;
    }
    public set associatedTaskName(associatedTaskName: string  | undefined) {
        this['associated_task_name'] = associatedTaskName;
    }
    public get associatedTaskName(): string | undefined {
        return this['associated_task_name'];
    }
}