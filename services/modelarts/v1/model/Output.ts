import { Remote } from './Remote';


export class Output {
    public name?: string;
    public description?: string;
    private 'local_dir'?: string;
    private 'access_method'?: string;
    public remote?: Remote;
    public constructor(name?: string, remote?: Remote) { 
        this['name'] = name;
        this['remote'] = remote;
    }
    public withName(name: string): Output {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Output {
        this['description'] = description;
        return this;
    }
    public withLocalDir(localDir: string): Output {
        this['local_dir'] = localDir;
        return this;
    }
    public set localDir(localDir: string  | undefined) {
        this['local_dir'] = localDir;
    }
    public get localDir(): string | undefined {
        return this['local_dir'];
    }
    public withAccessMethod(accessMethod: string): Output {
        this['access_method'] = accessMethod;
        return this;
    }
    public set accessMethod(accessMethod: string  | undefined) {
        this['access_method'] = accessMethod;
    }
    public get accessMethod(): string | undefined {
        return this['access_method'];
    }
    public withRemote(remote: Remote): Output {
        this['remote'] = remote;
        return this;
    }
}