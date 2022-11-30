import { AddBlackWhiteListDto } from './AddBlackWhiteListDto';


export class AddBlackWhiteListUsingPostRequest {
    private 'project_id': string | undefined;
    public body?: AddBlackWhiteListDto;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): AddBlackWhiteListUsingPostRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: AddBlackWhiteListDto): AddBlackWhiteListUsingPostRequest {
        this['body'] = body;
        return this;
    }
}