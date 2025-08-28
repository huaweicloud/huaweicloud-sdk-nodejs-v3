import { SetProtectDirSwitchRequestInfo } from './SetProtectDirSwitchRequestInfo';


export class SetProtectDirSwitchInfoRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    public body?: SetProtectDirSwitchRequestInfo;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SetProtectDirSwitchInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): SetProtectDirSwitchInfoRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withBody(body: SetProtectDirSwitchRequestInfo): SetProtectDirSwitchInfoRequest {
        this['body'] = body;
        return this;
    }
}