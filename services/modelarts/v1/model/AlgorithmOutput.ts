import { Remote } from './Remote';


export class AlgorithmOutput {
    public name?: string;
    private 'local_dir'?: string;
    public remote?: Remote;
    public mode?: string;
    public period?: string;
    public constructor(name?: string, remote?: Remote) { 
        this['name'] = name;
        this['remote'] = remote;
    }
    public withName(name: string): AlgorithmOutput {
        this['name'] = name;
        return this;
    }
    public withLocalDir(localDir: string): AlgorithmOutput {
        this['local_dir'] = localDir;
        return this;
    }
    public set localDir(localDir: string  | undefined) {
        this['local_dir'] = localDir;
    }
    public get localDir(): string | undefined {
        return this['local_dir'];
    }
    public withRemote(remote: Remote): AlgorithmOutput {
        this['remote'] = remote;
        return this;
    }
    public withMode(mode: string): AlgorithmOutput {
        this['mode'] = mode;
        return this;
    }
    public withPeriod(period: string): AlgorithmOutput {
        this['period'] = period;
        return this;
    }
}