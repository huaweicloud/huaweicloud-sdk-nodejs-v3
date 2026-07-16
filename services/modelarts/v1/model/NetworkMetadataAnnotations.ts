

export class NetworkMetadataAnnotations {
    private 'os.modelarts/description'?: string;
    public constructor() { 
    }
    public withOsModelartsDescription(osModelartsDescription: string): NetworkMetadataAnnotations {
        this['os.modelarts/description'] = osModelartsDescription;
        return this;
    }
    public set osModelartsDescription(osModelartsDescription: string  | undefined) {
        this['os.modelarts/description'] = osModelartsDescription;
    }
    public get osModelartsDescription(): string | undefined {
        return this['os.modelarts/description'];
    }
}