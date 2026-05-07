
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainStreamBackupResponse extends SdkResponse {
    private 'publish_domain'?: string;
    private 'stream_backup_enable'?: boolean;
    public constructor() { 
        super();
    }
    public withPublishDomain(publishDomain: string): ShowDomainStreamBackupResponse {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withStreamBackupEnable(streamBackupEnable: boolean): ShowDomainStreamBackupResponse {
        this['stream_backup_enable'] = streamBackupEnable;
        return this;
    }
    public set streamBackupEnable(streamBackupEnable: boolean  | undefined) {
        this['stream_backup_enable'] = streamBackupEnable;
    }
    public get streamBackupEnable(): boolean | undefined {
        return this['stream_backup_enable'];
    }
}