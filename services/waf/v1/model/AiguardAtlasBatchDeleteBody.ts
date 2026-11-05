

export class AiguardAtlasBatchDeleteBody {
    private 'atlas_ids'?: Array<string>;
    public constructor(atlasIds?: Array<string>) { 
        this['atlas_ids'] = atlasIds;
    }
    public withAtlasIds(atlasIds: Array<string>): AiguardAtlasBatchDeleteBody {
        this['atlas_ids'] = atlasIds;
        return this;
    }
    public set atlasIds(atlasIds: Array<string>  | undefined) {
        this['atlas_ids'] = atlasIds;
    }
    public get atlasIds(): Array<string> | undefined {
        return this['atlas_ids'];
    }
}