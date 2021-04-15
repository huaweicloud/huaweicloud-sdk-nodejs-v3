

export class CreateDataImage {
    public name: string;
    private 'volume_id': string | undefined;
    public description?: string;
    public tags?: Array<string>;
    public constructor(name?: any, volumeId?: any) { 
        this['name'] = name;
        this['volume_id'] = volumeId;
    }
    public withName(name: string): CreateDataImage {
        this['name'] = name;
        return this;
    }
    public withVolumeId(volumeId: string): CreateDataImage {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
    public withDescription(description: string): CreateDataImage {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<string>): CreateDataImage {
        this['tags'] = tags;
        return this;
    }
}