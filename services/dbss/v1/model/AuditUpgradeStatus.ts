import { AuditUpgradeStep } from './AuditUpgradeStep';


export class AuditUpgradeStatus {
    private 'current_version'?: string;
    private 'instance_id'?: string;
    public status?: number;
    public steps?: Array<AuditUpgradeStep>;
    public total?: number;
    private 'upgrade_version'?: string;
    public constructor() { 
    }
    public withCurrentVersion(currentVersion: string): AuditUpgradeStatus {
        this['current_version'] = currentVersion;
        return this;
    }
    public set currentVersion(currentVersion: string  | undefined) {
        this['current_version'] = currentVersion;
    }
    public get currentVersion(): string | undefined {
        return this['current_version'];
    }
    public withInstanceId(instanceId: string): AuditUpgradeStatus {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: number): AuditUpgradeStatus {
        this['status'] = status;
        return this;
    }
    public withSteps(steps: Array<AuditUpgradeStep>): AuditUpgradeStatus {
        this['steps'] = steps;
        return this;
    }
    public withTotal(total: number): AuditUpgradeStatus {
        this['total'] = total;
        return this;
    }
    public withUpgradeVersion(upgradeVersion: string): AuditUpgradeStatus {
        this['upgrade_version'] = upgradeVersion;
        return this;
    }
    public set upgradeVersion(upgradeVersion: string  | undefined) {
        this['upgrade_version'] = upgradeVersion;
    }
    public get upgradeVersion(): string | undefined {
        return this['upgrade_version'];
    }
}