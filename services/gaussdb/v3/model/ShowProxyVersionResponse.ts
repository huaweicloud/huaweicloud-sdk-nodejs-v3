
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProxyVersionResponse extends SdkResponse {
    private 'current_version'?: string;
    private 'latest_version'?: string;
    private 'can_upgrade'?: boolean;
    public constructor() { 
        super();
    }
    public withCurrentVersion(currentVersion: string): ShowProxyVersionResponse {
        this['current_version'] = currentVersion;
        return this;
    }
    public set currentVersion(currentVersion: string  | undefined) {
        this['current_version'] = currentVersion;
    }
    public get currentVersion(): string | undefined {
        return this['current_version'];
    }
    public withLatestVersion(latestVersion: string): ShowProxyVersionResponse {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: string  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): string | undefined {
        return this['latest_version'];
    }
    public withCanUpgrade(canUpgrade: boolean): ShowProxyVersionResponse {
        this['can_upgrade'] = canUpgrade;
        return this;
    }
    public set canUpgrade(canUpgrade: boolean  | undefined) {
        this['can_upgrade'] = canUpgrade;
    }
    public get canUpgrade(): boolean | undefined {
        return this['can_upgrade'];
    }
}