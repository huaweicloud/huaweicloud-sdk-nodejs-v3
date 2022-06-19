import { IdDocumentRequestBody } from './IdDocumentRequestBody';


export class RecognizeIdDocumentRequest {
    public body?: IdDocumentRequestBody;
    public constructor() { 
    }
    public withBody(body: IdDocumentRequestBody): RecognizeIdDocumentRequest {
        this['body'] = body;
        return this;
    }
}