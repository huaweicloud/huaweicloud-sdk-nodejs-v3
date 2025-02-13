import { ResourcesCredential } from './ResourcesCredential';


export class VolumeSpec {
    private 'resource_type'?: VolumeSpecResourceTypeEnum | string;
    private 'resource_sub_type'?: VolumeSpecResourceSubTypeEnum | string;
    public resources?: Array<string>;
    private 'resources_credentials'?: Array<ResourcesCredential>;
    public constructor(resourceType?: string, resourceSubType?: string, resources?: Array<string>) { 
        this['resource_type'] = resourceType;
        this['resource_sub_type'] = resourceSubType;
        this['resources'] = resources;
    }
    public withResourceType(resourceType: VolumeSpecResourceTypeEnum | string): VolumeSpec {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: VolumeSpecResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): VolumeSpecResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceSubType(resourceSubType: VolumeSpecResourceSubTypeEnum | string): VolumeSpec {
        this['resource_sub_type'] = resourceSubType;
        return this;
    }
    public set resourceSubType(resourceSubType: VolumeSpecResourceSubTypeEnum | string  | undefined) {
        this['resource_sub_type'] = resourceSubType;
    }
    public get resourceSubType(): VolumeSpecResourceSubTypeEnum | string | undefined {
        return this['resource_sub_type'];
    }
    public withResources(resources: Array<string>): VolumeSpec {
        this['resources'] = resources;
        return this;
    }
    public withResourcesCredentials(resourcesCredentials: Array<ResourcesCredential>): VolumeSpec {
        this['resources_credentials'] = resourcesCredentials;
        return this;
    }
    public set resourcesCredentials(resourcesCredentials: Array<ResourcesCredential>  | undefined) {
        this['resources_credentials'] = resourcesCredentials;
    }
    public get resourcesCredentials(): Array<ResourcesCredential> | undefined {
        return this['resources_credentials'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VolumeSpecResourceTypeEnum {
    SFS = 'sfs',
    OBS = 'obs'
}
/**
    * @export
    * @enum {string}
    */
export enum VolumeSpecResourceSubTypeEnum {
    OBJECT_BUCKET = 'object_bucket',
    PARALLEL_FILE_SYSTEM = 'parallel_file_system',
    SFS3_0 = 'sfs3.0'
}
