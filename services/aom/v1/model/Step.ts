

export class Step {
    public id?: string;
    public name?: string;
    public type?: string;
    public input?: { [key: string]: string; };
    private 'ignore_error'?: boolean;
    public description?: string;
    public constructor(ignoreError?: boolean) { 
        this['ignore_error'] = ignoreError;
    }
    public withId(id: string): Step {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Step {
        this['name'] = name;
        return this;
    }
    public withType(type: string): Step {
        this['type'] = type;
        return this;
    }
    public withInput(input: { [key: string]: string; }): Step {
        this['input'] = input;
        return this;
    }
    public withIgnoreError(ignoreError: boolean): Step {
        this['ignore_error'] = ignoreError;
        return this;
    }
    public set ignoreError(ignoreError: boolean  | undefined) {
        this['ignore_error'] = ignoreError;
    }
    public get ignoreError(): boolean | undefined {
        return this['ignore_error'];
    }
    public withDescription(description: string): Step {
        this['description'] = description;
        return this;
    }
}