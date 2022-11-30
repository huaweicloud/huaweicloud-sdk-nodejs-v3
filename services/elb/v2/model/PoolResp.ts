import { ResourceList } from './ResourceList';
import { SessionPersistence } from './SessionPersistence';


export class PoolResp {
    public id: string;
    private 'project_id': string | undefined;
    private 'tenant_id': string | undefined;
    public name: string;
    public description: string;
    private 'admin_state_up': boolean | undefined;
    public loadbalancers: Array<ResourceList>;
    public listeners: Array<ResourceList>;
    public members: Array<ResourceList>;
    private 'healthmonitor_id': string | undefined;
    private 'session_persistence': SessionPersistence | undefined;
    public protocol: PoolRespProtocolEnum;
    private 'lb_algorithm': PoolRespLbAlgorithmEnum | undefined;
    public constructor(id?: any, projectId?: any, tenantId?: any, name?: any, description?: any, adminStateUp?: any, loadbalancers?: any, listeners?: any, members?: any, healthmonitorId?: any, sessionPersistence?: any, protocol?: any, lbAlgorithm?: any) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['tenant_id'] = tenantId;
        this['name'] = name;
        this['description'] = description;
        this['admin_state_up'] = adminStateUp;
        this['loadbalancers'] = loadbalancers;
        this['listeners'] = listeners;
        this['members'] = members;
        this['healthmonitor_id'] = healthmonitorId;
        this['session_persistence'] = sessionPersistence;
        this['protocol'] = protocol;
        this['lb_algorithm'] = lbAlgorithm;
    }
    public withId(id: string): PoolResp {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): PoolResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withTenantId(tenantId: string): PoolResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withName(name: string): PoolResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PoolResp {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): PoolResp {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withLoadbalancers(loadbalancers: Array<ResourceList>): PoolResp {
        this['loadbalancers'] = loadbalancers;
        return this;
    }
    public withListeners(listeners: Array<ResourceList>): PoolResp {
        this['listeners'] = listeners;
        return this;
    }
    public withMembers(members: Array<ResourceList>): PoolResp {
        this['members'] = members;
        return this;
    }
    public withHealthmonitorId(healthmonitorId: string): PoolResp {
        this['healthmonitor_id'] = healthmonitorId;
        return this;
    }
    public set healthmonitorId(healthmonitorId: string | undefined) {
        this['healthmonitor_id'] = healthmonitorId;
    }
    public get healthmonitorId() {
        return this['healthmonitor_id'];
    }
    public withSessionPersistence(sessionPersistence: SessionPersistence): PoolResp {
        this['session_persistence'] = sessionPersistence;
        return this;
    }
    public set sessionPersistence(sessionPersistence: SessionPersistence | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence() {
        return this['session_persistence'];
    }
    public withProtocol(protocol: PoolRespProtocolEnum): PoolResp {
        this['protocol'] = protocol;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: PoolRespLbAlgorithmEnum): PoolResp {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: PoolRespLbAlgorithmEnum | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm() {
        return this['lb_algorithm'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoolRespProtocolEnum {
    UDP = 'UDP',
    TCP = 'TCP',
    HTTP = 'HTTP'
}
/**
    * @export
    * @enum {string}
    */
export enum PoolRespLbAlgorithmEnum {
    ROUND_ROBIN = 'ROUND_ROBIN',
    LEAST_CONNECTIONS = 'LEAST_CONNECTIONS',
    SOURCE_IP = 'SOURCE_IP'
}
