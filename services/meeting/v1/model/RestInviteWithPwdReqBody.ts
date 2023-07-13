

export class RestInviteWithPwdReqBody {
    public callNum: string;
    public orgID?: string;
    public confID: string;
    public pwd: string;
    public numBelongsType?: number;
    public isNotOverlayPidName?: boolean;
    public constructor(callNum?: any, confID?: any, pwd?: any) { 
        this['callNum'] = callNum;
        this['confID'] = confID;
        this['pwd'] = pwd;
    }
    public withCallNum(callNum: string): RestInviteWithPwdReqBody {
        this['callNum'] = callNum;
        return this;
    }
    public withOrgID(orgID: string): RestInviteWithPwdReqBody {
        this['orgID'] = orgID;
        return this;
    }
    public withConfID(confID: string): RestInviteWithPwdReqBody {
        this['confID'] = confID;
        return this;
    }
    public withPwd(pwd: string): RestInviteWithPwdReqBody {
        this['pwd'] = pwd;
        return this;
    }
    public withNumBelongsType(numBelongsType: number): RestInviteWithPwdReqBody {
        this['numBelongsType'] = numBelongsType;
        return this;
    }
    public withIsNotOverlayPidName(isNotOverlayPidName: boolean): RestInviteWithPwdReqBody {
        this['isNotOverlayPidName'] = isNotOverlayPidName;
        return this;
    }
}