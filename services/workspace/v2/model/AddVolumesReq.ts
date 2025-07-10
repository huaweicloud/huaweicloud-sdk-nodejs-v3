import { Volume } from './Volume';


export class AddVolumesReq {
    private 'enterprise_project_id'?: string;
    public volumes?: Array<Volume>;
    public constructor(volumes?: Array<Volume>) { 
        this['volumes'] = volumes;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddVolumesReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVolumes(volumes: Array<Volume>): AddVolumesReq {
        this['volumes'] = volumes;
        return this;
    }
}