import { VolumeType } from './VolumeType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CinderListVolumeTypesResponse extends SdkResponse {
    private 'volume_types'?: Array<VolumeType>;
    public constructor() { 
        super();
    }
    public withVolumeTypes(volumeTypes: Array<VolumeType>): CinderListVolumeTypesResponse {
        this['volume_types'] = volumeTypes;
        return this;
    }
    public set volumeTypes(volumeTypes: Array<VolumeType>  | undefined) {
        this['volume_types'] = volumeTypes;
    }
    public get volumeTypes(): Array<VolumeType> | undefined {
        return this['volume_types'];
    }
}