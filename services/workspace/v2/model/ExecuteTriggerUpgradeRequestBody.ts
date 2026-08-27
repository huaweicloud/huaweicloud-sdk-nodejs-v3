

export class ExecuteTriggerUpgradeRequestBody {
    private 'is_force_execute'?: number;
    private 'target_version'?: string;
    public description?: string;
    private 'is_notify'?: number;
    private 'extra_params'?: string;
    private 'desktop_sids'?: Array<string>;
    public constructor(isForceExecute?: number, targetVersion?: string, isNotify?: number) { 
        this['is_force_execute'] = isForceExecute;
        this['target_version'] = targetVersion;
        this['is_notify'] = isNotify;
    }
    public withIsForceExecute(isForceExecute: number): ExecuteTriggerUpgradeRequestBody {
        this['is_force_execute'] = isForceExecute;
        return this;
    }
    public set isForceExecute(isForceExecute: number  | undefined) {
        this['is_force_execute'] = isForceExecute;
    }
    public get isForceExecute(): number | undefined {
        return this['is_force_execute'];
    }
    public withTargetVersion(targetVersion: string): ExecuteTriggerUpgradeRequestBody {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withDescription(description: string): ExecuteTriggerUpgradeRequestBody {
        this['description'] = description;
        return this;
    }
    public withIsNotify(isNotify: number): ExecuteTriggerUpgradeRequestBody {
        this['is_notify'] = isNotify;
        return this;
    }
    public set isNotify(isNotify: number  | undefined) {
        this['is_notify'] = isNotify;
    }
    public get isNotify(): number | undefined {
        return this['is_notify'];
    }
    public withExtraParams(extraParams: string): ExecuteTriggerUpgradeRequestBody {
        this['extra_params'] = extraParams;
        return this;
    }
    public set extraParams(extraParams: string  | undefined) {
        this['extra_params'] = extraParams;
    }
    public get extraParams(): string | undefined {
        return this['extra_params'];
    }
    public withDesktopSids(desktopSids: Array<string>): ExecuteTriggerUpgradeRequestBody {
        this['desktop_sids'] = desktopSids;
        return this;
    }
    public set desktopSids(desktopSids: Array<string>  | undefined) {
        this['desktop_sids'] = desktopSids;
    }
    public get desktopSids(): Array<string> | undefined {
        return this['desktop_sids'];
    }
}