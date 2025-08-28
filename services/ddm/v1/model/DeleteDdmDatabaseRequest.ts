

export class DeleteDdmDatabaseRequest {
    private 'instance_id'?: string;
    private 'database_name'?: string;
    private 'delete_dn_data'?: boolean;
    public constructor(instanceId?: string, databaseName?: string, deleteDnData?: boolean) { 
        this['instance_id'] = instanceId;
        this['database_name'] = databaseName;
        this['delete_dn_data'] = deleteDnData;
    }
    public withInstanceId(instanceId: string): DeleteDdmDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatabaseName(databaseName: string): DeleteDdmDatabaseRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withDeleteDnData(deleteDnData: boolean): DeleteDdmDatabaseRequest {
        this['delete_dn_data'] = deleteDnData;
        return this;
    }
    public set deleteDnData(deleteDnData: boolean  | undefined) {
        this['delete_dn_data'] = deleteDnData;
    }
    public get deleteDnData(): boolean | undefined {
        return this['delete_dn_data'];
    }
}