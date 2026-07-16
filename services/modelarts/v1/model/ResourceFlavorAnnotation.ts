

export class ResourceFlavorAnnotation {
    private 'os.modelarts.flavor/image.filter'?: string;
    public constructor() { 
    }
    public withOsModelartsFlavorImageFilter(osModelartsFlavorImageFilter: string): ResourceFlavorAnnotation {
        this['os.modelarts.flavor/image.filter'] = osModelartsFlavorImageFilter;
        return this;
    }
    public set osModelartsFlavorImageFilter(osModelartsFlavorImageFilter: string  | undefined) {
        this['os.modelarts.flavor/image.filter'] = osModelartsFlavorImageFilter;
    }
    public get osModelartsFlavorImageFilter(): string | undefined {
        return this['os.modelarts.flavor/image.filter'];
    }
}