import { DiskType } from './DiskType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDiskTypeResponse extends SdkResponse {
    public diskTypes?: Array<DiskType>;
    public constructor() { 
        super();
    }
    public withDiskTypes(diskTypes: Array<DiskType>): ListDiskTypeResponse {
        this['diskTypes'] = diskTypes;
        return this;
    }
}