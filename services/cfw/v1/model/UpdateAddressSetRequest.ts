import { UpdateAddressSetDto } from './UpdateAddressSetDto';


export class UpdateAddressSetRequest {
    private 'project_id'?: string;
    private 'set_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    public body?: UpdateAddressSetDto;
    public constructor(projectId?: string, setId?: string) { 
        this['project_id'] = projectId;
        this['set_id'] = setId;
    }
    public withProjectId(projectId: string): UpdateAddressSetRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSetId(setId: string): UpdateAddressSetRequest {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateAddressSetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): UpdateAddressSetRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withBody(body: UpdateAddressSetDto): UpdateAddressSetRequest {
        this['body'] = body;
        return this;
    }
}