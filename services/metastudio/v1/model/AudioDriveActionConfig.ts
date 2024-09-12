

export class AudioDriveActionConfig {
    private 'action_tag'?: string;
    private 'action_name'?: string;
    private 'action_start_time'?: number;
    public constructor(actionTag?: string, actionStartTime?: number) { 
        this['action_tag'] = actionTag;
        this['action_start_time'] = actionStartTime;
    }
    public withActionTag(actionTag: string): AudioDriveActionConfig {
        this['action_tag'] = actionTag;
        return this;
    }
    public set actionTag(actionTag: string  | undefined) {
        this['action_tag'] = actionTag;
    }
    public get actionTag(): string | undefined {
        return this['action_tag'];
    }
    public withActionName(actionName: string): AudioDriveActionConfig {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: string  | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName(): string | undefined {
        return this['action_name'];
    }
    public withActionStartTime(actionStartTime: number): AudioDriveActionConfig {
        this['action_start_time'] = actionStartTime;
        return this;
    }
    public set actionStartTime(actionStartTime: number  | undefined) {
        this['action_start_time'] = actionStartTime;
    }
    public get actionStartTime(): number | undefined {
        return this['action_start_time'];
    }
}