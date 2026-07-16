import { PreferredSchedulingTerm } from './PreferredSchedulingTerm';


export class PreferredAffinity {
    private 'node_affinity'?: Array<PreferredSchedulingTerm>;
    public constructor() { 
    }
    public withNodeAffinity(nodeAffinity: Array<PreferredSchedulingTerm>): PreferredAffinity {
        this['node_affinity'] = nodeAffinity;
        return this;
    }
    public set nodeAffinity(nodeAffinity: Array<PreferredSchedulingTerm>  | undefined) {
        this['node_affinity'] = nodeAffinity;
    }
    public get nodeAffinity(): Array<PreferredSchedulingTerm> | undefined {
        return this['node_affinity'];
    }
}