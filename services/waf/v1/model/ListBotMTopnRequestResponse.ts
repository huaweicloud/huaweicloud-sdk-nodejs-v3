import { TypedStatBucket } from './TypedStatBucket';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBotMTopnRequestResponse extends SdkResponse {
    private 'topn_known_bots'?: Array<TypedStatBucket>;
    private 'topn_domains'?: Array<TypedStatBucket>;
    private 'topn_src_ips'?: Array<TypedStatBucket>;
    private 'topn_src_ip_asns'?: Array<TypedStatBucket>;
    private 'topn_src_ip_geolocations'?: Array<TypedStatBucket>;
    private 'topn_ja4_fps'?: Array<TypedStatBucket>;
    public constructor() { 
        super();
    }
    public withTopnKnownBots(topnKnownBots: Array<TypedStatBucket>): ListBotMTopnRequestResponse {
        this['topn_known_bots'] = topnKnownBots;
        return this;
    }
    public set topnKnownBots(topnKnownBots: Array<TypedStatBucket>  | undefined) {
        this['topn_known_bots'] = topnKnownBots;
    }
    public get topnKnownBots(): Array<TypedStatBucket> | undefined {
        return this['topn_known_bots'];
    }
    public withTopnDomains(topnDomains: Array<TypedStatBucket>): ListBotMTopnRequestResponse {
        this['topn_domains'] = topnDomains;
        return this;
    }
    public set topnDomains(topnDomains: Array<TypedStatBucket>  | undefined) {
        this['topn_domains'] = topnDomains;
    }
    public get topnDomains(): Array<TypedStatBucket> | undefined {
        return this['topn_domains'];
    }
    public withTopnSrcIps(topnSrcIps: Array<TypedStatBucket>): ListBotMTopnRequestResponse {
        this['topn_src_ips'] = topnSrcIps;
        return this;
    }
    public set topnSrcIps(topnSrcIps: Array<TypedStatBucket>  | undefined) {
        this['topn_src_ips'] = topnSrcIps;
    }
    public get topnSrcIps(): Array<TypedStatBucket> | undefined {
        return this['topn_src_ips'];
    }
    public withTopnSrcIpAsns(topnSrcIpAsns: Array<TypedStatBucket>): ListBotMTopnRequestResponse {
        this['topn_src_ip_asns'] = topnSrcIpAsns;
        return this;
    }
    public set topnSrcIpAsns(topnSrcIpAsns: Array<TypedStatBucket>  | undefined) {
        this['topn_src_ip_asns'] = topnSrcIpAsns;
    }
    public get topnSrcIpAsns(): Array<TypedStatBucket> | undefined {
        return this['topn_src_ip_asns'];
    }
    public withTopnSrcIpGeolocations(topnSrcIpGeolocations: Array<TypedStatBucket>): ListBotMTopnRequestResponse {
        this['topn_src_ip_geolocations'] = topnSrcIpGeolocations;
        return this;
    }
    public set topnSrcIpGeolocations(topnSrcIpGeolocations: Array<TypedStatBucket>  | undefined) {
        this['topn_src_ip_geolocations'] = topnSrcIpGeolocations;
    }
    public get topnSrcIpGeolocations(): Array<TypedStatBucket> | undefined {
        return this['topn_src_ip_geolocations'];
    }
    public withTopnJa4Fps(topnJa4Fps: Array<TypedStatBucket>): ListBotMTopnRequestResponse {
        this['topn_ja4_fps'] = topnJa4Fps;
        return this;
    }
    public set topnJa4Fps(topnJa4Fps: Array<TypedStatBucket>  | undefined) {
        this['topn_ja4_fps'] = topnJa4Fps;
    }
    public get topnJa4Fps(): Array<TypedStatBucket> | undefined {
        return this['topn_ja4_fps'];
    }
}