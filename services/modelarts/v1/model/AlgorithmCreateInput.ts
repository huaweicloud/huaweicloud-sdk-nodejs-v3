import { RemoteConstraint } from './RemoteConstraint';


export class AlgorithmCreateInput {
    public name?: string;
    public description?: string;
    private 'remote_constraints'?: Array<RemoteConstraint>;
    public constructor() { 
    }
    public withName(name: string): AlgorithmCreateInput {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AlgorithmCreateInput {
        this['description'] = description;
        return this;
    }
    public withRemoteConstraints(remoteConstraints: Array<RemoteConstraint>): AlgorithmCreateInput {
        this['remote_constraints'] = remoteConstraints;
        return this;
    }
    public set remoteConstraints(remoteConstraints: Array<RemoteConstraint>  | undefined) {
        this['remote_constraints'] = remoteConstraints;
    }
    public get remoteConstraints(): Array<RemoteConstraint> | undefined {
        return this['remote_constraints'];
    }
}