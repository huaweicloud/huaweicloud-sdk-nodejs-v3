import { ExpandGraphReqExpand } from './ExpandGraphReqExpand';


export class ExpandGraphReq {
    public expand?: ExpandGraphReqExpand;
    public constructor(expand?: ExpandGraphReqExpand) { 
        this['expand'] = expand;
    }
    public withExpand(expand: ExpandGraphReqExpand): ExpandGraphReq {
        this['expand'] = expand;
        return this;
    }
}