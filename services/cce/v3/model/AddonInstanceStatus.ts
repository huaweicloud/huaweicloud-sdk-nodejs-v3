import { Versions } from './Versions';


export class AddonInstanceStatus {
    public status: AddonInstanceStatusStatusEnum;
    private 'Reason': string | undefined;
    public message: string;
    public targetVersions?: Array<string>;
    public currentVersion: Versions;
    public constructor(status?: any, reason?: any, message?: any, currentVersion?: any) { 
        this['status'] = status;
        this['Reason'] = reason;
        this['message'] = message;
        this['currentVersion'] = currentVersion;
    }
    public withStatus(status: AddonInstanceStatusStatusEnum): AddonInstanceStatus {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): AddonInstanceStatus {
        this['Reason'] = reason;
        return this;
    }
    public set reason(reason: string | undefined) {
        this['Reason'] = reason;
    }
    public get reason() {
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
    public withCurrentVersion(currentVersion: Versions): AddonInstanceStatus {
        this['currentVersion'] = currentVersion;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddonInstanceStatusStatusEnum {
    RUNNING = 'running',
    ABNORMAL = 'abnormal',
    INSTALLING = 'installing',
    INSTALLFAILED = 'installFailed',
    UPGRADING = 'upgrading',
    UPGRADEFAILED = 'upgradeFailed',
    DELETING = 'deleting',
    DELETESUCCESS = 'deleteSuccess',
    DELETEFAILED = 'deleteFailed',
    AVAILABLE = 'available',
    ROLLBACKING = 'rollbacking'
}
