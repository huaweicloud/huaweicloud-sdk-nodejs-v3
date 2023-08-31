import { UpdatePrivateSnatOption } from './UpdatePrivateSnatOption';


export class UpdatePrivateSnatOptionBody {
    private 'snat_rule'?: UpdatePrivateSnatOption;
    public constructor(snatRule?: UpdatePrivateSnatOption) { 
        this['snat_rule'] = snatRule;
    }
    public withSnatRule(snatRule: UpdatePrivateSnatOption): UpdatePrivateSnatOptionBody {
        this['snat_rule'] = snatRule;
        return this;
    }
    public set snatRule(snatRule: UpdatePrivateSnatOption  | undefined) {
        this['snat_rule'] = snatRule;
    }
    public get snatRule(): UpdatePrivateSnatOption | undefined {
        return this['snat_rule'];
    }
}