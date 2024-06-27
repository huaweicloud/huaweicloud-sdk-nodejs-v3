import { MediaQos } from './MediaQos';


export class UserQos {
    public participantID?: string;
    public netRate?: string;
    public bandWidthUp?: number;
    public bandWidthDown?: number;
    public lostPacketRateUp?: number;
    public lostPacketRateDown?: number;
    public delay?: number;
    public videoQos?: MediaQos;
    public audioQos?: MediaQos;
    public auxQos?: MediaQos;
    public constructor() { 
    }
    public withParticipantID(participantID: string): UserQos {
        this['participantID'] = participantID;
        return this;
    }
    public withNetRate(netRate: string): UserQos {
        this['netRate'] = netRate;
        return this;
    }
    public withBandWidthUp(bandWidthUp: number): UserQos {
        this['bandWidthUp'] = bandWidthUp;
        return this;
    }
    public withBandWidthDown(bandWidthDown: number): UserQos {
        this['bandWidthDown'] = bandWidthDown;
        return this;
    }
    public withLostPacketRateUp(lostPacketRateUp: number): UserQos {
        this['lostPacketRateUp'] = lostPacketRateUp;
        return this;
    }
    public withLostPacketRateDown(lostPacketRateDown: number): UserQos {
        this['lostPacketRateDown'] = lostPacketRateDown;
        return this;
    }
    public withDelay(delay: number): UserQos {
        this['delay'] = delay;
        return this;
    }
    public withVideoQos(videoQos: MediaQos): UserQos {
        this['videoQos'] = videoQos;
        return this;
    }
    public withAudioQos(audioQos: MediaQos): UserQos {
        this['audioQos'] = audioQos;
        return this;
    }
    public withAuxQos(auxQos: MediaQos): UserQos {
        this['auxQos'] = auxQos;
        return this;
    }
}