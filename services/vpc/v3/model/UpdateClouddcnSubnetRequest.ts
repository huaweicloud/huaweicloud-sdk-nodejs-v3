import { UpdateClouddcnSubnetRequestBody } from './UpdateClouddcnSubnetRequestBody';


export class UpdateClouddcnSubnetRequest {
    private 'clouddcn_subnet_id'?: string;
    public body?: UpdateClouddcnSubnetRequestBody;
    public constructor(clouddcnSubnetId?: string) { 
        this['clouddcn_subnet_id'] = clouddcnSubnetId;
    }
    public withClouddcnSubnetId(clouddcnSubnetId: string): UpdateClouddcnSubnetRequest {
        this['clouddcn_subnet_id'] = clouddcnSubnetId;
        return this;
    }
    public set clouddcnSubnetId(clouddcnSubnetId: string  | undefined) {
        this['clouddcn_subnet_id'] = clouddcnSubnetId;
    }
    public get clouddcnSubnetId(): string | undefined {
        return this['clouddcn_subnet_id'];
    }
    public withBody(body: UpdateClouddcnSubnetRequestBody): UpdateClouddcnSubnetRequest {
        this['body'] = body;
        return this;
    }
}