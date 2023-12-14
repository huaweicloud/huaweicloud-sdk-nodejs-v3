

export class RestSimultaneousInterpretationBody {
    public simultaneousInterpretation?: number;
    public constructor(simultaneousInterpretation?: number) { 
        this['simultaneousInterpretation'] = simultaneousInterpretation;
    }
    public withSimultaneousInterpretation(simultaneousInterpretation: number): RestSimultaneousInterpretationBody {
        this['simultaneousInterpretation'] = simultaneousInterpretation;
        return this;
    }
}