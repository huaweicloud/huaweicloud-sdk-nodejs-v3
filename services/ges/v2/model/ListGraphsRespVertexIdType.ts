

export class ListGraphsRespVertexIdType {
    private 'id_type': string | undefined;
    private 'id_length'?: number | undefined;
    public constructor(idType?: any) { 
        this['id_type'] = idType;
    }
    public withIdType(idType: string): ListGraphsRespVertexIdType {
        this['id_type'] = idType;
        return this;
    }
    public set idType(idType: string | undefined) {
        this['id_type'] = idType;
    }
    public get idType() {
        return this['id_type'];
    }
    public withIdLength(idLength: number): ListGraphsRespVertexIdType {
        this['id_length'] = idLength;
        return this;
    }
    public set idLength(idLength: number | undefined) {
        this['id_length'] = idLength;
    }
    public get idLength() {
        return this['id_length'];
    }
}