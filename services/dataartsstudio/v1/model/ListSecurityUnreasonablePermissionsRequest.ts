

export class ListSecurityUnreasonablePermissionsRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    private 'diagnose_id'?: string;
    private 'user_name'?: string;
    private 'datasource_type'?: ListSecurityUnreasonablePermissionsRequestDatasourceTypeEnum | string;
    public constructor(workspace?: string, diagnoseId?: string) { 
        this['workspace'] = workspace;
        this['diagnose_id'] = diagnoseId;
    }
    public withWorkspace(workspace: string): ListSecurityUnreasonablePermissionsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListSecurityUnreasonablePermissionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityUnreasonablePermissionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withDiagnoseId(diagnoseId: string): ListSecurityUnreasonablePermissionsRequest {
        this['diagnose_id'] = diagnoseId;
        return this;
    }
    public set diagnoseId(diagnoseId: string  | undefined) {
        this['diagnose_id'] = diagnoseId;
    }
    public get diagnoseId(): string | undefined {
        return this['diagnose_id'];
    }
    public withUserName(userName: string): ListSecurityUnreasonablePermissionsRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDatasourceType(datasourceType: ListSecurityUnreasonablePermissionsRequestDatasourceTypeEnum | string): ListSecurityUnreasonablePermissionsRequest {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: ListSecurityUnreasonablePermissionsRequestDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): ListSecurityUnreasonablePermissionsRequestDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityUnreasonablePermissionsRequestDatasourceTypeEnum {
    HIVE = 'HIVE',
    DWS = 'DWS',
    DLI = 'DLI'
}
