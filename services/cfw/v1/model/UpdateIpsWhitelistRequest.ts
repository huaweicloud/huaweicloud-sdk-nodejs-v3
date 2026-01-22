import { UpdateIpsWhitelistDto } from './UpdateIpsWhitelistDto';


export class UpdateIpsWhitelistRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    private 'list_id'?: string;
    public body?: UpdateIpsWhitelistDto;
    public constructor(projectId?: string, fwInstanceId?: string, listId?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['list_id'] = listId;
    }
    public withProjectId(projectId: string): UpdateIpsWhitelistRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): UpdateIpsWhitelistRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withListId(listId: string): UpdateIpsWhitelistRequest {
        this['list_id'] = listId;
        return this;
    }
    public set listId(listId: string  | undefined) {
        this['list_id'] = listId;
    }
    public get listId(): string | undefined {
        return this['list_id'];
    }
    public withBody(body: UpdateIpsWhitelistDto): UpdateIpsWhitelistRequest {
        this['body'] = body;
        return this;
    }
}