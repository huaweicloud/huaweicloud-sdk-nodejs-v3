import { GetServerRemoteConsoleOption } from './GetServerRemoteConsoleOption';


export class ShowServerRemoteConsoleRequestBody {
    private 'remote_console'?: GetServerRemoteConsoleOption;
    public constructor(remoteConsole?: GetServerRemoteConsoleOption) { 
        this['remote_console'] = remoteConsole;
    }
    public withRemoteConsole(remoteConsole: GetServerRemoteConsoleOption): ShowServerRemoteConsoleRequestBody {
        this['remote_console'] = remoteConsole;
        return this;
    }
    public set remoteConsole(remoteConsole: GetServerRemoteConsoleOption  | undefined) {
        this['remote_console'] = remoteConsole;
    }
    public get remoteConsole(): GetServerRemoteConsoleOption | undefined {
        return this['remote_console'];
    }
}