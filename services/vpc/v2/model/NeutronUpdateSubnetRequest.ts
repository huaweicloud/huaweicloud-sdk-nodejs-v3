import { NeutronUpdateSubnetRequestBody } from './NeutronUpdateSubnetRequestBody';


export class NeutronUpdateSubnetRequest {
    private 'subnet_id': string | undefined;
    public body?: NeutronUpdateSubnetRequestBody;
    public constructor(subnetId?: any) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): NeutronUpdateSubnetRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withBody(body: NeutronUpdateSubnetRequestBody): NeutronUpdateSubnetRequest {
        this['body'] = body;
        return this;
    }
}