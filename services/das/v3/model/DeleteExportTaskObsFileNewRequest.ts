

export class DeleteExportTaskObsFileNewRequest {
    private 'instance_id'?: string;
    public id?: number;
    public constructor(instanceId?: string, id?: number) { 
        this['instance_id'] = instanceId;
        this['id'] = id;
    }
    public withInstanceId(instanceId: string): DeleteExportTaskObsFileNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withId(id: number): DeleteExportTaskObsFileNewRequest {
        this['id'] = id;
        return this;
    }
}