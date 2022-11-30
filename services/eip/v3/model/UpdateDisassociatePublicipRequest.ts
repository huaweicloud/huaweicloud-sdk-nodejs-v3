import { DisassociatePublicipsRequestBody } from './DisassociatePublicipsRequestBody';


export class UpdateDisassociatePublicipRequest {
    private 'publicip_id': string | undefined;
    public body?: DisassociatePublicipsRequestBody;
    public constructor(publicipId?: any) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): UpdateDisassociatePublicipRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
    public withBody(body: DisassociatePublicipsRequestBody): UpdateDisassociatePublicipRequest {
        this['body'] = body;
        return this;
    }
}