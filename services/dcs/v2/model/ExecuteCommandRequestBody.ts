

export class ExecuteCommandRequestBody {
    private 'client_id'?: string;
    public command?: string;
    public database?: number;
    public constructor() { 
    }
    public withClientId(clientId: string): ExecuteCommandRequestBody {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withCommand(command: string): ExecuteCommandRequestBody {
        this['command'] = command;
        return this;
    }
    public withDatabase(database: number): ExecuteCommandRequestBody {
        this['database'] = database;
        return this;
    }
}