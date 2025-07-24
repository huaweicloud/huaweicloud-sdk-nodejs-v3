

export class PauseConferenceReq {
    public pause?: number;
    public constructor(pause?: number) { 
        this['pause'] = pause;
    }
    public withPause(pause: number): PauseConferenceReq {
        this['pause'] = pause;
        return this;
    }
}