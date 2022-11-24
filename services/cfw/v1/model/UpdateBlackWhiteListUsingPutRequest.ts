import { UpdateBlackWhiteListDto } from './UpdateBlackWhiteListDto';


export class UpdateBlackWhiteListUsingPutRequest {
    private 'project_id': string | undefined;
    private 'list_id': string | undefined;
    public body?: UpdateBlackWhiteListDto;
    public constructor(projectId?: any, listId?: any) { 
        this['project_id'] = projectId;
        this['list_id'] = listId;
    }
    public withProjectId(projectId: string): UpdateBlackWhiteListUsingPutRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withListId(listId: string): UpdateBlackWhiteListUsingPutRequest {
        this['list_id'] = listId;
        return this;
    }
    public set listId(listId: string | undefined) {
        this['list_id'] = listId;
    }
    public get listId() {
        return this['list_id'];
    }
    public withBody(body: UpdateBlackWhiteListDto): UpdateBlackWhiteListUsingPutRequest {
        this['body'] = body;
        return this;
    }
}