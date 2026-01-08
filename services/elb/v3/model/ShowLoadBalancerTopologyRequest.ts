

export class ShowLoadBalancerTopologyRequest {
    private 'loadbalancer_id'?: string;
    private 'listener_id'?: string;
    private 'pool_id'?: string;
    private 'listener_name'?: string;
    private 'listener_protocol'?: string;
    private 'listener_protocol_port'?: number;
    private 'pool_name'?: string;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): ShowLoadBalancerTopologyRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withListenerId(listenerId: string): ShowLoadBalancerTopologyRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withPoolId(poolId: string): ShowLoadBalancerTopologyRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withListenerName(listenerName: string): ShowLoadBalancerTopologyRequest {
        this['listener_name'] = listenerName;
        return this;
    }
    public set listenerName(listenerName: string  | undefined) {
        this['listener_name'] = listenerName;
    }
    public get listenerName(): string | undefined {
        return this['listener_name'];
    }
    public withListenerProtocol(listenerProtocol: string): ShowLoadBalancerTopologyRequest {
        this['listener_protocol'] = listenerProtocol;
        return this;
    }
    public set listenerProtocol(listenerProtocol: string  | undefined) {
        this['listener_protocol'] = listenerProtocol;
    }
    public get listenerProtocol(): string | undefined {
        return this['listener_protocol'];
    }
    public withListenerProtocolPort(listenerProtocolPort: number): ShowLoadBalancerTopologyRequest {
        this['listener_protocol_port'] = listenerProtocolPort;
        return this;
    }
    public set listenerProtocolPort(listenerProtocolPort: number  | undefined) {
        this['listener_protocol_port'] = listenerProtocolPort;
    }
    public get listenerProtocolPort(): number | undefined {
        return this['listener_protocol_port'];
    }
    public withPoolName(poolName: string): ShowLoadBalancerTopologyRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
}