import { ServerJobInfo } from './ServerJobInfo';


export class ServerJobInfos {
    public items?: Array<ServerJobInfo>;
    public constructor() { 
    }
    public withItems(items: Array<ServerJobInfo>): ServerJobInfos {
        this['items'] = items;
        return this;
    }
}