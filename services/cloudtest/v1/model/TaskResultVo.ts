

export class TaskResultVo {
    public uri?: string;
    public name?: string;
    private 'task_uri'?: string;
    public description?: string;
    public owner?: string;
    private 'owner_name'?: string;
    private 'release_dev'?: string;
    private 'version_uri'?: string;
    public creator?: string;
    private 'creator_name'?: string;
    private 'create_time'?: string;
    public updator?: string;
    private 'updator_name'?: string;
    private 'update_time'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'result_name'?: string;
    private 'project_uuid'?: string;
    public constructor() { 
    }
    public withUri(uri: string): TaskResultVo {
        this['uri'] = uri;
        return this;
    }
    public withName(name: string): TaskResultVo {
        this['name'] = name;
        return this;
    }
    public withTaskUri(taskUri: string): TaskResultVo {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withDescription(description: string): TaskResultVo {
        this['description'] = description;
        return this;
    }
    public withOwner(owner: string): TaskResultVo {
        this['owner'] = owner;
        return this;
    }
    public withOwnerName(ownerName: string): TaskResultVo {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withReleaseDev(releaseDev: string): TaskResultVo {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withVersionUri(versionUri: string): TaskResultVo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withCreator(creator: string): TaskResultVo {
        this['creator'] = creator;
        return this;
    }
    public withCreatorName(creatorName: string): TaskResultVo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreateTime(createTime: string): TaskResultVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdator(updator: string): TaskResultVo {
        this['updator'] = updator;
        return this;
    }
    public withUpdatorName(updatorName: string): TaskResultVo {
        this['updator_name'] = updatorName;
        return this;
    }
    public set updatorName(updatorName: string  | undefined) {
        this['updator_name'] = updatorName;
    }
    public get updatorName(): string | undefined {
        return this['updator_name'];
    }
    public withUpdateTime(updateTime: string): TaskResultVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withStartTime(startTime: string): TaskResultVo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TaskResultVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withResultName(resultName: string): TaskResultVo {
        this['result_name'] = resultName;
        return this;
    }
    public set resultName(resultName: string  | undefined) {
        this['result_name'] = resultName;
    }
    public get resultName(): string | undefined {
        return this['result_name'];
    }
    public withProjectUuid(projectUuid: string): TaskResultVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
}