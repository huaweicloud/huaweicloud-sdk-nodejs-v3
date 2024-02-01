import { UpdateGlobalConnectionBandwidth } from './UpdateGlobalConnectionBandwidth';


export class UpdateGlobalConnectionBandwidthRequestBody {
    private 'globalconnection_bandwidth'?: UpdateGlobalConnectionBandwidth;
    public constructor(globalconnectionBandwidth?: UpdateGlobalConnectionBandwidth) { 
        this['globalconnection_bandwidth'] = globalconnectionBandwidth;
    }
    public withGlobalconnectionBandwidth(globalconnectionBandwidth: UpdateGlobalConnectionBandwidth): UpdateGlobalConnectionBandwidthRequestBody {
        this['globalconnection_bandwidth'] = globalconnectionBandwidth;
        return this;
    }
    public set globalconnectionBandwidth(globalconnectionBandwidth: UpdateGlobalConnectionBandwidth  | undefined) {
        this['globalconnection_bandwidth'] = globalconnectionBandwidth;
    }
    public get globalconnectionBandwidth(): UpdateGlobalConnectionBandwidth | undefined {
        return this['globalconnection_bandwidth'];
    }
}