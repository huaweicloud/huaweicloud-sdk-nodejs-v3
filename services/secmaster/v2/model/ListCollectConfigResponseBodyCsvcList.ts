import { ListCollectConfigResponseBodySourceList } from './ListCollectConfigResponseBodySourceList';


export class ListCollectConfigResponseBodyCsvcList {
    public csvc?: string;
    private 'source_list'?: Array<ListCollectConfigResponseBodySourceList>;
    public constructor() { 
    }
    public withCsvc(csvc: string): ListCollectConfigResponseBodyCsvcList {
        this['csvc'] = csvc;
        return this;
    }
    public withSourceList(sourceList: Array<ListCollectConfigResponseBodySourceList>): ListCollectConfigResponseBodyCsvcList {
        this['source_list'] = sourceList;
        return this;
    }
    public set sourceList(sourceList: Array<ListCollectConfigResponseBodySourceList>  | undefined) {
        this['source_list'] = sourceList;
    }
    public get sourceList(): Array<ListCollectConfigResponseBodySourceList> | undefined {
        return this['source_list'];
    }
}