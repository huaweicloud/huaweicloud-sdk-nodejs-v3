import { UpdateSnapshotPolicyRequestBody } from './UpdateSnapshotPolicyRequestBody';


export class UpdateSnapshotPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: UpdateSnapshotPolicyRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateSnapshotPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdateSnapshotPolicyRequestBody): UpdateSnapshotPolicyRequest {
        this['body'] = body;
        return this;
    }
}