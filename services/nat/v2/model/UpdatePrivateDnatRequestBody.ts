import { UpdatePrivateDnatOption } from './UpdatePrivateDnatOption';


export class UpdatePrivateDnatRequestBody {
    private 'dnat_rule'?: UpdatePrivateDnatOption;
    public constructor() { 
    }
    public withDnatRule(dnatRule: UpdatePrivateDnatOption): UpdatePrivateDnatRequestBody {
        this['dnat_rule'] = dnatRule;
        return this;
    }
    public set dnatRule(dnatRule: UpdatePrivateDnatOption  | undefined) {
        this['dnat_rule'] = dnatRule;
    }
    public get dnatRule(): UpdatePrivateDnatOption | undefined {
        return this['dnat_rule'];
    }
}