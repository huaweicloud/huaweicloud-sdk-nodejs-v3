

export class TablesList {
    private 'table_name'?: string;
    private 'table_id'?: string;
    private 'table_name_cn'?: string;
    public columns?: string;
    private 'dw_id'?: string;
    private 'dw_name'?: string;
    private 'dw_type'?: string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'life_cycle'?: number;
    public description?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'project_id'?: string;
    private 'create_time'?: string;
    private 'table_size'?: number;
    private 'total_count'?: number;
    private 'is_valid'?: number;
    private 'extra_setting'?: string;
    public partitioned?: boolean;
    public constructor() { 
    }
    public withTableName(tableName: string): TablesList {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableId(tableId: string): TablesList {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withTableNameCn(tableNameCn: string): TablesList {
        this['table_name_cn'] = tableNameCn;
        return this;
    }
    public set tableNameCn(tableNameCn: string  | undefined) {
        this['table_name_cn'] = tableNameCn;
    }
    public get tableNameCn(): string | undefined {
        return this['table_name_cn'];
    }
    public withColumns(columns: string): TablesList {
        this['columns'] = columns;
        return this;
    }
    public withDwId(dwId: string): TablesList {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withDwName(dwName: string): TablesList {
        this['dw_name'] = dwName;
        return this;
    }
    public set dwName(dwName: string  | undefined) {
        this['dw_name'] = dwName;
    }
    public get dwName(): string | undefined {
        return this['dw_name'];
    }
    public withDwType(dwType: string): TablesList {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withDatabaseName(databaseName: string): TablesList {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): TablesList {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withLifeCycle(lifeCycle: number): TablesList {
        this['life_cycle'] = lifeCycle;
        return this;
    }
    public set lifeCycle(lifeCycle: number  | undefined) {
        this['life_cycle'] = lifeCycle;
    }
    public get lifeCycle(): number | undefined {
        return this['life_cycle'];
    }
    public withDescription(description: string): TablesList {
        this['description'] = description;
        return this;
    }
    public withUserId(userId: string): TablesList {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): TablesList {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withProjectId(projectId: string): TablesList {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreateTime(createTime: string): TablesList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withTableSize(tableSize: number): TablesList {
        this['table_size'] = tableSize;
        return this;
    }
    public set tableSize(tableSize: number  | undefined) {
        this['table_size'] = tableSize;
    }
    public get tableSize(): number | undefined {
        return this['table_size'];
    }
    public withTotalCount(totalCount: number): TablesList {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withIsValid(isValid: number): TablesList {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: number  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): number | undefined {
        return this['is_valid'];
    }
    public withExtraSetting(extraSetting: string): TablesList {
        this['extra_setting'] = extraSetting;
        return this;
    }
    public set extraSetting(extraSetting: string  | undefined) {
        this['extra_setting'] = extraSetting;
    }
    public get extraSetting(): string | undefined {
        return this['extra_setting'];
    }
    public withPartitioned(partitioned: boolean): TablesList {
        this['partitioned'] = partitioned;
        return this;
    }
}