

export class QueryAppLogResult {
    private 'has_more'?: boolean;
    public text?: string;
    public offset?: string;
    private 'end_offset'?: string;
    public constructor() { 
    }
    public withHasMore(hasMore: boolean): QueryAppLogResult {
        this['has_more'] = hasMore;
        return this;
    }
    public set hasMore(hasMore: boolean  | undefined) {
        this['has_more'] = hasMore;
    }
    public get hasMore(): boolean | undefined {
        return this['has_more'];
    }
    public withText(text: string): QueryAppLogResult {
        this['text'] = text;
        return this;
    }
    public withOffset(offset: string): QueryAppLogResult {
        this['offset'] = offset;
        return this;
    }
    public withEndOffset(endOffset: string): QueryAppLogResult {
        this['end_offset'] = endOffset;
        return this;
    }
    public set endOffset(endOffset: string  | undefined) {
        this['end_offset'] = endOffset;
    }
    public get endOffset(): string | undefined {
        return this['end_offset'];
    }
}