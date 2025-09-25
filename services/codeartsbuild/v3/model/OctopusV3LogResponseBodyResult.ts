

export class OctopusV3LogResponseBodyResult {
    private 'has_more'?: boolean;
    private 'start_offset'?: string;
    private 'end_offset'?: string;
    public log?: string;
    public location?: string;
    public constructor() { 
    }
    public withHasMore(hasMore: boolean): OctopusV3LogResponseBodyResult {
        this['has_more'] = hasMore;
        return this;
    }
    public set hasMore(hasMore: boolean  | undefined) {
        this['has_more'] = hasMore;
    }
    public get hasMore(): boolean | undefined {
        return this['has_more'];
    }
    public withStartOffset(startOffset: string): OctopusV3LogResponseBodyResult {
        this['start_offset'] = startOffset;
        return this;
    }
    public set startOffset(startOffset: string  | undefined) {
        this['start_offset'] = startOffset;
    }
    public get startOffset(): string | undefined {
        return this['start_offset'];
    }
    public withEndOffset(endOffset: string): OctopusV3LogResponseBodyResult {
        this['end_offset'] = endOffset;
        return this;
    }
    public set endOffset(endOffset: string  | undefined) {
        this['end_offset'] = endOffset;
    }
    public get endOffset(): string | undefined {
        return this['end_offset'];
    }
    public withLog(log: string): OctopusV3LogResponseBodyResult {
        this['log'] = log;
        return this;
    }
    public withLocation(location: string): OctopusV3LogResponseBodyResult {
        this['location'] = location;
        return this;
    }
}