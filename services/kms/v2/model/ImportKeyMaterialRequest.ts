import { ImportKeyMaterialRequestBody } from './ImportKeyMaterialRequestBody';


export class ImportKeyMaterialRequest {
    public body?: ImportKeyMaterialRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportKeyMaterialRequestBody): ImportKeyMaterialRequest {
        this['body'] = body;
        return this;
    }
}