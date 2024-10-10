

export class LiveRoomInteractionConfig {
    private 'play_type'?: LiveRoomInteractionConfigPlayTypeEnum | string;
    private 'ignore_current_sentence'?: boolean;
    public constructor() { 
    }
    public withPlayType(playType: LiveRoomInteractionConfigPlayTypeEnum | string): LiveRoomInteractionConfig {
        this['play_type'] = playType;
        return this;
    }
    public set playType(playType: LiveRoomInteractionConfigPlayTypeEnum | string  | undefined) {
        this['play_type'] = playType;
    }
    public get playType(): LiveRoomInteractionConfigPlayTypeEnum | string | undefined {
        return this['play_type'];
    }
    public withIgnoreCurrentSentence(ignoreCurrentSentence: boolean): LiveRoomInteractionConfig {
        this['ignore_current_sentence'] = ignoreCurrentSentence;
        return this;
    }
    public set ignoreCurrentSentence(ignoreCurrentSentence: boolean  | undefined) {
        this['ignore_current_sentence'] = ignoreCurrentSentence;
    }
    public get ignoreCurrentSentence(): boolean | undefined {
        return this['ignore_current_sentence'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LiveRoomInteractionConfigPlayTypeEnum {
    APPEND = 'APPEND',
    INSERT = 'INSERT',
    PLAY_NOW = 'PLAY_NOW'
}
