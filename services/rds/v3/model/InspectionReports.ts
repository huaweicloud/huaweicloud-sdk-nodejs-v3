

export class InspectionReports {
    public id?: string;
    private 'check_time'?: string;
    private 'expiration_time'?: string;
    private 'target_version'?: string;
    public result?: string;
    public detail?: string;
    public constructor(id?: string, checkTime?: string, expirationTime?: string, targetVersion?: string, result?: string, detail?: string) { 
        this['id'] = id;
        this['check_time'] = checkTime;
        this['expiration_time'] = expirationTime;
        this['target_version'] = targetVersion;
        this['result'] = result;
        this['detail'] = detail;
    }
    public withId(id: string): InspectionReports {
        this['id'] = id;
        return this;
    }
    public withCheckTime(checkTime: string): InspectionReports {
        this['check_time'] = checkTime;
        return this;
    }
    public set checkTime(checkTime: string  | undefined) {
        this['check_time'] = checkTime;
    }
    public get checkTime(): string | undefined {
        return this['check_time'];
    }
    public withExpirationTime(expirationTime: string): InspectionReports {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: string  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): string | undefined {
        return this['expiration_time'];
    }
    public withTargetVersion(targetVersion: string): InspectionReports {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withResult(result: string): InspectionReports {
        this['result'] = result;
        return this;
    }
    public withDetail(detail: string): InspectionReports {
        this['detail'] = detail;
        return this;
    }
}