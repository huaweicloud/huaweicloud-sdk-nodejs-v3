

export class RestConfConfigDTO {
    public isSendNotify?: boolean;
    public isSendSms?: boolean;
    public isSendCalendar?: boolean;
    public isAutoMute?: boolean;
    public isHardTerminalAutoMute?: boolean;
    public isGuestFreePwd?: boolean;
    public callInRestriction?: number;
    public allowGuestStartConf?: boolean;
    public guestPwd?: string;
    public vmrIDType?: number;
    public prolongLength?: number;
    public enableWaitingRoom?: boolean;
    public isHostCameraOn?: boolean;
    public isGuestCameraOn?: boolean;
    public constructor() { 
    }
    public withIsSendNotify(isSendNotify: boolean): RestConfConfigDTO {
        this['isSendNotify'] = isSendNotify;
        return this;
    }
    public withIsSendSms(isSendSms: boolean): RestConfConfigDTO {
        this['isSendSms'] = isSendSms;
        return this;
    }
    public withIsSendCalendar(isSendCalendar: boolean): RestConfConfigDTO {
        this['isSendCalendar'] = isSendCalendar;
        return this;
    }
    public withIsAutoMute(isAutoMute: boolean): RestConfConfigDTO {
        this['isAutoMute'] = isAutoMute;
        return this;
    }
    public withIsHardTerminalAutoMute(isHardTerminalAutoMute: boolean): RestConfConfigDTO {
        this['isHardTerminalAutoMute'] = isHardTerminalAutoMute;
        return this;
    }
    public withIsGuestFreePwd(isGuestFreePwd: boolean): RestConfConfigDTO {
        this['isGuestFreePwd'] = isGuestFreePwd;
        return this;
    }
    public withCallInRestriction(callInRestriction: number): RestConfConfigDTO {
        this['callInRestriction'] = callInRestriction;
        return this;
    }
    public withAllowGuestStartConf(allowGuestStartConf: boolean): RestConfConfigDTO {
        this['allowGuestStartConf'] = allowGuestStartConf;
        return this;
    }
    public withGuestPwd(guestPwd: string): RestConfConfigDTO {
        this['guestPwd'] = guestPwd;
        return this;
    }
    public withVmrIDType(vmrIDType: number): RestConfConfigDTO {
        this['vmrIDType'] = vmrIDType;
        return this;
    }
    public withProlongLength(prolongLength: number): RestConfConfigDTO {
        this['prolongLength'] = prolongLength;
        return this;
    }
    public withEnableWaitingRoom(enableWaitingRoom: boolean): RestConfConfigDTO {
        this['enableWaitingRoom'] = enableWaitingRoom;
        return this;
    }
    public withIsHostCameraOn(isHostCameraOn: boolean): RestConfConfigDTO {
        this['isHostCameraOn'] = isHostCameraOn;
        return this;
    }
    public withIsGuestCameraOn(isGuestCameraOn: boolean): RestConfConfigDTO {
        this['isGuestCameraOn'] = isGuestCameraOn;
        return this;
    }
}