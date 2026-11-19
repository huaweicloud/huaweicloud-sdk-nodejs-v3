

export class HostUpgradeResponseInfo {
    private 'host_id'?: string;
    private 'upgrade_status'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): HostUpgradeResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withUpgradeStatus(upgradeStatus: string): HostUpgradeResponseInfo {
        this['upgrade_status'] = upgradeStatus;
        return this;
    }
    public set upgradeStatus(upgradeStatus: string  | undefined) {
        this['upgrade_status'] = upgradeStatus;
    }
    public get upgradeStatus(): string | undefined {
        return this['upgrade_status'];
    }
}