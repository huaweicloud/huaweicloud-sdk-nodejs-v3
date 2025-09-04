

export class ListSnapshotsRequest {
    private 'connection_id'?: string;
    public module?: number;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'per_page'?: number;
    private 'cur_page'?: number;
    private 'X-Language'?: ListSnapshotsRequestXLanguageEnum | string;
    public constructor(connectionId?: string, module?: number, startAt?: number, endAt?: number) { 
        this['connection_id'] = connectionId;
        this['module'] = module;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withConnectionId(connectionId: string): ListSnapshotsRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withModule(module: number): ListSnapshotsRequest {
        this['module'] = module;
        return this;
    }
    public withStartAt(startAt: number): ListSnapshotsRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListSnapshotsRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withPerPage(perPage: number): ListSnapshotsRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withCurPage(curPage: number): ListSnapshotsRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withXLanguage(xLanguage: ListSnapshotsRequestXLanguageEnum | string): ListSnapshotsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSnapshotsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSnapshotsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSnapshotsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
