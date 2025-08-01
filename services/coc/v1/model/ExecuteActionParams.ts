

export class ExecuteActionParams {
    private 'ticket_id'?: string;
    private 'task_id'?: string;
    public action?: string;
    public params?: object;
    public constructor() { 
    }
    public withTicketId(ticketId: string): ExecuteActionParams {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withTaskId(taskId: string): ExecuteActionParams {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withAction(action: string): ExecuteActionParams {
        this['action'] = action;
        return this;
    }
    public withParams(params: object): ExecuteActionParams {
        this['params'] = params;
        return this;
    }
}