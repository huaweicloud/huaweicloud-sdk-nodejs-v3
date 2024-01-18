

export class CdmStartJobReq {
    public variables?: object;
    public constructor() { 
    }
    public withVariables(variables: object): CdmStartJobReq {
        this['variables'] = variables;
        return this;
    }
}