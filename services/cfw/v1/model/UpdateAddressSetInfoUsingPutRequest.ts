import { UpdateAddressSetDto } from './UpdateAddressSetDto';


export class UpdateAddressSetInfoUsingPutRequest {
    private 'project_id': string | undefined;
    private 'set_id': string | undefined;
    public body?: UpdateAddressSetDto;
    public constructor(projectId?: any, setId?: any) { 
        this['project_id'] = projectId;
        this['set_id'] = setId;
    }
    public withProjectId(projectId: string): UpdateAddressSetInfoUsingPutRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withSetId(setId: string): UpdateAddressSetInfoUsingPutRequest {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string | undefined) {
        this['set_id'] = setId;
    }
    public get setId() {
        return this['set_id'];
    }
    public withBody(body: UpdateAddressSetDto): UpdateAddressSetInfoUsingPutRequest {
        this['body'] = body;
        return this;
    }
}