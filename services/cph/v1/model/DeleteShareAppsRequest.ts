import { DeleteShareAppsRequestBody } from './DeleteShareAppsRequestBody';


export class DeleteShareAppsRequest {
    public body?: DeleteShareAppsRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteShareAppsRequestBody): DeleteShareAppsRequest {
        this['body'] = body;
        return this;
    }
}