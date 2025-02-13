import { ListEipResponseBodySpecEgress } from './ListEipResponseBodySpecEgress';
import { ListEipResponseBodySpecIngress } from './ListEipResponseBodySpecIngress';


export class ListEipResponseBodySpec {
    public egress?: ListEipResponseBodySpecEgress;
    public ingress?: ListEipResponseBodySpecIngress;
    public constructor() { 
    }
    public withEgress(egress: ListEipResponseBodySpecEgress): ListEipResponseBodySpec {
        this['egress'] = egress;
        return this;
    }
    public withIngress(ingress: ListEipResponseBodySpecIngress): ListEipResponseBodySpec {
        this['ingress'] = ingress;
        return this;
    }
}