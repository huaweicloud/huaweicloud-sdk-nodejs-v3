import { ShowAudienceCountInfo } from './ShowAudienceCountInfo';


export class CycleSubConfConfigDTO {
    public callInRestriction?: number;
    public audienceCallInRestriction?: number;
    public allowGuestStartConf?: boolean;
    public enableWaitingRoom?: boolean;
    public showAudienceCountInfo?: ShowAudienceCountInfo;
    public constructor() { 
    }
    public withCallInRestriction(callInRestriction: number): CycleSubConfConfigDTO {
        this['callInRestriction'] = callInRestriction;
        return this;
    }
    public withAudienceCallInRestriction(audienceCallInRestriction: number): CycleSubConfConfigDTO {
        this['audienceCallInRestriction'] = audienceCallInRestriction;
        return this;
    }
    public withAllowGuestStartConf(allowGuestStartConf: boolean): CycleSubConfConfigDTO {
        this['allowGuestStartConf'] = allowGuestStartConf;
        return this;
    }
    public withEnableWaitingRoom(enableWaitingRoom: boolean): CycleSubConfConfigDTO {
        this['enableWaitingRoom'] = enableWaitingRoom;
        return this;
    }
    public withShowAudienceCountInfo(showAudienceCountInfo: ShowAudienceCountInfo): CycleSubConfConfigDTO {
        this['showAudienceCountInfo'] = showAudienceCountInfo;
        return this;
    }
}