import { Link } from './Link';
import { VolumeDetail } from './VolumeDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVolumesResponse extends SdkResponse {
    public count?: number;
    private 'volumes_links'?: Array<Link> | undefined;
    public volumes?: Array<VolumeDetail>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListVolumesResponse {
        this['count'] = count;
        return this;
    }
    public withVolumesLinks(volumesLinks: Array<Link>): ListVolumesResponse {
        this['volumes_links'] = volumesLinks;
        return this;
    }
    public set volumesLinks(volumesLinks: Array<Link> | undefined) {
        this['volumes_links'] = volumesLinks;
    }
    public get volumesLinks() {
        return this['volumes_links'];
    }
    public withVolumes(volumes: Array<VolumeDetail>): ListVolumesResponse {
        this['volumes'] = volumes;
        return this;
    }
}