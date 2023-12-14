

export class RestSetAttendeeLanChannelBody {
    public participantIDs?: Array<string>;
    public listenLanChannel?: string;
    public speakLanChannel?: string;
    public includeOriginalVoice?: number;
    public constructor(listenLanChannel?: string, speakLanChannel?: string) { 
        this['listenLanChannel'] = listenLanChannel;
        this['speakLanChannel'] = speakLanChannel;
    }
    public withParticipantIDs(participantIDs: Array<string>): RestSetAttendeeLanChannelBody {
        this['participantIDs'] = participantIDs;
        return this;
    }
    public withListenLanChannel(listenLanChannel: string): RestSetAttendeeLanChannelBody {
        this['listenLanChannel'] = listenLanChannel;
        return this;
    }
    public withSpeakLanChannel(speakLanChannel: string): RestSetAttendeeLanChannelBody {
        this['speakLanChannel'] = speakLanChannel;
        return this;
    }
    public withIncludeOriginalVoice(includeOriginalVoice: number): RestSetAttendeeLanChannelBody {
        this['includeOriginalVoice'] = includeOriginalVoice;
        return this;
    }
}