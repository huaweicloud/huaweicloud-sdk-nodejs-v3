import { ErInfo } from './ErInfo';


export class ShowEwAssociatedErRespData {
    private 'er_list'?: Array<ErInfo>;
    public constructor() { 
    }
    public withErList(erList: Array<ErInfo>): ShowEwAssociatedErRespData {
        this['er_list'] = erList;
        return this;
    }
    public set erList(erList: Array<ErInfo>  | undefined) {
        this['er_list'] = erList;
    }
    public get erList(): Array<ErInfo> | undefined {
        return this['er_list'];
    }
}