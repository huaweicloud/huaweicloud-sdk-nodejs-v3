

export class ListAppUserAccessDataRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public username?: string;
    private 'sort_field'?: string;
    private 'sort_type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(startTime?: string, endTime?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): ListAppUserAccessDataRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListAppUserAccessDataRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUsername(username: string): ListAppUserAccessDataRequest {
        this['username'] = username;
        return this;
    }
    public withSortField(sortField: string): ListAppUserAccessDataRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: string): ListAppUserAccessDataRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
    public withOffset(offset: number): ListAppUserAccessDataRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppUserAccessDataRequest {
        this['limit'] = limit;
        return this;
    }
}