import { PermissionApprovalDetailDTO } from './PermissionApprovalDetailDTO';


export class PermissionApprovalOpenapiDTO {
    private 'approval_dispatch_error_msg'?: string;
    private 'approval_dispatch_status'?: string;
    private 'approval_type'?: PermissionApprovalOpenapiDTOApprovalTypeEnum | string;
    private 'approve_reason'?: string;
    private 'current_node_id'?: string;
    private 'current_node_name'?: string;
    private 'current_node_type'?: string;
    public detail?: PermissionApprovalDetailDTO;
    private 'end_time'?: number;
    private 'expire_time'?: number;
    public id?: string;
    private 'instance_id'?: string;
    private 'permission_set_id'?: string;
    private 'project_id'?: string;
    private 'proposer_id'?: string;
    private 'proposer_name'?: string;
    private 'proposer_workspace_id'?: string;
    public reason?: string;
    private 'start_time'?: number;
    public status?: PermissionApprovalOpenapiDTOStatusEnum | string;
    private 'workspace_id'?: string;
    private 'workspace_name'?: string;
    public constructor() { 
    }
    public withApprovalDispatchErrorMsg(approvalDispatchErrorMsg: string): PermissionApprovalOpenapiDTO {
        this['approval_dispatch_error_msg'] = approvalDispatchErrorMsg;
        return this;
    }
    public set approvalDispatchErrorMsg(approvalDispatchErrorMsg: string  | undefined) {
        this['approval_dispatch_error_msg'] = approvalDispatchErrorMsg;
    }
    public get approvalDispatchErrorMsg(): string | undefined {
        return this['approval_dispatch_error_msg'];
    }
    public withApprovalDispatchStatus(approvalDispatchStatus: string): PermissionApprovalOpenapiDTO {
        this['approval_dispatch_status'] = approvalDispatchStatus;
        return this;
    }
    public set approvalDispatchStatus(approvalDispatchStatus: string  | undefined) {
        this['approval_dispatch_status'] = approvalDispatchStatus;
    }
    public get approvalDispatchStatus(): string | undefined {
        return this['approval_dispatch_status'];
    }
    public withApprovalType(approvalType: PermissionApprovalOpenapiDTOApprovalTypeEnum | string): PermissionApprovalOpenapiDTO {
        this['approval_type'] = approvalType;
        return this;
    }
    public set approvalType(approvalType: PermissionApprovalOpenapiDTOApprovalTypeEnum | string  | undefined) {
        this['approval_type'] = approvalType;
    }
    public get approvalType(): PermissionApprovalOpenapiDTOApprovalTypeEnum | string | undefined {
        return this['approval_type'];
    }
    public withApproveReason(approveReason: string): PermissionApprovalOpenapiDTO {
        this['approve_reason'] = approveReason;
        return this;
    }
    public set approveReason(approveReason: string  | undefined) {
        this['approve_reason'] = approveReason;
    }
    public get approveReason(): string | undefined {
        return this['approve_reason'];
    }
    public withCurrentNodeId(currentNodeId: string): PermissionApprovalOpenapiDTO {
        this['current_node_id'] = currentNodeId;
        return this;
    }
    public set currentNodeId(currentNodeId: string  | undefined) {
        this['current_node_id'] = currentNodeId;
    }
    public get currentNodeId(): string | undefined {
        return this['current_node_id'];
    }
    public withCurrentNodeName(currentNodeName: string): PermissionApprovalOpenapiDTO {
        this['current_node_name'] = currentNodeName;
        return this;
    }
    public set currentNodeName(currentNodeName: string  | undefined) {
        this['current_node_name'] = currentNodeName;
    }
    public get currentNodeName(): string | undefined {
        return this['current_node_name'];
    }
    public withCurrentNodeType(currentNodeType: string): PermissionApprovalOpenapiDTO {
        this['current_node_type'] = currentNodeType;
        return this;
    }
    public set currentNodeType(currentNodeType: string  | undefined) {
        this['current_node_type'] = currentNodeType;
    }
    public get currentNodeType(): string | undefined {
        return this['current_node_type'];
    }
    public withDetail(detail: PermissionApprovalDetailDTO): PermissionApprovalOpenapiDTO {
        this['detail'] = detail;
        return this;
    }
    public withEndTime(endTime: number): PermissionApprovalOpenapiDTO {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withExpireTime(expireTime: number): PermissionApprovalOpenapiDTO {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withId(id: string): PermissionApprovalOpenapiDTO {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): PermissionApprovalOpenapiDTO {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPermissionSetId(permissionSetId: string): PermissionApprovalOpenapiDTO {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withProjectId(projectId: string): PermissionApprovalOpenapiDTO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProposerId(proposerId: string): PermissionApprovalOpenapiDTO {
        this['proposer_id'] = proposerId;
        return this;
    }
    public set proposerId(proposerId: string  | undefined) {
        this['proposer_id'] = proposerId;
    }
    public get proposerId(): string | undefined {
        return this['proposer_id'];
    }
    public withProposerName(proposerName: string): PermissionApprovalOpenapiDTO {
        this['proposer_name'] = proposerName;
        return this;
    }
    public set proposerName(proposerName: string  | undefined) {
        this['proposer_name'] = proposerName;
    }
    public get proposerName(): string | undefined {
        return this['proposer_name'];
    }
    public withProposerWorkspaceId(proposerWorkspaceId: string): PermissionApprovalOpenapiDTO {
        this['proposer_workspace_id'] = proposerWorkspaceId;
        return this;
    }
    public set proposerWorkspaceId(proposerWorkspaceId: string  | undefined) {
        this['proposer_workspace_id'] = proposerWorkspaceId;
    }
    public get proposerWorkspaceId(): string | undefined {
        return this['proposer_workspace_id'];
    }
    public withReason(reason: string): PermissionApprovalOpenapiDTO {
        this['reason'] = reason;
        return this;
    }
    public withStartTime(startTime: number): PermissionApprovalOpenapiDTO {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withStatus(status: PermissionApprovalOpenapiDTOStatusEnum | string): PermissionApprovalOpenapiDTO {
        this['status'] = status;
        return this;
    }
    public withWorkspaceId(workspaceId: string): PermissionApprovalOpenapiDTO {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWorkspaceName(workspaceName: string): PermissionApprovalOpenapiDTO {
        this['workspace_name'] = workspaceName;
        return this;
    }
    public set workspaceName(workspaceName: string  | undefined) {
        this['workspace_name'] = workspaceName;
    }
    public get workspaceName(): string | undefined {
        return this['workspace_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionApprovalOpenapiDTOApprovalTypeEnum {
    DATA_PERMISSION = 'DATA_PERMISSION'
}
/**
    * @export
    * @enum {string}
    */
export enum PermissionApprovalOpenapiDTOStatusEnum {
    WAITING_APPROVE = 'WAITING_APPROVE',
    APPROVED = 'APPROVED',
    REJECT = 'REJECT',
    REVOKE = 'REVOKE'
}
