

export class CodeEvent {
    public type?: string;
    public enable?: boolean;
    public constructor() { 
    }
    public withType(type: string): CodeEvent {
        this['type'] = type;
        return this;
    }
    public withEnable(enable: boolean): CodeEvent {
        this['enable'] = enable;
        return this;
    }
}