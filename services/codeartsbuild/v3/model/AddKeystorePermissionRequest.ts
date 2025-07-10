import { AddKeystorePermissionRequestBody } from './AddKeystorePermissionRequestBody';


export class AddKeystorePermissionRequest {
    public body?: AddKeystorePermissionRequestBody;
    public constructor() { 
    }
    public withBody(body: AddKeystorePermissionRequestBody): AddKeystorePermissionRequest {
        this['body'] = body;
        return this;
    }
}