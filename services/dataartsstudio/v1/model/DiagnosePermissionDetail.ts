

export class DiagnosePermissionDetail {
    public id?: string;
    private 'task_id'?: string;
    private 'user_name'?: string;
    private 'permission_type'?: string;
    private 'permission_action'?: string;
    private 'permission_source'?: string;
    private 'datasource_type'?: string;
    private 'cluster_name'?: string;
    public database?: string;
    public schema?: string;
    public table?: string;
    public remark?: string;
    public constructor() { 
    }
    public withId(id: string): DiagnosePermissionDetail {
        this['id'] = id;
        return this;
    }
    public withTaskId(taskId: string): DiagnosePermissionDetail {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withUserName(userName: string): DiagnosePermissionDetail {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPermissionType(permissionType: string): DiagnosePermissionDetail {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): string | undefined {
        return this['permission_type'];
    }
    public withPermissionAction(permissionAction: string): DiagnosePermissionDetail {
        this['permission_action'] = permissionAction;
        return this;
    }
    public set permissionAction(permissionAction: string  | undefined) {
        this['permission_action'] = permissionAction;
    }
    public get permissionAction(): string | undefined {
        return this['permission_action'];
    }
    public withPermissionSource(permissionSource: string): DiagnosePermissionDetail {
        this['permission_source'] = permissionSource;
        return this;
    }
    public set permissionSource(permissionSource: string  | undefined) {
        this['permission_source'] = permissionSource;
    }
    public get permissionSource(): string | undefined {
        return this['permission_source'];
    }
    public withDatasourceType(datasourceType: string): DiagnosePermissionDetail {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): string | undefined {
        return this['datasource_type'];
    }
    public withClusterName(clusterName: string): DiagnosePermissionDetail {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatabase(database: string): DiagnosePermissionDetail {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): DiagnosePermissionDetail {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): DiagnosePermissionDetail {
        this['table'] = table;
        return this;
    }
    public withRemark(remark: string): DiagnosePermissionDetail {
        this['remark'] = remark;
        return this;
    }
}