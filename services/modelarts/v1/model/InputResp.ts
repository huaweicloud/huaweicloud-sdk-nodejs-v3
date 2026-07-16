import { InputDataInfoResp } from './InputDataInfoResp';
import { InputRespRemoteConstraint } from './InputRespRemoteConstraint';


export class InputResp {
    public name?: string;
    public description?: string;
    private 'local_dir'?: string;
    private 'access_method'?: string;
    public remote?: InputDataInfoResp;
    private 'remote_constraint'?: Array<InputRespRemoteConstraint>;
    public constructor(name?: string, remote?: InputDataInfoResp) { 
        this['name'] = name;
        this['remote'] = remote;
    }
    public withName(name: string): InputResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): InputResp {
        this['description'] = description;
        return this;
    }
    public withLocalDir(localDir: string): InputResp {
        this['local_dir'] = localDir;
        return this;
    }
    public set localDir(localDir: string  | undefined) {
        this['local_dir'] = localDir;
    }
    public get localDir(): string | undefined {
        return this['local_dir'];
    }
    public withAccessMethod(accessMethod: string): InputResp {
        this['access_method'] = accessMethod;
        return this;
    }
    public set accessMethod(accessMethod: string  | undefined) {
        this['access_method'] = accessMethod;
    }
    public get accessMethod(): string | undefined {
        return this['access_method'];
    }
    public withRemote(remote: InputDataInfoResp): InputResp {
        this['remote'] = remote;
        return this;
    }
    public withRemoteConstraint(remoteConstraint: Array<InputRespRemoteConstraint>): InputResp {
        this['remote_constraint'] = remoteConstraint;
        return this;
    }
    public set remoteConstraint(remoteConstraint: Array<InputRespRemoteConstraint>  | undefined) {
        this['remote_constraint'] = remoteConstraint;
    }
    public get remoteConstraint(): Array<InputRespRemoteConstraint> | undefined {
        return this['remote_constraint'];
    }
}