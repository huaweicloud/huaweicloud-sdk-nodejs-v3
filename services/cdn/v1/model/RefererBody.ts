import { Referer } from './Referer';


export class RefererBody {
    public referer: Referer;
    public constructor(referer?: any) { 
        this['referer'] = referer;
    }
    public withReferer(referer: Referer): RefererBody {
        this['referer'] = referer;
        return this;
    }
}