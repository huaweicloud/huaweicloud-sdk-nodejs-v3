

export class RestMuteParticipantReqBody {
    public isMute: number;
    public constructor(isMute?: any) { 
        this['isMute'] = isMute;
    }
    public withIsMute(isMute: number): RestMuteParticipantReqBody {
        this['isMute'] = isMute;
        return this;
    }
}