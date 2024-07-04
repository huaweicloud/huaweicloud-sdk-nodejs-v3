

export class UserSyncReq {
    public action?: UserSyncReqActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: UserSyncReqActionEnum | string): UserSyncReq {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UserSyncReqActionEnum {
    STARTSYNCTAURUSACCOUNT = 'startSyncTaurusAccount',
    STOPSYNCTAURUSACCOUNT = 'stopSyncTaurusAccount'
}
