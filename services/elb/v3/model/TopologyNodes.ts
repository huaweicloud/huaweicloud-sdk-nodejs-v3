import { EipNode } from './EipNode';
import { ListenerNode } from './ListenerNode';
import { LoadBalancerNode } from './LoadBalancerNode';
import { PoolNode } from './PoolNode';


export class TopologyNodes {
    public loadbalancers?: Array<LoadBalancerNode>;
    public eips?: Array<EipNode>;
    public listeners?: Array<ListenerNode>;
    public pools?: Array<PoolNode>;
    public constructor(loadbalancers?: Array<LoadBalancerNode>, eips?: Array<EipNode>, listeners?: Array<ListenerNode>, pools?: Array<PoolNode>) { 
        this['loadbalancers'] = loadbalancers;
        this['eips'] = eips;
        this['listeners'] = listeners;
        this['pools'] = pools;
    }
    public withLoadbalancers(loadbalancers: Array<LoadBalancerNode>): TopologyNodes {
        this['loadbalancers'] = loadbalancers;
        return this;
    }
    public withEips(eips: Array<EipNode>): TopologyNodes {
        this['eips'] = eips;
        return this;
    }
    public withListeners(listeners: Array<ListenerNode>): TopologyNodes {
        this['listeners'] = listeners;
        return this;
    }
    public withPools(pools: Array<PoolNode>): TopologyNodes {
        this['pools'] = pools;
        return this;
    }
}