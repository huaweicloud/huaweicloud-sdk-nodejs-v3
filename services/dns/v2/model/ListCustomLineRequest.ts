

export class ListCustomLineRequest {
    private 'line_id'?: string;
    public name?: string;
    public limit?: number;
    public offset?: number;
    private 'show_detail'?: boolean;
    public status?: string;
    public ip?: string;
    public constructor() { 
    }
    public withLineId(lineId: string): ListCustomLineRequest {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string  | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId(): string | undefined {
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
    public set showDetail(showDetail: boolean  | undefined) {
        this['show_detail'] = showDetail;
    }
    public get showDetail(): boolean | undefined {
        return this['show_detail'];
    }
    public withStatus(status: string): ListCustomLineRequest {
        this['status'] = status;
        return this;
    }
    public withIp(ip: string): ListCustomLineRequest {
        this['ip'] = ip;
        return this;
    }
}