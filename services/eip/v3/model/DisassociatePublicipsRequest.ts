import { DisassociatePublicipsRequestBody } from './DisassociatePublicipsRequestBody';


export class DisassociatePublicipsRequest {
    private 'publicip_id': string | undefined;
    public body?: DisassociatePublicipsRequestBody;
    public constructor(publicipId?: any) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): DisassociatePublicipsRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
    public withBody(body: DisassociatePublicipsRequestBody): DisassociatePublicipsRequest {
        this['body'] = body;
        return this;
    }
}