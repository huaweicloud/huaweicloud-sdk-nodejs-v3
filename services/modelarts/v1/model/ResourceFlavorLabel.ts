

export class ResourceFlavorLabel {
    private 'os.modelarts/scope'?: string;
    public constructor(osModelartsScope?: string) { 
        this['os.modelarts/scope'] = osModelartsScope;
    }
    public withOsModelartsScope(osModelartsScope: string): ResourceFlavorLabel {
        this['os.modelarts/scope'] = osModelartsScope;
        return this;
    }
    public set osModelartsScope(osModelartsScope: string  | undefined) {
        this['os.modelarts/scope'] = osModelartsScope;
    }
    public get osModelartsScope(): string | undefined {
        return this['os.modelarts/scope'];
    }
}