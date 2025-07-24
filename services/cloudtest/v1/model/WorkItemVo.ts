

export class WorkItemVo {
    public name?: string;
    public owner?: string;
    public path?: string;
    private 'start_date'?: string;
    private 'due_date'?: string;
    public region?: string;
    public creator?: string;
    public updator?: string;
    private 'project_uuid'?: string;
    private 'work_item_id'?: string;
    private 'status_id'?: string;
    private 'status_name'?: string;
    private 'tracker_id'?: string;
    private 'tracker_name'?: string;
    private 'iteration_id'?: string;
    private 'module_id'?: string;
    private 'severity_id'?: string;
    private 'severity_name'?: string;
    private 'parent_workitem_id'?: string;
    private 'board_id'?: string;
    private 'board_name'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'iteration_name'?: string;
    private 'module_name'?: string;
    private 'module_path'?: string;
    private 'module_path_name'?: string;
    private 'owner_name'?: string;
    private 'have_child_dynamic'?: boolean;
    private 'has_child'?: boolean;
    private 'issue_dynamic_count'?: number;
    private 'case_count'?: number;
    private 'sequence_id'?: string;
    private 'pi_id'?: string;
    private 'pi_name'?: string;
    public constructor() { 
    }
    public withName(name: string): WorkItemVo {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): WorkItemVo {
        this['owner'] = owner;
        return this;
    }
    public withPath(path: string): WorkItemVo {
        this['path'] = path;
        return this;
    }
    public withStartDate(startDate: string): WorkItemVo {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withDueDate(dueDate: string): WorkItemVo {
        this['due_date'] = dueDate;
        return this;
    }
    public set dueDate(dueDate: string  | undefined) {
        this['due_date'] = dueDate;
    }
    public get dueDate(): string | undefined {
        return this['due_date'];
    }
    public withRegion(region: string): WorkItemVo {
        this['region'] = region;
        return this;
    }
    public withCreator(creator: string): WorkItemVo {
        this['creator'] = creator;
        return this;
    }
    public withUpdator(updator: string): WorkItemVo {
        this['updator'] = updator;
        return this;
    }
    public withProjectUuid(projectUuid: string): WorkItemVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withWorkItemId(workItemId: string): WorkItemVo {
        this['work_item_id'] = workItemId;
        return this;
    }
    public set workItemId(workItemId: string  | undefined) {
        this['work_item_id'] = workItemId;
    }
    public get workItemId(): string | undefined {
        return this['work_item_id'];
    }
    public withStatusId(statusId: string): WorkItemVo {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: string  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): string | undefined {
        return this['status_id'];
    }
    public withStatusName(statusName: string): WorkItemVo {
        this['status_name'] = statusName;
        return this;
    }
    public set statusName(statusName: string  | undefined) {
        this['status_name'] = statusName;
    }
    public get statusName(): string | undefined {
        return this['status_name'];
    }
    public withTrackerId(trackerId: string): WorkItemVo {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: string  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): string | undefined {
        return this['tracker_id'];
    }
    public withTrackerName(trackerName: string): WorkItemVo {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string  | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName(): string | undefined {
        return this['tracker_name'];
    }
    public withIterationId(iterationId: string): WorkItemVo {
        this['iteration_id'] = iterationId;
        return this;
    }
    public set iterationId(iterationId: string  | undefined) {
        this['iteration_id'] = iterationId;
    }
    public get iterationId(): string | undefined {
        return this['iteration_id'];
    }
    public withModuleId(moduleId: string): WorkItemVo {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withSeverityId(severityId: string): WorkItemVo {
        this['severity_id'] = severityId;
        return this;
    }
    public set severityId(severityId: string  | undefined) {
        this['severity_id'] = severityId;
    }
    public get severityId(): string | undefined {
        return this['severity_id'];
    }
    public withSeverityName(severityName: string): WorkItemVo {
        this['severity_name'] = severityName;
        return this;
    }
    public set severityName(severityName: string  | undefined) {
        this['severity_name'] = severityName;
    }
    public get severityName(): string | undefined {
        return this['severity_name'];
    }
    public withParentWorkitemId(parentWorkitemId: string): WorkItemVo {
        this['parent_workitem_id'] = parentWorkitemId;
        return this;
    }
    public set parentWorkitemId(parentWorkitemId: string  | undefined) {
        this['parent_workitem_id'] = parentWorkitemId;
    }
    public get parentWorkitemId(): string | undefined {
        return this['parent_workitem_id'];
    }
    public withBoardId(boardId: string): WorkItemVo {
        this['board_id'] = boardId;
        return this;
    }
    public set boardId(boardId: string  | undefined) {
        this['board_id'] = boardId;
    }
    public get boardId(): string | undefined {
        return this['board_id'];
    }
    public withBoardName(boardName: string): WorkItemVo {
        this['board_name'] = boardName;
        return this;
    }
    public set boardName(boardName: string  | undefined) {
        this['board_name'] = boardName;
    }
    public get boardName(): string | undefined {
        return this['board_name'];
    }
    public withCreateTime(createTime: Date): WorkItemVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): WorkItemVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withIterationName(iterationName: string): WorkItemVo {
        this['iteration_name'] = iterationName;
        return this;
    }
    public set iterationName(iterationName: string  | undefined) {
        this['iteration_name'] = iterationName;
    }
    public get iterationName(): string | undefined {
        return this['iteration_name'];
    }
    public withModuleName(moduleName: string): WorkItemVo {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModulePath(modulePath: string): WorkItemVo {
        this['module_path'] = modulePath;
        return this;
    }
    public set modulePath(modulePath: string  | undefined) {
        this['module_path'] = modulePath;
    }
    public get modulePath(): string | undefined {
        return this['module_path'];
    }
    public withModulePathName(modulePathName: string): WorkItemVo {
        this['module_path_name'] = modulePathName;
        return this;
    }
    public set modulePathName(modulePathName: string  | undefined) {
        this['module_path_name'] = modulePathName;
    }
    public get modulePathName(): string | undefined {
        return this['module_path_name'];
    }
    public withOwnerName(ownerName: string): WorkItemVo {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withHaveChildDynamic(haveChildDynamic: boolean): WorkItemVo {
        this['have_child_dynamic'] = haveChildDynamic;
        return this;
    }
    public set haveChildDynamic(haveChildDynamic: boolean  | undefined) {
        this['have_child_dynamic'] = haveChildDynamic;
    }
    public get haveChildDynamic(): boolean | undefined {
        return this['have_child_dynamic'];
    }
    public withHasChild(hasChild: boolean): WorkItemVo {
        this['has_child'] = hasChild;
        return this;
    }
    public set hasChild(hasChild: boolean  | undefined) {
        this['has_child'] = hasChild;
    }
    public get hasChild(): boolean | undefined {
        return this['has_child'];
    }
    public withIssueDynamicCount(issueDynamicCount: number): WorkItemVo {
        this['issue_dynamic_count'] = issueDynamicCount;
        return this;
    }
    public set issueDynamicCount(issueDynamicCount: number  | undefined) {
        this['issue_dynamic_count'] = issueDynamicCount;
    }
    public get issueDynamicCount(): number | undefined {
        return this['issue_dynamic_count'];
    }
    public withCaseCount(caseCount: number): WorkItemVo {
        this['case_count'] = caseCount;
        return this;
    }
    public set caseCount(caseCount: number  | undefined) {
        this['case_count'] = caseCount;
    }
    public get caseCount(): number | undefined {
        return this['case_count'];
    }
    public withSequenceId(sequenceId: string): WorkItemVo {
        this['sequence_id'] = sequenceId;
        return this;
    }
    public set sequenceId(sequenceId: string  | undefined) {
        this['sequence_id'] = sequenceId;
    }
    public get sequenceId(): string | undefined {
        return this['sequence_id'];
    }
    public withPiId(piId: string): WorkItemVo {
        this['pi_id'] = piId;
        return this;
    }
    public set piId(piId: string  | undefined) {
        this['pi_id'] = piId;
    }
    public get piId(): string | undefined {
        return this['pi_id'];
    }
    public withPiName(piName: string): WorkItemVo {
        this['pi_name'] = piName;
        return this;
    }
    public set piName(piName: string  | undefined) {
        this['pi_name'] = piName;
    }
    public get piName(): string | undefined {
        return this['pi_name'];
    }
}