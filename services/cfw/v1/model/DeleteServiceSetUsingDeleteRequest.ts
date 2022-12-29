

export class DeleteServiceSetUsingDeleteRequest {
    private 'project_id': string | undefined;
    private 'set_id': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'fw_instance_id'?: string | undefined;
    public constructor(projectId?: any, setId?: any) { 
        this['project_id'] = projectId;
        this['set_id'] = setId;
    }
    public withProjectId(projectId: string): DeleteServiceSetUsingDeleteRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withSetId(setId: string): DeleteServiceSetUsingDeleteRequest {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string | undefined) {
        this['set_id'] = setId;
    }
    public get setId() {
        return this['set_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteServiceSetUsingDeleteRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): DeleteServiceSetUsingDeleteRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId() {
        return this['fw_instance_id'];
    }
}