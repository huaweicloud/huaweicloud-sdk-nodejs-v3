
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRedislogDownloadLinkResponse extends SdkResponse {
    public id?: string;
    private 'backup_id'?: string | undefined;
    public link?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateRedislogDownloadLinkResponse {
        this['id'] = id;
        return this;
    }
    public withBackupId(backupId: string): CreateRedislogDownloadLinkResponse {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withLink(link: string): CreateRedislogDownloadLinkResponse {
        this['link'] = link;
        return this;
    }
}