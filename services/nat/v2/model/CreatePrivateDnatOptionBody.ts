import { CreatePrivateDnatOption } from './CreatePrivateDnatOption';


export class CreatePrivateDnatOptionBody {
    private 'dnat_rule'?: CreatePrivateDnatOption;
    public constructor(dnatRule?: CreatePrivateDnatOption) { 
        this['dnat_rule'] = dnatRule;
    }
    public withDnatRule(dnatRule: CreatePrivateDnatOption): CreatePrivateDnatOptionBody {
        this['dnat_rule'] = dnatRule;
        return this;
    }
    public set dnatRule(dnatRule: CreatePrivateDnatOption  | undefined) {
        this['dnat_rule'] = dnatRule;
    }
    public get dnatRule(): CreatePrivateDnatOption | undefined {
        return this['dnat_rule'];
    }
}