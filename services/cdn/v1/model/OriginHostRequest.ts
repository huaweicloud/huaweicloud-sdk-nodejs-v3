import { OriginHostBody } from './OriginHostBody';


export class OriginHostRequest {
    private 'origin_host'?: OriginHostBody;
    public constructor(originHost?: OriginHostBody) { 
        this['origin_host'] = originHost;
    }
    public withOriginHost(originHost: OriginHostBody): OriginHostRequest {
        this['origin_host'] = originHost;
        return this;
    }
    public set originHost(originHost: OriginHostBody  | undefined) {
        this['origin_host'] = originHost;
    }
    public get originHost(): OriginHostBody | undefined {
        return this['origin_host'];
    }
}