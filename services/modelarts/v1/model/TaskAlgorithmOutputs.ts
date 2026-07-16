import { TaskAlgorithmRemote } from './TaskAlgorithmRemote';


export class TaskAlgorithmOutputs {
    public name?: string;
    public description?: string;
    private 'local_dir'?: string;
    public remote?: TaskAlgorithmRemote;
    public constructor(name?: string, remote?: TaskAlgorithmRemote) { 
        this['name'] = name;
        this['remote'] = remote;
    }
    public withName(name: string): TaskAlgorithmOutputs {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TaskAlgorithmOutputs {
        this['description'] = description;
        return this;
    }
    public withLocalDir(localDir: string): TaskAlgorithmOutputs {
        this['local_dir'] = localDir;
        return this;
    }
    public set localDir(localDir: string  | undefined) {
        this['local_dir'] = localDir;
    }
    public get localDir(): string | undefined {
        return this['local_dir'];
    }
    public withRemote(remote: TaskAlgorithmRemote): TaskAlgorithmOutputs {
        this['remote'] = remote;
        return this;
    }
}