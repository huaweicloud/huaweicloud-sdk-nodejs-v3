

export class ResourceMigrateRecord {
    public associated?: boolean;
    public code?: string;
    public message?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'region_id'?: string;
    private 'event_time'?: string;
    private 'user_name'?: string;
    private 'operate_type'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    private 'initiate_ep_id'?: string;
    private 'initiate_ep_name'?: string;
    private 'origin_ep_id'?: string;
    private 'origin_ep_name'?: string;
    private 'target_ep_id'?: string;
    private 'target_ep_name'?: string;
    private 'exist_failed'?: string;
    public constructor() { 
    }
    public withAssociated(associated: boolean): ResourceMigrateRecord {
        this['associated'] = associated;
        return this;
    }
    public withCode(code: string): ResourceMigrateRecord {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ResourceMigrateRecord {
        this['message'] = message;
        return this;
    }
    public withProjectId(projectId: string): ResourceMigrateRecord {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ResourceMigrateRecord {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withRegionId(regionId: string): ResourceMigrateRecord {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withEventTime(eventTime: string): ResourceMigrateRecord {
        this['event_time'] = eventTime;
        return this;
    }
    public set eventTime(eventTime: string  | undefined) {
        this['event_time'] = eventTime;
    }
    public get eventTime(): string | undefined {
        return this['event_time'];
    }
    public withUserName(userName: string): ResourceMigrateRecord {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withOperateType(operateType: string): ResourceMigrateRecord {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withResourceId(resourceId: string): ResourceMigrateRecord {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ResourceMigrateRecord {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): ResourceMigrateRecord {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withInitiateEpId(initiateEpId: string): ResourceMigrateRecord {
        this['initiate_ep_id'] = initiateEpId;
        return this;
    }
    public set initiateEpId(initiateEpId: string  | undefined) {
        this['initiate_ep_id'] = initiateEpId;
    }
    public get initiateEpId(): string | undefined {
        return this['initiate_ep_id'];
    }
    public withInitiateEpName(initiateEpName: string): ResourceMigrateRecord {
        this['initiate_ep_name'] = initiateEpName;
        return this;
    }
    public set initiateEpName(initiateEpName: string  | undefined) {
        this['initiate_ep_name'] = initiateEpName;
    }
    public get initiateEpName(): string | undefined {
        return this['initiate_ep_name'];
    }
    public withOriginEpId(originEpId: string): ResourceMigrateRecord {
        this['origin_ep_id'] = originEpId;
        return this;
    }
    public set originEpId(originEpId: string  | undefined) {
        this['origin_ep_id'] = originEpId;
    }
    public get originEpId(): string | undefined {
        return this['origin_ep_id'];
    }
    public withOriginEpName(originEpName: string): ResourceMigrateRecord {
        this['origin_ep_name'] = originEpName;
        return this;
    }
    public set originEpName(originEpName: string  | undefined) {
        this['origin_ep_name'] = originEpName;
    }
    public get originEpName(): string | undefined {
        return this['origin_ep_name'];
    }
    public withTargetEpId(targetEpId: string): ResourceMigrateRecord {
        this['target_ep_id'] = targetEpId;
        return this;
    }
    public set targetEpId(targetEpId: string  | undefined) {
        this['target_ep_id'] = targetEpId;
    }
    public get targetEpId(): string | undefined {
        return this['target_ep_id'];
    }
    public withTargetEpName(targetEpName: string): ResourceMigrateRecord {
        this['target_ep_name'] = targetEpName;
        return this;
    }
    public set targetEpName(targetEpName: string  | undefined) {
        this['target_ep_name'] = targetEpName;
    }
    public get targetEpName(): string | undefined {
        return this['target_ep_name'];
    }
    public withExistFailed(existFailed: string): ResourceMigrateRecord {
        this['exist_failed'] = existFailed;
        return this;
    }
    public set existFailed(existFailed: string  | undefined) {
        this['exist_failed'] = existFailed;
    }
    public get existFailed(): string | undefined {
        return this['exist_failed'];
    }
}