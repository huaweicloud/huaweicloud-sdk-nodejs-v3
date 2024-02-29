

export class ShowPackageDetailRespTaskDetails {
    private 'deploy_status'?: number;
    private 'deployed_version'?: number;
    private 'item_name'?: string;
    private 'pending_item_id'?: string;
    private 'pending_version'?: number;
    private 'script_id'?: string;
    private 'submit_timestamp'?: number;
    private 'submit_user_id'?: string;
    private 'submit_user_name'?: string;
    private 'task_type'?: number;
    private 'update_type'?: number;
    public constructor() { 
    }
    public withDeployStatus(deployStatus: number): ShowPackageDetailRespTaskDetails {
        this['deploy_status'] = deployStatus;
        return this;
    }
    public set deployStatus(deployStatus: number  | undefined) {
        this['deploy_status'] = deployStatus;
    }
    public get deployStatus(): number | undefined {
        return this['deploy_status'];
    }
    public withDeployedVersion(deployedVersion: number): ShowPackageDetailRespTaskDetails {
        this['deployed_version'] = deployedVersion;
        return this;
    }
    public set deployedVersion(deployedVersion: number  | undefined) {
        this['deployed_version'] = deployedVersion;
    }
    public get deployedVersion(): number | undefined {
        return this['deployed_version'];
    }
    public withItemName(itemName: string): ShowPackageDetailRespTaskDetails {
        this['item_name'] = itemName;
        return this;
    }
    public set itemName(itemName: string  | undefined) {
        this['item_name'] = itemName;
    }
    public get itemName(): string | undefined {
        return this['item_name'];
    }
    public withPendingItemId(pendingItemId: string): ShowPackageDetailRespTaskDetails {
        this['pending_item_id'] = pendingItemId;
        return this;
    }
    public set pendingItemId(pendingItemId: string  | undefined) {
        this['pending_item_id'] = pendingItemId;
    }
    public get pendingItemId(): string | undefined {
        return this['pending_item_id'];
    }
    public withPendingVersion(pendingVersion: number): ShowPackageDetailRespTaskDetails {
        this['pending_version'] = pendingVersion;
        return this;
    }
    public set pendingVersion(pendingVersion: number  | undefined) {
        this['pending_version'] = pendingVersion;
    }
    public get pendingVersion(): number | undefined {
        return this['pending_version'];
    }
    public withScriptId(scriptId: string): ShowPackageDetailRespTaskDetails {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withSubmitTimestamp(submitTimestamp: number): ShowPackageDetailRespTaskDetails {
        this['submit_timestamp'] = submitTimestamp;
        return this;
    }
    public set submitTimestamp(submitTimestamp: number  | undefined) {
        this['submit_timestamp'] = submitTimestamp;
    }
    public get submitTimestamp(): number | undefined {
        return this['submit_timestamp'];
    }
    public withSubmitUserId(submitUserId: string): ShowPackageDetailRespTaskDetails {
        this['submit_user_id'] = submitUserId;
        return this;
    }
    public set submitUserId(submitUserId: string  | undefined) {
        this['submit_user_id'] = submitUserId;
    }
    public get submitUserId(): string | undefined {
        return this['submit_user_id'];
    }
    public withSubmitUserName(submitUserName: string): ShowPackageDetailRespTaskDetails {
        this['submit_user_name'] = submitUserName;
        return this;
    }
    public set submitUserName(submitUserName: string  | undefined) {
        this['submit_user_name'] = submitUserName;
    }
    public get submitUserName(): string | undefined {
        return this['submit_user_name'];
    }
    public withTaskType(taskType: number): ShowPackageDetailRespTaskDetails {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: number  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): number | undefined {
        return this['task_type'];
    }
    public withUpdateType(updateType: number): ShowPackageDetailRespTaskDetails {
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