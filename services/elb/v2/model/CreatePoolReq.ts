import { SessionPersistence } from './SessionPersistence';


export class CreatePoolReq {
    public protocol?: CreatePoolReqProtocolEnum | string;
    private 'lb_algorithm'?: string;
    private 'loadbalancer_id'?: string;
    private 'listener_id'?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'admin_state_up'?: boolean;
    private 'session_persistence'?: SessionPersistence;
    public constructor(protocol?: string, lbAlgorithm?: string) { 
        this['protocol'] = protocol;
        this['lb_algorithm'] = lbAlgorithm;
    }
    public withProtocol(protocol: CreatePoolReqProtocolEnum | string): CreatePoolReq {
        this['protocol'] = protocol;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: string): CreatePoolReq {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: string  | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm(): string | undefined {
        return this['lb_algorithm'];
    }
    public withLoadbalancerId(loadbalancerId: string): CreatePoolReq {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withListenerId(listenerId: string): CreatePoolReq {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withTenantId(tenantId: string): CreatePoolReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): CreatePoolReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreatePoolReq {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreatePoolReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withSessionPersistence(sessionPersistence: SessionPersistence): CreatePoolReq {
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

/**
    * @export
    * @enum {string}
    */
export enum CreatePoolReqProtocolEnum {
    UDP = 'UDP',
    TCP = 'TCP',
    HTTP = 'HTTP'
}
