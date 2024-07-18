import { DeleteTranscodeProductReq } from './DeleteTranscodeProductReq';


export class DeleteTranscodeProductRequest {
    public body?: DeleteTranscodeProductReq;
    public constructor() { 
    }
    public withBody(body: DeleteTranscodeProductReq): DeleteTranscodeProductRequest {
        this['body'] = body;
        return this;
    }
}