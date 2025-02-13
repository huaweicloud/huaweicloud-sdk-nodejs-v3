

export class Volume {
    public id?: string;
    private 'resource_info'?: { [key: string]: string; };
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    private 'resource_sub_type'?: VolumeResourceSubTypeEnum | string;
    public access?: string;
    public time?: string;
    public constructor() { 
    }
    public withId(id: string): Volume {
        this['id'] = id;
        return this;
    }
    public withResourceInfo(resourceInfo: { [key: string]: string; }): Volume {
        this['resource_info'] = resourceInfo;
        return this;
    }
    public set resourceInfo(resourceInfo: { [key: string]: string; }  | undefined) {
        this['resource_info'] = resourceInfo;
    }
    public get resourceInfo(): { [key: string]: string; } | undefined {
        return this['resource_info'];
    }
    public withResourceName(resourceName: string): Volume {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): Volume {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSubType(resourceSubType: VolumeResourceSubTypeEnum | string): Volume {
        this['resource_sub_type'] = resourceSubType;
        return this;
    }
    public set resourceSubType(resourceSubType: VolumeResourceSubTypeEnum | string  | undefined) {
        this['resource_sub_type'] = resourceSubType;
    }
    public get resourceSubType(): VolumeResourceSubTypeEnum | string | undefined {
        return this['resource_sub_type'];
    }
    public withAccess(access: string): Volume {
        this['access'] = access;
        return this;
    }
    public withTime(time: string): Volume {
        this['time'] = time;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VolumeResourceSubTypeEnum {
    PARALLEL_FILE_SYSTEM = 'parallel_file_system',
    OBJECT_BUCKET = 'object_bucket',
    SFS3_0 = 'sfs3.0'
}
