

export class GetInstancesNoIndexTablesRequest {
    private 'instance_id'?: string;
    public newest?: boolean;
    private 'table_type'?: string;
    public constructor(instanceId?: string, newest?: boolean, tableType?: string) { 
        this['instance_id'] = instanceId;
        this['newest'] = newest;
        this['table_type'] = tableType;
    }
    public withInstanceId(instanceId: string): GetInstancesNoIndexTablesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNewest(newest: boolean): GetInstancesNoIndexTablesRequest {
        this['newest'] = newest;
        return this;
    }
    public withTableType(tableType: string): GetInstancesNoIndexTablesRequest {
        this['table_type'] = tableType;
        return this;
    }
    public set tableType(tableType: string  | undefined) {
        this['table_type'] = tableType;
    }
    public get tableType(): string | undefined {
        return this['table_type'];
    }
}