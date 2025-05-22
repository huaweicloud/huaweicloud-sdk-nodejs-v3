

export class CreateCustomfieldV1Req {
    public name?: string;
    public type?: string;
    public options?: string;
    public memo?: string;
    private 'scrum_type'?: string;
    public constructor(name?: string, type?: string, options?: string, memo?: string, scrumType?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['options'] = options;
        this['memo'] = memo;
        this['scrum_type'] = scrumType;
    }
    public withName(name: string): CreateCustomfieldV1Req {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CreateCustomfieldV1Req {
        this['type'] = type;
        return this;
    }
    public withOptions(options: string): CreateCustomfieldV1Req {
        this['options'] = options;
        return this;
    }
    public withMemo(memo: string): CreateCustomfieldV1Req {
        this['memo'] = memo;
        return this;
    }
    public withScrumType(scrumType: string): CreateCustomfieldV1Req {
        this['scrum_type'] = scrumType;
        return this;
    }
    public set scrumType(scrumType: string  | undefined) {
        this['scrum_type'] = scrumType;
    }
    public get scrumType(): string | undefined {
        return this['scrum_type'];
    }
}