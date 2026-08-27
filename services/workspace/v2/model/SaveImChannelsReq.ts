import { ImChannelConfig } from './ImChannelConfig';


export class SaveImChannelsReq {
    public id?: string;
    private 'im_channels'?: Array<ImChannelConfig>;
    public constructor(id?: string, imChannels?: Array<ImChannelConfig>) { 
        this['id'] = id;
        this['im_channels'] = imChannels;
    }
    public withId(id: string): SaveImChannelsReq {
        this['id'] = id;
        return this;
    }
    public withImChannels(imChannels: Array<ImChannelConfig>): SaveImChannelsReq {
        this['im_channels'] = imChannels;
        return this;
    }
    public set imChannels(imChannels: Array<ImChannelConfig>  | undefined) {
        this['im_channels'] = imChannels;
    }
    public get imChannels(): Array<ImChannelConfig> | undefined {
        return this['im_channels'];
    }
}