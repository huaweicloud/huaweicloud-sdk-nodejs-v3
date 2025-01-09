

export class DeleteDesktopsReq {
    private 'desktop_ids'?: Array<string>;
    private 'delete_users'?: boolean;
    private 'email_notification'?: boolean;
    private 'is_force_delete'?: boolean;
    public constructor(desktopIds?: Array<string>) { 
        this['desktop_ids'] = desktopIds;
    }
    public withDesktopIds(desktopIds: Array<string>): DeleteDesktopsReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withDeleteUsers(deleteUsers: boolean): DeleteDesktopsReq {
        this['delete_users'] = deleteUsers;
        return this;
    }
    public set deleteUsers(deleteUsers: boolean  | undefined) {
        this['delete_users'] = deleteUsers;
    }
    public get deleteUsers(): boolean | undefined {
        return this['delete_users'];
    }
    public withEmailNotification(emailNotification: boolean): DeleteDesktopsReq {
        this['email_notification'] = emailNotification;
        return this;
    }
    public set emailNotification(emailNotification: boolean  | undefined) {
        this['email_notification'] = emailNotification;
    }
    public get emailNotification(): boolean | undefined {
        return this['email_notification'];
    }
    public withIsForceDelete(isForceDelete: boolean): DeleteDesktopsReq {
        this['is_force_delete'] = isForceDelete;
        return this;
    }
    public set isForceDelete(isForceDelete: boolean  | undefined) {
        this['is_force_delete'] = isForceDelete;
    }
    public get isForceDelete(): boolean | undefined {
        return this['is_force_delete'];
    }
}