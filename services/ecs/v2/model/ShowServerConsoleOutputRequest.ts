

export class ShowServerConsoleOutputRequest {
    private 'server_id'?: string;
    public length?: number;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ShowServerConsoleOutputRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withLength(length: number): ShowServerConsoleOutputRequest {
        this['length'] = length;
        return this;
    }
}