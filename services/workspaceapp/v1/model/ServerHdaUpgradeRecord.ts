

export class ServerHdaUpgradeRecord {
    private 'server_id'?: string;
    private 'machine_name'?: string;
    private 'server_name'?: string;
    private 'server_group_name'?: string;
    public sid?: string;
    private 'current_version'?: string;
    private 'target_version'?: string;
    private 'upgrade_status'?: string;
    private 'upgrade_time'?: string;
    public constructor() { 
    }
    public withServerId(serverId: string): ServerHdaUpgradeRecord {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withMachineName(machineName: string): ServerHdaUpgradeRecord {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withServerName(serverName: string): ServerHdaUpgradeRecord {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withServerGroupName(serverGroupName: string): ServerHdaUpgradeRecord {
        this['server_group_name'] = serverGroupName;
        return this;
    }
    public set serverGroupName(serverGroupName: string  | undefined) {
        this['server_group_name'] = serverGroupName;
    }
    public get serverGroupName(): string | undefined {
        return this['server_group_name'];
    }
    public withSid(sid: string): ServerHdaUpgradeRecord {
        this['sid'] = sid;
        return this;
    }
    public withCurrentVersion(currentVersion: string): ServerHdaUpgradeRecord {
        this['current_version'] = currentVersion;
        return this;
    }
    public set currentVersion(currentVersion: string  | undefined) {
        this['current_version'] = currentVersion;
    }
    public get currentVersion(): string | undefined {
        return this['current_version'];
    }
    public withTargetVersion(targetVersion: string): ServerHdaUpgradeRecord {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withUpgradeStatus(upgradeStatus: string): ServerHdaUpgradeRecord {
        this['upgrade_status'] = upgradeStatus;
        return this;
    }
    public set upgradeStatus(upgradeStatus: string  | undefined) {
        this['upgrade_status'] = upgradeStatus;
    }
    public get upgradeStatus(): string | undefined {
        return this['upgrade_status'];
    }
    public withUpgradeTime(upgradeTime: string): ServerHdaUpgradeRecord {
        this['upgrade_time'] = upgradeTime;
        return this;
    }
    public set upgradeTime(upgradeTime: string  | undefined) {
        this['upgrade_time'] = upgradeTime;
    }
    public get upgradeTime(): string | undefined {
        return this['upgrade_time'];
    }
}