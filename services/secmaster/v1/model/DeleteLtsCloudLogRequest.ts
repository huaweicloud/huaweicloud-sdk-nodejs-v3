

export class DeleteLtsCloudLogRequest {
    public csvc?: string;
    private 'source_name'?: string;
    public constructor(csvc?: string, sourceName?: string) { 
        this['csvc'] = csvc;
        this['source_name'] = sourceName;
    }
    public withCsvc(csvc: string): DeleteLtsCloudLogRequest {
        this['csvc'] = csvc;
        return this;
    }
    public withSourceName(sourceName: string): DeleteLtsCloudLogRequest {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
}