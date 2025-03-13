

export class DiagnoseNoMaskingDetail {
    public id?: string;
    private 'project_id'?: string;
    private 'task_id'?: string;
    private 'datasource_type'?: string;
    private 'cluster_name'?: string;
    public database?: string;
    public schema?: string;
    public table?: string;
    public remark?: string;
    public constructor() { 
    }
    public withId(id: string): DiagnoseNoMaskingDetail {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): DiagnoseNoMaskingDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTaskId(taskId: string): DiagnoseNoMaskingDetail {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withDatasourceType(datasourceType: string): DiagnoseNoMaskingDetail {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): string | undefined {
        return this['datasource_type'];
    }
    public withClusterName(clusterName: string): DiagnoseNoMaskingDetail {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatabase(database: string): DiagnoseNoMaskingDetail {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): DiagnoseNoMaskingDetail {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): DiagnoseNoMaskingDetail {
        this['table'] = table;
        return this;
    }
    public withRemark(remark: string): DiagnoseNoMaskingDetail {
        this['remark'] = remark;
        return this;
    }
}