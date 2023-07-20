import { UpdateVpcPeeringRequestBody } from './UpdateVpcPeeringRequestBody';


export class UpdateVpcPeeringRequest {
    private 'peering_id'?: string;
    public body?: UpdateVpcPeeringRequestBody;
    public constructor(peeringId?: string) { 
        this['peering_id'] = peeringId;
    }
    public withPeeringId(peeringId: string): UpdateVpcPeeringRequest {
        this['peering_id'] = peeringId;
        return this;
    }
    public set peeringId(peeringId: string  | undefined) {
        this['peering_id'] = peeringId;
    }
    public get peeringId(): string | undefined {
        return this['peering_id'];
    }
    public withBody(body: UpdateVpcPeeringRequestBody): UpdateVpcPeeringRequest {
        this['body'] = body;
        return this;
    }
}