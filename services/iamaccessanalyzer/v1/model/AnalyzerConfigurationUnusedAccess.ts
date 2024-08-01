

export class AnalyzerConfigurationUnusedAccess {
    private 'unused_access_age'?: number;
    public constructor() { 
    }
    public withUnusedAccessAge(unusedAccessAge: number): AnalyzerConfigurationUnusedAccess {
        this['unused_access_age'] = unusedAccessAge;
        return this;
    }
    public set unusedAccessAge(unusedAccessAge: number  | undefined) {
        this['unused_access_age'] = unusedAccessAge;
    }
    public get unusedAccessAge(): number | undefined {
        return this['unused_access_age'];
    }
}