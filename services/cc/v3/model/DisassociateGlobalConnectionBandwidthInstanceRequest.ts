import { DisassociateGlobalConnectionBandwidthInstanceRequestBody } from './DisassociateGlobalConnectionBandwidthInstanceRequestBody';


export class DisassociateGlobalConnectionBandwidthInstanceRequest {
    public id?: string;
    public body?: DisassociateGlobalConnectionBandwidthInstanceRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DisassociateGlobalConnectionBandwidthInstanceRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: DisassociateGlobalConnectionBandwidthInstanceRequestBody): DisassociateGlobalConnectionBandwidthInstanceRequest {
        this['body'] = body;
        return this;
    }
}