import { VolumeType } from './VolumeType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CinderListVolumeTypesResponse extends SdkResponse {
    private 'volume_types'?: Array<VolumeType> | undefined;
    public constructor() { 
        super();
    }
    public withVolumeTypes(volumeTypes: Array<VolumeType>): CinderListVolumeTypesResponse {
        this['volume_types'] = volumeTypes;
        return this;
    }
    public set volumeTypes(volumeTypes: Array<VolumeType> | undefined) {
        this['volume_types'] = volumeTypes;
    }
    public get volumeTypes() {
        return this['volume_types'];
    }
}