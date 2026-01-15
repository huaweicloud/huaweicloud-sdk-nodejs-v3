

export class NotificationRecordInfo {
    private 'project_id'?: string;
    public type?: string;
    private 'user_name'?: string;
    private 'desktop_name'?: string;
    private 'desktop_pool_name'?: string;
    public result?: string;
    private 'error_message'?: string;
    private 'operate_time'?: string;
    public constructor() { 
    }
    public withProjectId(projectId: string): NotificationRecordInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withType(type: string): NotificationRecordInfo {
        this['type'] = type;
        return this;
    }
    public withUserName(userName: string): NotificationRecordInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDesktopName(desktopName: string): NotificationRecordInfo {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDesktopPoolName(desktopPoolName: string): NotificationRecordInfo {
        this['desktop_pool_name'] = desktopPoolName;
        return this;
    }
    public set desktopPoolName(desktopPoolName: string  | undefined) {
        this['desktop_pool_name'] = desktopPoolName;
    }
    public get desktopPoolName(): string | undefined {
        return this['desktop_pool_name'];
    }
    public withResult(result: string): NotificationRecordInfo {
        this['result'] = result;
        return this;
    }
    public withErrorMessage(errorMessage: string): NotificationRecordInfo {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withOperateTime(operateTime: string): NotificationRecordInfo {
        this['operate_time'] = operateTime;
        return this;
    }
    public set operateTime(operateTime: string  | undefined) {
        this['operate_time'] = operateTime;
    }
    public get operateTime(): string | undefined {
        return this['operate_time'];
    }
}