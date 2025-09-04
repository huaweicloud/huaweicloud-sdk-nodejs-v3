import { BatchResizeServersOption } from './BatchResizeServersOption';


export class BatchResizeServersReq {
    public resize?: BatchResizeServersOption;
    public constructor(resize?: BatchResizeServersOption) { 
        this['resize'] = resize;
    }
    public withResize(resize: BatchResizeServersOption): BatchResizeServersReq {
        this['resize'] = resize;
        return this;
    }
}