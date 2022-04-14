

export class IoTAForwarding {
    private 'data_source_id': string | undefined;
    private 'project_id': string | undefined;
    public constructor(dataSourceId?: any, projectId?: any) { 
        this['data_source_id'] = dataSourceId;
        this['project_id'] = projectId;
    }
    public withDataSourceId(dataSourceId: string): IoTAForwarding {
        this['data_source_id'] = dataSourceId;
        return this;
    }
    public set dataSourceId(dataSourceId: string | undefined) {
        this['data_source_id'] = dataSourceId;
    }
    public get dataSourceId() {
        return this['data_source_id'];
    }
    public withProjectId(projectId: string): IoTAForwarding {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
}