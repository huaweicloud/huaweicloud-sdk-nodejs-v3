import { CreatePublicipTagRequestBody } from './CreatePublicipTagRequestBody';


export class CreatePublicipTagRequest {
    private 'publicip_id': string | undefined;
    public body?: CreatePublicipTagRequestBody;
    public constructor(publicipId?: any) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): CreatePublicipTagRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
    public withBody(body: CreatePublicipTagRequestBody): CreatePublicipTagRequest {
        this['body'] = body;
        return this;
    }
}