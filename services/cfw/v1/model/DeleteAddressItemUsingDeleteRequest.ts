

export class DeleteAddressItemUsingDeleteRequest {
    private 'item_id': string | undefined;
    private 'project_id': string | undefined;
    public constructor(itemId?: any, projectId?: any) { 
        this['item_id'] = itemId;
        this['project_id'] = projectId;
    }
    public withItemId(itemId: string): DeleteAddressItemUsingDeleteRequest {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId() {
        return this['item_id'];
    }
    public withProjectId(projectId: string): DeleteAddressItemUsingDeleteRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
}