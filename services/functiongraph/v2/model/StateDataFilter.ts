

export class StateDataFilter {
    public input?: string;
    public output?: string;
    public constructor() { 
    }
    public withInput(input: string): StateDataFilter {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): StateDataFilter {
        this['output'] = output;
        return this;
    }
}