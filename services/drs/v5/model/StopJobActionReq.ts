

export class StopJobActionReq {
    private 'is_force_stop'?: boolean;
    public constructor() { 
    }
    public withIsForceStop(isForceStop: boolean): StopJobActionReq {
        this['is_force_stop'] = isForceStop;
        return this;
    }
    public set isForceStop(isForceStop: boolean  | undefined) {
        this['is_force_stop'] = isForceStop;
    }
    public get isForceStop(): boolean | undefined {
        return this['is_force_stop'];
    }
}