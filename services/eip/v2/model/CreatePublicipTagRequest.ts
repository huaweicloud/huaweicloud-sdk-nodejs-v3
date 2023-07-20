import { CreatePublicipTagRequestBody } from './CreatePublicipTagRequestBody';


export class CreatePublicipTagRequest {
    private 'publicip_id'?: string;
    public body?: CreatePublicipTagRequestBody;
    public constructor(publicipId?: string) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): CreatePublicipTagRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withBody(body: CreatePublicipTagRequestBody): CreatePublicipTagRequest {
        this['body'] = body;
        return this;
    }
}