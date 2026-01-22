
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUpgradeInstanceVersionResponse extends SdkResponse {
    private 'current_version'?: string;
    private 'latest_version'?: string;
    public constructor() { 
        super();
    }
    public withCurrentVersion(currentVersion: string): ShowUpgradeInstanceVersionResponse {
        this['current_version'] = currentVersion;
        return this;
    }
    public set currentVersion(currentVersion: string  | undefined) {
        this['current_version'] = currentVersion;
    }
    public get currentVersion(): string | undefined {
        return this['current_version'];
    }
    public withLatestVersion(latestVersion: string): ShowUpgradeInstanceVersionResponse {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: string  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): string | undefined {
        return this['latest_version'];
    }
}