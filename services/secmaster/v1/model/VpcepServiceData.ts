import { VpcServiceType } from './VpcServiceType';


export class VpcepServiceData {
    public deprecated?: boolean;
    public id?: string;
    public name?: string;
    public type?: VpcServiceType;
    public constructor() { 
    }
    public withDeprecated(deprecated: boolean): VpcepServiceData {
        this['deprecated'] = deprecated;
        return this;
    }
    public withId(id: string): VpcepServiceData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpcepServiceData {
        this['name'] = name;
        return this;
    }
    public withType(type: VpcServiceType): VpcepServiceData {
        this['type'] = type;
        return this;
    }
}