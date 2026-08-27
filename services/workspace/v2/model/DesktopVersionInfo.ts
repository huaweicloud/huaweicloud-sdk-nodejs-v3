

export class DesktopVersionInfo {
    private 'desktop_id'?: string;
    public sid?: string;
    private 'desktop_name'?: string;
    public username?: string;
    public status?: string;
    private 'task_status'?: string;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): DesktopVersionInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withSid(sid: string): DesktopVersionInfo {
        this['sid'] = sid;
        return this;
    }
    public withDesktopName(desktopName: string): DesktopVersionInfo {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withUsername(username: string): DesktopVersionInfo {
        this['username'] = username;
        return this;
    }
    public withStatus(status: string): DesktopVersionInfo {
        this['status'] = status;
        return this;
    }
    public withTaskStatus(taskStatus: string): DesktopVersionInfo {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
}