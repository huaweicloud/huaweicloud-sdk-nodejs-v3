

export class AlgorithmResponseMetadata {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'workspace_id'?: string;
    private 'ai_project'?: string;
    private 'user_name'?: string;
    private 'domain_id'?: string;
    public source?: string;
    private 'api_version'?: string;
    private 'is_valid'?: boolean;
    public state?: string;
    public tags?: Array<{ [key: string]: string; }>;
    private 'attr_list'?: Array<string>;
    private 'version_num'?: number;
    public size?: number;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withId(id: string): AlgorithmResponseMetadata {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AlgorithmResponseMetadata {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AlgorithmResponseMetadata {
        this['description'] = description;
        return this;
    }
    public withWorkspaceId(workspaceId: string): AlgorithmResponseMetadata {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAiProject(aiProject: string): AlgorithmResponseMetadata {
        this['ai_project'] = aiProject;
        return this;
    }
    public set aiProject(aiProject: string  | undefined) {
        this['ai_project'] = aiProject;
    }
    public get aiProject(): string | undefined {
        return this['ai_project'];
    }
    public withUserName(userName: string): AlgorithmResponseMetadata {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDomainId(domainId: string): AlgorithmResponseMetadata {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withSource(source: string): AlgorithmResponseMetadata {
        this['source'] = source;
        return this;
    }
    public withApiVersion(apiVersion: string): AlgorithmResponseMetadata {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withIsValid(isValid: boolean): AlgorithmResponseMetadata {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
    public withState(state: string): AlgorithmResponseMetadata {
        this['state'] = state;
        return this;
    }
    public withTags(tags: Array<{ [key: string]: string; }>): AlgorithmResponseMetadata {
        this['tags'] = tags;
        return this;
    }
    public withAttrList(attrList: Array<string>): AlgorithmResponseMetadata {
        this['attr_list'] = attrList;
        return this;
    }
    public set attrList(attrList: Array<string>  | undefined) {
        this['attr_list'] = attrList;
    }
    public get attrList(): Array<string> | undefined {
        return this['attr_list'];
    }
    public withVersionNum(versionNum: number): AlgorithmResponseMetadata {
        this['version_num'] = versionNum;
        return this;
    }
    public set versionNum(versionNum: number  | undefined) {
        this['version_num'] = versionNum;
    }
    public get versionNum(): number | undefined {
        return this['version_num'];
    }
    public withSize(size: number): AlgorithmResponseMetadata {
        this['size'] = size;
        return this;
    }
    public withCreateTime(createTime: number): AlgorithmResponseMetadata {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): AlgorithmResponseMetadata {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}