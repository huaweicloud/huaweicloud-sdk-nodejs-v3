import { RingHostVo } from './RingHostVo';


export class ClusterRingVo {
    private 'ring_hosts'?: Array<RingHostVo>;
    public constructor() { 
    }
    public withRingHosts(ringHosts: Array<RingHostVo>): ClusterRingVo {
        this['ring_hosts'] = ringHosts;
        return this;
    }
    public set ringHosts(ringHosts: Array<RingHostVo>  | undefined) {
        this['ring_hosts'] = ringHosts;
    }
    public get ringHosts(): Array<RingHostVo> | undefined {
        return this['ring_hosts'];
    }
}