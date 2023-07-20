import { SessionPersistence } from './SessionPersistence';


export class UpdatePoolReq {
    private 'lb_algorithm'?: string;
    public name?: string;
    public description?: string;
    private 'admin_state_up'?: boolean;
    private 'session_persistence'?: SessionPersistence;
    public constructor() { 
    }
    public withLbAlgorithm(lbAlgorithm: string): UpdatePoolReq {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: string  | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm(): string | undefined {
        return this['lb_algorithm'];
    }
    public withName(name: string): UpdatePoolReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdatePoolReq {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): UpdatePoolReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withSessionPersistence(sessionPersistence: SessionPersistence): UpdatePoolReq {
        this['session_persistence'] = sessionPersistence;
        return this;
    }
    public set sessionPersistence(sessionPersistence: SessionPersistence  | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence(): SessionPersistence | undefined {
        return this['session_persistence'];
    }
}