import { NeutronCreatePortRequestBody } from './NeutronCreatePortRequestBody';


export class NeutronCreatePortRequest {
    public body?: NeutronCreatePortRequestBody;
    public constructor() { 
    }
    public withBody(body: NeutronCreatePortRequestBody): NeutronCreatePortRequest {
        this['body'] = body;
        return this;
    }
}