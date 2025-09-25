import { CreateImageSynchronizeTaskRequestInfoRegistryInfo } from './CreateImageSynchronizeTaskRequestInfoRegistryInfo';


export class CreateImageSynchronizeTaskRequestInfo {
    private 'sync_all_registries'?: boolean;
    private 'registry_info'?: Array<CreateImageSynchronizeTaskRequestInfoRegistryInfo>;
    public constructor(syncAllRegistries?: boolean) { 
        this['sync_all_registries'] = syncAllRegistries;
    }
    public withSyncAllRegistries(syncAllRegistries: boolean): CreateImageSynchronizeTaskRequestInfo {
        this['sync_all_registries'] = syncAllRegistries;
        return this;
    }
    public set syncAllRegistries(syncAllRegistries: boolean  | undefined) {
        this['sync_all_registries'] = syncAllRegistries;
    }
    public get syncAllRegistries(): boolean | undefined {
        return this['sync_all_registries'];
    }
    public withRegistryInfo(registryInfo: Array<CreateImageSynchronizeTaskRequestInfoRegistryInfo>): CreateImageSynchronizeTaskRequestInfo {
        this['registry_info'] = registryInfo;
        return this;
    }
    public set registryInfo(registryInfo: Array<CreateImageSynchronizeTaskRequestInfoRegistryInfo>  | undefined) {
        this['registry_info'] = registryInfo;
    }
    public get registryInfo(): Array<CreateImageSynchronizeTaskRequestInfoRegistryInfo> | undefined {
        return this['registry_info'];
    }
}