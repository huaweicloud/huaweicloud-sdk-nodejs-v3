import { UpdateEipRequestBodySpecEgress } from './UpdateEipRequestBodySpecEgress';
import { UpdateEipRequestBodySpecIngress } from './UpdateEipRequestBodySpecIngress';


export class UpdateEipRequestBodySpec {
    public egress?: UpdateEipRequestBodySpecEgress;
    public ingress?: UpdateEipRequestBodySpecIngress;
    public constructor() { 
    }
    public withEgress(egress: UpdateEipRequestBodySpecEgress): UpdateEipRequestBodySpec {
        this['egress'] = egress;
        return this;
    }
    public withIngress(ingress: UpdateEipRequestBodySpecIngress): UpdateEipRequestBodySpec {
        this['ingress'] = ingress;
        return this;
    }
}