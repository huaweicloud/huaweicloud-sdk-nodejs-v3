import { NeutronUpdateSubnetRequestBody } from './NeutronUpdateSubnetRequestBody';


export class NeutronUpdateSubnetRequest {
    private 'subnet_id'?: string;
    public body?: NeutronUpdateSubnetRequestBody;
    public constructor(subnetId?: string) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): NeutronUpdateSubnetRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withBody(body: NeutronUpdateSubnetRequestBody): NeutronUpdateSubnetRequest {
        this['body'] = body;
        return this;
    }
}