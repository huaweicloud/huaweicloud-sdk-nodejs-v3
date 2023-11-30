
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUpgradeDbMajorVersionStatusResponse extends SdkResponse {
    public status?: string;
    private 'target_version'?: string;
    private 'start_time'?: string;
    private 'check_expiration_time'?: string;
    public detail?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowUpgradeDbMajorVersionStatusResponse {
        this['status'] = status;
        return this;
    }
    public withTargetVersion(targetVersion: string): ShowUpgradeDbMajorVersionStatusResponse {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withStartTime(startTime: string): ShowUpgradeDbMajorVersionStatusResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withCheckExpirationTime(checkExpirationTime: string): ShowUpgradeDbMajorVersionStatusResponse {
        this['check_expiration_time'] = checkExpirationTime;
        return this;
    }
    public set checkExpirationTime(checkExpirationTime: string  | undefined) {
        this['check_expiration_time'] = checkExpirationTime;
    }
    public get checkExpirationTime(): string | undefined {
        return this['check_expiration_time'];
    }
    public withDetail(detail: string): ShowUpgradeDbMajorVersionStatusResponse {
        this['detail'] = detail;
        return this;
    }
}