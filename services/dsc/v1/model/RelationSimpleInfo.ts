

export class RelationSimpleInfo {
    public id?: string;
    public name?: string;
    public path?: string;
    private 'risk_level'?: number;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): RelationSimpleInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RelationSimpleInfo {
        this['name'] = name;
        return this;
    }
    public withPath(path: string): RelationSimpleInfo {
        this['path'] = path;
        return this;
    }
    public withRiskLevel(riskLevel: number): RelationSimpleInfo {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: number  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): number | undefined {
        return this['risk_level'];
    }
    public withType(type: string): RelationSimpleInfo {
        this['type'] = type;
        return this;
    }
}