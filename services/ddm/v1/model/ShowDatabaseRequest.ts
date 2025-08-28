

export class ShowDatabaseRequest {
    private 'instance_id'?: string;
    private 'ddm_dbname'?: string;
    public constructor(instanceId?: string, ddmDbname?: string) { 
        this['instance_id'] = instanceId;
        this['ddm_dbname'] = ddmDbname;
    }
    public withInstanceId(instanceId: string): ShowDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDdmDbname(ddmDbname: string): ShowDatabaseRequest {
        this['ddm_dbname'] = ddmDbname;
        return this;
    }
    public set ddmDbname(ddmDbname: string  | undefined) {
        this['ddm_dbname'] = ddmDbname;
    }
    public get ddmDbname(): string | undefined {
        return this['ddm_dbname'];
    }
}