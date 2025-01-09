import { NatMappingConfig } from './NatMappingConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNatMappingConfigsResponse extends SdkResponse {
    private 'site_id'?: string;
    private 'nat_on'?: boolean;
    private 'vag_ips'?: Array<string>;
    private 'nat_vag_maps'?: Array<NatMappingConfig>;
    public constructor() { 
        super();
    }
    public withSiteId(siteId: string): ListNatMappingConfigsResponse {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withNatOn(natOn: boolean): ListNatMappingConfigsResponse {
        this['nat_on'] = natOn;
        return this;
    }
    public set natOn(natOn: boolean  | undefined) {
        this['nat_on'] = natOn;
    }
    public get natOn(): boolean | undefined {
        return this['nat_on'];
    }
    public withVagIps(vagIps: Array<string>): ListNatMappingConfigsResponse {
        this['vag_ips'] = vagIps;
        return this;
    }
    public set vagIps(vagIps: Array<string>  | undefined) {
        this['vag_ips'] = vagIps;
    }
    public get vagIps(): Array<string> | undefined {
        return this['vag_ips'];
    }
    public withNatVagMaps(natVagMaps: Array<NatMappingConfig>): ListNatMappingConfigsResponse {
        this['nat_vag_maps'] = natVagMaps;
        return this;
    }
    public set natVagMaps(natVagMaps: Array<NatMappingConfig>  | undefined) {
        this['nat_vag_maps'] = natVagMaps;
    }
    public get natVagMaps(): Array<NatMappingConfig> | undefined {
        return this['nat_vag_maps'];
    }
}