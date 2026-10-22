

export class SystemLexiconItem {
    public label?: string;
    public name?: string;
    public type?: string;
    public constructor() { 
    }
    public withLabel(label: string): SystemLexiconItem {
        this['label'] = label;
        return this;
    }
    public withName(name: string): SystemLexiconItem {
        this['name'] = name;
        return this;
    }
    public withType(type: string): SystemLexiconItem {
        this['type'] = type;
        return this;
    }
}