

export class RealTimeLogResponseBodyResult {
    private 'has_more_data'?: boolean;
    public offset?: number;
    public content?: string;
    private 'current_offset'?: number;
    public constructor() { 
    }
    public withHasMoreData(hasMoreData: boolean): RealTimeLogResponseBodyResult {
        this['has_more_data'] = hasMoreData;
        return this;
    }
    public set hasMoreData(hasMoreData: boolean  | undefined) {
        this['has_more_data'] = hasMoreData;
    }
    public get hasMoreData(): boolean | undefined {
        return this['has_more_data'];
    }
    public withOffset(offset: number): RealTimeLogResponseBodyResult {
        this['offset'] = offset;
        return this;
    }
    public withContent(content: string): RealTimeLogResponseBodyResult {
        this['content'] = content;
        return this;
    }
    public withCurrentOffset(currentOffset: number): RealTimeLogResponseBodyResult {
        this['current_offset'] = currentOffset;
        return this;
    }
    public set currentOffset(currentOffset: number  | undefined) {
        this['current_offset'] = currentOffset;
    }
    public get currentOffset(): number | undefined {
        return this['current_offset'];
    }
}