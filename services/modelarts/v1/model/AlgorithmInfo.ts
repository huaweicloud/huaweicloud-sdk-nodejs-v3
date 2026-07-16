

export class AlgorithmInfo {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): AlgorithmInfo {
        this['id'] = id;
        return this;
    }
}