

export class PauseConferenceReq {
    public pause?: number;
    public constructor() { 
    }
    public withPause(pause: number): PauseConferenceReq {
        this['pause'] = pause;
        return this;
    }
}