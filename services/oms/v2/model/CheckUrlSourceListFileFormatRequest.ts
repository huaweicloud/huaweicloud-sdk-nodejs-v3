import { CheckUrlSourceListFileFormatReq } from './CheckUrlSourceListFileFormatReq';


export class CheckUrlSourceListFileFormatRequest {
    public body?: CheckUrlSourceListFileFormatReq;
    public constructor() { 
    }
    public withBody(body: CheckUrlSourceListFileFormatReq): CheckUrlSourceListFileFormatRequest {
        this['body'] = body;
        return this;
    }
}