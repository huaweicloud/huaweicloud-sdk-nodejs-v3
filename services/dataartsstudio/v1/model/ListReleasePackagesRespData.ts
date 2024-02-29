import { ListReleasePackagesRespPackageApprovers } from './ListReleasePackagesRespPackageApprovers';


export class ListReleasePackagesRespData {
    private 'apply_timestamp'?: string;
    private 'apply_user_id'?: string;
    private 'apply_user_name'?: string;
    private 'delete_flag'?: number;
    private 'deploy_status'?: number;
    private 'deploy_timestamp'?: number;
    private 'deploy_user_id'?: string;
    private 'deploy_user_name'?: string;
    private 'package_approvers'?: Array<ListReleasePackagesRespPackageApprovers>;
    private 'package_id'?: string;
    private 'package_name'?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    public constructor(packageApprovers?: Array<ListReleasePackagesRespPackageApprovers>) { 
        this['package_approvers'] = packageApprovers;
    }
    public withApplyTimestamp(applyTimestamp: string): ListReleasePackagesRespData {
        this['apply_timestamp'] = applyTimestamp;
        return this;
    }
    public set applyTimestamp(applyTimestamp: string  | undefined) {
        this['apply_timestamp'] = applyTimestamp;
    }
    public get applyTimestamp(): string | undefined {
        return this['apply_timestamp'];
    }
    public withApplyUserId(applyUserId: string): ListReleasePackagesRespData {
        this['apply_user_id'] = applyUserId;
        return this;
    }
    public set applyUserId(applyUserId: string  | undefined) {
        this['apply_user_id'] = applyUserId;
    }
    public get applyUserId(): string | undefined {
        return this['apply_user_id'];
    }
    public withApplyUserName(applyUserName: string): ListReleasePackagesRespData {
        this['apply_user_name'] = applyUserName;
        return this;
    }
    public set applyUserName(applyUserName: string  | undefined) {
        this['apply_user_name'] = applyUserName;
    }
    public get applyUserName(): string | undefined {
        return this['apply_user_name'];
    }
    public withDeleteFlag(deleteFlag: number): ListReleasePackagesRespData {
        this['delete_flag'] = deleteFlag;
        return this;
    }
    public set deleteFlag(deleteFlag: number  | undefined) {
        this['delete_flag'] = deleteFlag;
    }
    public get deleteFlag(): number | undefined {
        return this['delete_flag'];
    }
    public withDeployStatus(deployStatus: number): ListReleasePackagesRespData {
        this['deploy_status'] = deployStatus;
        return this;
    }
    public set deployStatus(deployStatus: number  | undefined) {
        this['deploy_status'] = deployStatus;
    }
    public get deployStatus(): number | undefined {
        return this['deploy_status'];
    }
    public withDeployTimestamp(deployTimestamp: number): ListReleasePackagesRespData {
        this['deploy_timestamp'] = deployTimestamp;
        return this;
    }
    public set deployTimestamp(deployTimestamp: number  | undefined) {
        this['deploy_timestamp'] = deployTimestamp;
    }
    public get deployTimestamp(): number | undefined {
        return this['deploy_timestamp'];
    }
    public withDeployUserId(deployUserId: string): ListReleasePackagesRespData {
        this['deploy_user_id'] = deployUserId;
        return this;
    }
    public set deployUserId(deployUserId: string  | undefined) {
        this['deploy_user_id'] = deployUserId;
    }
    public get deployUserId(): string | undefined {
        return this['deploy_user_id'];
    }
    public withDeployUserName(deployUserName: string): ListReleasePackagesRespData {
        this['deploy_user_name'] = deployUserName;
        return this;
    }
    public set deployUserName(deployUserName: string  | undefined) {
        this['deploy_user_name'] = deployUserName;
    }
    public get deployUserName(): string | undefined {
        return this['deploy_user_name'];
    }
    public withPackageApprovers(packageApprovers: Array<ListReleasePackagesRespPackageApprovers>): ListReleasePackagesRespData {
        this['package_approvers'] = packageApprovers;
        return this;
    }
    public set packageApprovers(packageApprovers: Array<ListReleasePackagesRespPackageApprovers>  | undefined) {
        this['package_approvers'] = packageApprovers;
    }
    public get packageApprovers(): Array<ListReleasePackagesRespPackageApprovers> | undefined {
        return this['package_approvers'];
    }
    public withPackageId(packageId: string): ListReleasePackagesRespData {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withPackageName(packageName: string): ListReleasePackagesRespData {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withProjectId(projectId: string): ListReleasePackagesRespData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): ListReleasePackagesRespData {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}