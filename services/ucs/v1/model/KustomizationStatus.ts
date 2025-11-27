

export class KustomizationStatus {
    public observedGeneration?: number;
    public conditions?: Array<object>;
    public lastAttemptedRevision?: string;
    public constructor() { 
    }
    public withObservedGeneration(observedGeneration: number): KustomizationStatus {
        this['observedGeneration'] = observedGeneration;
        return this;
    }
    public withConditions(conditions: Array<object>): KustomizationStatus {
        this['conditions'] = conditions;
        return this;
    }
    public withLastAttemptedRevision(lastAttemptedRevision: string): KustomizationStatus {
        this['lastAttemptedRevision'] = lastAttemptedRevision;
        return this;
    }
}