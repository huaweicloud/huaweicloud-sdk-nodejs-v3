

export class ListScreenRecordsRequest {
    public limit?: number;
    public offset?: number;
    private 'desktop_id'?: string;
    public username?: string;
    public status?: string;
    public type?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'sort_field'?: string;
    private 'sort_type'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListScreenRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListScreenRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withDesktopId(desktopId: string): ListScreenRecordsRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withUsername(username: string): ListScreenRecordsRequest {
        this['username'] = username;
        return this;
    }
    public withStatus(status: string): ListScreenRecordsRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ListScreenRecordsRequest {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): ListScreenRecordsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListScreenRecordsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withSortField(sortField: string): ListScreenRecordsRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: string): ListScreenRecordsRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
}