import { AlgorithmRemote } from './AlgorithmRemote';


export class AlgorithmInput {
    public name?: string;
    private 'local_dir'?: string;
    public remote?: AlgorithmRemote;
    public constructor(name?: string, remote?: AlgorithmRemote) { 
        this['name'] = name;
        this['remote'] = remote;
    }
    public withName(name: string): AlgorithmInput {
        this['name'] = name;
        return this;
    }
    public withLocalDir(localDir: string): AlgorithmInput {
        this['local_dir'] = localDir;
        return this;
    }
    public set localDir(localDir: string  | undefined) {
        this['local_dir'] = localDir;
    }
    public get localDir(): string | undefined {
        return this['local_dir'];
    }
    public withRemote(remote: AlgorithmRemote): AlgorithmInput {
        this['remote'] = remote;
        return this;
    }
}