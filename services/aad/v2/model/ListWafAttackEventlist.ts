import { Backend } from './Backend';


export class ListWafAttackEventlist {
    public id?: string;
    public domain?: string;
    public time?: number;
    public sip?: string;
    public action?: string;
    public url?: string;
    public type?: string;
    public backend?: Backend;
    public constructor() { 
    }
    public withId(id: string): ListWafAttackEventlist {
        this['id'] = id;
        return this;
    }
    public withDomain(domain: string): ListWafAttackEventlist {
        this['domain'] = domain;
        return this;
    }
    public withTime(time: number): ListWafAttackEventlist {
        this['time'] = time;
        return this;
    }
    public withSip(sip: string): ListWafAttackEventlist {
        this['sip'] = sip;
        return this;
    }
    public withAction(action: string): ListWafAttackEventlist {
        this['action'] = action;
        return this;
    }
    public withUrl(url: string): ListWafAttackEventlist {
        this['url'] = url;
        return this;
    }
    public withType(type: string): ListWafAttackEventlist {
        this['type'] = type;
        return this;
    }
    public withBackend(backend: Backend): ListWafAttackEventlist {
        this['backend'] = backend;
        return this;
    }
}