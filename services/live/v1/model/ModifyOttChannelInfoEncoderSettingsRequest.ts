import { ModifyOttChannelEncoderSettings } from './ModifyOttChannelEncoderSettings';


export class ModifyOttChannelInfoEncoderSettingsRequest {
    private 'Access-Control-Allow-Internal'?: string;
    private 'Access-Control-Allow-External'?: string;
    public body?: ModifyOttChannelEncoderSettings;
    public constructor() { 
    }
    public withAccessControlAllowInternal(accessControlAllowInternal: string): ModifyOttChannelInfoEncoderSettingsRequest {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
        return this;
    }
    public set accessControlAllowInternal(accessControlAllowInternal: string  | undefined) {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
    }
    public get accessControlAllowInternal(): string | undefined {
        return this['Access-Control-Allow-Internal'];
    }
    public withAccessControlAllowExternal(accessControlAllowExternal: string): ModifyOttChannelInfoEncoderSettingsRequest {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
        return this;
    }
    public set accessControlAllowExternal(accessControlAllowExternal: string  | undefined) {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
    }
    public get accessControlAllowExternal(): string | undefined {
        return this['Access-Control-Allow-External'];
    }
    public withBody(body: ModifyOttChannelEncoderSettings): ModifyOttChannelInfoEncoderSettingsRequest {
        this['body'] = body;
        return this;
    }
}