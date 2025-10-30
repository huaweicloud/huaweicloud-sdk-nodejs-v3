import { LayoutLocation } from './LayoutLocation';
import { MarketOptions } from './MarketOptions';
import { ServerResourceSpec } from './ServerResourceSpec';
import { ServerStatus } from './ServerStatus';


export class Server {
    public id?: string;
    private 'domain_id'?: string;
    private 'edge_site_id'?: string;
    public name?: string;
    public status?: ServerStatus;
    private 'offering_id'?: string;
    public spec?: ServerResourceSpec;
    private 'market_options'?: MarketOptions;
    public location?: LayoutLocation;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): Server {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): Server {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withEdgeSiteId(edgeSiteId: string): Server {
        this['edge_site_id'] = edgeSiteId;
        return this;
    }
    public set edgeSiteId(edgeSiteId: string  | undefined) {
        this['edge_site_id'] = edgeSiteId;
    }
    public get edgeSiteId(): string | undefined {
        return this['edge_site_id'];
    }
    public withName(name: string): Server {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ServerStatus): Server {
        this['status'] = status;
        return this;
    }
    public withOfferingId(offeringId: string): Server {
        this['offering_id'] = offeringId;
        return this;
    }
    public set offeringId(offeringId: string  | undefined) {
        this['offering_id'] = offeringId;
    }
    public get offeringId(): string | undefined {
        return this['offering_id'];
    }
    public withSpec(spec: ServerResourceSpec): Server {
        this['spec'] = spec;
        return this;
    }
    public withMarketOptions(marketOptions: MarketOptions): Server {
        this['market_options'] = marketOptions;
        return this;
    }
    public set marketOptions(marketOptions: MarketOptions  | undefined) {
        this['market_options'] = marketOptions;
    }
    public get marketOptions(): MarketOptions | undefined {
        return this['market_options'];
    }
    public withLocation(location: LayoutLocation): Server {
        this['location'] = location;
        return this;
    }
    public withCreatedAt(createdAt: Date): Server {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Server {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}