

export class ListOnlineConfAttendeeRequest {
    private 'conf_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'search_key'?: string;
    public constructor(confId?: string) { 
        this['conf_id'] = confId;
    }
    public withConfId(confId: string): ListOnlineConfAttendeeRequest {
        this['conf_id'] = confId;
        return this;
    }
    public set confId(confId: string  | undefined) {
        this['conf_id'] = confId;
    }
    public get confId(): string | undefined {
        return this['conf_id'];
    }
    public withOffset(offset: number): ListOnlineConfAttendeeRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListOnlineConfAttendeeRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): ListOnlineConfAttendeeRequest {
        this['search_key'] = searchKey;
        return this;
    }
    public set searchKey(searchKey: string  | undefined) {
        this['search_key'] = searchKey;
    }
    public get searchKey(): string | undefined {
        return this['search_key'];
    }
}