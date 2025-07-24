

export class DomainVisibleServiceVo {
    public name?: string;
    public type?: number;
    private 'execute_type'?: number;
    public constructor() { 
    }
    public withName(name: string): DomainVisibleServiceVo {
        this['name'] = name;
        return this;
    }
    public withType(type: number): DomainVisibleServiceVo {
        this['type'] = type;
        return this;
    }
    public withExecuteType(executeType: number): DomainVisibleServiceVo {
        this['execute_type'] = executeType;
        return this;
    }
    public set executeType(executeType: number  | undefined) {
        this['execute_type'] = executeType;
    }
    public get executeType(): number | undefined {
        return this['execute_type'];
    }
}