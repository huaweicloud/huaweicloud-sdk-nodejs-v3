import { ResizePostPaidServerOption } from './ResizePostPaidServerOption';


export class ResizePostPaidServerRequestBody {
    public resize: ResizePostPaidServerOption;
    public constructor(resize?: any) { 
        this['resize'] = resize;
    }
    public withResize(resize: ResizePostPaidServerOption): ResizePostPaidServerRequestBody {
        this['resize'] = resize;
        return this;
    }
}