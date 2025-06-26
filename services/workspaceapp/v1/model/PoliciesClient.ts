

export class PoliciesClient {
    private 'automatic_reconnection_interval'?: number;
    private 'session_persistence_time'?: number;
    private 'forbid_screen_capture'?: boolean;
    public constructor() { 
    }
    public withAutomaticReconnectionInterval(automaticReconnectionInterval: number): PoliciesClient {
        this['automatic_reconnection_interval'] = automaticReconnectionInterval;
        return this;
    }
    public set automaticReconnectionInterval(automaticReconnectionInterval: number  | undefined) {
        this['automatic_reconnection_interval'] = automaticReconnectionInterval;
    }
    public get automaticReconnectionInterval(): number | undefined {
        return this['automatic_reconnection_interval'];
    }
    public withSessionPersistenceTime(sessionPersistenceTime: number): PoliciesClient {
        this['session_persistence_time'] = sessionPersistenceTime;
        return this;
    }
    public set sessionPersistenceTime(sessionPersistenceTime: number  | undefined) {
        this['session_persistence_time'] = sessionPersistenceTime;
    }
    public get sessionPersistenceTime(): number | undefined {
        return this['session_persistence_time'];
    }
    public withForbidScreenCapture(forbidScreenCapture: boolean): PoliciesClient {
        this['forbid_screen_capture'] = forbidScreenCapture;
        return this;
    }
    public set forbidScreenCapture(forbidScreenCapture: boolean  | undefined) {
        this['forbid_screen_capture'] = forbidScreenCapture;
    }
    public get forbidScreenCapture(): boolean | undefined {
        return this['forbid_screen_capture'];
    }
}