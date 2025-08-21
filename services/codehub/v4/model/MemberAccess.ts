

export class MemberAccess {
    private 'access_level'?: number;
    private 'notification_level'?: number;
    public constructor() { 
    }
    public withAccessLevel(accessLevel: number): MemberAccess {
        this['access_level'] = accessLevel;
        return this;
    }
    public set accessLevel(accessLevel: number  | undefined) {
        this['access_level'] = accessLevel;
    }
    public get accessLevel(): number | undefined {
        return this['access_level'];
    }
    public withNotificationLevel(notificationLevel: number): MemberAccess {
        this['notification_level'] = notificationLevel;
        return this;
    }
    public set notificationLevel(notificationLevel: number  | undefined) {
        this['notification_level'] = notificationLevel;
    }
    public get notificationLevel(): number | undefined {
        return this['notification_level'];
    }
}