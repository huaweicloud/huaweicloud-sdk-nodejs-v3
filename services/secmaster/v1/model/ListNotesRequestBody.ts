

export class ListNotesRequestBody {
    public limit?: number;
    public offset?: number;
    private 'sort_by'?: string;
    public order?: string;
    private 'from_date'?: string;
    private 'to_date'?: string;
    private 'war_room_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListNotesRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListNotesRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): ListNotesRequestBody {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: string): ListNotesRequestBody {
        this['order'] = order;
        return this;
    }
    public withFromDate(fromDate: string): ListNotesRequestBody {
        this['from_date'] = fromDate;
        return this;
    }
    public set fromDate(fromDate: string  | undefined) {
        this['from_date'] = fromDate;
    }
    public get fromDate(): string | undefined {
        return this['from_date'];
    }
    public withToDate(toDate: string): ListNotesRequestBody {
        this['to_date'] = toDate;
        return this;
    }
    public set toDate(toDate: string  | undefined) {
        this['to_date'] = toDate;
    }
    public get toDate(): string | undefined {
        return this['to_date'];
    }
    public withWarRoomId(warRoomId: string): ListNotesRequestBody {
        this['war_room_id'] = warRoomId;
        return this;
    }
    public set warRoomId(warRoomId: string  | undefined) {
        this['war_room_id'] = warRoomId;
    }
    public get warRoomId(): string | undefined {
        return this['war_room_id'];
    }
}