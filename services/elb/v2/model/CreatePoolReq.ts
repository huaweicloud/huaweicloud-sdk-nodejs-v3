import { SessionPersistence } from './SessionPersistence';


export class CreatePoolReq {
    public protocol: CreatePoolReqProtocolEnum;
    private 'lb_algorithm': string | undefined;
    private 'loadbalancer_id'?: string | undefined;
    private 'listener_id'?: string | undefined;
    private 'tenant_id'?: string | undefined;
    public name?: string;
    public description?: string;
    private 'admin_state_up'?: boolean | undefined;
    private 'session_persistence'?: SessionPersistence | undefined;
    public constructor(protocol?: any, lbAlgorithm?: any) { 
        this['protocol'] = protocol;
        this['lb_algorithm'] = lbAlgorithm;
    }
    public withProtocol(protocol: CreatePoolReqProtocolEnum): CreatePoolReq {
        this['protocol'] = protocol;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: string): CreatePoolReq {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: string | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm() {
        return this['lb_algorithm'];
    }
    public withLoadbalancerId(loadbalancerId: string): CreatePoolReq {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withListenerId(listenerId: string): CreatePoolReq {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withTenantId(tenantId: string): CreatePoolReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
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
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withSessionPersistence(sessionPersistence: SessionPersistence): CreatePoolReq {
        this['session_persistence'] = sessionPersistence;
        return this;
    }
    public set sessionPersistence(sessionPersistence: SessionPersistence | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence() {
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
