

export class RealTimeParticipant {
    public pid?: string;
    public name?: string;
    public phone?: string;
    public state?: number;
    public video?: number;
    public mute?: number;
    public hand?: number;
    public constructor() { 
    }
    public withPid(pid: string): RealTimeParticipant {
        this['pid'] = pid;
        return this;
    }
    public withName(name: string): RealTimeParticipant {
        this['name'] = name;
        return this;
    }
    public withPhone(phone: string): RealTimeParticipant {
        this['phone'] = phone;
        return this;
    }
    public withState(state: number): RealTimeParticipant {
        this['state'] = state;
        return this;
    }
    public withVideo(video: number): RealTimeParticipant {
        this['video'] = video;
        return this;
    }
    public withMute(mute: number): RealTimeParticipant {
        this['mute'] = mute;
        return this;
    }
    public withHand(hand: number): RealTimeParticipant {
        this['hand'] = hand;
        return this;
    }
}