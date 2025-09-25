import { UpdateSerialConsoleOptionsRequestBody } from './UpdateSerialConsoleOptionsRequestBody';


export class UpdateSerialConsoleOptionsRequest {
    private 'server_id'?: string;
    public body?: UpdateSerialConsoleOptionsRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateSerialConsoleOptionsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: UpdateSerialConsoleOptionsRequestBody): UpdateSerialConsoleOptionsRequest {
        this['body'] = body;
        return this;
    }
}