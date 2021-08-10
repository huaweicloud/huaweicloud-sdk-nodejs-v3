import { AssociateRouteTableAndSubnetReq } from './AssociateRouteTableAndSubnetReq';


export class AsscoiateReq {
    public subnets: AssociateRouteTableAndSubnetReq;
    public constructor(subnets?: any) { 
        this['subnets'] = subnets;
    }
    public withSubnets(subnets: AssociateRouteTableAndSubnetReq): AsscoiateReq {
        this['subnets'] = subnets;
        return this;
    }
}