import { IvsStandardByNameAndIdRequestBody } from './IvsStandardByNameAndIdRequestBody';


export class DetectStandardByNameAndIdRequest {
    public body?: IvsStandardByNameAndIdRequestBody;
    public constructor() { 
    }
    public withBody(body: IvsStandardByNameAndIdRequestBody): DetectStandardByNameAndIdRequest {
        this['body'] = body;
        return this;
    }
}