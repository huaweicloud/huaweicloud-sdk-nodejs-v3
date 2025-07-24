import { CaseOperationVo } from './CaseOperationVo';
import { NameAndValueAndCodeVo } from './NameAndValueAndCodeVo';


export class TaskVo {
    public uri?: string;
    public name?: string;
    public stage?: string;
    private 'number'?: string;
    public tags?: string;
    public description?: string;
    public region?: string;
    private 'author_id'?: string;
    private 'author_name'?: string;
    private 'owner_id'?: string;
    private 'owner_name'?: string;
    private 'parent_uri'?: string;
    private 'parent_path'?: string;
    private 'origin_uri'?: string;
    private 'version_uri'?: string;
    private 'branch_uri'?: string;
    private 'version_name'?: string;
    private 'creation_date'?: Date;
    private 'create_date_timestamp'?: number;
    private 'update_time'?: Date;
    private 'update_time_timestamp'?: number;
    private 'relation_change_time'?: Date;
    private 'relation_change_time_timestamp'?: number;
    private 'test_case_condition'?: string;
    private 'updator_id'?: string;
    private 'updator_name'?: string;
    private 'relation_changer_id'?: string;
    private 'service_type'?: number;
    private 'service_type_name'?: string;
    private 'tag_list'?: Array<string>;
    private 'module_id'?: string;
    private 'module_name'?: string;
    private 'module_path'?: string;
    private 'module_path_name'?: string;
    private 'release_dev'?: string;
    private 'ext_param'?: string;
    private 'execute_way'?: number;
    private 'execute_type'?: number;
    private 'status_code'?: number;
    private 'status_name'?: string;
    private 'result_code'?: number;
    private 'result_name'?: string;
    private 'execute_status_code'?: number;
    private 'execute_status_name'?: string;
    private 'executor_id'?: string;
    private 'executor_name'?: string;
    private 'execute_latest_time'?: Date;
    private 'execute_latest_time_timestamp'?: number;
    private 'execute_duration'?: string;
    private 'execute_times'?: number;
    private 'project_uuid'?: string;
    private 'case_operation_info'?: CaseOperationVo;
    private 'assign_case_num'?: number;
    private 'finish_case_num'?: number;
    private 'assign_defect_num'?: number;
    private 'task_assign_msg'?: string;
    private 'iterator_version_uri'?: string;
    private 'result_number_list'?: Array<NameAndValueAndCodeVo>;
    private 'finish_date'?: Date;
    private 'finish_date_timestamp'?: number;
    private 'plan_start_date'?: Date;
    private 'plan_start_timestamp'?: number;
    private 'plan_end_date'?: Date;
    private 'plan_end_timestamp'?: number;
    private 'expiration_status'?: number;
    private 'expiration_status_name'?: string;
    public constructor() { 
    }
    public withUri(uri: string): TaskVo {
        this['uri'] = uri;
        return this;
    }
    public withName(name: string): TaskVo {
        this['name'] = name;
        return this;
    }
    public withStage(stage: string): TaskVo {
        this['stage'] = stage;
        return this;
    }
    public withModelNumber(modelNumber: string): TaskVo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withTags(tags: string): TaskVo {
        this['tags'] = tags;
        return this;
    }
    public withDescription(description: string): TaskVo {
        this['description'] = description;
        return this;
    }
    public withRegion(region: string): TaskVo {
        this['region'] = region;
        return this;
    }
    public withAuthorId(authorId: string): TaskVo {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: string  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): string | undefined {
        return this['author_id'];
    }
    public withAuthorName(authorName: string): TaskVo {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withOwnerId(ownerId: string): TaskVo {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withOwnerName(ownerName: string): TaskVo {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withParentUri(parentUri: string): TaskVo {
        this['parent_uri'] = parentUri;
        return this;
    }
    public set parentUri(parentUri: string  | undefined) {
        this['parent_uri'] = parentUri;
    }
    public get parentUri(): string | undefined {
        return this['parent_uri'];
    }
    public withParentPath(parentPath: string): TaskVo {
        this['parent_path'] = parentPath;
        return this;
    }
    public set parentPath(parentPath: string  | undefined) {
        this['parent_path'] = parentPath;
    }
    public get parentPath(): string | undefined {
        return this['parent_path'];
    }
    public withOriginUri(originUri: string): TaskVo {
        this['origin_uri'] = originUri;
        return this;
    }
    public set originUri(originUri: string  | undefined) {
        this['origin_uri'] = originUri;
    }
    public get originUri(): string | undefined {
        return this['origin_uri'];
    }
    public withVersionUri(versionUri: string): TaskVo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withBranchUri(branchUri: string): TaskVo {
        this['branch_uri'] = branchUri;
        return this;
    }
    public set branchUri(branchUri: string  | undefined) {
        this['branch_uri'] = branchUri;
    }
    public get branchUri(): string | undefined {
        return this['branch_uri'];
    }
    public withVersionName(versionName: string): TaskVo {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withCreationDate(creationDate: Date): TaskVo {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: Date  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): Date | undefined {
        return this['creation_date'];
    }
    public withCreateDateTimestamp(createDateTimestamp: number): TaskVo {
        this['create_date_timestamp'] = createDateTimestamp;
        return this;
    }
    public set createDateTimestamp(createDateTimestamp: number  | undefined) {
        this['create_date_timestamp'] = createDateTimestamp;
    }
    public get createDateTimestamp(): number | undefined {
        return this['create_date_timestamp'];
    }
    public withUpdateTime(updateTime: Date): TaskVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUpdateTimeTimestamp(updateTimeTimestamp: number): TaskVo {
        this['update_time_timestamp'] = updateTimeTimestamp;
        return this;
    }
    public set updateTimeTimestamp(updateTimeTimestamp: number  | undefined) {
        this['update_time_timestamp'] = updateTimeTimestamp;
    }
    public get updateTimeTimestamp(): number | undefined {
        return this['update_time_timestamp'];
    }
    public withRelationChangeTime(relationChangeTime: Date): TaskVo {
        this['relation_change_time'] = relationChangeTime;
        return this;
    }
    public set relationChangeTime(relationChangeTime: Date  | undefined) {
        this['relation_change_time'] = relationChangeTime;
    }
    public get relationChangeTime(): Date | undefined {
        return this['relation_change_time'];
    }
    public withRelationChangeTimeTimestamp(relationChangeTimeTimestamp: number): TaskVo {
        this['relation_change_time_timestamp'] = relationChangeTimeTimestamp;
        return this;
    }
    public set relationChangeTimeTimestamp(relationChangeTimeTimestamp: number  | undefined) {
        this['relation_change_time_timestamp'] = relationChangeTimeTimestamp;
    }
    public get relationChangeTimeTimestamp(): number | undefined {
        return this['relation_change_time_timestamp'];
    }
    public withTestCaseCondition(testCaseCondition: string): TaskVo {
        this['test_case_condition'] = testCaseCondition;
        return this;
    }
    public set testCaseCondition(testCaseCondition: string  | undefined) {
        this['test_case_condition'] = testCaseCondition;
    }
    public get testCaseCondition(): string | undefined {
        return this['test_case_condition'];
    }
    public withUpdatorId(updatorId: string): TaskVo {
        this['updator_id'] = updatorId;
        return this;
    }
    public set updatorId(updatorId: string  | undefined) {
        this['updator_id'] = updatorId;
    }
    public get updatorId(): string | undefined {
        return this['updator_id'];
    }
    public withUpdatorName(updatorName: string): TaskVo {
        this['updator_name'] = updatorName;
        return this;
    }
    public set updatorName(updatorName: string  | undefined) {
        this['updator_name'] = updatorName;
    }
    public get updatorName(): string | undefined {
        return this['updator_name'];
    }
    public withRelationChangerId(relationChangerId: string): TaskVo {
        this['relation_changer_id'] = relationChangerId;
        return this;
    }
    public set relationChangerId(relationChangerId: string  | undefined) {
        this['relation_changer_id'] = relationChangerId;
    }
    public get relationChangerId(): string | undefined {
        return this['relation_changer_id'];
    }
    public withServiceType(serviceType: number): TaskVo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: number  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): number | undefined {
        return this['service_type'];
    }
    public withServiceTypeName(serviceTypeName: string): TaskVo {
        this['service_type_name'] = serviceTypeName;
        return this;
    }
    public set serviceTypeName(serviceTypeName: string  | undefined) {
        this['service_type_name'] = serviceTypeName;
    }
    public get serviceTypeName(): string | undefined {
        return this['service_type_name'];
    }
    public withTagList(tagList: Array<string>): TaskVo {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<string>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<string> | undefined {
        return this['tag_list'];
    }
    public withModuleId(moduleId: string): TaskVo {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withModuleName(moduleName: string): TaskVo {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModulePath(modulePath: string): TaskVo {
        this['module_path'] = modulePath;
        return this;
    }
    public set modulePath(modulePath: string  | undefined) {
        this['module_path'] = modulePath;
    }
    public get modulePath(): string | undefined {
        return this['module_path'];
    }
    public withModulePathName(modulePathName: string): TaskVo {
        this['module_path_name'] = modulePathName;
        return this;
    }
    public set modulePathName(modulePathName: string  | undefined) {
        this['module_path_name'] = modulePathName;
    }
    public get modulePathName(): string | undefined {
        return this['module_path_name'];
    }
    public withReleaseDev(releaseDev: string): TaskVo {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withExtParam(extParam: string): TaskVo {
        this['ext_param'] = extParam;
        return this;
    }
    public set extParam(extParam: string  | undefined) {
        this['ext_param'] = extParam;
    }
    public get extParam(): string | undefined {
        return this['ext_param'];
    }
    public withExecuteWay(executeWay: number): TaskVo {
        this['execute_way'] = executeWay;
        return this;
    }
    public set executeWay(executeWay: number  | undefined) {
        this['execute_way'] = executeWay;
    }
    public get executeWay(): number | undefined {
        return this['execute_way'];
    }
    public withExecuteType(executeType: number): TaskVo {
        this['execute_type'] = executeType;
        return this;
    }
    public set executeType(executeType: number  | undefined) {
        this['execute_type'] = executeType;
    }
    public get executeType(): number | undefined {
        return this['execute_type'];
    }
    public withStatusCode(statusCode: number): TaskVo {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: number  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): number | undefined {
        return this['status_code'];
    }
    public withStatusName(statusName: string): TaskVo {
        this['status_name'] = statusName;
        return this;
    }
    public set statusName(statusName: string  | undefined) {
        this['status_name'] = statusName;
    }
    public get statusName(): string | undefined {
        return this['status_name'];
    }
    public withResultCode(resultCode: number): TaskVo {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: number  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): number | undefined {
        return this['result_code'];
    }
    public withResultName(resultName: string): TaskVo {
        this['result_name'] = resultName;
        return this;
    }
    public set resultName(resultName: string  | undefined) {
        this['result_name'] = resultName;
    }
    public get resultName(): string | undefined {
        return this['result_name'];
    }
    public withExecuteStatusCode(executeStatusCode: number): TaskVo {
        this['execute_status_code'] = executeStatusCode;
        return this;
    }
    public set executeStatusCode(executeStatusCode: number  | undefined) {
        this['execute_status_code'] = executeStatusCode;
    }
    public get executeStatusCode(): number | undefined {
        return this['execute_status_code'];
    }
    public withExecuteStatusName(executeStatusName: string): TaskVo {
        this['execute_status_name'] = executeStatusName;
        return this;
    }
    public set executeStatusName(executeStatusName: string  | undefined) {
        this['execute_status_name'] = executeStatusName;
    }
    public get executeStatusName(): string | undefined {
        return this['execute_status_name'];
    }
    public withExecutorId(executorId: string): TaskVo {
        this['executor_id'] = executorId;
        return this;
    }
    public set executorId(executorId: string  | undefined) {
        this['executor_id'] = executorId;
    }
    public get executorId(): string | undefined {
        return this['executor_id'];
    }
    public withExecutorName(executorName: string): TaskVo {
        this['executor_name'] = executorName;
        return this;
    }
    public set executorName(executorName: string  | undefined) {
        this['executor_name'] = executorName;
    }
    public get executorName(): string | undefined {
        return this['executor_name'];
    }
    public withExecuteLatestTime(executeLatestTime: Date): TaskVo {
        this['execute_latest_time'] = executeLatestTime;
        return this;
    }
    public set executeLatestTime(executeLatestTime: Date  | undefined) {
        this['execute_latest_time'] = executeLatestTime;
    }
    public get executeLatestTime(): Date | undefined {
        return this['execute_latest_time'];
    }
    public withExecuteLatestTimeTimestamp(executeLatestTimeTimestamp: number): TaskVo {
        this['execute_latest_time_timestamp'] = executeLatestTimeTimestamp;
        return this;
    }
    public set executeLatestTimeTimestamp(executeLatestTimeTimestamp: number  | undefined) {
        this['execute_latest_time_timestamp'] = executeLatestTimeTimestamp;
    }
    public get executeLatestTimeTimestamp(): number | undefined {
        return this['execute_latest_time_timestamp'];
    }
    public withExecuteDuration(executeDuration: string): TaskVo {
        this['execute_duration'] = executeDuration;
        return this;
    }
    public set executeDuration(executeDuration: string  | undefined) {
        this['execute_duration'] = executeDuration;
    }
    public get executeDuration(): string | undefined {
        return this['execute_duration'];
    }
    public withExecuteTimes(executeTimes: number): TaskVo {
        this['execute_times'] = executeTimes;
        return this;
    }
    public set executeTimes(executeTimes: number  | undefined) {
        this['execute_times'] = executeTimes;
    }
    public get executeTimes(): number | undefined {
        return this['execute_times'];
    }
    public withProjectUuid(projectUuid: string): TaskVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withCaseOperationInfo(caseOperationInfo: CaseOperationVo): TaskVo {
        this['case_operation_info'] = caseOperationInfo;
        return this;
    }
    public set caseOperationInfo(caseOperationInfo: CaseOperationVo  | undefined) {
        this['case_operation_info'] = caseOperationInfo;
    }
    public get caseOperationInfo(): CaseOperationVo | undefined {
        return this['case_operation_info'];
    }
    public withAssignCaseNum(assignCaseNum: number): TaskVo {
        this['assign_case_num'] = assignCaseNum;
        return this;
    }
    public set assignCaseNum(assignCaseNum: number  | undefined) {
        this['assign_case_num'] = assignCaseNum;
    }
    public get assignCaseNum(): number | undefined {
        return this['assign_case_num'];
    }
    public withFinishCaseNum(finishCaseNum: number): TaskVo {
        this['finish_case_num'] = finishCaseNum;
        return this;
    }
    public set finishCaseNum(finishCaseNum: number  | undefined) {
        this['finish_case_num'] = finishCaseNum;
    }
    public get finishCaseNum(): number | undefined {
        return this['finish_case_num'];
    }
    public withAssignDefectNum(assignDefectNum: number): TaskVo {
        this['assign_defect_num'] = assignDefectNum;
        return this;
    }
    public set assignDefectNum(assignDefectNum: number  | undefined) {
        this['assign_defect_num'] = assignDefectNum;
    }
    public get assignDefectNum(): number | undefined {
        return this['assign_defect_num'];
    }
    public withTaskAssignMsg(taskAssignMsg: string): TaskVo {
        this['task_assign_msg'] = taskAssignMsg;
        return this;
    }
    public set taskAssignMsg(taskAssignMsg: string  | undefined) {
        this['task_assign_msg'] = taskAssignMsg;
    }
    public get taskAssignMsg(): string | undefined {
        return this['task_assign_msg'];
    }
    public withIteratorVersionUri(iteratorVersionUri: string): TaskVo {
        this['iterator_version_uri'] = iteratorVersionUri;
        return this;
    }
    public set iteratorVersionUri(iteratorVersionUri: string  | undefined) {
        this['iterator_version_uri'] = iteratorVersionUri;
    }
    public get iteratorVersionUri(): string | undefined {
        return this['iterator_version_uri'];
    }
    public withResultNumberList(resultNumberList: Array<NameAndValueAndCodeVo>): TaskVo {
        this['result_number_list'] = resultNumberList;
        return this;
    }
    public set resultNumberList(resultNumberList: Array<NameAndValueAndCodeVo>  | undefined) {
        this['result_number_list'] = resultNumberList;
    }
    public get resultNumberList(): Array<NameAndValueAndCodeVo> | undefined {
        return this['result_number_list'];
    }
    public withFinishDate(finishDate: Date): TaskVo {
        this['finish_date'] = finishDate;
        return this;
    }
    public set finishDate(finishDate: Date  | undefined) {
        this['finish_date'] = finishDate;
    }
    public get finishDate(): Date | undefined {
        return this['finish_date'];
    }
    public withFinishDateTimestamp(finishDateTimestamp: number): TaskVo {
        this['finish_date_timestamp'] = finishDateTimestamp;
        return this;
    }
    public set finishDateTimestamp(finishDateTimestamp: number  | undefined) {
        this['finish_date_timestamp'] = finishDateTimestamp;
    }
    public get finishDateTimestamp(): number | undefined {
        return this['finish_date_timestamp'];
    }
    public withPlanStartDate(planStartDate: Date): TaskVo {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: Date  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): Date | undefined {
        return this['plan_start_date'];
    }
    public withPlanStartTimestamp(planStartTimestamp: number): TaskVo {
        this['plan_start_timestamp'] = planStartTimestamp;
        return this;
    }
    public set planStartTimestamp(planStartTimestamp: number  | undefined) {
        this['plan_start_timestamp'] = planStartTimestamp;
    }
    public get planStartTimestamp(): number | undefined {
        return this['plan_start_timestamp'];
    }
    public withPlanEndDate(planEndDate: Date): TaskVo {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: Date  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): Date | undefined {
        return this['plan_end_date'];
    }
    public withPlanEndTimestamp(planEndTimestamp: number): TaskVo {
        this['plan_end_timestamp'] = planEndTimestamp;
        return this;
    }
    public set planEndTimestamp(planEndTimestamp: number  | undefined) {
        this['plan_end_timestamp'] = planEndTimestamp;
    }
    public get planEndTimestamp(): number | undefined {
        return this['plan_end_timestamp'];
    }
    public withExpirationStatus(expirationStatus: number): TaskVo {
        this['expiration_status'] = expirationStatus;
        return this;
    }
    public set expirationStatus(expirationStatus: number  | undefined) {
        this['expiration_status'] = expirationStatus;
    }
    public get expirationStatus(): number | undefined {
        return this['expiration_status'];
    }
    public withExpirationStatusName(expirationStatusName: string): TaskVo {
        this['expiration_status_name'] = expirationStatusName;
        return this;
    }
    public set expirationStatusName(expirationStatusName: string  | undefined) {
        this['expiration_status_name'] = expirationStatusName;
    }
    public get expirationStatusName(): string | undefined {
        return this['expiration_status_name'];
    }
}