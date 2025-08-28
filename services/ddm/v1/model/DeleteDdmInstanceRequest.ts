

export class DeleteDdmInstanceRequest {
    private 'instance_id'?: string;
    private 'delete_dn_data'?: boolean;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteDdmInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDeleteDnData(deleteDnData: boolean): DeleteDdmInstanceRequest {
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