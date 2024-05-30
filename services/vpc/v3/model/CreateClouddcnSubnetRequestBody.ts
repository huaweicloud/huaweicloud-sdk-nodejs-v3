import { CreateClouddcnSubnetOption } from './CreateClouddcnSubnetOption';


export class CreateClouddcnSubnetRequestBody {
    private 'clouddcn_subnet'?: CreateClouddcnSubnetOption;
    public constructor(clouddcnSubnet?: CreateClouddcnSubnetOption) { 
        this['clouddcn_subnet'] = clouddcnSubnet;
    }
    public withClouddcnSubnet(clouddcnSubnet: CreateClouddcnSubnetOption): CreateClouddcnSubnetRequestBody {
        this['clouddcn_subnet'] = clouddcnSubnet;
        return this;
    }
    public set clouddcnSubnet(clouddcnSubnet: CreateClouddcnSubnetOption  | undefined) {
        this['clouddcn_subnet'] = clouddcnSubnet;
    }
    public get clouddcnSubnet(): CreateClouddcnSubnetOption | undefined {
        return this['clouddcn_subnet'];
    }
}