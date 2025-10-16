import { ShowStatusAppItem } from './ShowStatusAppItem';


export class ShowStatusServiceResponseBodyServerList {
    private 'server_type'?: string;
    private 'app_list'?: Array<ShowStatusAppItem>;
    public constructor() { 
    }
    public withServerType(serverType: string): ShowStatusServiceResponseBodyServerList {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
    public withAppList(appList: Array<ShowStatusAppItem>): ShowStatusServiceResponseBodyServerList {
        this['app_list'] = appList;
        return this;
    }
    public set appList(appList: Array<ShowStatusAppItem>  | undefined) {
        this['app_list'] = appList;
    }
    public get appList(): Array<ShowStatusAppItem> | undefined {
        return this['app_list'];
    }
}