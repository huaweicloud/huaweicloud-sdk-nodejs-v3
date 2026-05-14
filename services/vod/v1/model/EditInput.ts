

export class EditInput {
    private 'asset_id'?: string;
    private 'timeline_start'?: string;
    private 'timeline_end'?: string;
    public constructor(assetId?: string, timelineStart?: string, timelineEnd?: string) { 
        this['asset_id'] = assetId;
        this['timeline_start'] = timelineStart;
        this['timeline_end'] = timelineEnd;
    }
    public withAssetId(assetId: string): EditInput {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withTimelineStart(timelineStart: string): EditInput {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string  | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart(): string | undefined {
        return this['timeline_start'];
    }
    public withTimelineEnd(timelineEnd: string): EditInput {
        this['timeline_end'] = timelineEnd;
        return this;
    }
    public set timelineEnd(timelineEnd: string  | undefined) {
        this['timeline_end'] = timelineEnd;
    }
    public get timelineEnd(): string | undefined {
        return this['timeline_end'];
    }
}