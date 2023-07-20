import { DisassociatePublicipsRequestBody } from './DisassociatePublicipsRequestBody';


export class UpdateDisassociatePublicipRequest {
    private 'publicip_id'?: string;
    public body?: DisassociatePublicipsRequestBody;
    public constructor(publicipId?: string) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): UpdateDisassociatePublicipRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withBody(body: DisassociatePublicipsRequestBody): UpdateDisassociatePublicipRequest {
        this['body'] = body;
        return this;
    }
}