

export class DeleteServiceItemUsingDeleteRequest {
    private 'project_id': string | undefined;
    private 'item_id': string | undefined;
    public constructor(projectId?: any, itemId?: any) { 
        this['project_id'] = projectId;
        this['item_id'] = itemId;
    }
    public withProjectId(projectId: string): DeleteServiceItemUsingDeleteRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withItemId(itemId: string): DeleteServiceItemUsingDeleteRequest {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId() {
        return this['item_id'];
    }
}