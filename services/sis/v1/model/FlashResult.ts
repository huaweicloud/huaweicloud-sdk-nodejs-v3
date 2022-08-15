import { Sentences } from './Sentences';


export class FlashResult {
    private 'channel_id'?: number | undefined;
    public sentences?: Array<Sentences>;
    public constructor() { 
    }
    public withChannelId(channelId: number): FlashResult {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: number | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId() {
        return this['channel_id'];
    }
    public withSentences(sentences: Array<Sentences>): FlashResult {
        this['sentences'] = sentences;
        return this;
    }
}