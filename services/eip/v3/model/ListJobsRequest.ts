

export class ListJobsRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<ListJobsRequestFieldsEnum> | Array<string>;
    private 'sort_key'?: Array<ListJobsRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListJobsRequestSortDirEnum> | Array<string>;
    public id?: Array<string>;
    public action?: Array<ListJobsRequestActionEnum> | Array<string>;
    public status?: Array<ListJobsRequestStatusEnum> | Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListJobsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListJobsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<ListJobsRequestFieldsEnum> | Array<string>): ListJobsRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: Array<ListJobsRequestSortKeyEnum> | Array<string>): ListJobsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListJobsRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListJobsRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListJobsRequestSortDirEnum> | Array<string>): ListJobsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListJobsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListJobsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListJobsRequest {
        this['id'] = id;
        return this;
    }
    public withAction(action: Array<ListJobsRequestActionEnum> | Array<string>): ListJobsRequest {
        this['action'] = action;
        return this;
    }
    public withStatus(status: Array<ListJobsRequestStatusEnum> | Array<string>): ListJobsRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListJobsRequestFieldsEnum {
    ID = 'id',
    ACTION = 'action',
    STATUS = 'status',
    ERROR_TASK = 'error_task',
    ERROR_CODE = 'error_code',
    ERROR_MESSAGE = 'error_message',
    START_TIME = 'start_time',
    END_TIME = 'end_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListJobsRequestSortKeyEnum {
    ID = 'id',
    START_TIME = 'start_time',
    END_TIME = 'end_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListJobsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListJobsRequestActionEnum {
    CREATEGEIPGRAPH = 'CreateGEIPGraph',
    UPDATEGEIPGRAPH = 'UpdateGEIPGraph',
    BINDGEIPGRAPH = 'BindGEIPGraph',
    UNBINDGEIPGRAPH = 'UnBindGEIPGraph',
    BATCHATTACHBANDWIDTHGRAPH = 'BatchAttachBandwidthGraph',
    BATCHDETACHBANDWIDTHGRAPH = 'BatchDetachBandwidthGraph',
    CREATEGEIPSEGMENTGRAPH = 'CreateGeipSegmentGraph',
    BINDGEIPSEGMENTGRAPH = 'BindGeipSegmentGraph'
}
/**
    * @export
    * @enum {string}
    */
export enum ListJobsRequestStatusEnum {
    FINISH_SUCC = 'FINISH_SUCC',
    FINISH_ROLLBACK_SUCC = 'FINISH_ROLLBACK_SUCC'
}
