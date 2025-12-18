

export class GetBackupDownloadLinkResponseBodyFiles {
    public name?: string;
    public size?: number;
    private 'download_link'?: string;
    private 'link_expired_time'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    public constructor(name?: string, size?: number, downloadLink?: string, linkExpiredTime?: string) { 
        this['name'] = name;
        this['size'] = size;
        this['download_link'] = downloadLink;
        this['link_expired_time'] = linkExpiredTime;
    }
    public withName(name: string): GetBackupDownloadLinkResponseBodyFiles {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): GetBackupDownloadLinkResponseBodyFiles {
        this['size'] = size;
        return this;
    }
    public withDownloadLink(downloadLink: string): GetBackupDownloadLinkResponseBodyFiles {
        this['download_link'] = downloadLink;
        return this;
    }
    public set downloadLink(downloadLink: string  | undefined) {
        this['download_link'] = downloadLink;
    }
    public get downloadLink(): string | undefined {
        return this['download_link'];
    }
    public withLinkExpiredTime(linkExpiredTime: string): GetBackupDownloadLinkResponseBodyFiles {
        this['link_expired_time'] = linkExpiredTime;
        return this;
    }
    public set linkExpiredTime(linkExpiredTime: string  | undefined) {
        this['link_expired_time'] = linkExpiredTime;
    }
    public get linkExpiredTime(): string | undefined {
        return this['link_expired_time'];
    }
    public withGroupId(groupId: string): GetBackupDownloadLinkResponseBodyFiles {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): GetBackupDownloadLinkResponseBodyFiles {
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