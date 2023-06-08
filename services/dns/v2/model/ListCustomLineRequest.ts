

export class ListCustomLineRequest {
    private 'line_id'?: string | undefined;
    public name?: string;
    public limit?: number;
    public offset?: number;
    private 'show_detail'?: boolean | undefined;
    public constructor() { 
    }
    public withLineId(lineId: string): ListCustomLineRequest {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId() {
        return this['line_id'];
    }
    public withName(name: string): ListCustomLineRequest {
        this['name'] = name;
        return this;
    }
    public withLimit(limit: number): ListCustomLineRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCustomLineRequest {
        this['offset'] = offset;
        return this;
    }
    public withShowDetail(showDetail: boolean): ListCustomLineRequest {
        this['show_detail'] = showDetail;
        return this;
    }
    public set showDetail(showDetail: boolean | undefined) {
        this['show_detail'] = showDetail;
    }
    public get showDetail() {
        return this['show_detail'];
    }
}