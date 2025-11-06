import { EipInfo } from './EipInfo';
import { Listener } from './Listener';


export class ProtectableResources {
    private 'loadbalancer_name'?: string;
    private 'loadbalancer_id'?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    public listeners?: Array<Listener>;
    public eips?: Array<EipInfo>;
    public constructor() { 
    }
    public withLoadbalancerName(loadbalancerName: string): ProtectableResources {
        this['loadbalancer_name'] = loadbalancerName;
        return this;
    }
    public set loadbalancerName(loadbalancerName: string  | undefined) {
        this['loadbalancer_name'] = loadbalancerName;
    }
    public get loadbalancerName(): string | undefined {
        return this['loadbalancer_name'];
    }
    public withLoadbalancerId(loadbalancerId: string): ProtectableResources {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withDomainId(domainId: string): ProtectableResources {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): ProtectableResources {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withListeners(listeners: Array<Listener>): ProtectableResources {
        this['listeners'] = listeners;
        return this;
    }
    public withEips(eips: Array<EipInfo>): ProtectableResources {
        this['eips'] = eips;
        return this;
    }
}