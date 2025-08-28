
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseAvailableVersionsResponse extends SdkResponse {
    public versions?: Array<string>;
    private 'current_version'?: string;
    private 'latest_version'?: string;
    private 'current_favored_version'?: string;
    private 'previous_version'?: string;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<string>): ListDatabaseAvailableVersionsResponse {
        this['versions'] = versions;
        return this;
    }
    public withCurrentVersion(currentVersion: string): ListDatabaseAvailableVersionsResponse {
        this['current_version'] = currentVersion;
        return this;
    }
    public set currentVersion(currentVersion: string  | undefined) {
        this['current_version'] = currentVersion;
    }
    public get currentVersion(): string | undefined {
        return this['current_version'];
    }
    public withLatestVersion(latestVersion: string): ListDatabaseAvailableVersionsResponse {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: string  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): string | undefined {
        return this['latest_version'];
    }
    public withCurrentFavoredVersion(currentFavoredVersion: string): ListDatabaseAvailableVersionsResponse {
        this['current_favored_version'] = currentFavoredVersion;
        return this;
    }
    public set currentFavoredVersion(currentFavoredVersion: string  | undefined) {
        this['current_favored_version'] = currentFavoredVersion;
    }
    public get currentFavoredVersion(): string | undefined {
        return this['current_favored_version'];
    }
    public withPreviousVersion(previousVersion: string): ListDatabaseAvailableVersionsResponse {
        this['previous_version'] = previousVersion;
        return this;
    }
    public set previousVersion(previousVersion: string  | undefined) {
        this['previous_version'] = previousVersion;
    }
    public get previousVersion(): string | undefined {
        return this['previous_version'];
    }
}