import { RingHost } from './RingHost';


export class LogicalClusterRingInfo {
    private 'ring_hosts'?: Array<RingHost>;
    public constructor() { 
    }
    public withRingHosts(ringHosts: Array<RingHost>): LogicalClusterRingInfo {
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