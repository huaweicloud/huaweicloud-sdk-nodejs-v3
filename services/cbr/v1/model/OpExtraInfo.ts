import { OpExtendInfoBckup } from './OpExtendInfoBckup';
import { OpExtendInfoCommon } from './OpExtendInfoCommon';
import { OpExtendInfoDelete } from './OpExtendInfoDelete';
import { OpExtendInfoRemoveResources } from './OpExtendInfoRemoveResources';
import { OpExtendInfoReplication } from './OpExtendInfoReplication';
import { OpExtendInfoRestore } from './OpExtendInfoRestore';
import { OpExtendInfoSync } from './OpExtendInfoSync';
import { OpExtendInfoVaultDelete } from './OpExtendInfoVaultDelete';
import { Resource } from './Resource';


export class OpExtraInfo {
    public backup?: OpExtendInfoBckup;
    public common?: OpExtendInfoCommon;
    private 'delete'?: OpExtendInfoDelete;
    public sync?: OpExtendInfoSync;
    private 'remove_resources'?: OpExtendInfoRemoveResources;
    public replication?: OpExtendInfoReplication;
    public resource?: Resource;
    public restore?: OpExtendInfoRestore;
    private 'vault_delete'?: OpExtendInfoVaultDelete;
    public constructor(common?: OpExtendInfoCommon, resource?: Resource) { 
        this['common'] = common;
        this['resource'] = resource;
    }
    public withBackup(backup: OpExtendInfoBckup): OpExtraInfo {
        this['backup'] = backup;
        return this;
    }
    public withCommon(common: OpExtendInfoCommon): OpExtraInfo {
        this['common'] = common;
        return this;
    }
    public withDelete(_delete: OpExtendInfoDelete): OpExtraInfo {
        this['delete'] = _delete;
        return this;
    }
    public set _delete(_delete: OpExtendInfoDelete  | undefined) {
        this['delete'] = _delete;
    }
    public get _delete(): OpExtendInfoDelete | undefined {
        return this['delete'];
    }
    public withSync(sync: OpExtendInfoSync): OpExtraInfo {
        this['sync'] = sync;
        return this;
    }
    public withRemoveResources(removeResources: OpExtendInfoRemoveResources): OpExtraInfo {
        this['remove_resources'] = removeResources;
        return this;
    }
    public set removeResources(removeResources: OpExtendInfoRemoveResources  | undefined) {
        this['remove_resources'] = removeResources;
    }
    public get removeResources(): OpExtendInfoRemoveResources | undefined {
        return this['remove_resources'];
    }
    public withReplication(replication: OpExtendInfoReplication): OpExtraInfo {
        this['replication'] = replication;
        return this;
    }
    public withResource(resource: Resource): OpExtraInfo {
        this['resource'] = resource;
        return this;
    }
    public withRestore(restore: OpExtendInfoRestore): OpExtraInfo {
        this['restore'] = restore;
        return this;
    }
    public withVaultDelete(vaultDelete: OpExtendInfoVaultDelete): OpExtraInfo {
        this['vault_delete'] = vaultDelete;
        return this;
    }
    public set vaultDelete(vaultDelete: OpExtendInfoVaultDelete  | undefined) {
        this['vault_delete'] = vaultDelete;
    }
    public get vaultDelete(): OpExtendInfoVaultDelete | undefined {
        return this['vault_delete'];
    }
}