

export class CategoryInfo {
    public guid?: string;
    public name?: string;
    public description?: string;
    public code?: string;
    public path?: string;
    public alias?: string;
    public level?: string;
    public ordinal?: number;
    private 'name_eng'?: string;
    private 'qualified_name'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'business_meaning'?: string;
    private 'parent_guid'?: string;
    public department?: string;
    private 'data_owner'?: string;
    private 'data_steward'?: string;
    public database?: Array<string>;
    private 'obs_bucket'?: string;
    private 'obs_encrypt_bucket'?: string;
    public workspace?: Array<string>;
    public children?: Array<CategoryInfo>;
    public constructor() { 
    }
    public withGuid(guid: string): CategoryInfo {
        this['guid'] = guid;
        return this;
    }
    public withName(name: string): CategoryInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CategoryInfo {
        this['description'] = description;
        return this;
    }
    public withCode(code: string): CategoryInfo {
        this['code'] = code;
        return this;
    }
    public withPath(path: string): CategoryInfo {
        this['path'] = path;
        return this;
    }
    public withAlias(alias: string): CategoryInfo {
        this['alias'] = alias;
        return this;
    }
    public withLevel(level: string): CategoryInfo {
        this['level'] = level;
        return this;
    }
    public withOrdinal(ordinal: number): CategoryInfo {
        this['ordinal'] = ordinal;
        return this;
    }
    public withNameEng(nameEng: string): CategoryInfo {
        this['name_eng'] = nameEng;
        return this;
    }
    public set nameEng(nameEng: string  | undefined) {
        this['name_eng'] = nameEng;
    }
    public get nameEng(): string | undefined {
        return this['name_eng'];
    }
    public withQualifiedName(qualifiedName: string): CategoryInfo {
        this['qualified_name'] = qualifiedName;
        return this;
    }
    public set qualifiedName(qualifiedName: string  | undefined) {
        this['qualified_name'] = qualifiedName;
    }
    public get qualifiedName(): string | undefined {
        return this['qualified_name'];
    }
    public withCreateTime(createTime: number): CategoryInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): CategoryInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withBusinessMeaning(businessMeaning: string): CategoryInfo {
        this['business_meaning'] = businessMeaning;
        return this;
    }
    public set businessMeaning(businessMeaning: string  | undefined) {
        this['business_meaning'] = businessMeaning;
    }
    public get businessMeaning(): string | undefined {
        return this['business_meaning'];
    }
    public withParentGuid(parentGuid: string): CategoryInfo {
        this['parent_guid'] = parentGuid;
        return this;
    }
    public set parentGuid(parentGuid: string  | undefined) {
        this['parent_guid'] = parentGuid;
    }
    public get parentGuid(): string | undefined {
        return this['parent_guid'];
    }
    public withDepartment(department: string): CategoryInfo {
        this['department'] = department;
        return this;
    }
    public withDataOwner(dataOwner: string): CategoryInfo {
        this['data_owner'] = dataOwner;
        return this;
    }
    public set dataOwner(dataOwner: string  | undefined) {
        this['data_owner'] = dataOwner;
    }
    public get dataOwner(): string | undefined {
        return this['data_owner'];
    }
    public withDataSteward(dataSteward: string): CategoryInfo {
        this['data_steward'] = dataSteward;
        return this;
    }
    public set dataSteward(dataSteward: string  | undefined) {
        this['data_steward'] = dataSteward;
    }
    public get dataSteward(): string | undefined {
        return this['data_steward'];
    }
    public withDatabase(database: Array<string>): CategoryInfo {
        this['database'] = database;
        return this;
    }
    public withObsBucket(obsBucket: string): CategoryInfo {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withObsEncryptBucket(obsEncryptBucket: string): CategoryInfo {
        this['obs_encrypt_bucket'] = obsEncryptBucket;
        return this;
    }
    public set obsEncryptBucket(obsEncryptBucket: string  | undefined) {
        this['obs_encrypt_bucket'] = obsEncryptBucket;
    }
    public get obsEncryptBucket(): string | undefined {
        return this['obs_encrypt_bucket'];
    }
    public withWorkspace(workspace: Array<string>): CategoryInfo {
        this['workspace'] = workspace;
        return this;
    }
    public withChildren(children: Array<CategoryInfo>): CategoryInfo {
        this['children'] = children;
        return this;
    }
}