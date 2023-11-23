

export class ListInstancesSessionRespondBodySessions {
    public addr?: string;
    public id?: string;
    public name?: string;
    public cmd?: string;
    public age?: string;
    public idle?: string;
    public db?: string;
    public fd?: string;
    public sub?: string;
    public psub?: string;
    public multi?: string;
    public constructor() { 
    }
    public withAddr(addr: string): ListInstancesSessionRespondBodySessions {
        this['addr'] = addr;
        return this;
    }
    public withId(id: string): ListInstancesSessionRespondBodySessions {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListInstancesSessionRespondBodySessions {
        this['name'] = name;
        return this;
    }
    public withCmd(cmd: string): ListInstancesSessionRespondBodySessions {
        this['cmd'] = cmd;
        return this;
    }
    public withAge(age: string): ListInstancesSessionRespondBodySessions {
        this['age'] = age;
        return this;
    }
    public withIdle(idle: string): ListInstancesSessionRespondBodySessions {
        this['idle'] = idle;
        return this;
    }
    public withDb(db: string): ListInstancesSessionRespondBodySessions {
        this['db'] = db;
        return this;
    }
    public withFd(fd: string): ListInstancesSessionRespondBodySessions {
        this['fd'] = fd;
        return this;
    }
    public withSub(sub: string): ListInstancesSessionRespondBodySessions {
        this['sub'] = sub;
        return this;
    }
    public withPsub(psub: string): ListInstancesSessionRespondBodySessions {
        this['psub'] = psub;
        return this;
    }
    public withMulti(multi: string): ListInstancesSessionRespondBodySessions {
        this['multi'] = multi;
        return this;
    }
}