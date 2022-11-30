import { IvsStandardByIdCardImageRequestBody } from './IvsStandardByIdCardImageRequestBody';


export class DetectStandardByIdCardImageRequest {
    public body?: IvsStandardByIdCardImageRequestBody;
    public constructor() { 
    }
    public withBody(body: IvsStandardByIdCardImageRequestBody): DetectStandardByIdCardImageRequest {
        this['body'] = body;
        return this;
    }
}