import { AddServiceItemsUsingPOSTRequestBody } from './AddServiceItemsUsingPOSTRequestBody';


export class AddServiceItemsUsingPostRequest {
    private 'project_id': string | undefined;
    public body?: AddServiceItemsUsingPOSTRequestBody;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): AddServiceItemsUsingPostRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: AddServiceItemsUsingPOSTRequestBody): AddServiceItemsUsingPostRequest {
        this['body'] = body;
        return this;
    }
}