

export class SearchDetailV2 {
    public id?: string;
    private 'tenant_id'?: string;
    private 'project_id'?: string;
    private 'dgc_instance_id'?: string;
    public workspace?: string;
    private 'doc_type'?: string;
    public owner?: string;
    private 'new_save_or_commit'?: string;
    public version?: number;
    private 'last_modified_time'?: number;
    private 'job_name'?: string;
    private 'job_type'?: string;
    private 'job_params'?: string;
    private 'node_name'?: string;
    private 'node_type'?: string;
    private 'script_name'?: string;
    private 'script_type'?: string;
    private 'script_params'?: string;
    private 'cdm_cluster_name'?: string;
    private 'cdm_job_name'?: string;
    private 'cdm_params'?: string;
    private 'workspace_name'?: string;
    private 'job_id'?: string;
    private 'script_id'?: string;
    private 'single_node_job_type'?: string;
    private 'schedule_state'?: string;
    public constructor() { 
    }
    public withId(id: string): SearchDetailV2 {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): SearchDetailV2 {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): SearchDetailV2 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDgcInstanceId(dgcInstanceId: string): SearchDetailV2 {
        this['dgc_instance_id'] = dgcInstanceId;
        return this;
    }
    public set dgcInstanceId(dgcInstanceId: string  | undefined) {
        this['dgc_instance_id'] = dgcInstanceId;
    }
    public get dgcInstanceId(): string | undefined {
        return this['dgc_instance_id'];
    }
    public withWorkspace(workspace: string): SearchDetailV2 {
        this['workspace'] = workspace;
        return this;
    }
    public withDocType(docType: string): SearchDetailV2 {
        this['doc_type'] = docType;
        return this;
    }
    public set docType(docType: string  | undefined) {
        this['doc_type'] = docType;
    }
    public get docType(): string | undefined {
        return this['doc_type'];
    }
    public withOwner(owner: string): SearchDetailV2 {
        this['owner'] = owner;
        return this;
    }
    public withNewSaveOrCommit(newSaveOrCommit: string): SearchDetailV2 {
        this['new_save_or_commit'] = newSaveOrCommit;
        return this;
    }
    public set newSaveOrCommit(newSaveOrCommit: string  | undefined) {
        this['new_save_or_commit'] = newSaveOrCommit;
    }
    public get newSaveOrCommit(): string | undefined {
        return this['new_save_or_commit'];
    }
    public withVersion(version: number): SearchDetailV2 {
        this['version'] = version;
        return this;
    }
    public withLastModifiedTime(lastModifiedTime: number): SearchDetailV2 {
        this['last_modified_time'] = lastModifiedTime;
        return this;
    }
    public set lastModifiedTime(lastModifiedTime: number  | undefined) {
        this['last_modified_time'] = lastModifiedTime;
    }
    public get lastModifiedTime(): number | undefined {
        return this['last_modified_time'];
    }
    public withJobName(jobName: string): SearchDetailV2 {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobType(jobType: string): SearchDetailV2 {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withJobParams(jobParams: string): SearchDetailV2 {
        this['job_params'] = jobParams;
        return this;
    }
    public set jobParams(jobParams: string  | undefined) {
        this['job_params'] = jobParams;
    }
    public get jobParams(): string | undefined {
        return this['job_params'];
    }
    public withNodeName(nodeName: string): SearchDetailV2 {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withNodeType(nodeType: string): SearchDetailV2 {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withScriptName(scriptName: string): SearchDetailV2 {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withScriptType(scriptType: string): SearchDetailV2 {
        this['script_type'] = scriptType;
        return this;
    }
    public set scriptType(scriptType: string  | undefined) {
        this['script_type'] = scriptType;
    }
    public get scriptType(): string | undefined {
        return this['script_type'];
    }
    public withScriptParams(scriptParams: string): SearchDetailV2 {
        this['script_params'] = scriptParams;
        return this;
    }
    public set scriptParams(scriptParams: string  | undefined) {
        this['script_params'] = scriptParams;
    }
    public get scriptParams(): string | undefined {
        return this['script_params'];
    }
    public withCdmClusterName(cdmClusterName: string): SearchDetailV2 {
        this['cdm_cluster_name'] = cdmClusterName;
        return this;
    }
    public set cdmClusterName(cdmClusterName: string  | undefined) {
        this['cdm_cluster_name'] = cdmClusterName;
    }
    public get cdmClusterName(): string | undefined {
        return this['cdm_cluster_name'];
    }
    public withCdmJobName(cdmJobName: string): SearchDetailV2 {
        this['cdm_job_name'] = cdmJobName;
        return this;
    }
    public set cdmJobName(cdmJobName: string  | undefined) {
        this['cdm_job_name'] = cdmJobName;
    }
    public get cdmJobName(): string | undefined {
        return this['cdm_job_name'];
    }
    public withCdmParams(cdmParams: string): SearchDetailV2 {
        this['cdm_params'] = cdmParams;
        return this;
    }
    public set cdmParams(cdmParams: string  | undefined) {
        this['cdm_params'] = cdmParams;
    }
    public get cdmParams(): string | undefined {
        return this['cdm_params'];
    }
    public withWorkspaceName(workspaceName: string): SearchDetailV2 {
        this['workspace_name'] = workspaceName;
        return this;
    }
    public set workspaceName(workspaceName: string  | undefined) {
        this['workspace_name'] = workspaceName;
    }
    public get workspaceName(): string | undefined {
        return this['workspace_name'];
    }
    public withJobId(jobId: string): SearchDetailV2 {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withScriptId(scriptId: string): SearchDetailV2 {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withSingleNodeJobType(singleNodeJobType: string): SearchDetailV2 {
        this['single_node_job_type'] = singleNodeJobType;
        return this;
    }
    public set singleNodeJobType(singleNodeJobType: string  | undefined) {
        this['single_node_job_type'] = singleNodeJobType;
    }
    public get singleNodeJobType(): string | undefined {
        return this['single_node_job_type'];
    }
    public withScheduleState(scheduleState: string): SearchDetailV2 {
        this['schedule_state'] = scheduleState;
        return this;
    }
    public set scheduleState(scheduleState: string  | undefined) {
        this['schedule_state'] = scheduleState;
    }
    public get scheduleState(): string | undefined {
        return this['schedule_state'];
    }
}