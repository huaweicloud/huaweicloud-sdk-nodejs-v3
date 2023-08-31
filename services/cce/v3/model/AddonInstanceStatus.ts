import { Versions } from './Versions';


export class AddonInstanceStatus {
    public status?: AddonInstanceStatusStatusEnum | string;
    private 'Reason'?: string;
    public message?: string;
    public targetVersions?: Array<string>;
    public currentVersion?: Versions;
    public isRollbackable?: boolean;
    public previousVersion?: string;
    public constructor(status?: string, reason?: string, message?: string, currentVersion?: Versions) { 
        this['status'] = status;
        this['Reason'] = reason;
        this['message'] = message;
        this['currentVersion'] = currentVersion;
    }
    public withStatus(status: AddonInstanceStatusStatusEnum | string): AddonInstanceStatus {
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
    public withCurrentVersion(currentVersion: Versions): AddonInstanceStatus {
        this['currentVersion'] = currentVersion;
        return this;
    }
    public withIsRollbackable(isRollbackable: boolean): AddonInstanceStatus {
        this['isRollbackable'] = isRollbackable;
        return this;
    }
    public withPreviousVersion(previousVersion: string): AddonInstanceStatus {
        this['previousVersion'] = previousVersion;
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
    ROLLBACKING = 'rollbacking',
    ROLLBACKFAILED = 'rollbackFailed'
}
