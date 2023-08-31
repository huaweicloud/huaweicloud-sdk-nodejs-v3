import { TaskBaseResponseBody } from './TaskBaseResponseBody';


export class AppExecutionInfo {
    public id?: string;
    public name?: string;
    public duration?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'is_care'?: boolean;
    private 'can_modify'?: boolean;
    private 'can_delete'?: boolean;
    private 'can_view'?: boolean;
    private 'can_execute'?: boolean;
    private 'can_copy'?: boolean;
    private 'can_manage'?: boolean;
    private 'can_create_env'?: boolean;
    private 'deploy_system'?: string;
    private 'create_user_id'?: string;
    private 'create_tenant_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'execution_time'?: string;
    private 'end_time'?: string;
    private 'execution_state'?: string;
    private 'release_id'?: number;
    private 'executor_id'?: string;
    private 'executor_nick_name'?: string;
    private 'arrange_infos'?: Array<TaskBaseResponseBody>;
    public constructor() { 
    }
    public withId(id: string): AppExecutionInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AppExecutionInfo {
        this['name'] = name;
        return this;
    }
    public withDuration(duration: string): AppExecutionInfo {
        this['duration'] = duration;
        return this;
    }
    public withProjectId(projectId: string): AppExecutionInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): AppExecutionInfo {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withIsCare(isCare: boolean): AppExecutionInfo {
        this['is_care'] = isCare;
        return this;
    }
    public set isCare(isCare: boolean  | undefined) {
        this['is_care'] = isCare;
    }
    public get isCare(): boolean | undefined {
        return this['is_care'];
    }
    public withCanModify(canModify: boolean): AppExecutionInfo {
        this['can_modify'] = canModify;
        return this;
    }
    public set canModify(canModify: boolean  | undefined) {
        this['can_modify'] = canModify;
    }
    public get canModify(): boolean | undefined {
        return this['can_modify'];
    }
    public withCanDelete(canDelete: boolean): AppExecutionInfo {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanView(canView: boolean): AppExecutionInfo {
        this['can_view'] = canView;
        return this;
    }
    public set canView(canView: boolean  | undefined) {
        this['can_view'] = canView;
    }
    public get canView(): boolean | undefined {
        return this['can_view'];
    }
    public withCanExecute(canExecute: boolean): AppExecutionInfo {
        this['can_execute'] = canExecute;
        return this;
    }
    public set canExecute(canExecute: boolean  | undefined) {
        this['can_execute'] = canExecute;
    }
    public get canExecute(): boolean | undefined {
        return this['can_execute'];
    }
    public withCanCopy(canCopy: boolean): AppExecutionInfo {
        this['can_copy'] = canCopy;
        return this;
    }
    public set canCopy(canCopy: boolean  | undefined) {
        this['can_copy'] = canCopy;
    }
    public get canCopy(): boolean | undefined {
        return this['can_copy'];
    }
    public withCanManage(canManage: boolean): AppExecutionInfo {
        this['can_manage'] = canManage;
        return this;
    }
    public set canManage(canManage: boolean  | undefined) {
        this['can_manage'] = canManage;
    }
    public get canManage(): boolean | undefined {
        return this['can_manage'];
    }
    public withCanCreateEnv(canCreateEnv: boolean): AppExecutionInfo {
        this['can_create_env'] = canCreateEnv;
        return this;
    }
    public set canCreateEnv(canCreateEnv: boolean  | undefined) {
        this['can_create_env'] = canCreateEnv;
    }
    public get canCreateEnv(): boolean | undefined {
        return this['can_create_env'];
    }
    public withDeploySystem(deploySystem: string): AppExecutionInfo {
        this['deploy_system'] = deploySystem;
        return this;
    }
    public set deploySystem(deploySystem: string  | undefined) {
        this['deploy_system'] = deploySystem;
    }
    public get deploySystem(): string | undefined {
        return this['deploy_system'];
    }
    public withCreateUserId(createUserId: string): AppExecutionInfo {
        this['create_user_id'] = createUserId;
        return this;
    }
    public set createUserId(createUserId: string  | undefined) {
        this['create_user_id'] = createUserId;
    }
    public get createUserId(): string | undefined {
        return this['create_user_id'];
    }
    public withCreateTenantId(createTenantId: string): AppExecutionInfo {
        this['create_tenant_id'] = createTenantId;
        return this;
    }
    public set createTenantId(createTenantId: string  | undefined) {
        this['create_tenant_id'] = createTenantId;
    }
    public get createTenantId(): string | undefined {
        return this['create_tenant_id'];
    }
    public withCreateTime(createTime: string): AppExecutionInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): AppExecutionInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withExecutionTime(executionTime: string): AppExecutionInfo {
        this['execution_time'] = executionTime;
        return this;
    }
    public set executionTime(executionTime: string  | undefined) {
        this['execution_time'] = executionTime;
    }
    public get executionTime(): string | undefined {
        return this['execution_time'];
    }
    public withEndTime(endTime: string): AppExecutionInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withExecutionState(executionState: string): AppExecutionInfo {
        this['execution_state'] = executionState;
        return this;
    }
    public set executionState(executionState: string  | undefined) {
        this['execution_state'] = executionState;
    }
    public get executionState(): string | undefined {
        return this['execution_state'];
    }
    public withReleaseId(releaseId: number): AppExecutionInfo {
        this['release_id'] = releaseId;
        return this;
    }
    public set releaseId(releaseId: number  | undefined) {
        this['release_id'] = releaseId;
    }
    public get releaseId(): number | undefined {
        return this['release_id'];
    }
    public withExecutorId(executorId: string): AppExecutionInfo {
        this['executor_id'] = executorId;
        return this;
    }
    public set executorId(executorId: string  | undefined) {
        this['executor_id'] = executorId;
    }
    public get executorId(): string | undefined {
        return this['executor_id'];
    }
    public withExecutorNickName(executorNickName: string): AppExecutionInfo {
        this['executor_nick_name'] = executorNickName;
        return this;
    }
    public set executorNickName(executorNickName: string  | undefined) {
        this['executor_nick_name'] = executorNickName;
    }
    public get executorNickName(): string | undefined {
        return this['executor_nick_name'];
    }
    public withArrangeInfos(arrangeInfos: Array<TaskBaseResponseBody>): AppExecutionInfo {
        this['arrange_infos'] = arrangeInfos;
        return this;
    }
    public set arrangeInfos(arrangeInfos: Array<TaskBaseResponseBody>  | undefined) {
        this['arrange_infos'] = arrangeInfos;
    }
    public get arrangeInfos(): Array<TaskBaseResponseBody> | undefined {
        return this['arrange_infos'];
    }
}