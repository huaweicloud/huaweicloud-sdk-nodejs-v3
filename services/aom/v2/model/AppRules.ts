import { AppRulesSpec } from './AppRulesSpec';


export class AppRules {
    public createTime?: string;
    public enable?: boolean;
    public eventName?: string;
    public hostid?: Array<string>;
    public id?: string;
    public name?: string;
    public projectid?: string;
    public spec?: AppRulesSpec;
    public desc?: string;
    public constructor(enable?: boolean, eventName?: string, id?: string, name?: string, projectid?: string, spec?: AppRulesSpec) { 
        this['enable'] = enable;
        this['eventName'] = eventName;
        this['id'] = id;
        this['name'] = name;
        this['projectid'] = projectid;
        this['spec'] = spec;
    }
    public withCreateTime(createTime: string): AppRules {
        this['createTime'] = createTime;
        return this;
    }
    public withEnable(enable: boolean): AppRules {
        this['enable'] = enable;
        return this;
    }
    public withEventName(eventName: string): AppRules {
        this['eventName'] = eventName;
        return this;
    }
    public withHostid(hostid: Array<string>): AppRules {
        this['hostid'] = hostid;
        return this;
    }
    public withId(id: string): AppRules {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AppRules {
        this['name'] = name;
        return this;
    }
    public withProjectid(projectid: string): AppRules {
        this['projectid'] = projectid;
        return this;
    }
    public withSpec(spec: AppRulesSpec): AppRules {
        this['spec'] = spec;
        return this;
    }
    public withDesc(desc: string): AppRules {
        this['desc'] = desc;
        return this;
    }
}