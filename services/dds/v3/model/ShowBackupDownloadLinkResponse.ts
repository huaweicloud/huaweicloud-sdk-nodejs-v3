import { GetBackupDownloadLinkResponseBodyFiles } from './GetBackupDownloadLinkResponseBodyFiles';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupDownloadLinkResponse extends SdkResponse {
    public files?: Array<GetBackupDownloadLinkResponseBodyFiles>;
    public bucket?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    public constructor() { 
        super();
    }
    public withFiles(files: Array<GetBackupDownloadLinkResponseBodyFiles>): ShowBackupDownloadLinkResponse {
        this['files'] = files;
        return this;
    }
    public withBucket(bucket: string): ShowBackupDownloadLinkResponse {
        this['bucket'] = bucket;
        return this;
    }
    public withGroupId(groupId: string): ShowBackupDownloadLinkResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): ShowBackupDownloadLinkResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
}