import { AddonVersion } from './AddonVersion';


export class AddonInstanceStatus {
    public status?: string;
    private 'Reason'?: string;
    public message?: string;
    public targetVersions?: Array<string>;
    public currentVersion?: AddonVersion;
    public constructor() { 
    }
    public withStatus(status: string): AddonInstanceStatus {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): AddonInstanceStatus {
        this['Reason'] = reason;
        return this;
    }
    public set reason(reason: string  | undefined) {
        this['Reason'] = reason;
    }
    public get reason(): string | undefined {
        return this['Reason'];
    }
    public withMessage(message: string): AddonInstanceStatus {
        this['message'] = message;
        return this;
    }
    public withTargetVersions(targetVersions: Array<string>): AddonInstanceStatus {
        this['targetVersions'] = targetVersions;
        return this;
    }
    public withCurrentVersion(currentVersion: AddonVersion): AddonInstanceStatus {
        this['currentVersion'] = currentVersion;
        return this;
    }
}