

export class ListSchemaNamesRequest {
    private 'connection_id'?: string;
    private 'db_name'?: string;
    private 'obj_type'?: string;
    private 'is_with_all_user'?: string;
    private 'node_type'?: string;
    private 'node_id'?: string;
    public constructor(connectionId?: string, dbName?: string) { 
        this['connection_id'] = connectionId;
        this['db_name'] = dbName;
    }
    public withConnectionId(connectionId: string): ListSchemaNamesRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDbName(dbName: string): ListSchemaNamesRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withObjType(objType: string): ListSchemaNamesRequest {
        this['obj_type'] = objType;
        return this;
    }
    public set objType(objType: string  | undefined) {
        this['obj_type'] = objType;
    }
    public get objType(): string | undefined {
        return this['obj_type'];
    }
    public withIsWithAllUser(isWithAllUser: string): ListSchemaNamesRequest {
        this['is_with_all_user'] = isWithAllUser;
        return this;
    }
    public set isWithAllUser(isWithAllUser: string  | undefined) {
        this['is_with_all_user'] = isWithAllUser;
    }
    public get isWithAllUser(): string | undefined {
        return this['is_with_all_user'];
    }
    public withNodeType(nodeType: string): ListSchemaNamesRequest {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withNodeId(nodeId: string): ListSchemaNamesRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}