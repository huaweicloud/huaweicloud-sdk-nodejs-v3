

export class DeleteBlackWhiteListUsingDeleteRequest {
    private 'project_id': string | undefined;
    private 'list_id': string | undefined;
    public constructor(projectId?: any, listId?: any) { 
        this['project_id'] = projectId;
        this['list_id'] = listId;
    }
    public withProjectId(projectId: string): DeleteBlackWhiteListUsingDeleteRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withListId(listId: string): DeleteBlackWhiteListUsingDeleteRequest {
        this['list_id'] = listId;
        return this;
    }
    public set listId(listId: string | undefined) {
        this['list_id'] = listId;
    }
    public get listId() {
        return this['list_id'];
    }
}