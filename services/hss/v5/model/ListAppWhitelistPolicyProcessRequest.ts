

export class ListAppWhitelistPolicyProcessRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'policy_id'?: string;
    private 'process_status'?: string;
    private 'process_type'?: string;
    private 'process_name'?: string;
    private 'process_hash'?: string;
    private 'process_path'?: string;
    private 'handle_status'?: string;
    private 'os_type'?: string;
    private 'file_signer'?: string;
    public constructor(enterpriseProjectId?: string, offset?: number, limit?: number, policyId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['offset'] = offset;
        this['limit'] = limit;
        this['policy_id'] = policyId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAppWhitelistPolicyProcessRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListAppWhitelistPolicyProcessRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppWhitelistPolicyProcessRequest {
        this['limit'] = limit;
        return this;
    }
    public withPolicyId(policyId: string): ListAppWhitelistPolicyProcessRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withProcessStatus(processStatus: string): ListAppWhitelistPolicyProcessRequest {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: string  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): string | undefined {
        return this['process_status'];
    }
    public withProcessType(processType: string): ListAppWhitelistPolicyProcessRequest {
        this['process_type'] = processType;
        return this;
    }
    public set processType(processType: string  | undefined) {
        this['process_type'] = processType;
    }
    public get processType(): string | undefined {
        return this['process_type'];
    }
    public withProcessName(processName: string): ListAppWhitelistPolicyProcessRequest {
        this['process_name'] = processName;
        return this;
    }
    public set processName(processName: string  | undefined) {
        this['process_name'] = processName;
    }
    public get processName(): string | undefined {
        return this['process_name'];
    }
    public withProcessHash(processHash: string): ListAppWhitelistPolicyProcessRequest {
        this['process_hash'] = processHash;
        return this;
    }
    public set processHash(processHash: string  | undefined) {
        this['process_hash'] = processHash;
    }
    public get processHash(): string | undefined {
        return this['process_hash'];
    }
    public withProcessPath(processPath: string): ListAppWhitelistPolicyProcessRequest {
        this['process_path'] = processPath;
        return this;
    }
    public set processPath(processPath: string  | undefined) {
        this['process_path'] = processPath;
    }
    public get processPath(): string | undefined {
        return this['process_path'];
    }
    public withHandleStatus(handleStatus: string): ListAppWhitelistPolicyProcessRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withOsType(osType: string): ListAppWhitelistPolicyProcessRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withFileSigner(fileSigner: string): ListAppWhitelistPolicyProcessRequest {
        this['file_signer'] = fileSigner;
        return this;
    }
    public set fileSigner(fileSigner: string  | undefined) {
        this['file_signer'] = fileSigner;
    }
    public get fileSigner(): string | undefined {
        return this['file_signer'];
    }
}