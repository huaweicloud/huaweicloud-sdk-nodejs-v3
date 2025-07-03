

export class IncidentSimpleTicketInfo {
    public title?: string;
    private 'ticket_id'?: string;
    public description?: string;
    public status?: string;
    public level?: string;
    private 'enterprise_project'?: string;
    public source?: string;
    public creator?: string;
    public assignee?: Array<string>;
    public constructor() { 
    }
    public withTitle(title: string): IncidentSimpleTicketInfo {
        this['title'] = title;
        return this;
    }
    public withTicketId(ticketId: string): IncidentSimpleTicketInfo {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withDescription(description: string): IncidentSimpleTicketInfo {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): IncidentSimpleTicketInfo {
        this['status'] = status;
        return this;
    }
    public withLevel(level: string): IncidentSimpleTicketInfo {
        this['level'] = level;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: string): IncidentSimpleTicketInfo {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: string  | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject(): string | undefined {
        return this['enterprise_project'];
    }
    public withSource(source: string): IncidentSimpleTicketInfo {
        this['source'] = source;
        return this;
    }
    public withCreator(creator: string): IncidentSimpleTicketInfo {
        this['creator'] = creator;
        return this;
    }
    public withAssignee(assignee: Array<string>): IncidentSimpleTicketInfo {
        this['assignee'] = assignee;
        return this;
    }
}