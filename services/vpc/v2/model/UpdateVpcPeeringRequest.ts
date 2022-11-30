import { UpdateVpcPeeringRequestBody } from './UpdateVpcPeeringRequestBody';


export class UpdateVpcPeeringRequest {
    private 'peering_id': string | undefined;
    public body?: UpdateVpcPeeringRequestBody;
    public constructor(peeringId?: any) { 
        this['peering_id'] = peeringId;
    }
    public withPeeringId(peeringId: string): UpdateVpcPeeringRequest {
        this['peering_id'] = peeringId;
        return this;
    }
    public set peeringId(peeringId: string | undefined) {
        this['peering_id'] = peeringId;
    }
    public get peeringId() {
        return this['peering_id'];
    }
    public withBody(body: UpdateVpcPeeringRequestBody): UpdateVpcPeeringRequest {
        this['body'] = body;
        return this;
    }
}