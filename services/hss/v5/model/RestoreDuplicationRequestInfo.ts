import { BackupRestoreServerMappingInfo } from './BackupRestoreServerMappingInfo';


export class RestoreDuplicationRequestInfo {
    private 'server_id'?: string;
    private 'power_on'?: boolean;
    public mappings?: Array<BackupRestoreServerMappingInfo>;
    public constructor() { 
    }
    public withServerId(serverId: string): RestoreDuplicationRequestInfo {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withPowerOn(powerOn: boolean): RestoreDuplicationRequestInfo {
        this['power_on'] = powerOn;
        return this;
    }
    public set powerOn(powerOn: boolean  | undefined) {
        this['power_on'] = powerOn;
    }
    public get powerOn(): boolean | undefined {
        return this['power_on'];
    }
    public withMappings(mappings: Array<BackupRestoreServerMappingInfo>): RestoreDuplicationRequestInfo {
        this['mappings'] = mappings;
        return this;
    }
}