

export class UpdateStartedConfigReqBody {
    public lockSharing?: number;
    public callInRestriction?: number;
    public constructor() { 
    }
    public withLockSharing(lockSharing: number): UpdateStartedConfigReqBody {
        this['lockSharing'] = lockSharing;
        return this;
    }
    public withCallInRestriction(callInRestriction: number): UpdateStartedConfigReqBody {
        this['callInRestriction'] = callInRestriction;
        return this;
    }
}