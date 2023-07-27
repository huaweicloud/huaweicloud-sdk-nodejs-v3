import { RemoteConsole } from './RemoteConsole';


export class ShowServerRemoteConsoleReq {
    private 'remote_console'?: RemoteConsole;
    public constructor(remoteConsole?: RemoteConsole) { 
        this['remote_console'] = remoteConsole;
    }
    public withRemoteConsole(remoteConsole: RemoteConsole): ShowServerRemoteConsoleReq {
        this['remote_console'] = remoteConsole;
        return this;
    }
    public set remoteConsole(remoteConsole: RemoteConsole  | undefined) {
        this['remote_console'] = remoteConsole;
    }
    public get remoteConsole(): RemoteConsole | undefined {
        return this['remote_console'];
    }
}