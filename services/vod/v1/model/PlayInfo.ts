import { MetaData } from './MetaData';


export class PlayInfo {
    private 'play_type'?: string | undefined;
    public url?: string;
    public encrypted?: number;
    private 'meta_data'?: MetaData | undefined;
    public constructor() { 
    }
    public withPlayType(playType: string): PlayInfo {
        this['play_type'] = playType;
        return this;
    }
    public set playType(playType: string | undefined) {
        this['play_type'] = playType;
    }
    public get playType() {
        return this['play_type'];
    }
    public withUrl(url: string): PlayInfo {
        this['url'] = url;
        return this;
    }
    public withEncrypted(encrypted: number): PlayInfo {
        this['encrypted'] = encrypted;
        return this;
    }
    public withMetaData(metaData: MetaData): PlayInfo {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaData | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData() {
        return this['meta_data'];
    }
}