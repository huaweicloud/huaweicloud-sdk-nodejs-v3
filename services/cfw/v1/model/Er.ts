

export class Er {
    private 'er_id'?: string;
    private 'er_attach_id'?: string;
    public constructor() { 
    }
    public withErId(erId: string): Er {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withErAttachId(erAttachId: string): Er {
        this['er_attach_id'] = erAttachId;
        return this;
    }
    public set erAttachId(erAttachId: string  | undefined) {
        this['er_attach_id'] = erAttachId;
    }
    public get erAttachId(): string | undefined {
        return this['er_attach_id'];
    }
}