import { CreateL7PolicyOption } from './CreateL7PolicyOption';


export class CreateL7PolicyRequestBody {
    public l7policy: CreateL7PolicyOption;
    public constructor(l7policy?: any) { 
        this['l7policy'] = l7policy;
    }
    public withL7policy(l7policy: CreateL7PolicyOption): CreateL7PolicyRequestBody {
        this['l7policy'] = l7policy;
        return this;
    }
}