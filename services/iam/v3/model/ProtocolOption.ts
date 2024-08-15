

export class ProtocolOption {
    private 'mapping_id'?: string;
    public constructor(mappingId?: string) { 
        this['mapping_id'] = mappingId;
    }
    public withMappingId(mappingId: string): ProtocolOption {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string  | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId(): string | undefined {
        return this['mapping_id'];
    }
}