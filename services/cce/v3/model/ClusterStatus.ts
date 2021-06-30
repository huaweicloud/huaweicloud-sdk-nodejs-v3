import { ClusterEndpoints } from './ClusterEndpoints';


export class ClusterStatus {
    public phase?: string;
    public jobID?: string;
    public reason?: string;
    public message?: string;
    public endpoints?: Array<ClusterEndpoints>;
    public isLocked?: boolean;
    public lockScene?: string;
    public lockSource?: string;
    public lockSourceId?: string;
    public deleteOption?: object;
    public deleteStatus?: object;
    public constructor() { 
    }
    public withPhase(phase: string): ClusterStatus {
        this['phase'] = phase;
        return this;
    }
    public withJobID(jobID: string): ClusterStatus {
        this['jobID'] = jobID;
        return this;
    }
    public withReason(reason: string): ClusterStatus {
        this['reason'] = reason;
        return this;
    }
    public withMessage(message: string): ClusterStatus {
        this['message'] = message;
        return this;
    }
    public withEndpoints(endpoints: Array<ClusterEndpoints>): ClusterStatus {
        this['endpoints'] = endpoints;
        return this;
    }
    public withIsLocked(isLocked: boolean): ClusterStatus {
        this['isLocked'] = isLocked;
        return this;
    }
    public withLockScene(lockScene: string): ClusterStatus {
        this['lockScene'] = lockScene;
        return this;
    }
    public withLockSource(lockSource: string): ClusterStatus {
        this['lockSource'] = lockSource;
        return this;
    }
    public withLockSourceId(lockSourceId: string): ClusterStatus {
        this['lockSourceId'] = lockSourceId;
        return this;
    }
    public withDeleteOption(deleteOption: object): ClusterStatus {
        this['deleteOption'] = deleteOption;
        return this;
    }
    public withDeleteStatus(deleteStatus: object): ClusterStatus {
        this['deleteStatus'] = deleteStatus;
        return this;
    }
}