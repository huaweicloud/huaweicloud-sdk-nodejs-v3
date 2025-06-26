import { VolumeTypeInfo } from './VolumeTypeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVolumeTypeResponse extends SdkResponse {
    private 'volume_types'?: Array<VolumeTypeInfo>;
    public constructor() { 
        super();
    }
    public withVolumeTypes(volumeTypes: Array<VolumeTypeInfo>): ListVolumeTypeResponse {
        this['volume_types'] = volumeTypes;
        return this;
    }
    public set volumeTypes(volumeTypes: Array<VolumeTypeInfo>  | undefined) {
        this['volume_types'] = volumeTypes;
    }
    public get volumeTypes(): Array<VolumeTypeInfo> | undefined {
        return this['volume_types'];
    }
}