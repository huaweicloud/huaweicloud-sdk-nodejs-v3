import { GroupDiskInfoResult } from './GroupDiskInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowShardDiskMessagesResponse extends SdkResponse {
    private 'group_disk_infos'?: Array<GroupDiskInfoResult>;
    public constructor() { 
        super();
    }
    public withGroupDiskInfos(groupDiskInfos: Array<GroupDiskInfoResult>): ShowShardDiskMessagesResponse {
        this['group_disk_infos'] = groupDiskInfos;
        return this;
    }
    public set groupDiskInfos(groupDiskInfos: Array<GroupDiskInfoResult>  | undefined) {
        this['group_disk_infos'] = groupDiskInfos;
    }
    public get groupDiskInfos(): Array<GroupDiskInfoResult> | undefined {
        return this['group_disk_infos'];
    }
}