import { OpResourceExtraInfoResp } from './OpResourceExtraInfoResp';


export class OpResourceResp {
    private 'extra_info'?: OpResourceExtraInfoResp;
    public id?: string;
    public name?: string;
    public type?: string;
    public constructor(id?: string, type?: string) { 
        this['id'] = id;
        this['type'] = type;
    }
    public withExtraInfo(extraInfo: OpResourceExtraInfoResp): OpResourceResp {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: OpResourceExtraInfoResp  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): OpResourceExtraInfoResp | undefined {
        return this['extra_info'];
    }
    public withId(id: string): OpResourceResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): OpResourceResp {
        this['name'] = name;
        return this;
    }
    public withType(type: string): OpResourceResp {
        this['type'] = type;
        return this;
    }
}