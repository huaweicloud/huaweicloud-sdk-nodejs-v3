import { MetaData } from './MetaData';


export class PlayInfo {
    private 'play_type'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    public url?: string;
    public encrypted?: number;
    private 'meta_data'?: MetaData;
    public constructor() { 
    }
    public withPlayType(playType: string): PlayInfo {
        this['play_type'] = playType;
        return this;
    }
    public set playType(playType: string  | undefined) {
        this['play_type'] = playType;
    }
    public get playType(): string | undefined {
        return this['play_type'];
    }
    public withGroupId(groupId: string): PlayInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): PlayInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
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
    public set metaData(metaData: MetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetaData | undefined {
        return this['meta_data'];
    }
}