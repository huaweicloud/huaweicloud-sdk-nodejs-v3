import { EipSpec } from './EipSpec';


export class MasterEIPResponseSpecSpec {
    public id?: string;
    public eip?: EipSpec;
    private 'IsDynamic'?: boolean | undefined;
    public constructor() { 
    }
    public withId(id: string): MasterEIPResponseSpecSpec {
        this['id'] = id;
        return this;
    }
    public withEip(eip: EipSpec): MasterEIPResponseSpecSpec {
        this['eip'] = eip;
        return this;
    }
    public withIsDynamic(isDynamic: boolean): MasterEIPResponseSpecSpec {
        this['IsDynamic'] = isDynamic;
        return this;
    }
    public set isDynamic(isDynamic: boolean | undefined) {
        this['IsDynamic'] = isDynamic;
    }
    public get isDynamic() {
        return this['IsDynamic'];
    }
}