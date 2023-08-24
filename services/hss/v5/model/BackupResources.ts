import { ResourceInfo } from './ResourceInfo';


export class BackupResources {
    private 'vault_id'?: string;
    private 'resource_list'?: Array<ResourceInfo>;
    public constructor() { 
    }
    public withVaultId(vaultId: string): BackupResources {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withResourceList(resourceList: Array<ResourceInfo>): BackupResources {
        this['resource_list'] = resourceList;
        return this;
    }
    public set resourceList(resourceList: Array<ResourceInfo>  | undefined) {
        this['resource_list'] = resourceList;
    }
    public get resourceList(): Array<ResourceInfo> | undefined {
        return this['resource_list'];
    }
}