import { AutoClassificationRequestBody } from './AutoClassificationRequestBody';


export class RecognizeAutoClassificationRequest {
    public body?: AutoClassificationRequestBody;
    public constructor() { 
    }
    public withBody(body: AutoClassificationRequestBody): RecognizeAutoClassificationRequest {
        this['body'] = body;
        return this;
    }
}