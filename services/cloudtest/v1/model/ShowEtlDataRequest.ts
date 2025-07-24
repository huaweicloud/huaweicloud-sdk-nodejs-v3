import { EtlRequestBody } from './EtlRequestBody';


export class ShowEtlDataRequest {
    public body?: EtlRequestBody;
    public constructor() { 
    }
    public withBody(body: EtlRequestBody): ShowEtlDataRequest {
        this['body'] = body;
        return this;
    }
}