

export class ImageSaveJob {
    public name?: string;
    public namespace?: string;
    public tag?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): ImageSaveJob {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): ImageSaveJob {
        this['namespace'] = namespace;
        return this;
    }
    public withTag(tag: string): ImageSaveJob {
        this['tag'] = tag;
        return this;
    }
    public withDescription(description: string): ImageSaveJob {
        this['description'] = description;
        return this;
    }
}