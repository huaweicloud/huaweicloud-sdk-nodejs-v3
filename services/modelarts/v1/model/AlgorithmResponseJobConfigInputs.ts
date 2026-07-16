import { AlgorithmResponseJobConfigRemoteConstraints } from './AlgorithmResponseJobConfigRemoteConstraints';


export class AlgorithmResponseJobConfigInputs {
    public name?: string;
    public description?: string;
    private 'remote_constraints'?: Array<AlgorithmResponseJobConfigRemoteConstraints>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): AlgorithmResponseJobConfigInputs {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AlgorithmResponseJobConfigInputs {
        this['description'] = description;
        return this;
    }
    public withRemoteConstraints(remoteConstraints: Array<AlgorithmResponseJobConfigRemoteConstraints>): AlgorithmResponseJobConfigInputs {
        this['remote_constraints'] = remoteConstraints;
        return this;
    }
    public set remoteConstraints(remoteConstraints: Array<AlgorithmResponseJobConfigRemoteConstraints>  | undefined) {
        this['remote_constraints'] = remoteConstraints;
    }
    public get remoteConstraints(): Array<AlgorithmResponseJobConfigRemoteConstraints> | undefined {
        return this['remote_constraints'];
    }
}