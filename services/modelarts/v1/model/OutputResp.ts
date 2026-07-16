import { RemoteResp } from './RemoteResp';


export class OutputResp {
    public name?: string;
    public description?: string;
    private 'local_dir'?: string;
    private 'access_method'?: string;
    public remote?: RemoteResp;
    public constructor(name?: string, remote?: RemoteResp) { 
        this['name'] = name;
        this['remote'] = remote;
    }
    public withName(name: string): OutputResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): OutputResp {
        this['description'] = description;
        return this;
    }
    public withLocalDir(localDir: string): OutputResp {
        this['local_dir'] = localDir;
        return this;
    }
    public set localDir(localDir: string  | undefined) {
        this['local_dir'] = localDir;
    }
    public get localDir(): string | undefined {
        return this['local_dir'];
    }
    public withAccessMethod(accessMethod: string): OutputResp {
        this['access_method'] = accessMethod;
        return this;
    }
    public set accessMethod(accessMethod: string  | undefined) {
        this['access_method'] = accessMethod;
    }
    public get accessMethod(): string | undefined {
        return this['access_method'];
    }
    public withRemote(remote: RemoteResp): OutputResp {
        this['remote'] = remote;
        return this;
    }
}