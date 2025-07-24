

export class ListFactorParam {
    public offset?: number;
    public limit?: number;
    public type?: string;
    public name?: string;
    private 'parent_node_ids'?: Array<string>;
    private 'asset_id'?: string;
    private 'creator_num'?: string;
    private 'mindmap_id'?: string;
    private 'testpoint_id'?: string;
    private 'mindmap_node_id'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListFactorParam {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFactorParam {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ListFactorParam {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ListFactorParam {
        this['name'] = name;
        return this;
    }
    public withParentNodeIds(parentNodeIds: Array<string>): ListFactorParam {
        this['parent_node_ids'] = parentNodeIds;
        return this;
    }
    public set parentNodeIds(parentNodeIds: Array<string>  | undefined) {
        this['parent_node_ids'] = parentNodeIds;
    }
    public get parentNodeIds(): Array<string> | undefined {
        return this['parent_node_ids'];
    }
    public withAssetId(assetId: string): ListFactorParam {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withCreatorNum(creatorNum: string): ListFactorParam {
        this['creator_num'] = creatorNum;
        return this;
    }
    public set creatorNum(creatorNum: string  | undefined) {
        this['creator_num'] = creatorNum;
    }
    public get creatorNum(): string | undefined {
        return this['creator_num'];
    }
    public withMindmapId(mindmapId: string): ListFactorParam {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
    public withTestpointId(testpointId: string): ListFactorParam {
        this['testpoint_id'] = testpointId;
        return this;
    }
    public set testpointId(testpointId: string  | undefined) {
        this['testpoint_id'] = testpointId;
    }
    public get testpointId(): string | undefined {
        return this['testpoint_id'];
    }
    public withMindmapNodeId(mindmapNodeId: string): ListFactorParam {
        this['mindmap_node_id'] = mindmapNodeId;
        return this;
    }
    public set mindmapNodeId(mindmapNodeId: string  | undefined) {
        this['mindmap_node_id'] = mindmapNodeId;
    }
    public get mindmapNodeId(): string | undefined {
        return this['mindmap_node_id'];
    }
}