

export class UpdateStartedConfigReqBody {
    public lockSharing?: number;
    public callInRestriction?: number;
    public allowUnmuteByOneself?: number;
    public chatPermission?: number;
    public audienceCallInRestriction?: number;
    public clientRecMode?: number;
    public allowOpenCamera?: number;
    public allowRename?: number;
    public isLock?: number;
    public freeShare?: number;
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
    public withAllowUnmuteByOneself(allowUnmuteByOneself: number): UpdateStartedConfigReqBody {
        this['allowUnmuteByOneself'] = allowUnmuteByOneself;
        return this;
    }
    public withChatPermission(chatPermission: number): UpdateStartedConfigReqBody {
        this['chatPermission'] = chatPermission;
        return this;
    }
    public withAudienceCallInRestriction(audienceCallInRestriction: number): UpdateStartedConfigReqBody {
        this['audienceCallInRestriction'] = audienceCallInRestriction;
        return this;
    }
    public withClientRecMode(clientRecMode: number): UpdateStartedConfigReqBody {
        this['clientRecMode'] = clientRecMode;
        return this;
    }
    public withAllowOpenCamera(allowOpenCamera: number): UpdateStartedConfigReqBody {
        this['allowOpenCamera'] = allowOpenCamera;
        return this;
    }
    public withAllowRename(allowRename: number): UpdateStartedConfigReqBody {
        this['allowRename'] = allowRename;
        return this;
    }
    public withIsLock(isLock: number): UpdateStartedConfigReqBody {
        this['isLock'] = isLock;
        return this;
    }
    public withFreeShare(freeShare: number): UpdateStartedConfigReqBody {
        this['freeShare'] = freeShare;
        return this;
    }
}