

export class NotificationObjConfiguration {
    private 'notification_endpoint_type'?: string;
    private 'schedule_scene'?: string;
    private 'schedule_role'?: string;
    private 'schedule_role_name'?: string;
    public recipients?: string;
    private 'group_type'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    public constructor() { 
    }
    public withNotificationEndpointType(notificationEndpointType: string): NotificationObjConfiguration {
        this['notification_endpoint_type'] = notificationEndpointType;
        return this;
    }
    public set notificationEndpointType(notificationEndpointType: string  | undefined) {
        this['notification_endpoint_type'] = notificationEndpointType;
    }
    public get notificationEndpointType(): string | undefined {
        return this['notification_endpoint_type'];
    }
    public withScheduleScene(scheduleScene: string): NotificationObjConfiguration {
        this['schedule_scene'] = scheduleScene;
        return this;
    }
    public set scheduleScene(scheduleScene: string  | undefined) {
        this['schedule_scene'] = scheduleScene;
    }
    public get scheduleScene(): string | undefined {
        return this['schedule_scene'];
    }
    public withScheduleRole(scheduleRole: string): NotificationObjConfiguration {
        this['schedule_role'] = scheduleRole;
        return this;
    }
    public set scheduleRole(scheduleRole: string  | undefined) {
        this['schedule_role'] = scheduleRole;
    }
    public get scheduleRole(): string | undefined {
        return this['schedule_role'];
    }
    public withScheduleRoleName(scheduleRoleName: string): NotificationObjConfiguration {
        this['schedule_role_name'] = scheduleRoleName;
        return this;
    }
    public set scheduleRoleName(scheduleRoleName: string  | undefined) {
        this['schedule_role_name'] = scheduleRoleName;
    }
    public get scheduleRoleName(): string | undefined {
        return this['schedule_role_name'];
    }
    public withRecipients(recipients: string): NotificationObjConfiguration {
        this['recipients'] = recipients;
        return this;
    }
    public withGroupType(groupType: string): NotificationObjConfiguration {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withGroupId(groupId: string): NotificationObjConfiguration {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): NotificationObjConfiguration {
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