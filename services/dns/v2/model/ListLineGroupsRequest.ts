

export class ListLineGroupsRequest {
    private 'line_id'?: string;
    public name?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLineId(lineId: string): ListLineGroupsRequest {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string  | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId(): string | undefined {
        return this['line_id'];
    }
    public withName(name: string): ListLineGroupsRequest {
        this['name'] = name;
        return this;
    }
    public withLimit(limit: number): ListLineGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListLineGroupsRequest {
        this['offset'] = offset;
        return this;
    }
}