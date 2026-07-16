import { InputDataInfo } from './InputDataInfo';
import { InputRemoteConstraint } from './InputRemoteConstraint';


export class Input {
    public name?: string;
    public description?: string;
    private 'local_dir'?: string;
    private 'access_method'?: string;
    public remote?: InputDataInfo;
    private 'remote_constraint'?: Array<InputRemoteConstraint>;
    public constructor(name?: string, remote?: InputDataInfo) { 
        this['name'] = name;
        this['remote'] = remote;
    }
    public withName(name: string): Input {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Input {
        this['description'] = description;
        return this;
    }
    public withLocalDir(localDir: string): Input {
        this['local_dir'] = localDir;
        return this;
    }
    public set localDir(localDir: string  | undefined) {
        this['local_dir'] = localDir;
    }
    public get localDir(): string | undefined {
        return this['local_dir'];
    }
    public withAccessMethod(accessMethod: string): Input {
        this['access_method'] = accessMethod;
        return this;
    }
    public set accessMethod(accessMethod: string  | undefined) {
        this['access_method'] = accessMethod;
    }
    public get accessMethod(): string | undefined {
        return this['access_method'];
    }
    public withRemote(remote: InputDataInfo): Input {
        this['remote'] = remote;
        return this;
    }
    public withRemoteConstraint(remoteConstraint: Array<InputRemoteConstraint>): Input {
        this['remote_constraint'] = remoteConstraint;
        return this;
    }
    public set remoteConstraint(remoteConstraint: Array<InputRemoteConstraint>  | undefined) {
        this['remote_constraint'] = remoteConstraint;
    }
    public get remoteConstraint(): Array<InputRemoteConstraint> | undefined {
        return this['remote_constraint'];
    }
}