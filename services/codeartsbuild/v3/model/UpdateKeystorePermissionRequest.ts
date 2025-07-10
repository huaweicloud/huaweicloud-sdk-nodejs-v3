import { UpdateKeystorePermissionRequestBody } from './UpdateKeystorePermissionRequestBody';


export class UpdateKeystorePermissionRequest {
    public body?: UpdateKeystorePermissionRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateKeystorePermissionRequestBody): UpdateKeystorePermissionRequest {
        this['body'] = body;
        return this;
    }
}