

export class CreateOttChannelInfoReqRecordSettings {
    private 'rollingbuffer_duration'?: number;
    public constructor(rollingbufferDuration?: number) { 
        this['rollingbuffer_duration'] = rollingbufferDuration;
    }
    public withRollingbufferDuration(rollingbufferDuration: number): CreateOttChannelInfoReqRecordSettings {
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