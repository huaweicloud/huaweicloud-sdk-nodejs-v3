

export class CreateGraphReqGraphVertexIdType {
    private 'id_type'?: string;
    private 'id_length'?: number;
    public constructor(idType?: string) { 
        this['id_type'] = idType;
    }
    public withIdType(idType: string): CreateGraphReqGraphVertexIdType {
        this['id_type'] = idType;
        return this;
    }
    public set idType(idType: string  | undefined) {
        this['id_type'] = idType;
    }
    public get idType(): string | undefined {
        return this['id_type'];
    }
    public withIdLength(idLength: number): CreateGraphReqGraphVertexIdType {
        this['id_length'] = idLength;
        return this;
    }
    public set idLength(idLength: number  | undefined) {
        this['id_length'] = idLength;
    }
    public get idLength(): number | undefined {
        return this['id_length'];
    }
}