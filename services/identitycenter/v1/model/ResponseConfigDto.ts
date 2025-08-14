import { ResponseSourceDetailsDto } from './ResponseSourceDetailsDto';


export class ResponseConfigDto {
    public properties?: { [key: string]: ResponseSourceDetailsDto; };
    public subject?: ResponseSourceDetailsDto;
    private 'relay_state'?: string;
    public ttl?: string;
    public constructor(ttl?: string) { 
        this['ttl'] = ttl;
    }
    public withProperties(properties: { [key: string]: ResponseSourceDetailsDto; }): ResponseConfigDto {
        this['properties'] = properties;
        return this;
    }
    public withSubject(subject: ResponseSourceDetailsDto): ResponseConfigDto {
        this['subject'] = subject;
        return this;
    }
    public withRelayState(relayState: string): ResponseConfigDto {
        this['relay_state'] = relayState;
        return this;
    }
    public set relayState(relayState: string  | undefined) {
        this['relay_state'] = relayState;
    }
    public get relayState(): string | undefined {
        return this['relay_state'];
    }
    public withTtl(ttl: string): ResponseConfigDto {
        this['ttl'] = ttl;
        return this;
    }
}