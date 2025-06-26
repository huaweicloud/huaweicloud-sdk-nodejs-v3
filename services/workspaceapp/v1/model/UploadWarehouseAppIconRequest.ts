import { UploadWarehouseAppIconRequestBody } from './UploadWarehouseAppIconRequestBody';


export class UploadWarehouseAppIconRequest {
    public body?: UploadWarehouseAppIconRequestBody;
    public constructor() { 
    }
    public withBody(body: UploadWarehouseAppIconRequestBody): UploadWarehouseAppIconRequest {
        this['body'] = body;
        return this;
    }
}