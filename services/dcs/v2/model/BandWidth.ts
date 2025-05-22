

export class BandWidth {
    public input?: string;
    public output?: string;
    public constructor() { 
    }
    public withInput(input: string): BandWidth {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): BandWidth {
        this['output'] = output;
        return this;
    }
}