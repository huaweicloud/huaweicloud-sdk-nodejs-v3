import { Artifact } from './Artifact';


export class GitRepositoryStatus {
    public observedGeneration?: number;
    public conditions?: Array<object>;
    public artifact?: Artifact;
    public constructor() { 
    }
    public withObservedGeneration(observedGeneration: number): GitRepositoryStatus {
        this['observedGeneration'] = observedGeneration;
        return this;
    }
    public withConditions(conditions: Array<object>): GitRepositoryStatus {
        this['conditions'] = conditions;
        return this;
    }
    public withArtifact(artifact: Artifact): GitRepositoryStatus {
        this['artifact'] = artifact;
        return this;
    }
}