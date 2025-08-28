

export class DeleteInstanceRequest {
    private 'instance_id'?: string;
    private 'delete_rds_data'?: DeleteInstanceRequestDeleteRdsDataEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDeleteRdsData(deleteRdsData: DeleteInstanceRequestDeleteRdsDataEnum | string): DeleteInstanceRequest {
        this['delete_rds_data'] = deleteRdsData;
        return this;
    }
    public set deleteRdsData(deleteRdsData: DeleteInstanceRequestDeleteRdsDataEnum | string  | undefined) {
        this['delete_rds_data'] = deleteRdsData;
    }
    public get deleteRdsData(): DeleteInstanceRequestDeleteRdsDataEnum | string | undefined {
        return this['delete_rds_data'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteInstanceRequestDeleteRdsDataEnum {
    TRUE = 'true',
    FALSE = 'false'
}
