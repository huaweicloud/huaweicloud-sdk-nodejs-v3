

export class ConfigurationRisks {
    private 'package'?: string;
    public sourceFile?: string;
    public nodeMsg?: string;
    public field?: string;
    public operation?: string;
    public originalValue?: string;
    public value?: string;
    public constructor() { 
    }
    public withPackage(_package: string): ConfigurationRisks {
        this['package'] = _package;
        return this;
    }
    public set _package(_package: string  | undefined) {
        this['package'] = _package;
    }
    public get _package(): string | undefined {
        return this['package'];
    }
    public withSourceFile(sourceFile: string): ConfigurationRisks {
        this['sourceFile'] = sourceFile;
        return this;
    }
    public withNodeMsg(nodeMsg: string): ConfigurationRisks {
        this['nodeMsg'] = nodeMsg;
        return this;
    }
    public withField(field: string): ConfigurationRisks {
        this['field'] = field;
        return this;
    }
    public withOperation(operation: string): ConfigurationRisks {
        this['operation'] = operation;
        return this;
    }
    public withOriginalValue(originalValue: string): ConfigurationRisks {
        this['originalValue'] = originalValue;
        return this;
    }
    public withValue(value: string): ConfigurationRisks {
        this['value'] = value;
        return this;
    }
}