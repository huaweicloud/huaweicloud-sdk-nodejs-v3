import { ResourceList } from './ResourceList';
import { SessionPersistence } from './SessionPersistence';


export class PoolResp {
    public id?: string;
    private 'project_id'?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'admin_state_up'?: boolean;
    public loadbalancers?: Array<ResourceList>;
    public listeners?: Array<ResourceList>;
    public members?: Array<ResourceList>;
    private 'healthmonitor_id'?: string;
    private 'session_persistence'?: SessionPersistence;
    public protocol?: PoolRespProtocolEnum | string;
    private 'lb_algorithm'?: PoolRespLbAlgorithmEnum | string;
    private 'protection_status'?: PoolRespProtectionStatusEnum | string;
    private 'protection_reason'?: string;
    public constructor(id?: string, projectId?: string, tenantId?: string, name?: string, description?: string, adminStateUp?: boolean, loadbalancers?: Array<ResourceList>, listeners?: Array<ResourceList>, members?: Array<ResourceList>, healthmonitorId?: string, sessionPersistence?: SessionPersistence, protocol?: string, lbAlgorithm?: string, protectionStatus?: string, protectionReason?: string) { 
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
        this['protection_status'] = protectionStatus;
        this['protection_reason'] = protectionReason;
    }
    public withId(id: string): PoolResp {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): PoolResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTenantId(tenantId: string): PoolResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
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
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
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
    public set healthmonitorId(healthmonitorId: string  | undefined) {
        this['healthmonitor_id'] = healthmonitorId;
    }
    public get healthmonitorId(): string | undefined {
        return this['healthmonitor_id'];
    }
    public withSessionPersistence(sessionPersistence: SessionPersistence): PoolResp {
        this['session_persistence'] = sessionPersistence;
        return this;
    }
    public set sessionPersistence(sessionPersistence: SessionPersistence  | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence(): SessionPersistence | undefined {
        return this['session_persistence'];
    }
    public withProtocol(protocol: PoolRespProtocolEnum | string): PoolResp {
        this['protocol'] = protocol;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: PoolRespLbAlgorithmEnum | string): PoolResp {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: PoolRespLbAlgorithmEnum | string  | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm(): PoolRespLbAlgorithmEnum | string | undefined {
        return this['lb_algorithm'];
    }
    public withProtectionStatus(protectionStatus: PoolRespProtectionStatusEnum | string): PoolResp {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: PoolRespProtectionStatusEnum | string  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): PoolRespProtectionStatusEnum | string | undefined {
        return this['protection_status'];
    }
    public withProtectionReason(protectionReason: string): PoolResp {
        this['protection_reason'] = protectionReason;
        return this;
    }
    public set protectionReason(protectionReason: string  | undefined) {
        this['protection_reason'] = protectionReason;
    }
    public get protectionReason(): string | undefined {
        return this['protection_reason'];
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
/**
    * @export
    * @enum {string}
    */
export enum PoolRespProtectionStatusEnum {
    NONPROTECTION = 'nonProtection',
    CONSOLEPROTECTION = 'consoleProtection'
}
