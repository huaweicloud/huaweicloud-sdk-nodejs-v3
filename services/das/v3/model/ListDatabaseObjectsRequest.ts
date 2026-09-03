

export class ListDatabaseObjectsRequest {
    private 'connection_id'?: string;
    private 'db_name'?: string;
    private 'db_id'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'table_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'page_num'?: number;
    private 'page_size'?: number;
    private 'order_by'?: string;
    public order?: string;
    private 'extra_order_by'?: string;
    private 'extra_order'?: string;
    private 'obj_type'?: string;
    private 'ret_type'?: string;
    private 'is_sys'?: string;
    private 'obj_sub_type'?: string;
    private 'node_type'?: string;
    private 'node_id'?: string;
    private 'obj_name'?: string;
    public keywords?: string;
    private 'cur_page'?: string;
    private 'per_page'?: string;
    public constructor(connectionId?: string, startAt?: number, endAt?: number, pageNum?: number, pageSize?: number) { 
        this['connection_id'] = connectionId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
        this['page_num'] = pageNum;
        this['page_size'] = pageSize;
    }
    public withConnectionId(connectionId: string): ListDatabaseObjectsRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDbName(dbName: string): ListDatabaseObjectsRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withDbId(dbId: string): ListDatabaseObjectsRequest {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withSchemaName(schemaName: string): ListDatabaseObjectsRequest {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): ListDatabaseObjectsRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableId(tableId: string): ListDatabaseObjectsRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withStartAt(startAt: number): ListDatabaseObjectsRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListDatabaseObjectsRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withPageNum(pageNum: number): ListDatabaseObjectsRequest {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): ListDatabaseObjectsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withOrderBy(orderBy: string): ListDatabaseObjectsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: string): ListDatabaseObjectsRequest {
        this['order'] = order;
        return this;
    }
    public withExtraOrderBy(extraOrderBy: string): ListDatabaseObjectsRequest {
        this['extra_order_by'] = extraOrderBy;
        return this;
    }
    public set extraOrderBy(extraOrderBy: string  | undefined) {
        this['extra_order_by'] = extraOrderBy;
    }
    public get extraOrderBy(): string | undefined {
        return this['extra_order_by'];
    }
    public withExtraOrder(extraOrder: string): ListDatabaseObjectsRequest {
        this['extra_order'] = extraOrder;
        return this;
    }
    public set extraOrder(extraOrder: string  | undefined) {
        this['extra_order'] = extraOrder;
    }
    public get extraOrder(): string | undefined {
        return this['extra_order'];
    }
    public withObjType(objType: string): ListDatabaseObjectsRequest {
        this['obj_type'] = objType;
        return this;
    }
    public set objType(objType: string  | undefined) {
        this['obj_type'] = objType;
    }
    public get objType(): string | undefined {
        return this['obj_type'];
    }
    public withRetType(retType: string): ListDatabaseObjectsRequest {
        this['ret_type'] = retType;
        return this;
    }
    public set retType(retType: string  | undefined) {
        this['ret_type'] = retType;
    }
    public get retType(): string | undefined {
        return this['ret_type'];
    }
    public withIsSys(isSys: string): ListDatabaseObjectsRequest {
        this['is_sys'] = isSys;
        return this;
    }
    public set isSys(isSys: string  | undefined) {
        this['is_sys'] = isSys;
    }
    public get isSys(): string | undefined {
        return this['is_sys'];
    }
    public withObjSubType(objSubType: string): ListDatabaseObjectsRequest {
        this['obj_sub_type'] = objSubType;
        return this;
    }
    public set objSubType(objSubType: string  | undefined) {
        this['obj_sub_type'] = objSubType;
    }
    public get objSubType(): string | undefined {
        return this['obj_sub_type'];
    }
    public withNodeType(nodeType: string): ListDatabaseObjectsRequest {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withNodeId(nodeId: string): ListDatabaseObjectsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withObjName(objName: string): ListDatabaseObjectsRequest {
        this['obj_name'] = objName;
        return this;
    }
    public set objName(objName: string  | undefined) {
        this['obj_name'] = objName;
    }
    public get objName(): string | undefined {
        return this['obj_name'];
    }
    public withKeywords(keywords: string): ListDatabaseObjectsRequest {
        this['keywords'] = keywords;
        return this;
    }
    public withCurPage(curPage: string): ListDatabaseObjectsRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: string  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): string | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: string): ListDatabaseObjectsRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: string  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): string | undefined {
        return this['per_page'];
    }
}