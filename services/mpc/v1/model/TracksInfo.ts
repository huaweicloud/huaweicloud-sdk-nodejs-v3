

export class TracksInfo {
    private 'channel_layout'?: string;
    public language?: string;
    public constructor() { 
    }
    public withChannelLayout(channelLayout: string): TracksInfo {
        this['channel_layout'] = channelLayout;
        return this;
    }
    public set channelLayout(channelLayout: string  | undefined) {
        this['channel_layout'] = channelLayout;
    }
    public get channelLayout(): string | undefined {
        return this['channel_layout'];
    }
    public withLanguage(language: string): TracksInfo {
        this['language'] = language;
        return this;
    }
}