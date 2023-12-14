import { DeleteBaremetalBody } from './DeleteBaremetalBody';


export class DeleteBaremetalServerRequest {
    public body?: DeleteBaremetalBody;
    public constructor() { 
    }
    public withBody(body: DeleteBaremetalBody): DeleteBaremetalServerRequest {
        this['body'] = body;
        return this;
    }
}