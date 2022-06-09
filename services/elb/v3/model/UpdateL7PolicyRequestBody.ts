import { UpdateL7PolicyOption } from './UpdateL7PolicyOption';


export class UpdateL7PolicyRequestBody {
    public l7policy: UpdateL7PolicyOption;
    public constructor(l7policy?: any) { 
        this['l7policy'] = l7policy;
    }
    public withL7policy(l7policy: UpdateL7PolicyOption): UpdateL7PolicyRequestBody {
        this['l7policy'] = l7policy;
        return this;
    }
}