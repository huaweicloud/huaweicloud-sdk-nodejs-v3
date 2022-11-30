import { AddAddressSetDto } from './AddAddressSetDto';


export class AddAddressSetInfoUsingPostRequest {
    private 'project_id': string | undefined;
    public body?: AddAddressSetDto;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): AddAddressSetInfoUsingPostRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: AddAddressSetDto): AddAddressSetInfoUsingPostRequest {
        this['body'] = body;
        return this;
    }
}