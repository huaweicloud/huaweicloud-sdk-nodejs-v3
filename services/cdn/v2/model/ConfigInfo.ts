import { TopUa } from './TopUa';
import { TopUrl } from './TopUrl';


export class ConfigInfo {
    public url?: TopUrl;
    public ua?: TopUa;
    public constructor() { 
    }
    public withUrl(url: TopUrl): ConfigInfo {
        this['url'] = url;
        return this;
    }
    public withUa(ua: TopUa): ConfigInfo {
        this['ua'] = ua;
        return this;
    }
}