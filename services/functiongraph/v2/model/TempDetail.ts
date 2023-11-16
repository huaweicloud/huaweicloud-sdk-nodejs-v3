

export class TempDetail {
    public input?: string;
    public output?: string;
    public warning?: string;
    public constructor() { 
    }
    public withInput(input: string): TempDetail {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): TempDetail {
        this['output'] = output;
        return this;
    }
    public withWarning(warning: string): TempDetail {
        this['warning'] = warning;
        return this;
    }
}