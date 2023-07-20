

export class ModifyProxyConsistRequest {
    private 'session_consistence'?: string;
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
}