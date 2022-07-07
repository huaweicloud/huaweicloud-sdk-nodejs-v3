import { EipSpec } from './EipSpec';


export class OpenAPIResponseSpecSpec {
    public eip?: EipSpec;
    private 'IsDynamic'?: boolean | undefined;
    public constructor() { 
    }
    public withEip(eip: EipSpec): OpenAPIResponseSpecSpec {
        this['eip'] = eip;
        return this;
    }
    public withIsDynamic(isDynamic: boolean): OpenAPIResponseSpecSpec {
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