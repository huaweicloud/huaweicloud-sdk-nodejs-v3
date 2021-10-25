

export class InsurancePolicyDetail {
    public words?: string;
    public location?: Array<Array<number>>;
    public constructor() { 
    }
    public withWords(words: string): InsurancePolicyDetail {
        this['words'] = words;
        return this;
    }
    public withLocation(location: Array<Array<number>>): InsurancePolicyDetail {
        this['location'] = location;
        return this;
    }
}