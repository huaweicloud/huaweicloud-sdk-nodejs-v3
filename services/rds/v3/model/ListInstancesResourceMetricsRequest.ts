

export class ListInstancesResourceMetricsRequest {
    public engine?: ListInstancesResourceMetricsRequestEngineEnum | string;
    private 'search_field'?: string;
    public offset?: string;
    public limit?: string;
    public order?: ListInstancesResourceMetricsRequestOrderEnum | string;
    private 'sort_field'?: ListInstancesResourceMetricsRequestSortFieldEnum | string;
    public constructor(engine?: string) { 
        this['engine'] = engine;
    }
    public withEngine(engine: ListInstancesResourceMetricsRequestEngineEnum | string): ListInstancesResourceMetricsRequest {
        this['engine'] = engine;
        return this;
    }
    public withSearchField(searchField: string): ListInstancesResourceMetricsRequest {
        this['search_field'] = searchField;
        return this;
    }
    public set searchField(searchField: string  | undefined) {
        this['search_field'] = searchField;
    }
    public get searchField(): string | undefined {
        return this['search_field'];
    }
    public withOffset(offset: string): ListInstancesResourceMetricsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListInstancesResourceMetricsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrder(order: ListInstancesResourceMetricsRequestOrderEnum | string): ListInstancesResourceMetricsRequest {
        this['order'] = order;
        return this;
    }
    public withSortField(sortField: ListInstancesResourceMetricsRequestSortFieldEnum | string): ListInstancesResourceMetricsRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ListInstancesResourceMetricsRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ListInstancesResourceMetricsRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesResourceMetricsRequestEngineEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesResourceMetricsRequestOrderEnum {
    DESC = 'DESC',
    ASC = 'ASC'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesResourceMetricsRequestSortFieldEnum {
    INSTANCE_NAME = 'instance_name',
    STATUS = 'status',
    TYPE = 'type',
    CPU_USAGE = 'cpu_usage',
    MEMORY_USAGE = 'memory_usage',
    DISK_USAGE = 'disk_usage',
    TPS = 'tps',
    QPS = 'qps',
    IOPS = 'iops',
    ACTIVE_CONNECTIONS = 'active_connections',
    SLOW_SQL = 'slow_sql'
}
