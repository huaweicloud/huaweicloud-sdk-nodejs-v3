import { IpAllowList } from './IpAllowList';


export class IPWhiteList {
    public enable?: boolean;
    private 'allow_list'?: Array<IpAllowList>;
    public constructor(enable?: boolean) { 
        this['enable'] = enable;
    }
    public withEnable(enable: boolean): IPWhiteList {
        this['enable'] = enable;
        return this;
    }
    public withAllowList(allowList: Array<IpAllowList>): IPWhiteList {
        this['allow_list'] = allowList;
        return this;
    }
    public set allowList(allowList: Array<IpAllowList>  | undefined) {
        this['allow_list'] = allowList;
    }
    public get allowList(): Array<IpAllowList> | undefined {
        return this['allow_list'];
    }
}