import { ModifyOttChannelRecordSettings } from './ModifyOttChannelRecordSettings';


export class ModifyOttChannelInfoRecordSettingsRequest {
    private 'Access-Control-Allow-Internal'?: string;
    private 'Access-Control-Allow-External'?: string;
    public body?: ModifyOttChannelRecordSettings;
    public constructor() { 
    }
    public withAccessControlAllowInternal(accessControlAllowInternal: string): ModifyOttChannelInfoRecordSettingsRequest {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
        return this;
    }
    public set accessControlAllowInternal(accessControlAllowInternal: string  | undefined) {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
    }
    public get accessControlAllowInternal(): string | undefined {
        return this['Access-Control-Allow-Internal'];
    }
    public withAccessControlAllowExternal(accessControlAllowExternal: string): ModifyOttChannelInfoRecordSettingsRequest {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
        return this;
    }
    public set accessControlAllowExternal(accessControlAllowExternal: string  | undefined) {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
    }
    public get accessControlAllowExternal(): string | undefined {
        return this['Access-Control-Allow-External'];
    }
    public withBody(body: ModifyOttChannelRecordSettings): ModifyOttChannelInfoRecordSettingsRequest {
        this['body'] = body;
        return this;
    }
}