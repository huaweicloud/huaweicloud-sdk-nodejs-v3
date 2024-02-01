import { AssociateGlobalConnectionBandwidthInstanceRequestBody } from './AssociateGlobalConnectionBandwidthInstanceRequestBody';


export class AssociateGlobalConnectionBandwidthInstanceRequest {
    public id?: string;
    public body?: AssociateGlobalConnectionBandwidthInstanceRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): AssociateGlobalConnectionBandwidthInstanceRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: AssociateGlobalConnectionBandwidthInstanceRequestBody): AssociateGlobalConnectionBandwidthInstanceRequest {
        this['body'] = body;
        return this;
    }
}