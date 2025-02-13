import { EgressCidr } from './EgressCidr';


export class VpcEgressRequestBodySpec {
    public cidrs?: Array<EgressCidr>;
    public constructor(cidrs?: Array<EgressCidr>) { 
        this['cidrs'] = cidrs;
    }
    public withCidrs(cidrs: Array<EgressCidr>): VpcEgressRequestBodySpec {
        this['cidrs'] = cidrs;
        return this;
    }
}