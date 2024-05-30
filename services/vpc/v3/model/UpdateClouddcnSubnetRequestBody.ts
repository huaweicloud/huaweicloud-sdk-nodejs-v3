import { UpdateClouddcnSubnetOption } from './UpdateClouddcnSubnetOption';


export class UpdateClouddcnSubnetRequestBody {
    private 'clouddcn_subnet'?: UpdateClouddcnSubnetOption;
    public constructor(clouddcnSubnet?: UpdateClouddcnSubnetOption) { 
        this['clouddcn_subnet'] = clouddcnSubnet;
    }
    public withClouddcnSubnet(clouddcnSubnet: UpdateClouddcnSubnetOption): UpdateClouddcnSubnetRequestBody {
        this['clouddcn_subnet'] = clouddcnSubnet;
        return this;
    }
    public set clouddcnSubnet(clouddcnSubnet: UpdateClouddcnSubnetOption  | undefined) {
        this['clouddcn_subnet'] = clouddcnSubnet;
    }
    public get clouddcnSubnet(): UpdateClouddcnSubnetOption | undefined {
        return this['clouddcn_subnet'];
    }
}