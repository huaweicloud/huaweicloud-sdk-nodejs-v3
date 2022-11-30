import { IvsExtentionByIdCardImageRequestBody } from './IvsExtentionByIdCardImageRequestBody';


export class DetectExtentionByIdCardImageRequest {
    public body?: IvsExtentionByIdCardImageRequestBody;
    public constructor() { 
    }
    public withBody(body: IvsExtentionByIdCardImageRequestBody): DetectExtentionByIdCardImageRequest {
        this['body'] = body;
        return this;
    }
}