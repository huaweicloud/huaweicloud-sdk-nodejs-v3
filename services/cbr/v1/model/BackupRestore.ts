import { BackupRestoreServerMapping } from './BackupRestoreServerMapping';


export class BackupRestore {
    public mappings?: Array<BackupRestoreServerMapping>;
    private 'power_on'?: boolean | undefined;
    private 'server_id'?: string | undefined;
    private 'volume_id'?: string | undefined;
    private 'resource_id'?: string | undefined;
    public constructor() { 
    }
    public withMappings(mappings: Array<BackupRestoreServerMapping>): BackupRestore {
        this['mappings'] = mappings;
        return this;
    }
    public withPowerOn(powerOn: boolean): BackupRestore {
        this['power_on'] = powerOn;
        return this;
    }
    public set powerOn(powerOn: boolean | undefined) {
        this['power_on'] = powerOn;
    }
    public get powerOn() {
        return this['power_on'];
    }
    public withServerId(serverId: string): BackupRestore {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withVolumeId(volumeId: string): BackupRestore {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
    public withResourceId(resourceId: string): BackupRestore {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
}