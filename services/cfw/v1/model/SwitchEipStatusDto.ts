

export class SwitchEipStatusDto {
    private 'fw_instance_id'?: string;
    private 'object_id'?: string;
    public status?: number;
    public constructor(fwInstanceId?: string, objectId?: string, status?: number) { 
        this['fw_instance_id'] = fwInstanceId;
        this['object_id'] = objectId;
        this['status'] = status;
    }
    public withFwInstanceId(fwInstanceId: string): SwitchEipStatusDto {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withObjectId(objectId: string): SwitchEipStatusDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withStatus(status: number): SwitchEipStatusDto {
        this['status'] = status;
        return this;
    }
}