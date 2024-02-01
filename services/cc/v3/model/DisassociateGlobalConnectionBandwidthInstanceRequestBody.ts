import { DisassociateGlobalConnectionBandwidthInstanceRequestInfo } from './DisassociateGlobalConnectionBandwidthInstanceRequestInfo';


export class DisassociateGlobalConnectionBandwidthInstanceRequestBody {
    public gcbandwidths?: Array<DisassociateGlobalConnectionBandwidthInstanceRequestInfo>;
    public constructor(gcbandwidths?: Array<DisassociateGlobalConnectionBandwidthInstanceRequestInfo>) { 
        this['gcbandwidths'] = gcbandwidths;
    }
    public withGcbandwidths(gcbandwidths: Array<DisassociateGlobalConnectionBandwidthInstanceRequestInfo>): DisassociateGlobalConnectionBandwidthInstanceRequestBody {
        this['gcbandwidths'] = gcbandwidths;
        return this;
    }
}