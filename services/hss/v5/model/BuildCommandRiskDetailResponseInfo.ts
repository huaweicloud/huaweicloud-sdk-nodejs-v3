

export class BuildCommandRiskDetailResponseInfo {
    public remediation?: string;
    private 'build_instruction'?: string;
    public constructor() { 
    }
    public withRemediation(remediation: string): BuildCommandRiskDetailResponseInfo {
        this['remediation'] = remediation;
        return this;
    }
    public withBuildInstruction(buildInstruction: string): BuildCommandRiskDetailResponseInfo {
        this['build_instruction'] = buildInstruction;
        return this;
    }
    public set buildInstruction(buildInstruction: string  | undefined) {
        this['build_instruction'] = buildInstruction;
    }
    public get buildInstruction(): string | undefined {
        return this['build_instruction'];
    }
}