import { CreatePrePaidPublicipRequestBody } from './CreatePrePaidPublicipRequestBody';


export class CreatePrePaidPublicipRequest {
    public body?: CreatePrePaidPublicipRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePrePaidPublicipRequestBody): CreatePrePaidPublicipRequest {
        this['body'] = body;
        return this;
    }
}