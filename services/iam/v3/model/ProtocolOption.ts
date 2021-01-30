

export class ProtocolOption {
    private 'mapping_id': string | undefined;
    public constructor(mappingId: any) { 
        this['mapping_id'] = mappingId;
    }
    public withMappingId(mappingId: string): ProtocolOption {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId() {
        return this['mapping_id'];
    }
}