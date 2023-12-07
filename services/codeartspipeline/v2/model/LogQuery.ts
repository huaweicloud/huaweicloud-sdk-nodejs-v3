

export class LogQuery {
    private 'start_offset'?: number;
    private 'end_offset'?: number;
    public limit?: number;
    public sort?: string;
    public constructor(limit?: number, sort?: string) { 
        this['limit'] = limit;
        this['sort'] = sort;
    }
    public withStartOffset(startOffset: number): LogQuery {
        this['start_offset'] = startOffset;
        return this;
    }
    public set startOffset(startOffset: number  | undefined) {
        this['start_offset'] = startOffset;
    }
    public get startOffset(): number | undefined {
        return this['start_offset'];
    }
    public withEndOffset(endOffset: number): LogQuery {
        this['end_offset'] = endOffset;
        return this;
    }
    public set endOffset(endOffset: number  | undefined) {
        this['end_offset'] = endOffset;
    }
    public get endOffset(): number | undefined {
        return this['end_offset'];
    }
    public withLimit(limit: number): LogQuery {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): LogQuery {
        this['sort'] = sort;
        return this;
    }
}