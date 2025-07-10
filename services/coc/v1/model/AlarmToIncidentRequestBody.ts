

export class AlarmToIncidentRequestBody {
    private 'alarm_ids'?: string;
    private 'enterprise_project_id'?: string;
    public assignee?: string;
    private 'assignee_role'?: string;
    private 'assignee_scene'?: string;
    public attachment?: string;
    private 'current_cloud_service_id'?: string;
    public description?: string;
    private 'is_change_event'?: boolean;
    private 'is_service_interrupt'?: boolean;
    private 'level_id'?: string;
    private 'mtm_region'?: string;
    private 'mtm_type'?: string;
    private 'source_id'?: string;
    public title?: string;
    public constructor(alarmIds?: string, currentCloudServiceId?: string, description?: string, isServiceInterrupt?: boolean, levelId?: string, mtmType?: string, title?: string) { 
        this['alarm_ids'] = alarmIds;
        this['current_cloud_service_id'] = currentCloudServiceId;
        this['description'] = description;
        this['is_service_interrupt'] = isServiceInterrupt;
        this['level_id'] = levelId;
        this['mtm_type'] = mtmType;
        this['title'] = title;
    }
    public withAlarmIds(alarmIds: string): AlarmToIncidentRequestBody {
        this['alarm_ids'] = alarmIds;
        return this;
    }
    public set alarmIds(alarmIds: string  | undefined) {
        this['alarm_ids'] = alarmIds;
    }
    public get alarmIds(): string | undefined {
        return this['alarm_ids'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AlarmToIncidentRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAssignee(assignee: string): AlarmToIncidentRequestBody {
        this['assignee'] = assignee;
        return this;
    }
    public withAssigneeRole(assigneeRole: string): AlarmToIncidentRequestBody {
        this['assignee_role'] = assigneeRole;
        return this;
    }
    public set assigneeRole(assigneeRole: string  | undefined) {
        this['assignee_role'] = assigneeRole;
    }
    public get assigneeRole(): string | undefined {
        return this['assignee_role'];
    }
    public withAssigneeScene(assigneeScene: string): AlarmToIncidentRequestBody {
        this['assignee_scene'] = assigneeScene;
        return this;
    }
    public set assigneeScene(assigneeScene: string  | undefined) {
        this['assignee_scene'] = assigneeScene;
    }
    public get assigneeScene(): string | undefined {
        return this['assignee_scene'];
    }
    public withAttachment(attachment: string): AlarmToIncidentRequestBody {
        this['attachment'] = attachment;
        return this;
    }
    public withCurrentCloudServiceId(currentCloudServiceId: string): AlarmToIncidentRequestBody {
        this['current_cloud_service_id'] = currentCloudServiceId;
        return this;
    }
    public set currentCloudServiceId(currentCloudServiceId: string  | undefined) {
        this['current_cloud_service_id'] = currentCloudServiceId;
    }
    public get currentCloudServiceId(): string | undefined {
        return this['current_cloud_service_id'];
    }
    public withDescription(description: string): AlarmToIncidentRequestBody {
        this['description'] = description;
        return this;
    }
    public withIsChangeEvent(isChangeEvent: boolean): AlarmToIncidentRequestBody {
        this['is_change_event'] = isChangeEvent;
        return this;
    }
    public set isChangeEvent(isChangeEvent: boolean  | undefined) {
        this['is_change_event'] = isChangeEvent;
    }
    public get isChangeEvent(): boolean | undefined {
        return this['is_change_event'];
    }
    public withIsServiceInterrupt(isServiceInterrupt: boolean): AlarmToIncidentRequestBody {
        this['is_service_interrupt'] = isServiceInterrupt;
        return this;
    }
    public set isServiceInterrupt(isServiceInterrupt: boolean  | undefined) {
        this['is_service_interrupt'] = isServiceInterrupt;
    }
    public get isServiceInterrupt(): boolean | undefined {
        return this['is_service_interrupt'];
    }
    public withLevelId(levelId: string): AlarmToIncidentRequestBody {
        this['level_id'] = levelId;
        return this;
    }
    public set levelId(levelId: string  | undefined) {
        this['level_id'] = levelId;
    }
    public get levelId(): string | undefined {
        return this['level_id'];
    }
    public withMtmRegion(mtmRegion: string): AlarmToIncidentRequestBody {
        this['mtm_region'] = mtmRegion;
        return this;
    }
    public set mtmRegion(mtmRegion: string  | undefined) {
        this['mtm_region'] = mtmRegion;
    }
    public get mtmRegion(): string | undefined {
        return this['mtm_region'];
    }
    public withMtmType(mtmType: string): AlarmToIncidentRequestBody {
        this['mtm_type'] = mtmType;
        return this;
    }
    public set mtmType(mtmType: string  | undefined) {
        this['mtm_type'] = mtmType;
    }
    public get mtmType(): string | undefined {
        return this['mtm_type'];
    }
    public withSourceId(sourceId: string): AlarmToIncidentRequestBody {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withTitle(title: string): AlarmToIncidentRequestBody {
        this['title'] = title;
        return this;
    }
}