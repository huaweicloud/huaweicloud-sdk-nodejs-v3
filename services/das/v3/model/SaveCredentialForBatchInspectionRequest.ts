import { SaveCredentialRequestBody } from './SaveCredentialRequestBody';


export class SaveCredentialForBatchInspectionRequest {
    public body?: SaveCredentialRequestBody;
    public constructor() { 
    }
    public withBody(body: SaveCredentialRequestBody): SaveCredentialForBatchInspectionRequest {
        this['body'] = body;
        return this;
    }
}