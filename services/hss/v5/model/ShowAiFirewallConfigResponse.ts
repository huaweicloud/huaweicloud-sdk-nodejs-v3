
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAiFirewallConfigResponse extends SdkResponse {
    private 'source_id'?: string;
    private 'source_secret'?: string;
    private 'app_id'?: string;
    public constructor() { 
        super();
    }
    public withSourceId(sourceId: string): ShowAiFirewallConfigResponse {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withSourceSecret(sourceSecret: string): ShowAiFirewallConfigResponse {
        this['source_secret'] = sourceSecret;
        return this;
    }
    public set sourceSecret(sourceSecret: string  | undefined) {
        this['source_secret'] = sourceSecret;
    }
    public get sourceSecret(): string | undefined {
        return this['source_secret'];
    }
    public withAppId(appId: string): ShowAiFirewallConfigResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}