import { AssociateGlobalConnectionBandwidthInstanceRequestInfo } from './AssociateGlobalConnectionBandwidthInstanceRequestInfo';


export class AssociateGlobalConnectionBandwidthInstanceRequestBody {
    public gcbandwidths?: Array<AssociateGlobalConnectionBandwidthInstanceRequestInfo>;
    public constructor(gcbandwidths?: Array<AssociateGlobalConnectionBandwidthInstanceRequestInfo>) { 
        this['gcbandwidths'] = gcbandwidths;
    }
    public withGcbandwidths(gcbandwidths: Array<AssociateGlobalConnectionBandwidthInstanceRequestInfo>): AssociateGlobalConnectionBandwidthInstanceRequestBody {
        this['gcbandwidths'] = gcbandwidths;
        return this;
    }
}