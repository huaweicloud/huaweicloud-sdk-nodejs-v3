

export class AgencyMetadata {
    public name?: string;
    private 'enum'?: object;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): AgencyMetadata {
        this['name'] = name;
        return this;
    }
    public withEnum(_enum: object): AgencyMetadata {
        this['enum'] = _enum;
        return this;
    }
    public set _enum(_enum: object  | undefined) {
        this['enum'] = _enum;
    }
    public get _enum(): object | undefined {
        return this['enum'];
    }
}