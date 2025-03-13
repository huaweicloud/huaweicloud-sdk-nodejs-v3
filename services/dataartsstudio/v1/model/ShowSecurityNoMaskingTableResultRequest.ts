

export class ShowSecurityNoMaskingTableResultRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    private 'diagnose_id'?: string;
    private 'datasource_type'?: ShowSecurityNoMaskingTableResultRequestDatasourceTypeEnum | string;
    public database?: string;
    private 'cluster_name'?: string;
    public constructor(workspace?: string, diagnoseId?: string) { 
        this['workspace'] = workspace;
        this['diagnose_id'] = diagnoseId;
    }
    public withWorkspace(workspace: string): ShowSecurityNoMaskingTableResultRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ShowSecurityNoMaskingTableResultRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowSecurityNoMaskingTableResultRequest {
        this['offset'] = offset;
        return this;
    }
    public withDiagnoseId(diagnoseId: string): ShowSecurityNoMaskingTableResultRequest {
        this['diagnose_id'] = diagnoseId;
        return this;
    }
    public set diagnoseId(diagnoseId: string  | undefined) {
        this['diagnose_id'] = diagnoseId;
    }
    public get diagnoseId(): string | undefined {
        return this['diagnose_id'];
    }
    public withDatasourceType(datasourceType: ShowSecurityNoMaskingTableResultRequestDatasourceTypeEnum | string): ShowSecurityNoMaskingTableResultRequest {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: ShowSecurityNoMaskingTableResultRequestDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): ShowSecurityNoMaskingTableResultRequestDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withDatabase(database: string): ShowSecurityNoMaskingTableResultRequest {
        this['database'] = database;
        return this;
    }
    public withClusterName(clusterName: string): ShowSecurityNoMaskingTableResultRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSecurityNoMaskingTableResultRequestDatasourceTypeEnum {
    HIVE = 'HIVE'
}
