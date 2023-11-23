

export class LogoutWebCliBody {
    private 'client_id'?: string;
    public constructor() { 
    }
    public withClientId(clientId: string): LogoutWebCliBody {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
}