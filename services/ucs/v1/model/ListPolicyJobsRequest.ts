

export class ListPolicyJobsRequest {
    public kind?: string;
    public constructor() { 
    }
    public withKind(kind: string): ListPolicyJobsRequest {
        this['kind'] = kind;
        return this;
    }
}