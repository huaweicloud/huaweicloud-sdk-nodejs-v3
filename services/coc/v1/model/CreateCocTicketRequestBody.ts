import { TicketCreateSubTicketInfo } from './TicketCreateSubTicketInfo';


export class CreateCocTicketRequestBody {
    public title?: string;
    private 'change_notes'?: string;
    public description?: string;
    private 'enterprise_project'?: string;
    private 'change_type'?: string;
    public level?: string;
    private 'ticket_type'?: string;
    private 'change_scheme'?: string;
    private 'change_guides'?: string;
    private 'commit_upload_attachment'?: string;
    public regions?: string;
    private 'change_scene_id'?: string;
    private 'current_cloud_service_id'?: string;
    private 'root_cause_cloud_service'?: string;
    public source?: string;
    private 'source_id'?: string;
    private 'fount_time'?: number;
    private 'virtual_schedule_type'?: string;
    private 'issue_contact_person'?: string;
    private 'schedule_scenes'?: string;
    private 'virtual_schedule_role'?: string;
    private 'location_id'?: string;
    private 'plan_task_sub_type'?: string;
    private 'plan_task_id'?: string;
    private 'plan_task_name'?: string;
    private 'plan_task_params'?: string;
    private 'is_start_process'?: boolean;
    private 'sub_tickets'?: Array<TicketCreateSubTicketInfo>;
    public constructor() { 
    }
    public withTitle(title: string): CreateCocTicketRequestBody {
        this['title'] = title;
        return this;
    }
    public withChangeNotes(changeNotes: string): CreateCocTicketRequestBody {
        this['change_notes'] = changeNotes;
        return this;
    }
    public set changeNotes(changeNotes: string  | undefined) {
        this['change_notes'] = changeNotes;
    }
    public get changeNotes(): string | undefined {
        return this['change_notes'];
    }
    public withDescription(description: string): CreateCocTicketRequestBody {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: string): CreateCocTicketRequestBody {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: string  | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject(): string | undefined {
        return this['enterprise_project'];
    }
    public withChangeType(changeType: string): CreateCocTicketRequestBody {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): string | undefined {
        return this['change_type'];
    }
    public withLevel(level: string): CreateCocTicketRequestBody {
        this['level'] = level;
        return this;
    }
    public withTicketType(ticketType: string): CreateCocTicketRequestBody {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): string | undefined {
        return this['ticket_type'];
    }
    public withChangeScheme(changeScheme: string): CreateCocTicketRequestBody {
        this['change_scheme'] = changeScheme;
        return this;
    }
    public set changeScheme(changeScheme: string  | undefined) {
        this['change_scheme'] = changeScheme;
    }
    public get changeScheme(): string | undefined {
        return this['change_scheme'];
    }
    public withChangeGuides(changeGuides: string): CreateCocTicketRequestBody {
        this['change_guides'] = changeGuides;
        return this;
    }
    public set changeGuides(changeGuides: string  | undefined) {
        this['change_guides'] = changeGuides;
    }
    public get changeGuides(): string | undefined {
        return this['change_guides'];
    }
    public withCommitUploadAttachment(commitUploadAttachment: string): CreateCocTicketRequestBody {
        this['commit_upload_attachment'] = commitUploadAttachment;
        return this;
    }
    public set commitUploadAttachment(commitUploadAttachment: string  | undefined) {
        this['commit_upload_attachment'] = commitUploadAttachment;
    }
    public get commitUploadAttachment(): string | undefined {
        return this['commit_upload_attachment'];
    }
    public withRegions(regions: string): CreateCocTicketRequestBody {
        this['regions'] = regions;
        return this;
    }
    public withChangeSceneId(changeSceneId: string): CreateCocTicketRequestBody {
        this['change_scene_id'] = changeSceneId;
        return this;
    }
    public set changeSceneId(changeSceneId: string  | undefined) {
        this['change_scene_id'] = changeSceneId;
    }
    public get changeSceneId(): string | undefined {
        return this['change_scene_id'];
    }
    public withCurrentCloudServiceId(currentCloudServiceId: string): CreateCocTicketRequestBody {
        this['current_cloud_service_id'] = currentCloudServiceId;
        return this;
    }
    public set currentCloudServiceId(currentCloudServiceId: string  | undefined) {
        this['current_cloud_service_id'] = currentCloudServiceId;
    }
    public get currentCloudServiceId(): string | undefined {
        return this['current_cloud_service_id'];
    }
    public withRootCauseCloudService(rootCauseCloudService: string): CreateCocTicketRequestBody {
        this['root_cause_cloud_service'] = rootCauseCloudService;
        return this;
    }
    public set rootCauseCloudService(rootCauseCloudService: string  | undefined) {
        this['root_cause_cloud_service'] = rootCauseCloudService;
    }
    public get rootCauseCloudService(): string | undefined {
        return this['root_cause_cloud_service'];
    }
    public withSource(source: string): CreateCocTicketRequestBody {
        this['source'] = source;
        return this;
    }
    public withSourceId(sourceId: string): CreateCocTicketRequestBody {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withFountTime(fountTime: number): CreateCocTicketRequestBody {
        this['fount_time'] = fountTime;
        return this;
    }
    public set fountTime(fountTime: number  | undefined) {
        this['fount_time'] = fountTime;
    }
    public get fountTime(): number | undefined {
        return this['fount_time'];
    }
    public withVirtualScheduleType(virtualScheduleType: string): CreateCocTicketRequestBody {
        this['virtual_schedule_type'] = virtualScheduleType;
        return this;
    }
    public set virtualScheduleType(virtualScheduleType: string  | undefined) {
        this['virtual_schedule_type'] = virtualScheduleType;
    }
    public get virtualScheduleType(): string | undefined {
        return this['virtual_schedule_type'];
    }
    public withIssueContactPerson(issueContactPerson: string): CreateCocTicketRequestBody {
        this['issue_contact_person'] = issueContactPerson;
        return this;
    }
    public set issueContactPerson(issueContactPerson: string  | undefined) {
        this['issue_contact_person'] = issueContactPerson;
    }
    public get issueContactPerson(): string | undefined {
        return this['issue_contact_person'];
    }
    public withScheduleScenes(scheduleScenes: string): CreateCocTicketRequestBody {
        this['schedule_scenes'] = scheduleScenes;
        return this;
    }
    public set scheduleScenes(scheduleScenes: string  | undefined) {
        this['schedule_scenes'] = scheduleScenes;
    }
    public get scheduleScenes(): string | undefined {
        return this['schedule_scenes'];
    }
    public withVirtualScheduleRole(virtualScheduleRole: string): CreateCocTicketRequestBody {
        this['virtual_schedule_role'] = virtualScheduleRole;
        return this;
    }
    public set virtualScheduleRole(virtualScheduleRole: string  | undefined) {
        this['virtual_schedule_role'] = virtualScheduleRole;
    }
    public get virtualScheduleRole(): string | undefined {
        return this['virtual_schedule_role'];
    }
    public withLocationId(locationId: string): CreateCocTicketRequestBody {
        this['location_id'] = locationId;
        return this;
    }
    public set locationId(locationId: string  | undefined) {
        this['location_id'] = locationId;
    }
    public get locationId(): string | undefined {
        return this['location_id'];
    }
    public withPlanTaskSubType(planTaskSubType: string): CreateCocTicketRequestBody {
        this['plan_task_sub_type'] = planTaskSubType;
        return this;
    }
    public set planTaskSubType(planTaskSubType: string  | undefined) {
        this['plan_task_sub_type'] = planTaskSubType;
    }
    public get planTaskSubType(): string | undefined {
        return this['plan_task_sub_type'];
    }
    public withPlanTaskId(planTaskId: string): CreateCocTicketRequestBody {
        this['plan_task_id'] = planTaskId;
        return this;
    }
    public set planTaskId(planTaskId: string  | undefined) {
        this['plan_task_id'] = planTaskId;
    }
    public get planTaskId(): string | undefined {
        return this['plan_task_id'];
    }
    public withPlanTaskName(planTaskName: string): CreateCocTicketRequestBody {
        this['plan_task_name'] = planTaskName;
        return this;
    }
    public set planTaskName(planTaskName: string  | undefined) {
        this['plan_task_name'] = planTaskName;
    }
    public get planTaskName(): string | undefined {
        return this['plan_task_name'];
    }
    public withPlanTaskParams(planTaskParams: string): CreateCocTicketRequestBody {
        this['plan_task_params'] = planTaskParams;
        return this;
    }
    public set planTaskParams(planTaskParams: string  | undefined) {
        this['plan_task_params'] = planTaskParams;
    }
    public get planTaskParams(): string | undefined {
        return this['plan_task_params'];
    }
    public withIsStartProcess(isStartProcess: boolean): CreateCocTicketRequestBody {
        this['is_start_process'] = isStartProcess;
        return this;
    }
    public set isStartProcess(isStartProcess: boolean  | undefined) {
        this['is_start_process'] = isStartProcess;
    }
    public get isStartProcess(): boolean | undefined {
        return this['is_start_process'];
    }
    public withSubTickets(subTickets: Array<TicketCreateSubTicketInfo>): CreateCocTicketRequestBody {
        this['sub_tickets'] = subTickets;
        return this;
    }
    public set subTickets(subTickets: Array<TicketCreateSubTicketInfo>  | undefined) {
        this['sub_tickets'] = subTickets;
    }
    public get subTickets(): Array<TicketCreateSubTicketInfo> | undefined {
        return this['sub_tickets'];
    }
}