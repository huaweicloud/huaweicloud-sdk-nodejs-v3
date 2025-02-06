

export class UpdatePermissionSetReqBody {
    public description?: string;
    private 'relay_state'?: string;
    private 'session_duration'?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdatePermissionSetReqBody {
        this['description'] = description;
        return this;
    }
    public withRelayState(relayState: string): UpdatePermissionSetReqBody {
        this['relay_state'] = relayState;
        return this;
    }
    public set relayState(relayState: string  | undefined) {
        this['relay_state'] = relayState;
    }
    public get relayState(): string | undefined {
        return this['relay_state'];
    }
    public withSessionDuration(sessionDuration: string): UpdatePermissionSetReqBody {
        this['session_duration'] = sessionDuration;
        return this;
    }
    public set sessionDuration(sessionDuration: string  | undefined) {
        this['session_duration'] = sessionDuration;
    }
    public get sessionDuration(): string | undefined {
        return this['session_duration'];
    }
}