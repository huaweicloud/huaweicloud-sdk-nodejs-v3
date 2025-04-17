import { ListNotificationMaskRequestBody } from './ListNotificationMaskRequestBody';


export class ListNotificationMasksRequest {
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: ListNotificationMasksRequestSortKeyEnum | string;
    private 'sort_dir'?: ListNotificationMasksRequestSortDirEnum | string;
    public body?: ListNotificationMaskRequestBody;
    public constructor() { 
    }
    public withOffset(offset: number): ListNotificationMasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNotificationMasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: ListNotificationMasksRequestSortKeyEnum | string): ListNotificationMasksRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListNotificationMasksRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListNotificationMasksRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListNotificationMasksRequestSortDirEnum | string): ListNotificationMasksRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListNotificationMasksRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListNotificationMasksRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withBody(body: ListNotificationMaskRequestBody): ListNotificationMasksRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNotificationMasksRequestSortKeyEnum {
    CREATE_TIME = 'create_time',
    UPDATE_TIME = 'update_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListNotificationMasksRequestSortDirEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
