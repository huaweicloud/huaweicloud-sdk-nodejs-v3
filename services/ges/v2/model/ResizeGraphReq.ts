import { ResizeGraphReqResize } from './ResizeGraphReqResize';


export class ResizeGraphReq {
    public resize: ResizeGraphReqResize;
    public constructor(resize?: any) { 
        this['resize'] = resize;
    }
    public withResize(resize: ResizeGraphReqResize): ResizeGraphReq {
        this['resize'] = resize;
        return this;
    }
}