

export class TtscGroupAssetsConfig {
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'asset_ids'?: Array<string>;
    public constructor() { 
    }
    public withGroupId(groupId: string): TtscGroupAssetsConfig {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): TtscGroupAssetsConfig {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withAssetIds(assetIds: Array<string>): TtscGroupAssetsConfig {
        this['asset_ids'] = assetIds;
        return this;
    }
    public set assetIds(assetIds: Array<string>  | undefined) {
        this['asset_ids'] = assetIds;
    }
    public get assetIds(): Array<string> | undefined {
        return this['asset_ids'];
    }
}