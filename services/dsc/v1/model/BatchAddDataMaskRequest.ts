import { DynamicDataMask } from './DynamicDataMask';


export class BatchAddDataMaskRequest {
    public body?: DynamicDataMask;
    public constructor() { 
    }
    public withBody(body: DynamicDataMask): BatchAddDataMaskRequest {
        this['body'] = body;
        return this;
    }
}