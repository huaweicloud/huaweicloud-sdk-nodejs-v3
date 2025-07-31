import { RingHost } from './RingHost';


export class ClusterRing {
    private 'ring_hosts'?: Array<RingHost>;
    private 'un_shrinkable_cluster_ring'?: boolean;
    public constructor(ringHosts?: Array<RingHost>) { 
        this['ring_hosts'] = ringHosts;
    }
    public withRingHosts(ringHosts: Array<RingHost>): ClusterRing {
        this['ring_hosts'] = ringHosts;
        return this;
    }
    public set ringHosts(ringHosts: Array<RingHost>  | undefined) {
        this['ring_hosts'] = ringHosts;
    }
    public get ringHosts(): Array<RingHost> | undefined {
        return this['ring_hosts'];
    }
    public withUnShrinkableClusterRing(unShrinkableClusterRing: boolean): ClusterRing {
        this['un_shrinkable_cluster_ring'] = unShrinkableClusterRing;
        return this;
    }
    public set unShrinkableClusterRing(unShrinkableClusterRing: boolean  | undefined) {
        this['un_shrinkable_cluster_ring'] = unShrinkableClusterRing;
    }
    public get unShrinkableClusterRing(): boolean | undefined {
        return this['un_shrinkable_cluster_ring'];
    }
}