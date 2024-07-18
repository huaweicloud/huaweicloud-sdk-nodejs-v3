import { AutopilotClusterEndpoints } from './AutopilotClusterEndpoints';


export class AutopilotClusterStatus {
    public phase?: string;
    public jobID?: string;
    public reason?: string;
    public message?: string;
    public endpoints?: Array<AutopilotClusterEndpoints>;
    public isLocked?: boolean;
    public lockScene?: string;
    public lockSource?: string;
    public lockSourceId?: string;
    public deleteOption?: object;
    public deleteStatus?: object;
    public constructor() { 
    }
    public withPhase(phase: string): AutopilotClusterStatus {
        this['phase'] = phase;
        return this;
    }
    public withJobID(jobID: string): AutopilotClusterStatus {
        this['jobID'] = jobID;
        return this;
    }
    public withReason(reason: string): AutopilotClusterStatus {
        this['reason'] = reason;
        return this;
    }
    public withMessage(message: string): AutopilotClusterStatus {
        this['message'] = message;
        return this;
    }
    public withEndpoints(endpoints: Array<AutopilotClusterEndpoints>): AutopilotClusterStatus {
        this['endpoints'] = endpoints;
        return this;
    }
    public withIsLocked(isLocked: boolean): AutopilotClusterStatus {
        this['isLocked'] = isLocked;
        return this;
    }
    public withLockScene(lockScene: string): AutopilotClusterStatus {
        this['lockScene'] = lockScene;
        return this;
    }
    public withLockSource(lockSource: string): AutopilotClusterStatus {
        this['lockSource'] = lockSource;
        return this;
    }
    public withLockSourceId(lockSourceId: string): AutopilotClusterStatus {
        this['lockSourceId'] = lockSourceId;
        return this;
    }
    public withDeleteOption(deleteOption: object): AutopilotClusterStatus {
        this['deleteOption'] = deleteOption;
        return this;
    }
    public withDeleteStatus(deleteStatus: object): AutopilotClusterStatus {
        this['deleteStatus'] = deleteStatus;
        return this;
    }
}