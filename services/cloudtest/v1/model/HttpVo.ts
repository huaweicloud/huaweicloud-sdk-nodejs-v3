import { ProtocolReqVo } from './ProtocolReqVo';
import { ProtocolResVo } from './ProtocolResVo';


export class HttpVo {
    public request?: ProtocolReqVo;
    public response?: ProtocolResVo;
    public constructor() { 
    }
    public withRequest(request: ProtocolReqVo): HttpVo {
        this['request'] = request;
        return this;
    }
    public withResponse(response: ProtocolResVo): HttpVo {
        this['response'] = response;
        return this;
    }
}