import { IvsExtentionByNameAndIdRequestBody } from './IvsExtentionByNameAndIdRequestBody';


export class DetectExtentionByNameAndIdRequest {
    public body?: IvsExtentionByNameAndIdRequestBody;
    public constructor() { 
    }
    public withBody(body: IvsExtentionByNameAndIdRequestBody): DetectExtentionByNameAndIdRequest {
        this['body'] = body;
        return this;
    }
}