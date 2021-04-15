

export class SubJobEntities {
    private 'volume_type'?: string | undefined;
    public size?: number;
    private 'volume_id'?: string | undefined;
    public name?: string;
    public constructor() { 
    }
    public withVolumeType(volumeType: string): SubJobEntities {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType() {
        return this['volume_type'];
    }
    public withSize(size: number): SubJobEntities {
        this['size'] = size;
        return this;
    }
    public withVolumeId(volumeId: string): SubJobEntities {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
    public withName(name: string): SubJobEntities {
        this['name'] = name;
        return this;
    }
}