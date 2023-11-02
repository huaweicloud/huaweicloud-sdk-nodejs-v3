

export class Workspacebody {
    private 'bad_record_location_name'?: string;
    public description?: string;
    private 'eps_id'?: string;
    private 'job_log_location_name'?: string;
    public name?: string;
    public id?: string;
    private 'is_default'?: number;
    private 'owner_name'?: string;
    private 'project_id'?: string;
    private 'domain_id'?: string;
    private 'instance_id'?: string;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'member_num'?: number;
    private 'update_time'?: number;
    private 'update_user'?: string;
    public constructor() { 
    }
    public withBadRecordLocationName(badRecordLocationName: string): Workspacebody {
        this['bad_record_location_name'] = badRecordLocationName;
        return this;
    }
    public set badRecordLocationName(badRecordLocationName: string  | undefined) {
        this['bad_record_location_name'] = badRecordLocationName;
    }
    public get badRecordLocationName(): string | undefined {
        return this['bad_record_location_name'];
    }
    public withDescription(description: string): Workspacebody {
        this['description'] = description;
        return this;
    }
    public withEpsId(epsId: string): Workspacebody {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withJobLogLocationName(jobLogLocationName: string): Workspacebody {
        this['job_log_location_name'] = jobLogLocationName;
        return this;
    }
    public set jobLogLocationName(jobLogLocationName: string  | undefined) {
        this['job_log_location_name'] = jobLogLocationName;
    }
    public get jobLogLocationName(): string | undefined {
        return this['job_log_location_name'];
    }
    public withName(name: string): Workspacebody {
        this['name'] = name;
        return this;
    }
    public withId(id: string): Workspacebody {
        this['id'] = id;
        return this;
    }
    public withIsDefault(isDefault: number): Workspacebody {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: number  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): number | undefined {
        return this['is_default'];
    }
    public withOwnerName(ownerName: string): Workspacebody {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withProjectId(projectId: string): Workspacebody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): Workspacebody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withInstanceId(instanceId: string): Workspacebody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCreateTime(createTime: number): Workspacebody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): Workspacebody {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withMemberNum(memberNum: number): Workspacebody {
        this['member_num'] = memberNum;
        return this;
    }
    public set memberNum(memberNum: number  | undefined) {
        this['member_num'] = memberNum;
    }
    public get memberNum(): number | undefined {
        return this['member_num'];
    }
    public withUpdateTime(updateTime: number): Workspacebody {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): Workspacebody {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
}