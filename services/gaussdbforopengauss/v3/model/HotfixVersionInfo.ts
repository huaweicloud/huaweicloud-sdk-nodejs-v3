

export class HotfixVersionInfo {
    public version?: string;
    private 'upgrade_finished_time'?: string;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): HotfixVersionInfo {
        this['version'] = version;
        return this;
    }
    public withUpgradeFinishedTime(upgradeFinishedTime: string): HotfixVersionInfo {
        this['upgrade_finished_time'] = upgradeFinishedTime;
        return this;
    }
    public set upgradeFinishedTime(upgradeFinishedTime: string  | undefined) {
        this['upgrade_finished_time'] = upgradeFinishedTime;
    }
    public get upgradeFinishedTime(): string | undefined {
        return this['upgrade_finished_time'];
    }
}