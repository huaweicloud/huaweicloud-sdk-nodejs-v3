

export class AsyncJobReqBody {
    public recent?: string;
    public ids?: Array<string>;
    public nids?: Array<string>;
    public attacks?: Array<string>;
    public nattacks?: Array<string>;
    public rules?: Array<string>;
    public nrules?: Array<string>;
    public sip?: string;
    public url?: string;
    public sips?: Array<string>;
    public nsips?: Array<string>;
    public urls?: Array<string>;
    public nurls?: Array<string>;
    public actions?: Array<string>;
    public nactions?: Array<string>;
    public hosts?: Array<string>;
    public instances?: Array<string>;
    private 'dump_columns'?: Array<string>;
    public constructor(recent?: string, dumpColumns?: Array<string>) { 
        this['recent'] = recent;
        this['dump_columns'] = dumpColumns;
    }
    public withRecent(recent: string): AsyncJobReqBody {
        this['recent'] = recent;
        return this;
    }
    public withIds(ids: Array<string>): AsyncJobReqBody {
        this['ids'] = ids;
        return this;
    }
    public withNids(nids: Array<string>): AsyncJobReqBody {
        this['nids'] = nids;
        return this;
    }
    public withAttacks(attacks: Array<string>): AsyncJobReqBody {
        this['attacks'] = attacks;
        return this;
    }
    public withNattacks(nattacks: Array<string>): AsyncJobReqBody {
        this['nattacks'] = nattacks;
        return this;
    }
    public withRules(rules: Array<string>): AsyncJobReqBody {
        this['rules'] = rules;
        return this;
    }
    public withNrules(nrules: Array<string>): AsyncJobReqBody {
        this['nrules'] = nrules;
        return this;
    }
    public withSip(sip: string): AsyncJobReqBody {
        this['sip'] = sip;
        return this;
    }
    public withUrl(url: string): AsyncJobReqBody {
        this['url'] = url;
        return this;
    }
    public withSips(sips: Array<string>): AsyncJobReqBody {
        this['sips'] = sips;
        return this;
    }
    public withNsips(nsips: Array<string>): AsyncJobReqBody {
        this['nsips'] = nsips;
        return this;
    }
    public withUrls(urls: Array<string>): AsyncJobReqBody {
        this['urls'] = urls;
        return this;
    }
    public withNurls(nurls: Array<string>): AsyncJobReqBody {
        this['nurls'] = nurls;
        return this;
    }
    public withActions(actions: Array<string>): AsyncJobReqBody {
        this['actions'] = actions;
        return this;
    }
    public withNactions(nactions: Array<string>): AsyncJobReqBody {
        this['nactions'] = nactions;
        return this;
    }
    public withHosts(hosts: Array<string>): AsyncJobReqBody {
        this['hosts'] = hosts;
        return this;
    }
    public withInstances(instances: Array<string>): AsyncJobReqBody {
        this['instances'] = instances;
        return this;
    }
    public withDumpColumns(dumpColumns: Array<string>): AsyncJobReqBody {
        this['dump_columns'] = dumpColumns;
        return this;
    }
    public set dumpColumns(dumpColumns: Array<string>  | undefined) {
        this['dump_columns'] = dumpColumns;
    }
    public get dumpColumns(): Array<string> | undefined {
        return this['dump_columns'];
    }
}