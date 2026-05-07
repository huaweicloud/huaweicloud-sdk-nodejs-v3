

export class DomainStreamBackupInfo {
    private 'publish_domain'?: string;
    private 'stream_backup_enable'?: boolean;
    public constructor(publishDomain?: string, streamBackupEnable?: boolean) { 
        this['publish_domain'] = publishDomain;
        this['stream_backup_enable'] = streamBackupEnable;
    }
    public withPublishDomain(publishDomain: string): DomainStreamBackupInfo {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withStreamBackupEnable(streamBackupEnable: boolean): DomainStreamBackupInfo {
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