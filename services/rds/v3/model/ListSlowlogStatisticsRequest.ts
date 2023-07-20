

export class ListSlowlogStatisticsRequest {
    private 'X-Language'?: ListSlowlogStatisticsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    private 'start_date'?: string;
    private 'end_date'?: string;
    public type?: ListSlowlogStatisticsRequestTypeEnum | string;
    public sort?: string;
    public constructor(instanceId?: string, curPage?: number, perPage?: number, startDate?: string, endDate?: string, type?: string) { 
        this['instance_id'] = instanceId;
        this['cur_page'] = curPage;
        this['per_page'] = perPage;
        this['start_date'] = startDate;
        this['end_date'] = endDate;
        this['type'] = type;
    }
    public withXLanguage(xLanguage: ListSlowlogStatisticsRequestXLanguageEnum | string): ListSlowlogStatisticsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSlowlogStatisticsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSlowlogStatisticsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSlowlogStatisticsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCurPage(curPage: number): ListSlowlogStatisticsRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): ListSlowlogStatisticsRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withStartDate(startDate: string): ListSlowlogStatisticsRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ListSlowlogStatisticsRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withType(type: ListSlowlogStatisticsRequestTypeEnum | string): ListSlowlogStatisticsRequest {
        this['type'] = type;
        return this;
    }
    public withSort(sort: string): ListSlowlogStatisticsRequest {
        this['sort'] = sort;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSlowlogStatisticsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSlowlogStatisticsRequestTypeEnum {
    INSERT = 'INSERT',
    UPDATE = 'UPDATE',
    SELECT = 'SELECT',
    DELETE = 'DELETE',
    CREATE = 'CREATE',
    ALL = 'ALL'
}
