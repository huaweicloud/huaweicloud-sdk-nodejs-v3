import { ResizePrePaidServerOption } from './ResizePrePaidServerOption';


export class ResizeServerRequestBody {
    public resize: ResizePrePaidServerOption;
    public constructor(resize?: any) { 
        this['resize'] = resize;
    }
    public withResize(resize: ResizePrePaidServerOption): ResizeServerRequestBody {
        this['resize'] = resize;
        return this;
    }
}