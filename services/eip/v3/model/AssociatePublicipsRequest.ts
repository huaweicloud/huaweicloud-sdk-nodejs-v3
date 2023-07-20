import { AssociatePublicipsRequestBody } from './AssociatePublicipsRequestBody';


export class AssociatePublicipsRequest {
    private 'publicip_id'?: string;
    public body?: AssociatePublicipsRequestBody;
    public constructor(publicipId?: string) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): AssociatePublicipsRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withBody(body: AssociatePublicipsRequestBody): AssociatePublicipsRequest {
        this['body'] = body;
        return this;
    }
}