import { AddServiceSetUsingPOSTRequestBody } from './AddServiceSetUsingPOSTRequestBody';


export class AddServiceSetUsingPostRequest {
    private 'project_id': string | undefined;
    public body?: AddServiceSetUsingPOSTRequestBody;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): AddServiceSetUsingPostRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: AddServiceSetUsingPOSTRequestBody): AddServiceSetUsingPostRequest {
        this['body'] = body;
        return this;
    }
}