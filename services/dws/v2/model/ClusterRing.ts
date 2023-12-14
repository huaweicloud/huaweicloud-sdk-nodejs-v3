import { RingHost } from './RingHost';


export class ClusterRing {
    private 'ring_hosts'?: Array<RingHost>;
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
}