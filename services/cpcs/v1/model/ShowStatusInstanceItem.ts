import { ShowStatusInstanceItemInstanceList } from './ShowStatusInstanceItemInstanceList';


export class ShowStatusInstanceItem {
    private 'instance_list'?: Array<ShowStatusInstanceItemInstanceList>;
    public timestamp?: number;
    public constructor() { 
    }
    public withInstanceList(instanceList: Array<ShowStatusInstanceItemInstanceList>): ShowStatusInstanceItem {
        this['instance_list'] = instanceList;
        return this;
    }
    public set instanceList(instanceList: Array<ShowStatusInstanceItemInstanceList>  | undefined) {
        this['instance_list'] = instanceList;
    }
    public get instanceList(): Array<ShowStatusInstanceItemInstanceList> | undefined {
        return this['instance_list'];
    }
    public withTimestamp(timestamp: number): ShowStatusInstanceItem {
        this['timestamp'] = timestamp;
        return this;
    }
}