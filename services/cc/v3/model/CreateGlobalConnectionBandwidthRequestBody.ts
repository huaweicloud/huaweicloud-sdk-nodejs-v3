import { CreateGlobalConnectionBandwidth } from './CreateGlobalConnectionBandwidth';


export class CreateGlobalConnectionBandwidthRequestBody {
    private 'globalconnection_bandwidth'?: CreateGlobalConnectionBandwidth;
    public constructor(globalconnectionBandwidth?: CreateGlobalConnectionBandwidth) { 
        this['globalconnection_bandwidth'] = globalconnectionBandwidth;
    }
    public withGlobalconnectionBandwidth(globalconnectionBandwidth: CreateGlobalConnectionBandwidth): CreateGlobalConnectionBandwidthRequestBody {
        this['globalconnection_bandwidth'] = globalconnectionBandwidth;
        return this;
    }
    public set globalconnectionBandwidth(globalconnectionBandwidth: CreateGlobalConnectionBandwidth  | undefined) {
        this['globalconnection_bandwidth'] = globalconnectionBandwidth;
    }
    public get globalconnectionBandwidth(): CreateGlobalConnectionBandwidth | undefined {
        return this['globalconnection_bandwidth'];
    }
}