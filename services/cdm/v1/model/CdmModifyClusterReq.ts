

export class CdmModifyClusterReq {
    public autoOff?: boolean;
    public scheduleBootOff?: boolean;
    public scheduleBootTime?: string;
    public scheduleOffTime?: string;
    public autoRemind?: boolean;
    public phoneNum?: string;
    public email?: string;
    public constructor() { 
    }
    public withAutoOff(autoOff: boolean): CdmModifyClusterReq {
        this['autoOff'] = autoOff;
        return this;
    }
    public withScheduleBootOff(scheduleBootOff: boolean): CdmModifyClusterReq {
        this['scheduleBootOff'] = scheduleBootOff;
        return this;
    }
    public withScheduleBootTime(scheduleBootTime: string): CdmModifyClusterReq {
        this['scheduleBootTime'] = scheduleBootTime;
        return this;
    }
    public withScheduleOffTime(scheduleOffTime: string): CdmModifyClusterReq {
        this['scheduleOffTime'] = scheduleOffTime;
        return this;
    }
    public withAutoRemind(autoRemind: boolean): CdmModifyClusterReq {
        this['autoRemind'] = autoRemind;
        return this;
    }
    public withPhoneNum(phoneNum: string): CdmModifyClusterReq {
        this['phoneNum'] = phoneNum;
        return this;
    }
    public withEmail(email: string): CdmModifyClusterReq {
        this['email'] = email;
        return this;
    }
}