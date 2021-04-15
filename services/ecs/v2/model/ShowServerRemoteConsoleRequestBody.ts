import { GetServerRemoteConsoleOption } from './GetServerRemoteConsoleOption';


export class ShowServerRemoteConsoleRequestBody {
    private 'remote_console': GetServerRemoteConsoleOption | undefined;
    public constructor(remoteConsole?: any) { 
        this['remote_console'] = remoteConsole;
    }
    public withRemoteConsole(remoteConsole: GetServerRemoteConsoleOption): ShowServerRemoteConsoleRequestBody {
        this['remote_console'] = remoteConsole;
        return this;
    }
    public set remoteConsole(remoteConsole: GetServerRemoteConsoleOption | undefined) {
        this['remote_console'] = remoteConsole;
    }
    public get remoteConsole() {
        return this['remote_console'];
    }
}