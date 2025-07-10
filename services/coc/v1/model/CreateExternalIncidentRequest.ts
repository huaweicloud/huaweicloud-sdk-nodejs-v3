

export class CreateExternalIncidentRequest {
    public region?: Array<string>;
    private 'enterprise_project'?: Array<string>;
    private 'current_cloud_service'?: Array<string>;
    private 'incident_level'?: string;
    private 'is_service_interrupt'?: boolean;
    private 'incident_type'?: string;
    private 'incident_title'?: string;
    private 'incident_description'?: string;
    private 'incident_source'?: string;
    private 'incident_assignee'?: Array<string>;
    private 'assignee_scene'?: string;
    private 'assignee_role'?: string;
    public creator?: string;
    private 'incident_ownership'?: string;
    private 'start_time'?: number;
    public constructor(incidentLevel?: string, isServiceInterrupt?: boolean, incidentType?: string, incidentTitle?: string, incidentSource?: string, creator?: string) { 
        this['incident_level'] = incidentLevel;
        this['is_service_interrupt'] = isServiceInterrupt;
        this['incident_type'] = incidentType;
        this['incident_title'] = incidentTitle;
        this['incident_source'] = incidentSource;
        this['creator'] = creator;
    }
    public withRegion(region: Array<string>): CreateExternalIncidentRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: Array<string>): CreateExternalIncidentRequest {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: Array<string>  | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject(): Array<string> | undefined {
        return this['enterprise_project'];
    }
    public withCurrentCloudService(currentCloudService: Array<string>): CreateExternalIncidentRequest {
        this['current_cloud_service'] = currentCloudService;
        return this;
    }
    public set currentCloudService(currentCloudService: Array<string>  | undefined) {
        this['current_cloud_service'] = currentCloudService;
    }
    public get currentCloudService(): Array<string> | undefined {
        return this['current_cloud_service'];
    }
    public withIncidentLevel(incidentLevel: string): CreateExternalIncidentRequest {
        this['incident_level'] = incidentLevel;
        return this;
    }
    public set incidentLevel(incidentLevel: string  | undefined) {
        this['incident_level'] = incidentLevel;
    }
    public get incidentLevel(): string | undefined {
        return this['incident_level'];
    }
    public withIsServiceInterrupt(isServiceInterrupt: boolean): CreateExternalIncidentRequest {
        this['is_service_interrupt'] = isServiceInterrupt;
        return this;
    }
    public set isServiceInterrupt(isServiceInterrupt: boolean  | undefined) {
        this['is_service_interrupt'] = isServiceInterrupt;
    }
    public get isServiceInterrupt(): boolean | undefined {
        return this['is_service_interrupt'];
    }
    public withIncidentType(incidentType: string): CreateExternalIncidentRequest {
        this['incident_type'] = incidentType;
        return this;
    }
    public set incidentType(incidentType: string  | undefined) {
        this['incident_type'] = incidentType;
    }
    public get incidentType(): string | undefined {
        return this['incident_type'];
    }
    public withIncidentTitle(incidentTitle: string): CreateExternalIncidentRequest {
        this['incident_title'] = incidentTitle;
        return this;
    }
    public set incidentTitle(incidentTitle: string  | undefined) {
        this['incident_title'] = incidentTitle;
    }
    public get incidentTitle(): string | undefined {
        return this['incident_title'];
    }
    public withIncidentDescription(incidentDescription: string): CreateExternalIncidentRequest {
        this['incident_description'] = incidentDescription;
        return this;
    }
    public set incidentDescription(incidentDescription: string  | undefined) {
        this['incident_description'] = incidentDescription;
    }
    public get incidentDescription(): string | undefined {
        return this['incident_description'];
    }
    public withIncidentSource(incidentSource: string): CreateExternalIncidentRequest {
        this['incident_source'] = incidentSource;
        return this;
    }
    public set incidentSource(incidentSource: string  | undefined) {
        this['incident_source'] = incidentSource;
    }
    public get incidentSource(): string | undefined {
        return this['incident_source'];
    }
    public withIncidentAssignee(incidentAssignee: Array<string>): CreateExternalIncidentRequest {
        this['incident_assignee'] = incidentAssignee;
        return this;
    }
    public set incidentAssignee(incidentAssignee: Array<string>  | undefined) {
        this['incident_assignee'] = incidentAssignee;
    }
    public get incidentAssignee(): Array<string> | undefined {
        return this['incident_assignee'];
    }
    public withAssigneeScene(assigneeScene: string): CreateExternalIncidentRequest {
        this['assignee_scene'] = assigneeScene;
        return this;
    }
    public set assigneeScene(assigneeScene: string  | undefined) {
        this['assignee_scene'] = assigneeScene;
    }
    public get assigneeScene(): string | undefined {
        return this['assignee_scene'];
    }
    public withAssigneeRole(assigneeRole: string): CreateExternalIncidentRequest {
        this['assignee_role'] = assigneeRole;
        return this;
    }
    public set assigneeRole(assigneeRole: string  | undefined) {
        this['assignee_role'] = assigneeRole;
    }
    public get assigneeRole(): string | undefined {
        return this['assignee_role'];
    }
    public withCreator(creator: string): CreateExternalIncidentRequest {
        this['creator'] = creator;
        return this;
    }
    public withIncidentOwnership(incidentOwnership: string): CreateExternalIncidentRequest {
        this['incident_ownership'] = incidentOwnership;
        return this;
    }
    public set incidentOwnership(incidentOwnership: string  | undefined) {
        this['incident_ownership'] = incidentOwnership;
    }
    public get incidentOwnership(): string | undefined {
        return this['incident_ownership'];
    }
    public withStartTime(startTime: number): CreateExternalIncidentRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
}