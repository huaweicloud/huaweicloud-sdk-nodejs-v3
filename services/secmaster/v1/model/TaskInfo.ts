import { TaskCommentInfo } from './TaskCommentInfo';


export class TaskInfo {
    public id?: string;
    private 'aopengine_task_id'?: string;
    public name?: string;
    private 'project_id'?: string;
    public description?: string;
    private 'create_time'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'update_time'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'approveuser_id'?: string;
    private 'approveuser_name'?: string;
    public approver?: string;
    public notes?: string;
    private 'definition_key'?: string;
    public note?: string;
    private 'due_date'?: string;
    private 'action_id'?: string;
    private 'action_version_id'?: string;
    private 'action_instance_id'?: string;
    private 'workspace_id'?: string;
    private 'review_comments'?: string;
    private 'view_parameters'?: string;
    private 'handle_parameters'?: string;
    private 'business_type'?: string;
    private 'related_object'?: string;
    private 'attachment_id_list'?: Array<string>;
    public comments?: Array<TaskCommentInfo>;
    public status?: string;
    private 'due_handle'?: string;
    public constructor() { 
    }
    public withId(id: string): TaskInfo {
        this['id'] = id;
        return this;
    }
    public withAopengineTaskId(aopengineTaskId: string): TaskInfo {
        this['aopengine_task_id'] = aopengineTaskId;
        return this;
    }
    public set aopengineTaskId(aopengineTaskId: string  | undefined) {
        this['aopengine_task_id'] = aopengineTaskId;
    }
    public get aopengineTaskId(): string | undefined {
        return this['aopengine_task_id'];
    }
    public withName(name: string): TaskInfo {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): TaskInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDescription(description: string): TaskInfo {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): TaskInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): TaskInfo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): TaskInfo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withUpdateTime(updateTime: string): TaskInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withModifierId(modifierId: string): TaskInfo {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): TaskInfo {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withApproveuserId(approveuserId: string): TaskInfo {
        this['approveuser_id'] = approveuserId;
        return this;
    }
    public set approveuserId(approveuserId: string  | undefined) {
        this['approveuser_id'] = approveuserId;
    }
    public get approveuserId(): string | undefined {
        return this['approveuser_id'];
    }
    public withApproveuserName(approveuserName: string): TaskInfo {
        this['approveuser_name'] = approveuserName;
        return this;
    }
    public set approveuserName(approveuserName: string  | undefined) {
        this['approveuser_name'] = approveuserName;
    }
    public get approveuserName(): string | undefined {
        return this['approveuser_name'];
    }
    public withApprover(approver: string): TaskInfo {
        this['approver'] = approver;
        return this;
    }
    public withNotes(notes: string): TaskInfo {
        this['notes'] = notes;
        return this;
    }
    public withDefinitionKey(definitionKey: string): TaskInfo {
        this['definition_key'] = definitionKey;
        return this;
    }
    public set definitionKey(definitionKey: string  | undefined) {
        this['definition_key'] = definitionKey;
    }
    public get definitionKey(): string | undefined {
        return this['definition_key'];
    }
    public withNote(note: string): TaskInfo {
        this['note'] = note;
        return this;
    }
    public withDueDate(dueDate: string): TaskInfo {
        this['due_date'] = dueDate;
        return this;
    }
    public set dueDate(dueDate: string  | undefined) {
        this['due_date'] = dueDate;
    }
    public get dueDate(): string | undefined {
        return this['due_date'];
    }
    public withActionId(actionId: string): TaskInfo {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withActionVersionId(actionVersionId: string): TaskInfo {
        this['action_version_id'] = actionVersionId;
        return this;
    }
    public set actionVersionId(actionVersionId: string  | undefined) {
        this['action_version_id'] = actionVersionId;
    }
    public get actionVersionId(): string | undefined {
        return this['action_version_id'];
    }
    public withActionInstanceId(actionInstanceId: string): TaskInfo {
        this['action_instance_id'] = actionInstanceId;
        return this;
    }
    public set actionInstanceId(actionInstanceId: string  | undefined) {
        this['action_instance_id'] = actionInstanceId;
    }
    public get actionInstanceId(): string | undefined {
        return this['action_instance_id'];
    }
    public withWorkspaceId(workspaceId: string): TaskInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withReviewComments(reviewComments: string): TaskInfo {
        this['review_comments'] = reviewComments;
        return this;
    }
    public set reviewComments(reviewComments: string  | undefined) {
        this['review_comments'] = reviewComments;
    }
    public get reviewComments(): string | undefined {
        return this['review_comments'];
    }
    public withViewParameters(viewParameters: string): TaskInfo {
        this['view_parameters'] = viewParameters;
        return this;
    }
    public set viewParameters(viewParameters: string  | undefined) {
        this['view_parameters'] = viewParameters;
    }
    public get viewParameters(): string | undefined {
        return this['view_parameters'];
    }
    public withHandleParameters(handleParameters: string): TaskInfo {
        this['handle_parameters'] = handleParameters;
        return this;
    }
    public set handleParameters(handleParameters: string  | undefined) {
        this['handle_parameters'] = handleParameters;
    }
    public get handleParameters(): string | undefined {
        return this['handle_parameters'];
    }
    public withBusinessType(businessType: string): TaskInfo {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withRelatedObject(relatedObject: string): TaskInfo {
        this['related_object'] = relatedObject;
        return this;
    }
    public set relatedObject(relatedObject: string  | undefined) {
        this['related_object'] = relatedObject;
    }
    public get relatedObject(): string | undefined {
        return this['related_object'];
    }
    public withAttachmentIdList(attachmentIdList: Array<string>): TaskInfo {
        this['attachment_id_list'] = attachmentIdList;
        return this;
    }
    public set attachmentIdList(attachmentIdList: Array<string>  | undefined) {
        this['attachment_id_list'] = attachmentIdList;
    }
    public get attachmentIdList(): Array<string> | undefined {
        return this['attachment_id_list'];
    }
    public withComments(comments: Array<TaskCommentInfo>): TaskInfo {
        this['comments'] = comments;
        return this;
    }
    public withStatus(status: string): TaskInfo {
        this['status'] = status;
        return this;
    }
    public withDueHandle(dueHandle: string): TaskInfo {
        this['due_handle'] = dueHandle;
        return this;
    }
    public set dueHandle(dueHandle: string  | undefined) {
        this['due_handle'] = dueHandle;
    }
    public get dueHandle(): string | undefined {
        return this['due_handle'];
    }
}