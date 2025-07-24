

export class TestCasePageParam {
    public offset?: number;
    public limit?: number;
    public deleted?: string;
    private 'id_collection'?: Array<string>;
    private 'mindmap_id'?: string;
    private 'node_id'?: string;
    private 'node_id_collection'?: Array<string>;
    private 'project_id'?: string;
    private 'is_archive'?: boolean;
    private 'case_name'?: string;
    private 'has_sub_mindmap'?: boolean;
    private 'sub_mindmap_id'?: Array<string>;
    public constructor() { 
    }
    public withOffset(offset: number): TestCasePageParam {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): TestCasePageParam {
        this['limit'] = limit;
        return this;
    }
    public withDeleted(deleted: string): TestCasePageParam {
        this['deleted'] = deleted;
        return this;
    }
    public withIdCollection(idCollection: Array<string>): TestCasePageParam {
        this['id_collection'] = idCollection;
        return this;
    }
    public set idCollection(idCollection: Array<string>  | undefined) {
        this['id_collection'] = idCollection;
    }
    public get idCollection(): Array<string> | undefined {
        return this['id_collection'];
    }
    public withMindmapId(mindmapId: string): TestCasePageParam {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
    public withNodeId(nodeId: string): TestCasePageParam {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeIdCollection(nodeIdCollection: Array<string>): TestCasePageParam {
        this['node_id_collection'] = nodeIdCollection;
        return this;
    }
    public set nodeIdCollection(nodeIdCollection: Array<string>  | undefined) {
        this['node_id_collection'] = nodeIdCollection;
    }
    public get nodeIdCollection(): Array<string> | undefined {
        return this['node_id_collection'];
    }
    public withProjectId(projectId: string): TestCasePageParam {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIsArchive(isArchive: boolean): TestCasePageParam {
        this['is_archive'] = isArchive;
        return this;
    }
    public set isArchive(isArchive: boolean  | undefined) {
        this['is_archive'] = isArchive;
    }
    public get isArchive(): boolean | undefined {
        return this['is_archive'];
    }
    public withCaseName(caseName: string): TestCasePageParam {
        this['case_name'] = caseName;
        return this;
    }
    public set caseName(caseName: string  | undefined) {
        this['case_name'] = caseName;
    }
    public get caseName(): string | undefined {
        return this['case_name'];
    }
    public withHasSubMindmap(hasSubMindmap: boolean): TestCasePageParam {
        this['has_sub_mindmap'] = hasSubMindmap;
        return this;
    }
    public set hasSubMindmap(hasSubMindmap: boolean  | undefined) {
        this['has_sub_mindmap'] = hasSubMindmap;
    }
    public get hasSubMindmap(): boolean | undefined {
        return this['has_sub_mindmap'];
    }
    public withSubMindmapId(subMindmapId: Array<string>): TestCasePageParam {
        this['sub_mindmap_id'] = subMindmapId;
        return this;
    }
    public set subMindmapId(subMindmapId: Array<string>  | undefined) {
        this['sub_mindmap_id'] = subMindmapId;
    }
    public get subMindmapId(): Array<string> | undefined {
        return this['sub_mindmap_id'];
    }
}