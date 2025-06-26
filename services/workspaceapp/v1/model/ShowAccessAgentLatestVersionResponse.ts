
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAccessAgentLatestVersionResponse extends SdkResponse {
    private 'latest_version'?: string;
    public constructor() { 
        super();
    }
    public withLatestVersion(latestVersion: string): ShowAccessAgentLatestVersionResponse {
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