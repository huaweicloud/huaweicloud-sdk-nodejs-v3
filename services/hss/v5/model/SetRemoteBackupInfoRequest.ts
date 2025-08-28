import { SetRemoteBackupInfoRequestInfo } from './SetRemoteBackupInfoRequestInfo';


export class SetRemoteBackupInfoRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    public body?: SetRemoteBackupInfoRequestInfo;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SetRemoteBackupInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): SetRemoteBackupInfoRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withBody(body: SetRemoteBackupInfoRequestInfo): SetRemoteBackupInfoRequest {
        this['body'] = body;
        return this;
    }
}