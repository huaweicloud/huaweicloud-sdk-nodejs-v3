import { AddAddressItemsInfoDto } from './AddAddressItemsInfoDto';


export class AddAddressItemsUsingPostRequest {
    private 'project_id': string | undefined;
    public body?: AddAddressItemsInfoDto;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): AddAddressItemsUsingPostRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: AddAddressItemsInfoDto): AddAddressItemsUsingPostRequest {
        this['body'] = body;
        return this;
    }
}