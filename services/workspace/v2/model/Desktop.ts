

export class Desktop {
    private 'user_name'?: string;
    public domain?: string;
    private 'user_email'?: string;
    private 'user_phone'?: string;
    private 'user_group'?: string;
    private 'computer_name'?: string;
    private 'os_host_name'?: string;
    private 'desktop_name_prefix'?: string;
    private 'copy_volume_desktop_id'?: string;
    private 'copy_volume_ids'?: Array<string>;
    private 'if_delete_old_desktop'?: boolean;
    public constructor(userName?: string) { 
        this['user_name'] = userName;
    }
    public withUserName(userName: string): Desktop {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDomain(domain: string): Desktop {
        this['domain'] = domain;
        return this;
    }
    public withUserEmail(userEmail: string): Desktop {
        this['user_email'] = userEmail;
        return this;
    }
    public set userEmail(userEmail: string  | undefined) {
        this['user_email'] = userEmail;
    }
    public get userEmail(): string | undefined {
        return this['user_email'];
    }
    public withUserPhone(userPhone: string): Desktop {
        this['user_phone'] = userPhone;
        return this;
    }
    public set userPhone(userPhone: string  | undefined) {
        this['user_phone'] = userPhone;
    }
    public get userPhone(): string | undefined {
        return this['user_phone'];
    }
    public withUserGroup(userGroup: string): Desktop {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: string  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): string | undefined {
        return this['user_group'];
    }
    public withComputerName(computerName: string): Desktop {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withOsHostName(osHostName: string): Desktop {
        this['os_host_name'] = osHostName;
        return this;
    }
    public set osHostName(osHostName: string  | undefined) {
        this['os_host_name'] = osHostName;
    }
    public get osHostName(): string | undefined {
        return this['os_host_name'];
    }
    public withDesktopNamePrefix(desktopNamePrefix: string): Desktop {
        this['desktop_name_prefix'] = desktopNamePrefix;
        return this;
    }
    public set desktopNamePrefix(desktopNamePrefix: string  | undefined) {
        this['desktop_name_prefix'] = desktopNamePrefix;
    }
    public get desktopNamePrefix(): string | undefined {
        return this['desktop_name_prefix'];
    }
    public withCopyVolumeDesktopId(copyVolumeDesktopId: string): Desktop {
        this['copy_volume_desktop_id'] = copyVolumeDesktopId;
        return this;
    }
    public set copyVolumeDesktopId(copyVolumeDesktopId: string  | undefined) {
        this['copy_volume_desktop_id'] = copyVolumeDesktopId;
    }
    public get copyVolumeDesktopId(): string | undefined {
        return this['copy_volume_desktop_id'];
    }
    public withCopyVolumeIds(copyVolumeIds: Array<string>): Desktop {
        this['copy_volume_ids'] = copyVolumeIds;
        return this;
    }
    public set copyVolumeIds(copyVolumeIds: Array<string>  | undefined) {
        this['copy_volume_ids'] = copyVolumeIds;
    }
    public get copyVolumeIds(): Array<string> | undefined {
        return this['copy_volume_ids'];
    }
    public withIfDeleteOldDesktop(ifDeleteOldDesktop: boolean): Desktop {
        this['if_delete_old_desktop'] = ifDeleteOldDesktop;
        return this;
    }
    public set ifDeleteOldDesktop(ifDeleteOldDesktop: boolean  | undefined) {
        this['if_delete_old_desktop'] = ifDeleteOldDesktop;
    }
    public get ifDeleteOldDesktop(): boolean | undefined {
        return this['if_delete_old_desktop'];
    }
}