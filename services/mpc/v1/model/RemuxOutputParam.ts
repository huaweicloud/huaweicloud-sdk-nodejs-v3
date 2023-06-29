

export class RemuxOutputParam {
    public format?: string;
    private 'segment_duration'?: number | undefined;
    private 'remove_meta'?: boolean | undefined;
    public constructor() { 
    }
    public withFormat(format: string): RemuxOutputParam {
        this['format'] = format;
        return this;
    }
    public withSegmentDuration(segmentDuration: number): RemuxOutputParam {
        this['segment_duration'] = segmentDuration;
        return this;
    }
    public set segmentDuration(segmentDuration: number | undefined) {
        this['segment_duration'] = segmentDuration;
    }
    public get segmentDuration() {
        return this['segment_duration'];
    }
    public withRemoveMeta(removeMeta: boolean): RemuxOutputParam {
        this['remove_meta'] = removeMeta;
        return this;
    }
    public set removeMeta(removeMeta: boolean | undefined) {
        this['remove_meta'] = removeMeta;
    }
    public get removeMeta() {
        return this['remove_meta'];
    }
}