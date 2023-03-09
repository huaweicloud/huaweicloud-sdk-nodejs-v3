

export class IndexPrimitiveTypeHolder {
    public index?: string;
    public constructor() { 
    }
    public withIndex(index: string): IndexPrimitiveTypeHolder {
        this['index'] = index;
        return this;
    }
}