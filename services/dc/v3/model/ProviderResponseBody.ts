import { ProviderValueBody } from './ProviderValueBody';


export class ProviderResponseBody {
    public id?: string;
    private 'short_name'?: string;
    public type?: string;
    private 'provider_value'?: ProviderValueBody;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): ProviderResponseBody {
        this['id'] = id;
        return this;
    }
    public withShortName(shortName: string): ProviderResponseBody {
        this['short_name'] = shortName;
        return this;
    }
    public set shortName(shortName: string  | undefined) {
        this['short_name'] = shortName;
    }
    public get shortName(): string | undefined {
        return this['short_name'];
    }
    public withType(type: string): ProviderResponseBody {
        this['type'] = type;
        return this;
    }
    public withProviderValue(providerValue: ProviderValueBody): ProviderResponseBody {
        this['provider_value'] = providerValue;
        return this;
    }
    public set providerValue(providerValue: ProviderValueBody  | undefined) {
        this['provider_value'] = providerValue;
    }
    public get providerValue(): ProviderValueBody | undefined {
        return this['provider_value'];
    }
    public withDescription(description: string): ProviderResponseBody {
        this['description'] = description;
        return this;
    }
}