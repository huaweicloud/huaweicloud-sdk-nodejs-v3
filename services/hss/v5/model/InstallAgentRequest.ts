import { MultipartFile } from './MultipartFile';


export class InstallAgentRequest {
    private 'enterprise_project_id'?: string;
    private 'root_permission'?: string;
    private 'root_password'?: string;
    private 'login_user'?: string;
    private 'login_password'?: string;
    private 'login_port'?: number;
    private 'host_id_list'?: string;
    public file?: Array<MultipartFile>;
    private 'login_type'?: string;
    private 'host_group_id'?: string;
    public constructor(hostIdList?: string, loginType?: string) { 
        this['host_id_list'] = hostIdList;
        this['login_type'] = loginType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstallAgentRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRootPermission(rootPermission: string): InstallAgentRequest {
        this['root_permission'] = rootPermission;
        return this;
    }
    public set rootPermission(rootPermission: string  | undefined) {
        this['root_permission'] = rootPermission;
    }
    public get rootPermission(): string | undefined {
        return this['root_permission'];
    }
    public withRootPassword(rootPassword: string): InstallAgentRequest {
        this['root_password'] = rootPassword;
        return this;
    }
    public set rootPassword(rootPassword: string  | undefined) {
        this['root_password'] = rootPassword;
    }
    public get rootPassword(): string | undefined {
        return this['root_password'];
    }
    public withLoginUser(loginUser: string): InstallAgentRequest {
        this['login_user'] = loginUser;
        return this;
    }
    public set loginUser(loginUser: string  | undefined) {
        this['login_user'] = loginUser;
    }
    public get loginUser(): string | undefined {
        return this['login_user'];
    }
    public withLoginPassword(loginPassword: string): InstallAgentRequest {
        this['login_password'] = loginPassword;
        return this;
    }
    public set loginPassword(loginPassword: string  | undefined) {
        this['login_password'] = loginPassword;
    }
    public get loginPassword(): string | undefined {
        return this['login_password'];
    }
    public withLoginPort(loginPort: number): InstallAgentRequest {
        this['login_port'] = loginPort;
        return this;
    }
    public set loginPort(loginPort: number  | undefined) {
        this['login_port'] = loginPort;
    }
    public get loginPort(): number | undefined {
        return this['login_port'];
    }
    public withHostIdList(hostIdList: string): InstallAgentRequest {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: string  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): string | undefined {
        return this['host_id_list'];
    }
    public withFile(file: Array<MultipartFile>): InstallAgentRequest {
        this['file'] = file;
        return this;
    }
    public withLoginType(loginType: string): InstallAgentRequest {
        this['login_type'] = loginType;
        return this;
    }
    public set loginType(loginType: string  | undefined) {
        this['login_type'] = loginType;
    }
    public get loginType(): string | undefined {
        return this['login_type'];
    }
    public withHostGroupId(hostGroupId: string): InstallAgentRequest {
        this['host_group_id'] = hostGroupId;
        return this;
    }
    public set hostGroupId(hostGroupId: string  | undefined) {
        this['host_group_id'] = hostGroupId;
    }
    public get hostGroupId(): string | undefined {
        return this['host_group_id'];
    }
}