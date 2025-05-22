

export class IssueRecordV4Details {
    public property?: string;
    private 'old_value'?: string;
    private 'new_value'?: string;
    public operation?: string;
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withProperty(property: string): IssueRecordV4Details {
        this['property'] = property;
        return this;
    }
    public withOldValue(oldValue: string): IssueRecordV4Details {
        this['old_value'] = oldValue;
        return this;
    }
    public set oldValue(oldValue: string  | undefined) {
        this['old_value'] = oldValue;
    }
    public get oldValue(): string | undefined {
        return this['old_value'];
    }
    public withNewValue(newValue: string): IssueRecordV4Details {
        this['new_value'] = newValue;
        return this;
    }
    public set newValue(newValue: string  | undefined) {
        this['new_value'] = newValue;
    }
    public get newValue(): string | undefined {
        return this['new_value'];
    }
    public withOperation(operation: string): IssueRecordV4Details {
        this['operation'] = operation;
        return this;
    }
    public withId(id: number): IssueRecordV4Details {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueRecordV4Details {
        this['name'] = name;
        return this;
    }
}