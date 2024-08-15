

export class CreateExternalIssuesRequest {
    public creator?: string;
    public title?: string;
    public description?: string;
    public regions?: Array<string>;
    private 'enterprise_project'?: string;
    public source?: string;
    private 'source_id'?: string;
    private 'fount_time'?: number;
    private 'impacted_cloud_services'?: Array<string>;
    public level?: CreateExternalIssuesRequestLevelEnum | string;
    private 'ticket_type'?: CreateExternalIssuesRequestTicketTypeEnum | string;
    private 'reproduce_probability'?: CreateExternalIssuesRequestReproduceProbabilityEnum | string;
    private 'root_cause_cloud_service'?: Array<string>;
    private 'virtual_schedule_type'?: CreateExternalIssuesRequestVirtualScheduleTypeEnum | string;
    private 'schedule_scenes'?: string;
    private 'virtual_schedule_role'?: string;
    private 'issue_contact_person'?: string;
    public constructor(title?: string, description?: string, impactedCloudServices?: Array<string>, level?: string, ticketType?: string, reproduceProbability?: string, rootCauseCloudService?: Array<string>, virtualScheduleType?: string) { 
        this['title'] = title;
        this['description'] = description;
        this['impacted_cloud_services'] = impactedCloudServices;
        this['level'] = level;
        this['ticket_type'] = ticketType;
        this['reproduce_probability'] = reproduceProbability;
        this['root_cause_cloud_service'] = rootCauseCloudService;
        this['virtual_schedule_type'] = virtualScheduleType;
    }
    public withCreator(creator: string): CreateExternalIssuesRequest {
        this['creator'] = creator;
        return this;
    }
    public withTitle(title: string): CreateExternalIssuesRequest {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): CreateExternalIssuesRequest {
        this['description'] = description;
        return this;
    }
    public withRegions(regions: Array<string>): CreateExternalIssuesRequest {
        this['regions'] = regions;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: string): CreateExternalIssuesRequest {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: string  | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject(): string | undefined {
        return this['enterprise_project'];
    }
    public withSource(source: string): CreateExternalIssuesRequest {
        this['source'] = source;
        return this;
    }
    public withSourceId(sourceId: string): CreateExternalIssuesRequest {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withFountTime(fountTime: number): CreateExternalIssuesRequest {
        this['fount_time'] = fountTime;
        return this;
    }
    public set fountTime(fountTime: number  | undefined) {
        this['fount_time'] = fountTime;
    }
    public get fountTime(): number | undefined {
        return this['fount_time'];
    }
    public withImpactedCloudServices(impactedCloudServices: Array<string>): CreateExternalIssuesRequest {
        this['impacted_cloud_services'] = impactedCloudServices;
        return this;
    }
    public set impactedCloudServices(impactedCloudServices: Array<string>  | undefined) {
        this['impacted_cloud_services'] = impactedCloudServices;
    }
    public get impactedCloudServices(): Array<string> | undefined {
        return this['impacted_cloud_services'];
    }
    public withLevel(level: CreateExternalIssuesRequestLevelEnum | string): CreateExternalIssuesRequest {
        this['level'] = level;
        return this;
    }
    public withTicketType(ticketType: CreateExternalIssuesRequestTicketTypeEnum | string): CreateExternalIssuesRequest {
        this['ticket_type'] = ticketType;
        return this;
    }
    public set ticketType(ticketType: CreateExternalIssuesRequestTicketTypeEnum | string  | undefined) {
        this['ticket_type'] = ticketType;
    }
    public get ticketType(): CreateExternalIssuesRequestTicketTypeEnum | string | undefined {
        return this['ticket_type'];
    }
    public withReproduceProbability(reproduceProbability: CreateExternalIssuesRequestReproduceProbabilityEnum | string): CreateExternalIssuesRequest {
        this['reproduce_probability'] = reproduceProbability;
        return this;
    }
    public set reproduceProbability(reproduceProbability: CreateExternalIssuesRequestReproduceProbabilityEnum | string  | undefined) {
        this['reproduce_probability'] = reproduceProbability;
    }
    public get reproduceProbability(): CreateExternalIssuesRequestReproduceProbabilityEnum | string | undefined {
        return this['reproduce_probability'];
    }
    public withRootCauseCloudService(rootCauseCloudService: Array<string>): CreateExternalIssuesRequest {
        this['root_cause_cloud_service'] = rootCauseCloudService;
        return this;
    }
    public set rootCauseCloudService(rootCauseCloudService: Array<string>  | undefined) {
        this['root_cause_cloud_service'] = rootCauseCloudService;
    }
    public get rootCauseCloudService(): Array<string> | undefined {
        return this['root_cause_cloud_service'];
    }
    public withVirtualScheduleType(virtualScheduleType: CreateExternalIssuesRequestVirtualScheduleTypeEnum | string): CreateExternalIssuesRequest {
        this['virtual_schedule_type'] = virtualScheduleType;
        return this;
    }
    public set virtualScheduleType(virtualScheduleType: CreateExternalIssuesRequestVirtualScheduleTypeEnum | string  | undefined) {
        this['virtual_schedule_type'] = virtualScheduleType;
    }
    public get virtualScheduleType(): CreateExternalIssuesRequestVirtualScheduleTypeEnum | string | undefined {
        return this['virtual_schedule_type'];
    }
    public withScheduleScenes(scheduleScenes: string): CreateExternalIssuesRequest {
        this['schedule_scenes'] = scheduleScenes;
        return this;
    }
    public set scheduleScenes(scheduleScenes: string  | undefined) {
        this['schedule_scenes'] = scheduleScenes;
    }
    public get scheduleScenes(): string | undefined {
        return this['schedule_scenes'];
    }
    public withVirtualScheduleRole(virtualScheduleRole: string): CreateExternalIssuesRequest {
        this['virtual_schedule_role'] = virtualScheduleRole;
        return this;
    }
    public set virtualScheduleRole(virtualScheduleRole: string  | undefined) {
        this['virtual_schedule_role'] = virtualScheduleRole;
    }
    public get virtualScheduleRole(): string | undefined {
        return this['virtual_schedule_role'];
    }
    public withIssueContactPerson(issueContactPerson: string): CreateExternalIssuesRequest {
        this['issue_contact_person'] = issueContactPerson;
        return this;
    }
    public set issueContactPerson(issueContactPerson: string  | undefined) {
        this['issue_contact_person'] = issueContactPerson;
    }
    public get issueContactPerson(): string | undefined {
        return this['issue_contact_person'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateExternalIssuesRequestLevelEnum {
    ISSUES_LEVEL_1000 = 'issues_level_1000',
    ISSUES_LEVEL_2000 = 'issues_level_2000',
    ISSUES_LEVEL_3000 = 'issues_level_3000'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateExternalIssuesRequestTicketTypeEnum {
    ISSUES_TYPE_1000 = 'issues_type_1000',
    ISSUES_TYPE_2000 = 'issues_type_2000',
    ISSUES_TYPE_3000 = 'issues_type_3000',
    ISSUES_TYPE_4000 = 'issues_type_4000',
    ISSUES_TYPE_5000 = 'issues_type_5000',
    ISSUES_TYPE_6000 = 'issues_type_6000',
    ISSUES_TYPE_7000 = 'issues_type_7000',
    ISSUES_TYPE_8000 = 'issues_type_8000',
    ISSUES_TYPE_9000 = 'issues_type_9000',
    ISSUES_TYPE_10000 = 'issues_type_10000',
    ISSUES_TYPE_11000 = 'issues_type_11000',
    ISSUES_TYPE_12000 = 'issues_type_12000',
    ISSUES_TYPE_13000 = 'issues_type_13000',
    ISSUES_TYPE_14000 = 'issues_type_14000',
    ISSUES_TYPE_15000 = 'issues_type_15000'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateExternalIssuesRequestReproduceProbabilityEnum {
    ISSUES_REPRODUCE_PROBABILITY_1000 = 'issues_reproduce_probability_1000',
    ISSUES_REPRODUCE_PROBABILITY_2000 = 'issues_reproduce_probability_2000',
    ISSUES_REPRODUCE_PROBABILITY_3000 = 'issues_reproduce_probability_3000',
    ISSUES_REPRODUCE_PROBABILITY_4000 = 'issues_reproduce_probability_4000'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateExternalIssuesRequestVirtualScheduleTypeEnum {
    ISSUES_MGMT_VIRTUAL_SCHEDULE_TYPE_1000 = 'issues_mgmt_virtual_schedule_type_1000',
    ISSUES_MGMT_VIRTUAL_SCHEDULE_TYPE_2000 = 'issues_mgmt_virtual_schedule_type_2000'
}
