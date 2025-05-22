import { DiskInfoResponse } from './DiskInfoResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterVolumeResponse extends SdkResponse {
    public duplicate?: number;
    private 'disk_info_list'?: Array<DiskInfoResponse>;
    public constructor() { 
        super();
    }
    public withDuplicate(duplicate: number): ShowClusterVolumeResponse {
        this['duplicate'] = duplicate;
        return this;
    }
    public withDiskInfoList(diskInfoList: Array<DiskInfoResponse>): ShowClusterVolumeResponse {
        this['disk_info_list'] = diskInfoList;
        return this;
    }
    public set diskInfoList(diskInfoList: Array<DiskInfoResponse>  | undefined) {
        this['disk_info_list'] = diskInfoList;
    }
    public get diskInfoList(): Array<DiskInfoResponse> | undefined {
        return this['disk_info_list'];
    }
}