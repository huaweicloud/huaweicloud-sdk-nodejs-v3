

export class PrivilegeProjectInfoV5 {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'project_id'?: string;
    private 'created_time'?: string;
    private 'repository_num'?: number;
    public total?: number;
    private 'repository_id'?: string;
    public region?: string;
    private 'domain_id'?: string;
    public ids?: Array<string>;
    private 'total_records'?: number;
    public associated?: boolean;
    private 'project_info'?: Array<PrivilegeProjectInfoV5>;
    public constructor() { 
    }
    public withId(id: string): PrivilegeProjectInfoV5 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PrivilegeProjectInfoV5 {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): PrivilegeProjectInfoV5 {
        this['status'] = status;
        return this;
    }
    public withProjectId(projectId: string): PrivilegeProjectInfoV5 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedTime(createdTime: string): PrivilegeProjectInfoV5 {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withRepositoryNum(repositoryNum: number): PrivilegeProjectInfoV5 {
        this['repository_num'] = repositoryNum;
        return this;
    }
    public set repositoryNum(repositoryNum: number  | undefined) {
        this['repository_num'] = repositoryNum;
    }
    public get repositoryNum(): number | undefined {
        return this['repository_num'];
    }
    public withTotal(total: number): PrivilegeProjectInfoV5 {
        this['total'] = total;
        return this;
    }
    public withRepositoryId(repositoryId: string): PrivilegeProjectInfoV5 {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): string | undefined {
        return this['repository_id'];
    }
    public withRegion(region: string): PrivilegeProjectInfoV5 {
        this['region'] = region;
        return this;
    }
    public withDomainId(domainId: string): PrivilegeProjectInfoV5 {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIds(ids: Array<string>): PrivilegeProjectInfoV5 {
        this['ids'] = ids;
        return this;
    }
    public withTotalRecords(totalRecords: number): PrivilegeProjectInfoV5 {
        this['total_records'] = totalRecords;
        return this;
    }
    public set totalRecords(totalRecords: number  | undefined) {
        this['total_records'] = totalRecords;
    }
    public get totalRecords(): number | undefined {
        return this['total_records'];
    }
    public withAssociated(associated: boolean): PrivilegeProjectInfoV5 {
        this['associated'] = associated;
        return this;
    }
    public withProjectInfo(projectInfo: Array<PrivilegeProjectInfoV5>): PrivilegeProjectInfoV5 {
        this['project_info'] = projectInfo;
        return this;
    }
    public set projectInfo(projectInfo: Array<PrivilegeProjectInfoV5>  | undefined) {
        this['project_info'] = projectInfo;
    }
    public get projectInfo(): Array<PrivilegeProjectInfoV5> | undefined {
        return this['project_info'];
    }
}