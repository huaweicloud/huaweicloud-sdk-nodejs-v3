import { CreatePrivateSnatOption } from './CreatePrivateSnatOption';


export class CreatePrivateSnatOptionBody {
    private 'snat_rule'?: CreatePrivateSnatOption;
    public constructor(snatRule?: CreatePrivateSnatOption) { 
        this['snat_rule'] = snatRule;
    }
    public withSnatRule(snatRule: CreatePrivateSnatOption): CreatePrivateSnatOptionBody {
        this['snat_rule'] = snatRule;
        return this;
    }
    public set snatRule(snatRule: CreatePrivateSnatOption  | undefined) {
        this['snat_rule'] = snatRule;
    }
    public get snatRule(): CreatePrivateSnatOption | undefined {
        return this['snat_rule'];
    }
}