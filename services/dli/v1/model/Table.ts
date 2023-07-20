

export class Table {
    private 'create_time'?: number;
    private 'data_type'?: string;
    private 'data_location'?: string;
    private 'last_access_time'?: number;
    public location?: string;
    public owner?: string;
    private 'table_name'?: string;
    private 'table_size'?: number;
    private 'table_type'?: string;
    private 'partition_columns'?: string;
    private 'page-size'?: number;
    private 'current-page'?: number;
    public constructor(createTime?: number, dataLocation?: string, lastAccessTime?: number, owner?: string, tableName?: string, tableSize?: number, tableType?: string) { 
        this['create_time'] = createTime;
        this['data_location'] = dataLocation;
        this['last_access_time'] = lastAccessTime;
        this['owner'] = owner;
        this['table_name'] = tableName;
        this['table_size'] = tableSize;
        this['table_type'] = tableType;
    }
    public withCreateTime(createTime: number): Table {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDataType(dataType: string): Table {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDataLocation(dataLocation: string): Table {
        this['data_location'] = dataLocation;
        return this;
    }
    public set dataLocation(dataLocation: string  | undefined) {
        this['data_location'] = dataLocation;
    }
    public get dataLocation(): string | undefined {
        return this['data_location'];
    }
    public withLastAccessTime(lastAccessTime: number): Table {
        this['last_access_time'] = lastAccessTime;
        return this;
    }
    public set lastAccessTime(lastAccessTime: number  | undefined) {
        this['last_access_time'] = lastAccessTime;
    }
    public get lastAccessTime(): number | undefined {
        return this['last_access_time'];
    }
    public withLocation(location: string): Table {
        this['location'] = location;
        return this;
    }
    public withOwner(owner: string): Table {
        this['owner'] = owner;
        return this;
    }
    public withTableName(tableName: string): Table {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableSize(tableSize: number): Table {
        this['table_size'] = tableSize;
        return this;
    }
    public set tableSize(tableSize: number  | undefined) {
        this['table_size'] = tableSize;
    }
    public get tableSize(): number | undefined {
        return this['table_size'];
    }
    public withTableType(tableType: string): Table {
        this['table_type'] = tableType;
        return this;
    }
    public set tableType(tableType: string  | undefined) {
        this['table_type'] = tableType;
    }
    public get tableType(): string | undefined {
        return this['table_type'];
    }
    public withPartitionColumns(partitionColumns: string): Table {
        this['partition_columns'] = partitionColumns;
        return this;
    }
    public set partitionColumns(partitionColumns: string  | undefined) {
        this['partition_columns'] = partitionColumns;
    }
    public get partitionColumns(): string | undefined {
        return this['partition_columns'];
    }
    public withPageSize(pageSize: number): Table {
        this['page-size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page-size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page-size'];
    }
    public withCurrentPage(currentPage: number): Table {
        this['current-page'] = currentPage;
        return this;
    }
    public set currentPage(currentPage: number  | undefined) {
        this['current-page'] = currentPage;
    }
    public get currentPage(): number | undefined {
        return this['current-page'];
    }
}