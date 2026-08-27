import { DeleteUpgradeTaskRequestBody } from './DeleteUpgradeTaskRequestBody';


export class DeleteUpgradeTaskRequest {
    public body?: DeleteUpgradeTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteUpgradeTaskRequestBody): DeleteUpgradeTaskRequest {
        this['body'] = body;
        return this;
    }
}