

export class ModifyProxyConsistRequest {
    private 'session_consistence'?: string;
    private 'consistence_mode'?: string;
    public constructor(sessionConsistence?: string) { 
        this['session_consistence'] = sessionConsistence;
    }
    public withSessionConsistence(sessionConsistence: string): ModifyProxyConsistRequest {
        this['session_consistence'] = sessionConsistence;
        return this;
    }
    public set sessionConsistence(sessionConsistence: string  | undefined) {
        this['session_consistence'] = sessionConsistence;
    }
    public get sessionConsistence(): string | undefined {
        return this['session_consistence'];
    }
    public withConsistenceMode(consistenceMode: string): ModifyProxyConsistRequest {
        this['consistence_mode'] = consistenceMode;
        return this;
    }
    public set consistenceMode(consistenceMode: string  | undefined) {
        this['consistence_mode'] = consistenceMode;
    }
    public get consistenceMode(): string | undefined {
        return this['consistence_mode'];
    }
}