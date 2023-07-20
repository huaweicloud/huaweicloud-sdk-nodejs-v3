import { BandwidthPkgPage } from './BandwidthPkgPage';
import { BandwidthPkgResp } from './BandwidthPkgResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBandwidthPkgResponse extends SdkResponse {
    public bandwidthpkgs?: Array<BandwidthPkgResp>;
    private 'bandwidthpkgs_links'?: Array<BandwidthPkgPage>;
    public constructor() { 
        super();
    }
    public withBandwidthpkgs(bandwidthpkgs: Array<BandwidthPkgResp>): ListBandwidthPkgResponse {
        this['bandwidthpkgs'] = bandwidthpkgs;
        return this;
    }
    public withBandwidthpkgsLinks(bandwidthpkgsLinks: Array<BandwidthPkgPage>): ListBandwidthPkgResponse {
        this['bandwidthpkgs_links'] = bandwidthpkgsLinks;
        return this;
    }
    public set bandwidthpkgsLinks(bandwidthpkgsLinks: Array<BandwidthPkgPage>  | undefined) {
        this['bandwidthpkgs_links'] = bandwidthpkgsLinks;
    }
    public get bandwidthpkgsLinks(): Array<BandwidthPkgPage> | undefined {
        return this['bandwidthpkgs_links'];
    }
}