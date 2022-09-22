

export class Advanced {
    public index?: string;
    public contensts?: Array<string>;
    public constructor() { 
    }
    public withIndex(index: string): Advanced {
        this['index'] = index;
        return this;
    }
    public withContensts(contensts: Array<string>): Advanced {
        this['contensts'] = contensts;
        return this;
    }
}