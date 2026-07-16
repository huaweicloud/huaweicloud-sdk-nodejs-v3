import { InputDataInfo } from './InputDataInfo';


export class TaskAlgorithmInputs {
    public name?: string;
    public description?: string;
    private 'local_dir'?: string;
    public remote?: InputDataInfo;
    public constructor(name?: string, remote?: InputDataInfo) { 
        this['name'] = name;
        this['remote'] = remote;
    }
    public withName(name: string): TaskAlgorithmInputs {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TaskAlgorithmInputs {
        this['description'] = description;
        return this;
    }
    public withLocalDir(localDir: string): TaskAlgorithmInputs {
        this['local_dir'] = localDir;
        return this;
    }
    public set localDir(localDir: string  | undefined) {
        this['local_dir'] = localDir;
    }
    public get localDir(): string | undefined {
        return this['local_dir'];
    }
    public withRemote(remote: InputDataInfo): TaskAlgorithmInputs {
        this['remote'] = remote;
        return this;
    }
}