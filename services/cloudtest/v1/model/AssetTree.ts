

export class AssetTree {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'create_time'?: Date;
    private 'creator_name'?: string;
    private 'creator_num'?: string;
    private 'update_name'?: string;
    private 'update_num'?: string;
    private 'update_time'?: Date;
    private 'asset_id'?: string;
    private 'parent_id'?: string;
    private 'factor_cnt'?: number;
    public constructor() { 
    }
    public withId(id: string): AssetTree {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AssetTree {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): AssetTree {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreateTime(createTime: Date): AssetTree {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): AssetTree {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreatorNum(creatorNum: string): AssetTree {
        this['creator_num'] = creatorNum;
        return this;
    }
    public set creatorNum(creatorNum: string  | undefined) {
        this['creator_num'] = creatorNum;
    }
    public get creatorNum(): string | undefined {
        return this['creator_num'];
    }
    public withUpdateName(updateName: string): AssetTree {
        this['update_name'] = updateName;
        return this;
    }
    public set updateName(updateName: string  | undefined) {
        this['update_name'] = updateName;
    }
    public get updateName(): string | undefined {
        return this['update_name'];
    }
    public withUpdateNum(updateNum: string): AssetTree {
        this['update_num'] = updateNum;
        return this;
    }
    public set updateNum(updateNum: string  | undefined) {
        this['update_num'] = updateNum;
    }
    public get updateNum(): string | undefined {
        return this['update_num'];
    }
    public withUpdateTime(updateTime: Date): AssetTree {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withAssetId(assetId: string): AssetTree {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withParentId(parentId: string): AssetTree {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withFactorCnt(factorCnt: number): AssetTree {
        this['factor_cnt'] = factorCnt;
        return this;
    }
    public set factorCnt(factorCnt: number  | undefined) {
        this['factor_cnt'] = factorCnt;
    }
    public get factorCnt(): number | undefined {
        return this['factor_cnt'];
    }
}