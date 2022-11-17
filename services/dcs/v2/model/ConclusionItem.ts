

export class ConclusionItem {
    public id: number;
    public params?: { [key: string]: string; };
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: number): ConclusionItem {
        this['id'] = id;
        return this;
    }
    public withParams(params: { [key: string]: string; }): ConclusionItem {
        this['params'] = params;
        return this;
    }
}