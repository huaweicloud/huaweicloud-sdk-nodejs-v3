import { UserPropDTO } from './UserPropDTO';


export class PropertiesDTO {
    private 'correlation_data'?: string;
    private 'response_topic'?: string;
    private 'user_properties'?: Array<UserPropDTO>;
    public constructor() { 
    }
    public withCorrelationData(correlationData: string): PropertiesDTO {
        this['correlation_data'] = correlationData;
        return this;
    }
    public set correlationData(correlationData: string  | undefined) {
        this['correlation_data'] = correlationData;
    }
    public get correlationData(): string | undefined {
        return this['correlation_data'];
    }
    public withResponseTopic(responseTopic: string): PropertiesDTO {
        this['response_topic'] = responseTopic;
        return this;
    }
    public set responseTopic(responseTopic: string  | undefined) {
        this['response_topic'] = responseTopic;
    }
    public get responseTopic(): string | undefined {
        return this['response_topic'];
    }
    public withUserProperties(userProperties: Array<UserPropDTO>): PropertiesDTO {
        this['user_properties'] = userProperties;
        return this;
    }
    public set userProperties(userProperties: Array<UserPropDTO>  | undefined) {
        this['user_properties'] = userProperties;
    }
    public get userProperties(): Array<UserPropDTO> | undefined {
        return this['user_properties'];
    }
}