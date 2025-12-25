

export class ModuleDetailInfo {
    private 'cloud_pack_id'?: string;
    private 'cloud_pack_name'?: string;
    private 'cloud_pack_version'?: string;
    private 'create_time'?: string;
    private 'creator_id'?: string;
    public description?: string;
    private 'en_description'?: string;
    public id?: string;
    private 'module_json'?: string;
    public name?: string;
    private 'en_name'?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'update_time'?: string;
    public thumbnail?: string;
    private 'module_type'?: string;
    public tag?: string;
    private 'is_built_in'?: boolean;
    private 'data_query'?: string;
    private 'boa_version'?: string;
    public version?: string;
    public constructor() { 
    }
    public withCloudPackId(cloudPackId: string): ModuleDetailInfo {
        this['cloud_pack_id'] = cloudPackId;
        return this;
    }
    public set cloudPackId(cloudPackId: string  | undefined) {
        this['cloud_pack_id'] = cloudPackId;
    }
    public get cloudPackId(): string | undefined {
        return this['cloud_pack_id'];
    }
    public withCloudPackName(cloudPackName: string): ModuleDetailInfo {
        this['cloud_pack_name'] = cloudPackName;
        return this;
    }
    public set cloudPackName(cloudPackName: string  | undefined) {
        this['cloud_pack_name'] = cloudPackName;
    }
    public get cloudPackName(): string | undefined {
        return this['cloud_pack_name'];
    }
    public withCloudPackVersion(cloudPackVersion: string): ModuleDetailInfo {
        this['cloud_pack_version'] = cloudPackVersion;
        return this;
    }
    public set cloudPackVersion(cloudPackVersion: string  | undefined) {
        this['cloud_pack_version'] = cloudPackVersion;
    }
    public get cloudPackVersion(): string | undefined {
        return this['cloud_pack_version'];
    }
    public withCreateTime(createTime: string): ModuleDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): ModuleDetailInfo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withDescription(description: string): ModuleDetailInfo {
        this['description'] = description;
        return this;
    }
    public withEnDescription(enDescription: string): ModuleDetailInfo {
        this['en_description'] = enDescription;
        return this;
    }
    public set enDescription(enDescription: string  | undefined) {
        this['en_description'] = enDescription;
    }
    public get enDescription(): string | undefined {
        return this['en_description'];
    }
    public withId(id: string): ModuleDetailInfo {
        this['id'] = id;
        return this;
    }
    public withModuleJson(moduleJson: string): ModuleDetailInfo {
        this['module_json'] = moduleJson;
        return this;
    }
    public set moduleJson(moduleJson: string  | undefined) {
        this['module_json'] = moduleJson;
    }
    public get moduleJson(): string | undefined {
        return this['module_json'];
    }
    public withName(name: string): ModuleDetailInfo {
        this['name'] = name;
        return this;
    }
    public withEnName(enName: string): ModuleDetailInfo {
        this['en_name'] = enName;
        return this;
    }
    public set enName(enName: string  | undefined) {
        this['en_name'] = enName;
    }
    public get enName(): string | undefined {
        return this['en_name'];
    }
    public withProjectId(projectId: string): ModuleDetailInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): ModuleDetailInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withUpdateTime(updateTime: string): ModuleDetailInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withThumbnail(thumbnail: string): ModuleDetailInfo {
        this['thumbnail'] = thumbnail;
        return this;
    }
    public withModuleType(moduleType: string): ModuleDetailInfo {
        this['module_type'] = moduleType;
        return this;
    }
    public set moduleType(moduleType: string  | undefined) {
        this['module_type'] = moduleType;
    }
    public get moduleType(): string | undefined {
        return this['module_type'];
    }
    public withTag(tag: string): ModuleDetailInfo {
        this['tag'] = tag;
        return this;
    }
    public withIsBuiltIn(isBuiltIn: boolean): ModuleDetailInfo {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withDataQuery(dataQuery: string): ModuleDetailInfo {
        this['data_query'] = dataQuery;
        return this;
    }
    public set dataQuery(dataQuery: string  | undefined) {
        this['data_query'] = dataQuery;
    }
    public get dataQuery(): string | undefined {
        return this['data_query'];
    }
    public withBoaVersion(boaVersion: string): ModuleDetailInfo {
        this['boa_version'] = boaVersion;
        return this;
    }
    public set boaVersion(boaVersion: string  | undefined) {
        this['boa_version'] = boaVersion;
    }
    public get boaVersion(): string | undefined {
        return this['boa_version'];
    }
    public withVersion(version: string): ModuleDetailInfo {
        this['version'] = version;
        return this;
    }
}