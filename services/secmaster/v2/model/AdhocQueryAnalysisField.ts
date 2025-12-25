

export class AdhocQueryAnalysisField {
    public name?: string;
    private 'logical_type'?: object;
    public alias?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): AdhocQueryAnalysisField {
        this['name'] = name;
        return this;
    }
    public withLogicalType(logicalType: object): AdhocQueryAnalysisField {
        this['logical_type'] = logicalType;
        return this;
    }
    public set logicalType(logicalType: object  | undefined) {
        this['logical_type'] = logicalType;
    }
    public get logicalType(): object | undefined {
        return this['logical_type'];
    }
    public withAlias(alias: string): AdhocQueryAnalysisField {
        this['alias'] = alias;
        return this;
    }
}