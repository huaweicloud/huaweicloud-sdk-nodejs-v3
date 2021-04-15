

export class AcceptVpcPeeringRequest {
    private 'peering_id': string | undefined;
    public constructor(peeringId?: any) { 
        this['peering_id'] = peeringId;
    }
    public withPeeringId(peeringId: string): AcceptVpcPeeringRequest {
        this['peering_id'] = peeringId;
        return this;
    }
    public set peeringId(peeringId: string | undefined) {
        this['peering_id'] = peeringId;
    }
    public get peeringId() {
        return this['peering_id'];
    }
}