import { Versions } from './Versions';


export class AddonInstanceStatus {
    public currentVersion: Versions;
    public message: string;
    public reason: string;
    public status: AddonInstanceStatusStatusEnum;
    public targetVersions?: Array<string>;
    public constructor(currentVersion?: any, message?: any, reason?: any, status?: any) { 
        this['currentVersion'] = currentVersion;
        this['message'] = message;
        this['reason'] = reason;
        this['status'] = status;
    }
    public withCurrentVersion(currentVersion: Versions): AddonInstanceStatus {
        this['currentVersion'] = currentVersion;
        return this;
    }
    public withMessage(message: string): AddonInstanceStatus {
        this['message'] = message;
        return this;
    }
    public withReason(reason: string): AddonInstanceStatus {
        this['reason'] = reason;
        return this;
    }
    public withStatus(status: AddonInstanceStatusStatusEnum): AddonInstanceStatus {
        this['status'] = status;
        return this;
    }
    public withTargetVersions(targetVersions: Array<string>): AddonInstanceStatus {
        this['targetVersions'] = targetVersions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddonInstanceStatusStatusEnum {
    INSTALLING = 'installing',
    UPGRADING = 'upgrading',
    FAILED = 'failed',
    RUNNING = 'running'
}
