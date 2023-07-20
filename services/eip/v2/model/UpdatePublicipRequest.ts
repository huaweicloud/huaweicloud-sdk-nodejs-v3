import { UpdatePublicipsRequestBody } from './UpdatePublicipsRequestBody';


export class UpdatePublicipRequest {
    private 'publicip_id'?: string;
    public body?: UpdatePublicipsRequestBody;
    public constructor(publicipId?: string) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): UpdatePublicipRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withBody(body: UpdatePublicipsRequestBody): UpdatePublicipRequest {
        this['body'] = body;
        return this;
    }
}