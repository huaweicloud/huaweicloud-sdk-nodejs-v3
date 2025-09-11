

export class ChangeNameRequest {
    private 'new_name'?: string;
    public constructor(newName?: string) { 
        this['new_name'] = newName;
    }
    public withNewName(newName: string): ChangeNameRequest {
        this['new_name'] = newName;
        return this;
    }
    public set newName(newName: string  | undefined) {
        this['new_name'] = newName;
    }
    public get newName(): string | undefined {
        return this['new_name'];
    }
}