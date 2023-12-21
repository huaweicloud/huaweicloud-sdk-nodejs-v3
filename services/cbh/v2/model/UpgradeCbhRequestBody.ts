

export class UpgradeCbhRequestBody {
    private 'server_id'?: string;
    private 'upgrade_time'?: number;
    public cancel?: boolean;
    public constructor(serverId?: string, upgradeTime?: number) { 
        this['server_id'] = serverId;
        this['upgrade_time'] = upgradeTime;
    }
    public withServerId(serverId: string): UpgradeCbhRequestBody {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withUpgradeTime(upgradeTime: number): UpgradeCbhRequestBody {
        this['upgrade_time'] = upgradeTime;
        return this;
    }
    public set upgradeTime(upgradeTime: number  | undefined) {
        this['upgrade_time'] = upgradeTime;
    }
    public get upgradeTime(): number | undefined {
        return this['upgrade_time'];
    }
    public withCancel(cancel: boolean): UpgradeCbhRequestBody {
        this['cancel'] = cancel;
        return this;
    }
}