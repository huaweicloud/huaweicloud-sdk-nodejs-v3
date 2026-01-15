import { PoliciesCloudStorageOptions } from './PoliciesCloudStorageOptions';


export class PoliciesCloudStorage {
    private 'cloud_storage_enable'?: boolean;
    public options?: PoliciesCloudStorageOptions;
    public constructor() { 
    }
    public withCloudStorageEnable(cloudStorageEnable: boolean): PoliciesCloudStorage {
        this['cloud_storage_enable'] = cloudStorageEnable;
        return this;
    }
    public set cloudStorageEnable(cloudStorageEnable: boolean  | undefined) {
        this['cloud_storage_enable'] = cloudStorageEnable;
    }
    public get cloudStorageEnable(): boolean | undefined {
        return this['cloud_storage_enable'];
    }
    public withOptions(options: PoliciesCloudStorageOptions): PoliciesCloudStorage {
        this['options'] = options;
        return this;
    }
}