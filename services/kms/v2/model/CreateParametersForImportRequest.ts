import { GetParametersForImportRequestBody } from './GetParametersForImportRequestBody';


export class CreateParametersForImportRequest {
    public body?: GetParametersForImportRequestBody;
    public constructor() { 
    }
    public withBody(body: GetParametersForImportRequestBody): CreateParametersForImportRequest {
        this['body'] = body;
        return this;
    }
}