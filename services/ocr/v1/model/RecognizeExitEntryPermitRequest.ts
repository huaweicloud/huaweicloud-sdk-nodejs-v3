import { ExitEntryPermitRequestBody } from './ExitEntryPermitRequestBody';


export class RecognizeExitEntryPermitRequest {
    public body?: ExitEntryPermitRequestBody;
    public constructor() { 
    }
    public withBody(body: ExitEntryPermitRequestBody): RecognizeExitEntryPermitRequest {
        this['body'] = body;
        return this;
    }
}