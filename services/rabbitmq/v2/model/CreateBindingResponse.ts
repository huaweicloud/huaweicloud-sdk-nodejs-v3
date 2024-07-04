
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBindingResponse extends SdkResponse {
    public source?: string;
    private 'destination_type'?: string;
    public destination?: string;
    private 'routing_key'?: string;
    public constructor() { 
        super();
    }
    public withSource(source: string): CreateBindingResponse {
        this['source'] = source;
        return this;
    }
    public withDestinationType(destinationType: string): CreateBindingResponse {
        this['destination_type'] = destinationType;
        return this;
    }
    public set destinationType(destinationType: string  | undefined) {
        this['destination_type'] = destinationType;
    }
    public get destinationType(): string | undefined {
        return this['destination_type'];
    }
    public withDestination(destination: string): CreateBindingResponse {
        this['destination'] = destination;
        return this;
    }
    public withRoutingKey(routingKey: string): CreateBindingResponse {
        this['routing_key'] = routingKey;
        return this;
    }
    public set routingKey(routingKey: string  | undefined) {
        this['routing_key'] = routingKey;
    }
    public get routingKey(): string | undefined {
        return this['routing_key'];
    }
}