

export class DeleteDesktopRequest {
    private 'desktop_id'?: string;
    private 'delete_users'?: boolean;
    private 'email_notification'?: boolean;
    private 'is_force_delete'?: boolean;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withDesktopId(desktopId: string): DeleteDesktopRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDeleteUsers(deleteUsers: boolean): DeleteDesktopRequest {
        this['delete_users'] = deleteUsers;
        return this;
    }
    public set deleteUsers(deleteUsers: boolean  | undefined) {
        this['delete_users'] = deleteUsers;
    }
    public get deleteUsers(): boolean | undefined {
        return this['delete_users'];
    }
    public withEmailNotification(emailNotification: boolean): DeleteDesktopRequest {
        this['email_notification'] = emailNotification;
        return this;
    }
    public set emailNotification(emailNotification: boolean  | undefined) {
        this['email_notification'] = emailNotification;
    }
    public get emailNotification(): boolean | undefined {
        return this['email_notification'];
    }
    public withIsForceDelete(isForceDelete: boolean): DeleteDesktopRequest {
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