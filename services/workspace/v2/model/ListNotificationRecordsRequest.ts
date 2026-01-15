

export class ListNotificationRecordsRequest {
    private 'query_type'?: ListNotificationRecordsRequestQueryTypeEnum | string;
    private 'desktop_name'?: string;
    private 'desktop_pool_name'?: string;
    private 'user_name'?: string;
    public type?: ListNotificationRecordsRequestTypeEnum | string;
    public offset?: number;
    public limit?: number;
    private 'sort_field'?: ListNotificationRecordsRequestSortFieldEnum | string;
    private 'sort_type'?: ListNotificationRecordsRequestSortTypeEnum | string;
    public constructor(queryType?: string) { 
        this['query_type'] = queryType;
    }
    public withQueryType(queryType: ListNotificationRecordsRequestQueryTypeEnum | string): ListNotificationRecordsRequest {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: ListNotificationRecordsRequestQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): ListNotificationRecordsRequestQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withDesktopName(desktopName: string): ListNotificationRecordsRequest {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDesktopPoolName(desktopPoolName: string): ListNotificationRecordsRequest {
        this['desktop_pool_name'] = desktopPoolName;
        return this;
    }
    public set desktopPoolName(desktopPoolName: string  | undefined) {
        this['desktop_pool_name'] = desktopPoolName;
    }
    public get desktopPoolName(): string | undefined {
        return this['desktop_pool_name'];
    }
    public withUserName(userName: string): ListNotificationRecordsRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withType(type: ListNotificationRecordsRequestTypeEnum | string): ListNotificationRecordsRequest {
        this['type'] = type;
        return this;
    }
    public withOffset(offset: number): ListNotificationRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNotificationRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortField(sortField: ListNotificationRecordsRequestSortFieldEnum | string): ListNotificationRecordsRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ListNotificationRecordsRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ListNotificationRecordsRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: ListNotificationRecordsRequestSortTypeEnum | string): ListNotificationRecordsRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: ListNotificationRecordsRequestSortTypeEnum | string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): ListNotificationRecordsRequestSortTypeEnum | string | undefined {
        return this['sort_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNotificationRecordsRequestQueryTypeEnum {
    DESKTOP = 'DESKTOP',
    DESKTOP_POOL = 'DESKTOP_POOL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListNotificationRecordsRequestTypeEnum {
    EMAIL = 'EMAIL',
    SMS = 'SMS'
}
/**
    * @export
    * @enum {string}
    */
export enum ListNotificationRecordsRequestSortFieldEnum {
    OPERATE_TIME = 'operate_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListNotificationRecordsRequestSortTypeEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
