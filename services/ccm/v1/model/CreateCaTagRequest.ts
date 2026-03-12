import { ResourceTagRequestBody } from './ResourceTagRequestBody';


export class CreateCaTagRequest {
    private 'ca_id'?: string;
    public body?: ResourceTagRequestBody;
    public constructor(caId?: string) { 
        this['ca_id'] = caId;
    }
    public withCaId(caId: string): CreateCaTagRequest {
        this['ca_id'] = caId;
        return this;
    }
    public set caId(caId: string  | undefined) {
        this['ca_id'] = caId;
    }
    public get caId(): string | undefined {
        return this['ca_id'];
    }
    public withBody(body: ResourceTagRequestBody): CreateCaTagRequest {
        this['body'] = body;
        return this;
    }
}