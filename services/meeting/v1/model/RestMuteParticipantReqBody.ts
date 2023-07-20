

export class RestMuteParticipantReqBody {
    public isMute?: number;
    public constructor(isMute?: number) { 
        this['isMute'] = isMute;
    }
    public withIsMute(isMute: number): RestMuteParticipantReqBody {
        this['isMute'] = isMute;
        return this;
    }
}