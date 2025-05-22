

export class ListFactoryPendingItemsRespData {
    private 'deployed_version'?: number;
    private 'item_name'?: string;
    private 'package_flag'?: number;
    private 'pending_item_id'?: string;
    private 'pending_version'?: number;
    private 'project_id'?: string;
    private 'submit_timestamp'?: number;
    private 'submit_user_id'?: string;
    private 'submit_user_name'?: string;
    private 'task_id'?: string;
    private 'task_type'?: number;
    private 'update_type'?: number;
    public constructor() { 
    }
    public withDeployedVersion(deployedVersion: number): ListFactoryPendingItemsRespData {
        this['deployed_version'] = deployedVersion;
        return this;
    }
    public set deployedVersion(deployedVersion: number  | undefined) {
        this['deployed_version'] = deployedVersion;
    }
    public get deployedVersion(): number | undefined {
        return this['deployed_version'];
    }
    public withItemName(itemName: string): ListFactoryPendingItemsRespData {
        this['item_name'] = itemName;
        return this;
    }
    public set itemName(itemName: string  | undefined) {
        this['item_name'] = itemName;
    }
    public get itemName(): string | undefined {
        return this['item_name'];
    }
    public withPackageFlag(packageFlag: number): ListFactoryPendingItemsRespData {
        this['package_flag'] = packageFlag;
        return this;
    }
    public set packageFlag(packageFlag: number  | undefined) {
        this['package_flag'] = packageFlag;
    }
    public get packageFlag(): number | undefined {
        return this['package_flag'];
    }
    public withPendingItemId(pendingItemId: string): ListFactoryPendingItemsRespData {
        this['pending_item_id'] = pendingItemId;
        return this;
    }
    public set pendingItemId(pendingItemId: string  | undefined) {
        this['pending_item_id'] = pendingItemId;
    }
    public get pendingItemId(): string | undefined {
        return this['pending_item_id'];
    }
    public withPendingVersion(pendingVersion: number): ListFactoryPendingItemsRespData {
        this['pending_version'] = pendingVersion;
        return this;
    }
    public set pendingVersion(pendingVersion: number  | undefined) {
        this['pending_version'] = pendingVersion;
    }
    public get pendingVersion(): number | undefined {
        return this['pending_version'];
    }
    public withProjectId(projectId: string): ListFactoryPendingItemsRespData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSubmitTimestamp(submitTimestamp: number): ListFactoryPendingItemsRespData {
        this['submit_timestamp'] = submitTimestamp;
        return this;
    }
    public set submitTimestamp(submitTimestamp: number  | undefined) {
        this['submit_timestamp'] = submitTimestamp;
    }
    public get submitTimestamp(): number | undefined {
        return this['submit_timestamp'];
    }
    public withSubmitUserId(submitUserId: string): ListFactoryPendingItemsRespData {
        this['submit_user_id'] = submitUserId;
        return this;
    }
    public set submitUserId(submitUserId: string  | undefined) {
        this['submit_user_id'] = submitUserId;
    }
    public get submitUserId(): string | undefined {
        return this['submit_user_id'];
    }
    public withSubmitUserName(submitUserName: string): ListFactoryPendingItemsRespData {
        this['submit_user_name'] = submitUserName;
        return this;
    }
    public set submitUserName(submitUserName: string  | undefined) {
        this['submit_user_name'] = submitUserName;
    }
    public get submitUserName(): string | undefined {
        return this['submit_user_name'];
    }
    public withTaskId(taskId: string): ListFactoryPendingItemsRespData {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskType(taskType: number): ListFactoryPendingItemsRespData {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: number  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): number | undefined {
        return this['task_type'];
    }
    public withUpdateType(updateType: number): ListFactoryPendingItemsRespData {
        this['update_type'] = updateType;
        return this;
    }
    public set updateType(updateType: number  | undefined) {
        this['update_type'] = updateType;
    }
    public get updateType(): number | undefined {
        return this['update_type'];
    }
}