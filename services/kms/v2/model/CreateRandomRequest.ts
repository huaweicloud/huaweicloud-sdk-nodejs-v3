import { GenRandomRequestBody } from './GenRandomRequestBody';


export class CreateRandomRequest {
    public body?: GenRandomRequestBody;
    public constructor() { 
    }
    public withBody(body: GenRandomRequestBody): CreateRandomRequest {
        this['body'] = body;
        return this;
    }
}