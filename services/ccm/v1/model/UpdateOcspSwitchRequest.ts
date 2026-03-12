import { UpdateOcspSwitchRequestBody } from './UpdateOcspSwitchRequestBody';


export class UpdateOcspSwitchRequest {
    private 'ca_id'?: string;
    public body?: UpdateOcspSwitchRequestBody;
    public constructor(caId?: string) { 
        this['ca_id'] = caId;
    }
    public withCaId(caId: string): UpdateOcspSwitchRequest {
        this['ca_id'] = caId;
        return this;
    }
    public set caId(caId: string  | undefined) {
        this['ca_id'] = caId;
    }
    public get caId(): string | undefined {
        return this['ca_id'];
    }
    public withBody(body: UpdateOcspSwitchRequestBody): UpdateOcspSwitchRequest {
        this['body'] = body;
        return this;
    }
}