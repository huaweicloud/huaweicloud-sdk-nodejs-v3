import { GeneralTableRequestBody } from './GeneralTableRequestBody';


export class RecognizeGeneralTableRequest {
    public body?: GeneralTableRequestBody;
    public constructor() { 
    }
    public withBody(body: GeneralTableRequestBody): RecognizeGeneralTableRequest {
        this['body'] = body;
        return this;
    }
}