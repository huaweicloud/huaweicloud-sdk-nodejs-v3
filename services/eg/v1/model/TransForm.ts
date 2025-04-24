

export class TransForm {
    public type?: TransFormTypeEnum | string;
    public value?: string;
    public template?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: TransFormTypeEnum | string): TransForm {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): TransForm {
        this['value'] = value;
        return this;
    }
    public withTemplate(template: string): TransForm {
        this['template'] = template;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TransFormTypeEnum {
    ORIGINAL = 'ORIGINAL',
    CONSTANT = 'CONSTANT',
    VARIABLE = 'VARIABLE'
}
