

export class ModifyOttChannelRecordSettingsRecordSettings {
    private 'rollingbuffer_duration'?: number;
    public constructor() { 
    }
    public withRollingbufferDuration(rollingbufferDuration: number): ModifyOttChannelRecordSettingsRecordSettings {
        this['rollingbuffer_duration'] = rollingbufferDuration;
        return this;
    }
    public set rollingbufferDuration(rollingbufferDuration: number  | undefined) {
        this['rollingbuffer_duration'] = rollingbufferDuration;
    }
    public get rollingbufferDuration(): number | undefined {
        return this['rollingbuffer_duration'];
    }
}