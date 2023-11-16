

export class InheritConfigQuery {
    public status?: string;
    private 'inherit_type'?: string;
    private 'inherit_time_type'?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): InheritConfigQuery {
        this['status'] = status;
        return this;
    }
    public withInheritType(inheritType: string): InheritConfigQuery {
        this['inherit_type'] = inheritType;
        return this;
    }
    public set inheritType(inheritType: string  | undefined) {
        this['inherit_type'] = inheritType;
    }
    public get inheritType(): string | undefined {
        return this['inherit_type'];
    }
    public withInheritTimeType(inheritTimeType: string): InheritConfigQuery {
        this['inherit_time_type'] = inheritTimeType;
        return this;
    }
    public set inheritTimeType(inheritTimeType: string  | undefined) {
        this['inherit_time_type'] = inheritTimeType;
    }
    public get inheritTimeType(): string | undefined {
        return this['inherit_time_type'];
    }
}