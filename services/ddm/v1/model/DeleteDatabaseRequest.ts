

export class DeleteDatabaseRequest {
    private 'instance_id'?: string;
    private 'ddm_dbname'?: string;
    private 'delete_rds_data'?: DeleteDatabaseRequestDeleteRdsDataEnum | string;
    public constructor(instanceId?: string, ddmDbname?: string) { 
        this['instance_id'] = instanceId;
        this['ddm_dbname'] = ddmDbname;
    }
    public withInstanceId(instanceId: string): DeleteDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDdmDbname(ddmDbname: string): DeleteDatabaseRequest {
        this['ddm_dbname'] = ddmDbname;
        return this;
    }
    public set ddmDbname(ddmDbname: string  | undefined) {
        this['ddm_dbname'] = ddmDbname;
    }
    public get ddmDbname(): string | undefined {
        return this['ddm_dbname'];
    }
    public withDeleteRdsData(deleteRdsData: DeleteDatabaseRequestDeleteRdsDataEnum | string): DeleteDatabaseRequest {
        this['delete_rds_data'] = deleteRdsData;
        return this;
    }
    public set deleteRdsData(deleteRdsData: DeleteDatabaseRequestDeleteRdsDataEnum | string  | undefined) {
        this['delete_rds_data'] = deleteRdsData;
    }
    public get deleteRdsData(): DeleteDatabaseRequestDeleteRdsDataEnum | string | undefined {
        return this['delete_rds_data'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteDatabaseRequestDeleteRdsDataEnum {
    TRUE = 'true',
    FALSE = 'false'
}
