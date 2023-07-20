

export class ShowHotkeyTaskDetailsRequest {
    private 'instance_id'?: string;
    private 'hotkey_id'?: string;
    public constructor(instanceId?: string, hotkeyId?: string) { 
        this['instance_id'] = instanceId;
        this['hotkey_id'] = hotkeyId;
    }
    public withInstanceId(instanceId: string): ShowHotkeyTaskDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withHotkeyId(hotkeyId: string): ShowHotkeyTaskDetailsRequest {
        this['hotkey_id'] = hotkeyId;
        return this;
    }
    public set hotkeyId(hotkeyId: string  | undefined) {
        this['hotkey_id'] = hotkeyId;
    }
    public get hotkeyId(): string | undefined {
        return this['hotkey_id'];
    }
}