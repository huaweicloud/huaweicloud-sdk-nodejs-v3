import { GeoBlockingConfigInfo } from './GeoBlockingConfigInfo';


export class UpdateGeoBlockingConfigRequest {
    private 'play_domain'?: string;
    public body?: GeoBlockingConfigInfo;
    public constructor(playDomain?: string) { 
        this['play_domain'] = playDomain;
    }
    public withPlayDomain(playDomain: string): UpdateGeoBlockingConfigRequest {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string  | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain(): string | undefined {
        return this['play_domain'];
    }
    public withBody(body: GeoBlockingConfigInfo): UpdateGeoBlockingConfigRequest {
        this['body'] = body;
        return this;
    }
}