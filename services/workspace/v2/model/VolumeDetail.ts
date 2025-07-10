

export class VolumeDetail {
    public type?: string;
    public size?: number;
    public device?: string;
    public id?: string;
    private 'volume_id'?: string;
    private 'bill_resource_id'?: string;
    private 'create_time'?: string;
    private 'display_name'?: string;
    private 'resource_spec_code'?: string;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: string): VolumeDetail {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): VolumeDetail {
        this['size'] = size;
        return this;
    }
    public withDevice(device: string): VolumeDetail {
        this['device'] = device;
        return this;
    }
    public withId(id: string): VolumeDetail {
        this['id'] = id;
        return this;
    }
    public withVolumeId(volumeId: string): VolumeDetail {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withBillResourceId(billResourceId: string): VolumeDetail {
        this['bill_resource_id'] = billResourceId;
        return this;
    }
    public set billResourceId(billResourceId: string  | undefined) {
        this['bill_resource_id'] = billResourceId;
    }
    public get billResourceId(): string | undefined {
        return this['bill_resource_id'];
    }
    public withCreateTime(createTime: string): VolumeDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDisplayName(displayName: string): VolumeDetail {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withResourceSpecCode(resourceSpecCode: string): VolumeDetail {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
}